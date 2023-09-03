import useFuncionarioStore from "../../../store/funcionario";

const FuncionarioList = ({ editModal }) => {
  const funcionarios = useFuncionarioStore(state => state.funcionarios)
  const deleteFuncionario = useFuncionarioStore(state => state.deleteFuncionario)
  const setFuncionarioEdit = useFuncionarioStore(state => state.setFuncionarioEdit)
  const senhaModalOpen = useFuncionarioStore((state) => state.senhaModalOpen);
  const senha = useFuncionarioStore((state) => state.senha);

  const handleEdit = (funcionario, index) => {
    editModal()
    setFuncionarioEdit({...funcionario, index})
  }

  const handleDelete = (index) => {
    const shouldDelete = window.confirm("Tem certeza de que deseja deletar este funcionário?");
    if (shouldDelete) {
      deleteFuncionario(index);
    }
  };

   const handleCadastrarSenhaClick = () => {
    // Abra o modal de senha
    useFuncionarioStore.setState({ senhaModalOpen: true });
  };

  const handleSalvarSenha = () => {
    useFuncionarioStore.getState().saveSenha(senha);
  };

  return (
 
    <div>
        {funcionarios?.map((funcionario, index) => (
          <div key={index} className="listFunc ">
            <p > {funcionario.register} - {funcionario.name} {funcionario.lastName} - {funcionario.jobFunction} </p>
            <div className="btns">
              <button onClick={() => handleEdit(funcionario, index)} className="btnEdit">Editar</button>
              <button onClick={() => handleDelete(index)} className="btnDelete">Deletar</button>
              <button  className="btnProfile">Ver Perfil</button>
              <button className="btnSenha" onClick={handleCadastrarSenhaClick}>Cadastrar senha</button>
            </div>
           
          </div>
      
      ))}

      {/* Modal de senha */}
      {senhaModalOpen && (
        <div> 
          <h2>Cadastrar Senha</h2>
          <input
            className="input-group senha"
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => useFuncionarioStore.setState({ senha: e.target.value })}
          />
          <div className="btns dSenha">
            <button onClick={handleSalvarSenha} className="btnSalvar">Salvar</button>
            <button onClick={() => useFuncionarioStore.setState({ senhaModalOpen: false })} className="btnCalcel">Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FuncionarioList;