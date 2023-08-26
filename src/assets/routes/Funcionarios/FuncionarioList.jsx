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
          <div key={index}>
            <p > {funcionario.register} - {funcionario.name} - {funcionario.jobFunction} </p>
            <button onClick={() => handleEdit(funcionario, index)}>Editar</button>
            <button onClick={() => deleteFuncionario(index)}>Deletar</button>
          </div>
      
      ))}
    </div>
  );
};

export default FuncionarioList;
