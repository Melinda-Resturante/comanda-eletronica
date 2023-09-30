import React from 'react';
import Modal from 'react-modal';

const PerfilModal = ({ isOpen, onClose, funcionario, cargoNome  }) => {
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
        <p className='texto inputModal'><span className='item'>Número de registro: </span> {funcionario.id}</p>
        <p className='texto inputModal'><span className='item'>Nome: </span> {funcionario.nome}</p>
        <p className='texto inputModal'><span className='item'>Sobrenome: </span>{funcionario.sobrenome}</p>
        <p className='texto inputModal'><span className='item'>CPF: </span>{funcionario.cpf}</p>
        <p className='texto inputModal'><span className='item'>Data de nascimento: </span>{funcionario.data_nascimento}</p>
        <p className='texto inputModal'><span className='item'>Telefone 1: </span>{funcionario.telefone_01}</p>
        <p className='texto inputModal'><span className='item'>Telefone 2: </span>{funcionario.telefone_02}</p>
        <p className='texto inputModal'><span className='item'>Rua: </span>{funcionario.rua}</p>
        <p className='texto inputModal'><span className='item'>Número: </span>{funcionario.numero}</p>
        <p className='texto inputModal'><span className='item'>Bairro: </span>{funcionario.bairro}</p>
        <p className='texto inputModal'><span className='item'>Cidade: </span>{funcionario.cidade}</p>
        <p className='texto inputModal'><span className='item'>Estado: </span>{funcionario.estado}</p>
        <p className='texto inputModal'><span className='item'>CEP: </span>{funcionario.cep}</p>
        <p className='texto inputModal'><span className='item'>Cargo: </span>{cargoNome}</p>
        
        <button onClick={onClose} className='modal-close'>Fechar</button>
      </Modal>
    );
  };
  
export default PerfilModal;
