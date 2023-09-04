import useFuncionarioStore from "../../../store/funcionario";

const FuncionarioList = ({ editModal }) => {
  const funcionarios = useFuncionarioStore(state => state.funcionarios)
  const deleteFuncionario = useFuncionarioStore(state => state.deleteFuncionario)
  const setFuncionarioEdit = useFuncionarioStore(state => state.setFuncionarioEdit)


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

  return (
 
    <div>
        {funcionarios?.map((funcionario, index) => (
          <div key={index} className="listFunc ">
            <p > {funcionario.register} - {funcionario.name} {funcionario.lastName} - {funcionario.jobFunction} </p>
            <div className="btns">
              <button onClick={() => handleEdit(funcionario, index)} className="btnEdit">Editar</button>
              <button onClick={() => handleDelete(index)} className="btnDelete">Deletar</button>
              <button  className="btnProfile">Ver Perfil</button>
            </div>
           
          </div>
      
      ))}
    </div>
  );
};

export default FuncionarioList;
