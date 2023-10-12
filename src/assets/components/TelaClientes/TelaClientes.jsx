import React, { useState } from 'react';
import ModalClientes from './Formulario/ModalClientes';
import "./Formulario/FormularioClientes.css"
import "./ListaClientes.css"

function TelaClientes() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [clientes, setClientes] = useState([]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit = (data) => {
    setClientes([...clientes, {
      nome: data.nome,
      sobrenome: data.sobrenome,
      telefone: data.telefone,
      rua: data.endereco.rua,
      numero: data.endereco.numero,
      complemento: data.endereco.complemento,
      bairro: data.endereco.bairro,
    }]);
    closeModal();
  };

  return (
    <div>
      <h2 className='titulo'>Clientes</h2>
      <button className="open-modal-btn" onClick={openModal}>Abrir Modal</button>
      <ModalClientes isOpen={modalIsOpen} onRequestClose={closeModal} onSubmit={handleSubmit} />
      
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Sobrenome</th>
              <th>Telefone</th>
              <th>Rua</th>
              <th>Número</th>
              <th>Complemento</th>
              <th>Bairro</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente, index) => (
              <tr key={index}>
                <td>{cliente.nome}</td>
                <td>{cliente.sobrenome}</td>
                <td>{cliente.telefone}</td>
                <td>{cliente.rua}</td>
                <td>{cliente.numero}</td>
                <td>{cliente.complemento}</td>
                <td>{cliente.bairro}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TelaClientes;