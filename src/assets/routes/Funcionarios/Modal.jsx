// src/Modal.js

import React, { useState } from 'react';
import Modal from 'react-modal';
import FuncionarioForm from './FuncionarioForm';

Modal.setAppElement('#root'); // Define o elemento raiz do app para o modal

const CustomModal = ({ isOpen, onClose, onSubmit, funcionarioParaEdicao }) => {
  const [modalFuncionario, setModalFuncionario] = useState(funcionarioParaEdicao || null);

  const handleFormSubmit = (funcionario) => {
    onSubmit(funcionario);
    setModalFuncionario(null);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel={funcionarioParaEdicao ? 'Editar Funcionário' : 'Adicionar Funcionário'}
      className="modal"
    >
      <FuncionarioForm
        onSubmit={handleFormSubmit}
        editingFuncionario={modalFuncionario}
      />
      <button className="modal-close" onClick={onClose}>Fechar</button>
    </Modal>
  );
};

export default CustomModal;
