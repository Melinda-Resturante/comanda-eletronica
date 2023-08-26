import  useFuncionarioStore  from "../../../store/funcionario";

function AddFuncionarios({isClose}) {
    
  const addFuncionario = useFuncionarioStore(state => state.addFuncionario)

  const handleSubmit = (e) => {
    e.preventDefault()

    const register = (e.target.register.value)
    const name = (e.target.name.value)
    const jobFunction = (e.target.jobFunction.value)

    addFuncionario({
      register,
      name,
      jobFunction
    })

    isClose()
  }


  return (
    <>
     <h2>Adicionar Funcionario</h2>
   
   <form onSubmit={handleSubmit}>
   <fieldset>
            <div>

            </div>
            <div>
                <label htmlFor="">Registro</label>
                <input type="number" placeholder="Registro" name="register" />
            </div>
            <div>
                <label htmlFor="">Nome</label>
                <input type="text" placeholder="Nome" name="name"/>  
            </div>
            <div>
                <label htmlFor="">Funçao</label>
                <input type="text" placeholder="Função" name="jobFunction"/>  
            </div>
        </fieldset>
            
        <button type="submit">Adicionar Funcionario</button>
   </form>
    </>
  )
}

export default AddFuncionarios