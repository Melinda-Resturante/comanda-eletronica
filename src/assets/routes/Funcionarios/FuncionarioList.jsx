import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SenhaModal from './SenhaModal .jsx'; 
import PerfilModal from './PerfilModal .jsx';
import useFuncionarioStore from "../../../store/funcionario";

const FuncionarioList = ({ editModal }) => {
  const location = useLocation();
  const authToken = location.state && location.state.authToken;

  const [isLoading, setIsLoading] = useState(true);
  const [funcionarios, setFuncionarios] = useState([]);
  const senha = useFuncionarioStore((state) => state.senha);
  const [perfilModalOpen, setPerfilModalOpen] = useState(false);
  const [funcionarioSelecionado, setFuncionarioSelecionado] = useState(null);
  const [senhaModalOpen, setSenhaModalOpen] = useState(false);

  const funcionarioEdit = useFuncionarioStore(state => state.funcionarioEdit);

  useEffect(() => {
    if (authToken) {
      fetch("https://comanda-eletronica-api.vercel.app/funcionarios/ativos/?pagina=1", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setFuncionarios(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Erro ao buscar funcionários:", error);
          setIsLoading(false);
        });
    }
  }, [authToken]);

  const handleEdit = (funcionario, index) => {
    console.log("Funcionário a ser editado:", funcionario);
    console.log("Índice do funcionário a ser editado:", index);
    editModal();
    useFuncionarioStore.getState().setFuncionarioEdit({ ...funcionario, index });
  };

  const handleDelete = async (index, id) => {
    const shouldDelete = window.confirm("Tem certeza de que deseja deletar este funcionário?");
    if (shouldDelete) {
      try {
        const response = await fetch(`https://comanda-eletronica-api.vercel.app/funcionarios/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        if (response.ok) {
          useFuncionarioStore.getState().deleteFuncionario(index);
          console.log("Funcionário deletado com sucesso.");
        } else {
          console.error("Erro ao deletar funcionário:", response.status);
        }
      } catch (error) {
        console.error("Erro ao deletar funcionário:", error);
      }
    }
  };

  const handleCadastrarSenhaClick = () => {
    setSenhaModalOpen(true);
  };

  const handleSalvarSenha = (novaSenha) => {
    console.log("Nova senha a ser salva:", novaSenha);

    useFuncionarioStore.getState().saveSenha(novaSenha);
    setSenhaModalOpen(false);
  };

  function mapCargo(cargoNumber) {
    switch (cargoNumber) {
      case 1:
        return "Gerente";
      case 2:
        return "Atendente";
      case 3:
        return "Estoquista";
      case 4:
        return "Caixa";
      default:
        return "Desconhecido";
    }
  }

  return (
    <div>
      {funcionarios?.map((funcionario, index) => (
        <div key={index} className="listFunc">
          <p>
            {funcionario.id} - {funcionario.nome} {funcionario.sobrenome} - {mapCargo(funcionario.cargo)}
          </p>
          <div className="btns">
            <button onClick={() => handleEdit(funcionario, index)} className="btnEdit">
              Editar
            </button>
            <button onClick={() => handleDelete(index, funcionario.id)} className="btnDelete">
              Deletar
            </button>
            <button className="btnProfile" onClick={() => { setFuncionarioSelecionado(funcionario); setPerfilModalOpen(true); }}>
              Ver Perfil
            </button>
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
        cargoNome={mapCargo(funcionarioSelecionado?.cargo)}
      />
    </div>
  );
};

export default FuncionarioList;