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
        <p className='texto inputModal'><span className='item'>Número de registro: </span> {funcionario.register}</p>
        <p className='texto inputModal'><span className='item'>Nome: </span> {funcionario.name}</p>
        <p className='texto inputModal'><span className='item'>Sobrenome: </span>{funcionario.lastName}</p>
        <p className='texto inputModal'><span className='item'>CPF: </span>{funcionario.cpf}</p>
        <p className='texto inputModal'><span className='item'>Data de nascimento: </span>{funcionario.birthDate}</p>
        <p className='texto inputModal'><span className='item'>Telefone 1: </span>{funcionario.phone1}</p>
        <p className='texto inputModal'><span className='item'>Telefone 2: </span>{funcionario.phone2}</p>
        <p className='texto inputModal'><span className='item'>Rua: </span>{funcionario.street}</p>
        <p className='texto inputModal'><span className='item'>Número: </span>{funcionario.number}</p>
        <p className='texto inputModal'><span className='item'>Bairro: </span>{funcionario.district}</p>
        <p className='texto inputModal'><span className='item'>Cidade: </span>{funcionario.city}</p>
        <p className='texto inputModal'><span className='item'>Estado: </span>{funcionario.state}</p>
        <p className='texto inputModal'><span className='item'>CEP: </span>{funcionario.cep}</p>
        <p className='texto inputModal'><span className='item'>Cargo: </span>{funcionario.jobFunction}</p>
        
        <button onClick={onClose} className='modal-close'>Fechar</button>
      </Modal>
    );
  };
  
export default PerfilModal;
