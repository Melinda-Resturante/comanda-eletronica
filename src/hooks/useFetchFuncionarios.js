import { useQuery } from '@tanstack/react-query';
import { funcionariosServices } from '../services/funcionariosServices';

export const useFetchFuncionarios = () => {
  const { fetchFuncionarios } = funcionariosServices();

  const { data: funcionarios, isLoading } = useQuery({
    queryKey: ['funcionarios'],
    queryFn: fetchFuncionarios,
  });

  return {
    funcionarios,
    isLoading,
  };
};
