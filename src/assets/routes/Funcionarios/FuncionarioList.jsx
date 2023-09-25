import React, { useState } from 'react';
import SenhaModal from './SenhaModal .jsx'; 
import PerfilModal from './PerfilModal .jsx';
import useFuncionarioStore from "../../../store/funcionario";

const FuncionarioList = ({ editModal }) => {
  const funcionarios = useFuncionarioStore((state) => state.funcionarios);
  const deleteFuncionario = useFuncionarioStore((state) => state.deleteFuncionario);
  const setFuncionarioEdit = useFuncionarioStore((state) => state.setFuncionarioEdit);
  const senha = useFuncionarioStore((state) => state.senha);
  const [perfilModalOpen, setPerfilModalOpen] = useState(false);
  const [funcionarioSelecionado, setFuncionarioSelecionado] = useState(null);

  const [senhaModalOpen, setSenhaModalOpen] = useState(false);

  const handleEdit = (funcionario, index) => {
    editModal();
    setFuncionarioEdit({ ...funcionario, index });
  };

  const handleDelete = (index) => {
    const shouldDelete = window.confirm("Tem certeza de que deseja deletar este funcionário?");
    if (shouldDelete) {
      deleteFuncionario(index);
    }
  };

  const handleCadastrarSenhaClick = () => {
    setSenhaModalOpen(true);
  };

  const handleSalvarSenha = (novaSenha) => {
    useFuncionarioStore.getState().saveSenha(novaSenha);
    setSenhaModalOpen(false);
  };

  return (
    <div>
      {funcionarios?.map((funcionario, index) => (
        <div key={index} className="listFunc">
          <p>
            {funcionario.register} - {funcionario.name} {funcionario.lastName} - {funcionario.jobFunction}
          </p>
          <div className="btns">
            <button onClick={() => handleEdit(funcionario, index)} className="btnEdit">
              Editar
            </button>
            <button onClick={() => handleDelete(index)} className="btnDelete">
              Deletar
            </button>
            <button className="btnProfile" onClick={() => {setFuncionarioSelecionado(funcionario);setPerfilModalOpen(true);}}>Ver Perfil</button>
            <button className="btnSenha" onClick={handleCadastrarSenhaClick}>
              Cadastrar senha
            </button>
          </div>
        </div>
      ))}

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
      />
    </div>
  );
};
export default FuncionarioList;