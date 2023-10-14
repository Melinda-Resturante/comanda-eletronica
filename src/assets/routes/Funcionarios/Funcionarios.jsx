import React, { useState } from 'react';
import FuncionarioList from './FuncionarioList';
import CustomModal from '../../components/Custom/CustomModal/CustomModal';
import AddFuncionarios from './AddFuncionarios';
import EditFuncionarios from './EditFuncionarios';

function Funcionarios() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false);

  const openAddModal = () => {
    setModalIsOpen(true);
  };

  const closeAddModal = () => {
    setModalIsOpen(false);
  };

  const openEditModal = () => {
    setModalEditIsOpen(true);
  };

  const closeEditModal = () => {
    setModalEditIsOpen(false);
  };
  
  return (
    <div className="ContainerFuncionarios">
      <div>
        {/* CustomModal para adicionar funcionários */}
        <CustomModal isOpen={modalIsOpen} onClose={closeAddModal}>
          <AddFuncionarios isClose={closeAddModal} />
        </CustomModal>

        {/* CustomModal para editar funcionários */}
        <CustomModal isOpen={modalEditIsOpen} onClose={closeEditModal}>
          <EditFuncionarios onClose={closeEditModal} />
        </CustomModal>
      </div>
      <h1 className='titleh1'>Funcionários</h1>
      <button className='btnFunc' onClick={openAddModal}>Adicionar Funcionário</button>
     
      <FuncionarioList editModal={openEditModal} />
    </div>
  );
}

export default Funcionarios;
