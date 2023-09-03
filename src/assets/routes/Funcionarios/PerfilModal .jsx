import React from 'react';
import Modal from 'react-modal';

const PerfilModal = ({ isOpen, onClose, funcionario }) => {
    if (!funcionario) {
      return (
        <Modal isOpen={isOpen} onRequestClose={onClose} className="modal">
          <p>Nenhum funcionário selecionado.</p>
          <button onClick={onClose}>Fechar</button>
        </Modal>
      );
    }
  
    return (
      <Modal isOpen={isOpen} onRequestClose={onClose} className="modal">
        <h2 className='titleH2'>Perfil do Funcionário</h2>
        <p className='texto'>Nome: {funcionario.name}</p>
        <p className='texto'>Sobrenome: {funcionario.lastName}</p>
        <p className='texto'>Cargo: {funcionario.jobFunction}</p>
        {/* Adicione outras informações do perfil aqui */}
        <button onClick={onClose} className='modal-close'>Fechar</button>
      </Modal>
    );
  };
  
export default PerfilModal;
