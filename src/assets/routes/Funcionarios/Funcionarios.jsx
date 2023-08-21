import React, { useState } from 'react';
import FuncionarioList from './FuncionarioList';
import Modal from './Modal';

import "./Funcionarios.css"

function Funcionarios() {
  const [funcionarios, setFuncionarios] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleAddFuncionario = (funcionario) => {
    if (editingIndex !== null) {
      const newFuncionarios = [...funcionarios];
      newFuncionarios[editingIndex] = funcionario;
      setFuncionarios(newFuncionarios);
      setEditingIndex(null);
    } else {
      setFuncionarios([...funcionarios, funcionario]);
    }
    closeModal();
  };

  const handleEditFuncionario = (index) => {
    setEditingIndex(index);
    openModal();
  };

  const handleDeleteFuncionario = (index) => {
    const shouldDelete = window.confirm("Tem certeza que deseja excluir este funcionário?");
    if (shouldDelete) {
      const newFuncionarios = [...funcionarios];
      newFuncionarios.splice(index, 1);
      setFuncionarios(newFuncionarios);
    }
  };
  
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setEditingIndex(null);
    setModalIsOpen(false);
  };
  return (
    <div className="ContainerFuncionarios">
      <h1>Funcionários</h1>
      <button className='btnFunc' onClick={openModal}>Adicionar Funcionário</button>
      <FuncionarioList
        funcionarios={funcionarios}
        onDelete={handleDeleteFuncionario}
        onEdit={handleEditFuncionario}
      />
      <Modal
        isOpen={modalIsOpen}
        onClose={closeModal}
        onSubmit={handleAddFuncionario}
        funcionarioParaEdicao={editingIndex !== null ? funcionarios[editingIndex] : null}
      />
    </div>
  );
}

export default Funcionarios;
