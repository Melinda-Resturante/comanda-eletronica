import SenhaModal from './SenhaModal .jsx';
import PerfilModal from './PerfilModal .jsx';
import CustomTable from '../../components/Custom/CustomTable/CustomTable.jsx';
import useFuncionarioList from '../../../hooks/useFuncionarioList.js';

import { CircularLoading } from './CircularLoading/index.jsx';
import { useDeleteFuncionarios } from '../../../hooks/useDeleteFuncionarios.js';
import { useFetchFuncionarios } from '../../../hooks/useFetchFuncionarios.js';
import { useMapCargos } from '../../../hooks/useMapCargos.js';

const FuncionarioList = ({ editModal }) => {
  const { funcionarios, isLoading } = useFetchFuncionarios();
  const { handleDelete } = useDeleteFuncionarios();
  const { columns, mapCargo } = useMapCargos();
  const {
    senhaModalOpen,
    perfilModalOpen,
    funcionarioSelecionado,
    handleCadastrarSenhaClick,
    setFuncionarioSelecionado,
    setPerfilModalOpen,
    setSenhaModalOpen,
    handleEdit,
  } = useFuncionarioList(editModal);

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
