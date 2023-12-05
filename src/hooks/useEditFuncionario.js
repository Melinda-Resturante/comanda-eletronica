import { useMutation, useQueryClient } from '@tanstack/react-query';
import { funcionariosServices } from '../services/funcionariosServices';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  defaultValues,
  schemaFuncionarios,
  valuesInputFuncionario,
} from '../schemas/schemaFuncionarios';
import useFuncionarioStore from '../store/funcionario';

const useEditFuncionario = (onClose) => {
  const funcionarioEdit = useFuncionarioStore((state) => state.funcionarioEdit);
  const { editFuncionario } = funcionariosServices();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: zodResolver(schemaFuncionarios),
    defaultValues,
    values: valuesInputFuncionario(funcionarioEdit),
  });

  const queryClient = useQueryClient();

  const { mutateAsync, error, isError } = useMutation({
    mutationFn: editFuncionario,
    onSuccess: () => {
      queryClient.invalidateQueries('funcionarios');
    },
  });

  const handleForm = async (data) => {
    try {
      mutateAsync({ ...data, id: funcionarioEdit.id });
      reset();
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    errors,
    error,
    isError,
    register,
    handleSubmit,
    handleForm,
  };
};

export default useEditFuncionario;
