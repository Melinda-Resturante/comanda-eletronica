import React, { useState, useEffect } from 'react';
import { useDecryptUser } from '../../../security/userDecrypt.js';
import { useQuery } from '@tanstack/react-query';

import SenhaModal from './SenhaModal .jsx';
import PerfilModal from './PerfilModal .jsx';
import useFuncionarioStore from '../../../store/funcionario';
import CustomTable from '../../components/Custom/CustomTable/CustomTable.jsx';
import { funcionariosServices } from '../../../services/funcionariosServices.js';
import { CircularLoading } from './CircularLoading/index.jsx';

const FuncionarioList = ({ editModal }) => {
  const { decryptUser } = useDecryptUser();
  const authToken = decryptUser.acssesToken;

  const senha = useFuncionarioStore((state) => state.senha);
  const [perfilModalOpen, setPerfilModalOpen] = useState(false);
  const [funcionarioSelecionado, setFuncionarioSelecionado] = useState(null);
  const [senhaModalOpen, setSenhaModalOpen] = useState(false);

  const handleCadastrarSenhaClick = (funcionario) => {
    useFuncionarioStore.getState().setFuncionarioEdit({ ...funcionario });
    setSenhaModalOpen(true);
  };

  const { fetchFuncionarios } = funcionariosServices();

  // Fetch Funcionarios
  const {
    data: funcionarios,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['funcionarios'],
    queryFn: fetchFuncionarios,
  });

  // Delete Funcionarios
  // const { data, isSuccess, error, mutateAsync } = useMutation({
  //   mutationFn: deleteFuncionario,
  // });

  const handleEdit = (funcionario, index) => {
    editModal();
    useFuncionarioStore
      .getState()
      .setFuncionarioEdit({ ...funcionario, index });
  };

  const handleDelete = async (id) => {
    try {
      await mutateAsync(id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSalvarSenha = (novaSenha) => {
    console.log('Nova senha a ser salva:', novaSenha);

    useFuncionarioStore.getState().saveSenha(novaSenha);
    setSenhaModalOpen(false);
  };

  function mapCargo(cargoNumber) {
    switch (cargoNumber) {
      case 1:
        return 'Gerente';
      case 2:
        return 'Atendente';
      case 3:
        return 'Estoquista';
      case 4:
        return 'Caixa';
      default:
        return 'Desconhecido';
    }
  }

  const columns = [
    { key: 'id', header: 'ID' },
    { key: 'nome', header: 'Nome' },
    { key: 'sobrenome', header: 'Sobrenome' },
    {
      key: 'cargo',
      header: 'Cargo',
      formatter: (cargoNumber) => mapCargo(cargoNumber),
    },
  ];

  return (
    <>
      {isLoading ? (
        <CircularLoading />
      ) : (
        <CustomTable
          data={funcionarios}
          columns={columns}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onDetails={(funcionario) => {
            setFuncionarioSelecionado(funcionario);
            setPerfilModalOpen(true);
          }}
          onPassword={handleCadastrarSenhaClick}
        />
      )}

      <SenhaModal
        isOpen={senhaModalOpen}
        onClose={() => setSenhaModalOpen(false)}
        onSave={handleSalvarSenha}
        senha={senha}
      />

      <PerfilModal
        isOpen={perfilModalOpen}
        onClose={() => setPerfilModalOpen(false)}
        funcionario={funcionarioSelecionado}
        cargoNome={mapCargo(funcionarioSelecionado?.cargo)}
      />
    </>
  );
};

export default FuncionarioList;
