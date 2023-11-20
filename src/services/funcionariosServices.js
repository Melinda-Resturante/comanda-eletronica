import { useDecryptUser } from "../security/userDecrypt";
import axios from 'axios' 

export const funcionariosServices = () => {

    const { decryptUser } = useDecryptUser()

    const authToken = decryptUser.acssesToken;
    

const url = 'https://comanda-eletronica-api.vercel.app'

const createFuncionario = (data) => {

    const response = axios.post(`${url}/funcionarios`, data, { headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": 'application/json'
    } })

    return response.data

  } 

  return {
    createFuncionario
  }
}   


