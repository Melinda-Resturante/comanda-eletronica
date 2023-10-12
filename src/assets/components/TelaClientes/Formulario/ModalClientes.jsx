import React from 'react';
import Modal from 'react-modal';
import FormularioClientes from './FormularioClientes';

Modal.setAppElement('#root');

function ModalClientes({ isOpen, onRequestClose, onSubmit }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Formulário de Clientes"
      className="modal"
      overlayClassName="overlay"
    >
      <FormularioClientes onSubmit={onSubmit} />
        <button className="modal-close-btn" onClick={onRequestClose}>
        Fechar
      </button>
    </Modal>
  );
}

export default ModalClientes;
