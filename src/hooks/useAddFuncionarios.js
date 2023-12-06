import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  defaultValues,
  schemaFuncionarios,
} from '../schemas/schemaFuncionarios';
import { funcionariosServices } from '../services/funcionariosServices';

export const useAddFuncionarios = (isClose) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: zodResolver(schemaFuncionarios),
    defaultValues,
  });

  const queryClient = useQueryClient();

  const { createFuncionario } = funcionariosServices();

  const { mutateAsync } = useMutation({
    mutationFn: createFuncionario,
    onSuccess: () => queryClient.invalidateQueries('funcionarios'),
  });

  const handleForm = async (data) => {
    try {
      await mutateAsync(data);
      reset();
      isClose();
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return {
    register,
    handleSubmit,
    handleForm,
    errors,
  };
};
