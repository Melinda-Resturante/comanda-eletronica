import TelaComandas from '../../TelaComandas/TelaComandas'
import Cadastro from './Cadastro'
import CustomTable from '../../Custom/CustomTable/CustomTable'
import useConvenioStore from '../../../../store/Convenio'
import EditCadastro from './EditCadastro'

const Convenio = () => {
  
  const { 
    convenio, 
    columns, 
    setConvenioEdit, 
    deleteConvenio 
  } = useConvenioStore()

  return (
    <>
      <h1 className='titleh1'>Convênio</h1>
      <Cadastro />
      <EditCadastro  />
      {convenio.length ? (
        <CustomTable
        data={convenio} 
        columns={columns}
        onEdit={setConvenioEdit}
        onDelete={deleteConvenio}
        />
      ) : null}
      
      <TelaComandas stateColor='convenio' />
    </>
  )
}

export default Convenio