import { useConvenio } from '../../../../hooks/useConvenio'
import useConvenioStore from '../../../../store/Convenio'
import  CustomModal  from '../../Custom/CustomModal/CustomModal'

const Cadastro = () => {

  const { addConvenio } = useConvenioStore()

  const { 
    register, 
    closeModal, 
    setOpenModal,
    handleSubmit, 
    handleForm, 
    openModal, 
    errors, 
    } = useConvenio(addConvenio)  

  return (
    <>
    <CustomModal isOpen={openModal} onClose={closeModal}>
    <form className="employee-form" onSubmit={handleSubmit(handleForm)}>
          <h2 className="titleH2">Cadastrar Empresa</h2>
          <div>
            <label htmlFor="" className="label">
              Empresa
            </label>
            <input 
              type="text" 
              placeholder="Empresa" 
              name="empresa" 
              className="input-group" 
              {...register('empresa')}
            />
            {errors.empresa?.message && (
              <span className='error-message'>{errors.empresa.message}</span>
            )}
          </div>
          <div>
            <label htmlFor="" className="label">
              CNPJ
            </label>
            <input 
              type="text" 
              placeholder="CNPJ" 
              name="cnpj"  
              className="input-group" 
              {...register('cnpj')}
            />

            {errors.cnpj?.message && (
              <span className='error-message'>{errors.cnpj.message}</span>
            )}
          </div>
      
          <div>
            <label htmlFor="" className="label">
              Nome
            </label>
            <input 
              type="text" 
              placeholder="Nome" 
              name="nome" 
              className="input-group"
              {...register('nome')}
            />

            {errors.nome?.message && (
              <span className='error-message'>{errors.nome.message}</span>
            )}
          </div>
    
          <div>
            <label htmlFor="" className="label">
              Rua
            </label>
            <input 
              type="text" 
              placeholder="Rua" 
              name="Rua" 
              className="input-group"
              {...register('rua')} 
            />
              {errors.rua?.message && (
              <span className='error-message'>{errors.rua.message}</span>
            )}
          </div>
          <div>
            <label htmlFor="" className="label">
              CEP
            </label>
            <input 
              type="text" 
              placeholder="CEP" 
              name="cep" 
              className="input-group" 
              {...register('cep')}
            />

            {errors.cep?.message && (
              <span className='error-message'>{errors.cep.message}</span>
            )}
          </div>
          <div>
            <label htmlFor="" className="label">
              Número
            </label>
            <input 
              type="text" 
              placeholder="Número" 
              name="numero" 
              className="input-group" 
              {...register('numero')}
            />
          </div>
          <div>
            <label htmlFor="" className="label">
              Complemento
            </label>
            <input 
              type="text" 
              placeholder="Complemento" 
              name="complemento" 
              className="input-group" 
              {...register('complemento')}
            />
          </div>
            <button className='btn2 btAdd'>Cadastrar</button>
          </form>

    </CustomModal>
    <button className='btn btAdd' onClick={() => setOpenModal(true)}>Cadastrar Empresa</button>
    </>
  )
}

export default Cadastro