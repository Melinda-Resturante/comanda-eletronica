import { useForm } from 'react-hook-form';
import useFuncionarioStore from '../store/funcionario';
import { useMutation } from '@tanstack/react-query';
import { funcionariosServices } from '../services/funcionariosServices';
import { zodResolver } from '@hookform/resolvers/zod';
import { schemaRegisterPassword } from '../schemas/schemaFuncionarios';

export const useSenhaFuncionario = (onClose) => {
  const { registerPasswordFuncionario } = funcionariosServices();
  const funcionarioEdit = useFuncionarioStore((state) => state.funcionarioEdit);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: zodResolver(schemaRegisterPassword),
    defaultValues: { cpf: '', senha: '' },
    values: { cpf: funcionarioEdit?.cpf, senha: '' },
  });

  const { error, mutateAsync } = useMutation({
    mutationFn: registerPasswordFuncionario,
  });

  const handleForm = (data) => {
    try {
      mutateAsync(data);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    register,
    handleSubmit,
    handleForm,
    errors,
    error,
  };
};
