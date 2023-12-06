import { useMutation, useQueryClient } from '@tanstack/react-query';
import { funcionariosServices } from '../services/funcionariosServices';

export const useDeleteFuncionarios = () => {
  const { deleteFuncionario } = funcionariosServices();
  const queryClient = useQueryClient();

  const { mutateAsync, error } = useMutation({
    mutationFn: deleteFuncionario,
    onSuccess: () => {
      queryClient.invalidateQueries('funcionarios');
    },
  });

  const handleDelete = async (id) => {
    await mutateAsync(id);
  };

  return {
    handleDelete,
    error,
  };
};
