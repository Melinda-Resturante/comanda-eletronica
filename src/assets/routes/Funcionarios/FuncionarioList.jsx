import React, { useState, useEffect } from 'react';
import SenhaModal from './SenhaModal .jsx'; 
import PerfilModal from './PerfilModal .jsx';
import useFuncionarioStore from "../../../store/funcionario";
import { useDecryptUser } from '../../../security/userDecrypt.js';
import CustomTable from "../../components/Custom/CustomTable/CustomTable.jsx"

const FuncionarioList = ({ editModal }) => {
  
  const { decryptUser } = useDecryptUser()
  const authToken = decryptUser.acssesToken;

  const [isLoading, setIsLoading] = useState(true);
  const [funcionarios, setFuncionarios] = useState([]);
  const senha = useFuncionarioStore((state) => state.senha);
  const [perfilModalOpen, setPerfilModalOpen] = useState(false);
  const [funcionarioSelecionado, setFuncionarioSelecionado] = useState(null);
  const [senhaModalOpen, setSenhaModalOpen] = useState(false);

  const handleCadastrarSenhaClick = (funcionario) => {
    // Lógica para cadastrar senha
    console.log("Cadastrar senha para o funcionário:", funcionario);
    // Faça algo com as informações do funcionário, se necessário
    setSenhaModalOpen(true);
  };
  

  const customActions = (item) => (
    <button className='btn-clientes' onClick={() => handleCadastrarSenhaClick(item)}>Cadastrar Senha</button>
  );

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

  const columns = [
    { key: 'id', header: 'ID' },
    { key: 'nome', header: 'Nome' },
    { key: 'sobrenome', header: 'Sobrenome' },
    { key: 'cargo', header: 'Cargo', formatter: (cargoNumber) => mapCargo(cargoNumber) },
  ];
  
   

  return (
    <div>
      <CustomTable
        data={funcionarios}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onDetails={(funcionario) => { setFuncionarioSelecionado(funcionario); setPerfilModalOpen(true); }}
      onPassword={handleCadastrarSenhaClick}
      />


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