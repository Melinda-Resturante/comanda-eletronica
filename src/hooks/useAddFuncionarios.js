import { useForm } from 'react-hook-form';
import { useDecryptUser } from '../security/userDecrypt';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { schemaFuncionarios } from '../schemas/schemaFuncionarios';
import { funcionariosServices } from '../services/funcionariosServices';

const useAddFuncionarios = (isClose) => {
  const { decryptUser } = useDecryptUser();
    const authToken = decryptUser.acssesToken;
    
    const { createFuncionario } = funcionariosServices(authToken);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: zodResolver(schemaFuncionarios),
    defaultValues: {
      nome: '',
      sobrenome: '',
      cpf: '',
      data_nascimento: '',
      telefone1: '',
      telefone2: '',
      rua: '',
      numero: '',
      bairro: '',
      cidade: '',
      estado: '',
      cep: '',
      email: '',
      cargo: '',
    },
  });

  const handleForm = async (data) => {
    try {
      console.log('Auth Token:', authToken);
      const response = await createFuncionario(data, authToken);
      reset();
      isClose();
      console.log('Response:', response);
    } catch (error) {
      console.log('Error:', error);
      if (error.response && error.response.status === 401) {
        console.log('Token de autenticação inválido ou expirado.');
      } else {
        console.log('Erro ao criar funcionário:', error.message);
      }
    }
  };
  

  return {
    register,
    handleSubmit,
    handleForm,
    errors,
  };
};

export default useAddFuncionarios;
