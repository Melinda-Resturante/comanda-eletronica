import { useState } from "react"
import authLoginStore from "../store/Auth"
import { useNavigate } from 'react-router-dom'
import { dataEncrypt } from "../security/encrypt-data"

const useFetchLogin = () => {

  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const { setUser, login } = authLoginStore()
  const navigate = useNavigate()
   
  const fetchData = async ({ register, password }) => {

  const url = 'https://comanda-eletronica-api.vercel.app/auth/login'

  const body = {
      "id": register,
      "senha": password
    }   

  const init = {
      method: 'POST',
      headers: { "Content-Type": 'application/json' },
      body: JSON.stringify(body)
    }

  try {
    setLoading(true)
    const response = await fetch(url, init);
    if (!response.ok) {
      setLoading(false)
      const errorMessage = await response.text()
      const cleanedError = errorMessage.replace(/"/g, '')
      console.log('Erro na chamada da API:', cleanedError)
      setError(cleanedError)

      } else {
        const data = await response.json();
        setLoading(false)
        const encrypt = dataEncrypt(data)

        setUser(encrypt)
        login(data, navigate)
        }
    } catch (error) {
         console.error('Erro durante a chamada da API:', error);
    }
  }
    return { fetchData, error, loading }
}

export default useFetchLogin