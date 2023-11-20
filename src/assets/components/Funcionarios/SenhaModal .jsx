import { useDecryptUser } from '../../../security/userDecrypt';
import { useForm } from 'react-hook-form';
import CustomModal from '../../components/Custom/CustomModal/CustomModal';

const SenhaModal = ({ isOpen, onClose, onSave, children }) => {
  const { decryptUser } = useDecryptUser();
  const authToken = decryptUser.acssesToken;

  const { register, handleSubmit, formState } = useForm({
    mode: 'onSubmit',
    defaultValues: { cpf: '', senha: '' },
  });

  const handleForm = ({ cpf, senha }) => {
    const body = {
      cpf: cpf,
      senha: senha
    };

    const init = {
      method: 'POST',
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${authToken}` },
      body: JSON.stringify(body)
    };

    fetch('https://comanda-eletronica-api.vercel.app/funcionarios/auth/novologin', init)
      .then((resp) => resp.json())
      .then((json) => console.log(json))
      .catch((error) => console.log(error));
  };

  return (
    <CustomModal isOpen={isOpen} onClose={onClose}>
      <div className="modal-content">
        <form className='employee-form formSenha' onSubmit={handleSubmit(handleForm)}>
          <h2 className='titleH2'>Cadastrar Senha</h2>
          <label className="label">CPF</label>
          <input type="text" placeholder="CPF" {...register('cpf')} className='input-group' />
          <label className="label">Senha</label>
          <input type="password" placeholder="Senha" {...register('senha')} className='input-group' />
          <button className='btn2 btSalvar'>Salvar</button>
        </form>
        {children}
      </div>
    </CustomModal>
  );
};

export default SenhaModal;