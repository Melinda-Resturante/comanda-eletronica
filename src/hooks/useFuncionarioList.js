import { useState } from 'react';
import useFuncionarioStore from '../store/funcionario';

const useFuncionarioList = () => {
  const [perfilModalOpen, setPerfilModalOpen] = useState(false);
  const [funcionarioSelecionado, setFuncionarioSelecionado] = useState(null);
  const [senhaModalOpen, setSenhaModalOpen] = useState(false);

  const handleCadastrarSenhaClick = (funcionario) => {
    useFuncionarioStore.getState().setFuncionarioEdit({ ...funcionario });
    setSenhaModalOpen(true);
  };

  const handleEdit = (funcionario, index) => {
    editModal();
    useFuncionarioStore
      .getState()
      .setFuncionarioEdit({ ...funcionario, index });
  };

  return {
    handleCadastrarSenhaClick,
    handleEdit,
    senhaModalOpen,
    perfilModalOpen,
    funcionarioSelecionado,
    setPerfilModalOpen,
    setSenhaModalOpen,
    setFuncionarioSelecionado,
  };
};

export default useFuncionarioList;
