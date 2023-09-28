import React, { useState } from 'react';
import FuncionarioList from './FuncionarioList';
import Modal from './Modal';
import "./Funcionarios.css"
import AddFuncionarios from './AddFuncionarios';
import EditFuncionarios from './EditFuncionarios';

function Funcionarios() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false)
  

  const openAddModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const openEditModal = () => {
    setModalEditIsOpen(!modalEditIsOpen);
   
  }
  
  return (
    <div className="ContainerFuncionarios">
      <div>
      
      <Modal isOpen={modalIsOpen} onClose={openAddModal}>
          <AddFuncionarios isClose={openAddModal}/>
      </Modal>

      <Modal isOpen={modalEditIsOpen} onClose={openEditModal}>
        <EditFuncionarios onClose={openEditModal}/>
      </Modal>
           
    
      </div>
      <h1 className='titleh1'>Funcionários</h1>
      <button className='btnFunc' onClick={openAddModal}>Adicionar Funcionário</button>
     
      <FuncionarioList editModal={openEditModal}/>
    </div>
  );
}

export default Funcionarios;
