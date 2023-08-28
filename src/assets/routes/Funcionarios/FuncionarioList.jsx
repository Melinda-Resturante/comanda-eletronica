import useFuncionarioStore from "../../../store/funcionario";

const FuncionarioList = ({ editModal }) => {
  const funcionarios = useFuncionarioStore(state => state.funcionarios)
  const deleteFuncionario = useFuncionarioStore(state => state.deleteFuncionario)
  const setFuncionarioEdit = useFuncionarioStore(state => state.setFuncionarioEdit)


  const handleEdit = (funcionario, index) => {
    editModal()
    setFuncionarioEdit({...funcionario, index})
  }
  return (
 
    <div>
        {funcionarios?.map((funcionario, index) => (
          <div key={index} className="listFunc ">
            <p > {funcionario.register} - {funcionario.name} - {funcionario.jobFunction} </p>
            <div className="btns">
              <button onClick={() => handleEdit(funcionario, index)} className="btnEdit">Editar</button>
              <button onClick={() => deleteFuncionario(index)} className="btnDelete">Deletar</button>
            </div>
           
          </div>
      
      ))}
    </div>
  );
};

export default FuncionarioList;
