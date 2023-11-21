import axios from 'axios';

export const funcionariosServices = () => {
    const url = 'https://comanda-eletronica-api.vercel.app';
    
    const createFuncionario = async (data, authToken) => {
      console.log('Auth Token (createFuncionario):', authToken);
      try {
        const response = await axios.post(
          `${url}/funcionarios`,
          data,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
              "Content-Type": 'application/json'
            }
          }
          );
          return response.data;
        } catch (error) {
        throw new Error(`Erro ao criar funcionário: ${error.message}`);
      }
    };
    

    return {
        createFuncionario
    };
};
