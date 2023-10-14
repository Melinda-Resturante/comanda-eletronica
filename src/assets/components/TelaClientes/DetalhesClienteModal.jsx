import React from 'react';
import Modal from 'react-modal';
import CustomModal from '../Custom/CustomModal/CustomModal';

Modal.setAppElement('#root'); 

function DetalhesClienteModal({ isOpen, onRequestClose, cliente }) {
  return (
    <CustomModal isOpen={isOpen} onClose={onRequestClose}>
      <div className="modal-content">
        <h2>Detalhes do Cliente</h2>
        <p>Nome: {cliente.nome} {cliente.sobrenome}</p>
        <p>Telefone: {cliente.telefone}</p>
        <p>Endereço:</p>
        <p>CEP: {cliente.cep}</p>
        <p>Rua: {cliente.rua}</p>
        <p>Número: {cliente.numero}</p>
        <p>Complemento: {cliente.complemento}</p>
        <p>Bairro: {cliente.bairro}</p>
        <p>Cidade: {cliente.cidade}</p>
        <p>Estado: {cliente.estado}</p>
      </div>
    </CustomModal>
  );
}

export default DetalhesClienteModal;