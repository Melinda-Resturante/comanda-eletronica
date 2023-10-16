import React from 'react';
import Modal from 'react-modal';
import CustomModal from '../Custom/CustomModal/CustomModal';

Modal.setAppElement('#root'); 

function DetalhesClienteModal({ isOpen, onRequestClose, cliente }) {
  return (
    <CustomModal isOpen={isOpen} onClose={onRequestClose}>
      <div className="modal-content">
        <h2>Detalhes do Cliente</h2>
        <p className='inputModal'> <span className='item'>Nome:</span> {cliente.nome} {cliente.sobrenome}</p>
        <p className='inputModal'> <span className='item'>Telefone: </span>{cliente.telefone}</p>
        <p> Endereço:</p>
        <p className='inputModal'> <span className='item'>CEP: </span>{cliente.cep}</p>
        <p className='inputModal'> <span className='item'>Rua: </span>{cliente.rua}</p>
        <p className='inputModal'> <span className='item'>Número:</span> {cliente.numero}</p>
        <p className='inputModal'> <span className='item'>Complemento: </span>{cliente.complemento}</p>
        <p className='inputModal'> <span className='item'>Bairro: </span>{cliente.bairro}</p>
        <p className='inputModal'> <span className='item'>Cidade: </span> {cliente.cidade}</p>
        <p className='inputModal'> <span className='item'>Estado:</span> {cliente.estado}</p>
      </div>
    </CustomModal>
  );
}

export default DetalhesClienteModal;