import { useSenhaFuncionario } from '../../../hooks/useSenhaFuncionario';
import CustomModal from '../../components/Custom/CustomModal/CustomModal';

const SenhaModal = ({ isOpen, onClose, onSave, children }) => {
  const { register, handleSubmit, handleForm, errors, error } =
    useSenhaFuncionario(onClose);

  return (
    <CustomModal isOpen={isOpen} onClose={onClose}>
      <div className="modal-content">
        <form
          className="employee-form formSenha"
          onSubmit={handleSubmit(handleForm)}
        >
          <h2 className="titleH2">Cadastrar Senha</h2>
          <label className="label">CPF</label>
          <input
            type="text"
            placeholder="CPF"
            readOnly
            {...register('cpf')}
            className="input-group"
          />
          <label className="label">Senha</label>
          <input
            type="password"
            placeholder="Senha"
            {...register('senha')}
            className="input-group"
          />
          {errors?.senha?.message && (
            <p className="error-message">{errors?.senha?.message}</p>
          )}

          {error?.message && <p className="error-message">{error.message}</p>}
          <button className="btn2 btSalvar">Salvar</button>
        </form>
        {children}
      </div>
    </CustomModal>
  );
};

export default SenhaModal;
