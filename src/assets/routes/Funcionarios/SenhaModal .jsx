import Modal from 'react-modal';
import { useDecryptUser } from '../../../security/userDecrypt';
import { useForm } from 'react-hook-form';


const SenhaModal = ({ isOpen, onClose, onSave }) => {
 
  const { decryptUser } = useDecryptUser()
  const authToken = decryptUser.acssesToken

  const { register, handleSubmit, formState } = useForm({
    mode: 'onSubmit',
    defaultValues: { cpf: '', senha: '' },
    
  })

  const handleForm =  ({ cpf, senha }) => {
    
    const body = {
      "cpf": cpf,
      "senha": senha
    }
    const init = {
      method: 'POST',
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${authToken}`},
      body: JSON.stringify(body)
    }

     fetch('https://comanda-eletronica-api.vercel.app/funcionarios/1006', init)
    .then((resp) => resp.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error))
  }
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal"
    >
      <form className='employee-form formSenha' onSubmit={handleSubmit(handleForm)}>

          <h2 className='titleH2'>Cadastrar Senha</h2>
          <input
            type="text"
            placeholder="CPF"
            {...register('cpf')}
            className='input-group'
          />
          <input
            type="password"
            placeholder="Senha"
            {...register('senha')}
            className='input-group'
          />
            <button className='btnSalvar'>Salvar</button>
      </form>
          <div className='btns dSenha'>
            <button onClick={onClose} className='btnCalcel'>Cancelar</button>
          </div>
    </Modal>
  );
};

export default SenhaModal;
