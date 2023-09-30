import { useState } from "react"
import authLoginStore from "../store/Auth"
import { useNavigate } from 'react-router-dom'

const useFetchLogin = () => {

  const [error, setError] = useState(null)
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
    const response = await fetch(url, init);
    if (!response.ok) {
        
      const errorMessage = await response.text()
      const cleanedError = errorMessage.replace(/"/g, '')
      console.log('Erro na chamada da API:', cleanedError)
      setError(cleanedError)

      } else {
        const data = await response.json();
        
        setUser(data)
        login(data, navigate)
        }
    } catch (error) {
         console.error('Erro durante a chamada da API:', error);
    }
  }
    return { fetchData, error }
}

export default useFetchLogin