import axios from 'axios';
import { useDecryptUser } from '../security/userDecrypt';

export const funcionariosServices = () => {
  const url = 'https://comanda-eletronica-api.vercel.app';
  const { decryptUser } = useDecryptUser();

  const headers = {
    Authorization: `Bearer ${decryptUser.acssesToken}`,
  };

  const fetchFuncionarios = async () => {
    const response = await axios.get(`${url}/funcionarios/ativos/?pagina=1`, {
      headers,
    });
    return response.data;
  };

  const createFuncionario = async (data) => {
    const response = await axios.post(`${url}/funcionarios`, data, { headers });
    return response.data;
  };

  const editFuncionario = async (data) => {
    const response = await axios.put(`${url}/funcionarios/${data.id}`, data, {
      headers,
    });
    return response.data;
  };

  const registerPasswordFuncionario = async (data) => {
    const response = await axios.post(
      `${url}/funcionarios/auth/novologin`,
      data,
      { headers },
    );
    return response.data;
  };

  const deleteFuncionario = async (id) => {
    const response = await axios.delete(`${url}/funcionarios/${id}`, {
      headers,
    });
    return response.data;
  };

  return {
    fetchFuncionarios,
    createFuncionario,
    deleteFuncionario,
    editFuncionario,
    registerPasswordFuncionario,
  };
};
