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
      <h2>Cadastrar Senha</h2>
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <button onClick={handleSalvarSenhaClick}>Salvar</button>
      <button onClick={onClose}>Cancelar</button>

      
    </Modal>

    
  );
};

export default SenhaModal;
