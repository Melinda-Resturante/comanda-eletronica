import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); 

function DetalhesClienteModal({ isOpen, onRequestClose, cliente }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Detalhes do Cliente"
    >
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
      
      {/* Adicione um botão de fechar */}
      <button onClick={onRequestClose}>Fechar</button>
    </Modal>
  );
}

export default DetalhesClienteModal;
