import React, { useState } from 'react';
import Modal from 'react-modal';

const SenhaModal = ({ isOpen, onClose, onSave }) => {
  const [senha, setSenha] = useState('');

  const handleSalvarSenhaClick = () => {
    onSave(senha);
    setSenha(''); 
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal"
    >
      <div className='employee-form formSenha'>

          <h2 className='titleH2'>Cadastrar Senha</h2>
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className='input-group'
          />
          <div className='btns dSenha'>
            <button onClick={handleSalvarSenhaClick} className='btnSalvar'>Salvar</button>
            <button onClick={onClose} className='btnCalcel'>Cancelar</button>
          </div>
      </div>
    </Modal>
  );
};

export default SenhaModal;
