import React, { useState } from 'react';
import ModalClientes from './Formulario/ModalClientes';
import "./Formulario/FormularioClientes.css"
import "./ListaClientes.css"
import DetalhesClienteModal from './DetalhesClienteModal';

function TelaClientes() {
  const [modalCadastroIsOpen, setModalCadastroIsOpen] = useState(false);
  const [modalDetalhesIsOpen, setModalDetalhesIsOpen] = useState(false);
  const [clientes, setClientes] = useState([]);
  const [clienteSelecionado, setClienteSelecionado] = useState(null);

  const openCadastroModal = () => {
    setModalCadastroIsOpen(true);
  };

  const closeCadastroModal = () => {
    setModalCadastroIsOpen(false);
  };

  const openDetalhesModal = (cliente) => {
    setClienteSelecionado(cliente);
    setModalDetalhesIsOpen(true);
  };

  const closeDetalhesModal = () => {
    setModalDetalhesIsOpen(false);
  };

  const handleSubmit = (data) => {
    const novoCliente = {
      nome: data.nome,
      sobrenome: data.sobrenome,
      telefone: data.telefone,
      rua: data.endereco.rua,
      numero: data.endereco.numero,
      complemento: data.endereco.complemento,
      bairro: data.endereco.bairro,
      cep: data.endereco.cep,
      cidade: data.endereco.cidade,
      estado: data.endereco.estado
    };
  
    setClientes([...clientes, novoCliente]);
    closeCadastroModal();
  };

  return (
    <div>
      <h2 className='titulo'>Clientes</h2>
      <button className="open-modal-btn" onClick={openCadastroModal}>Cadastrar cliente</button>
      <ModalClientes isOpen={modalCadastroIsOpen} onRequestClose={closeCadastroModal} onSubmit={handleSubmit} />
      
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
              <th>Detalhes</th>
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
                <td><button className='btn-clientes' onClick={() => openDetalhesModal(cliente)}>Ver detalhes</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        {clienteSelecionado && (
        <DetalhesClienteModal
          isOpen={modalDetalhesIsOpen}
          onRequestClose={closeDetalhesModal}
          cliente={clienteSelecionado}
        />
      )}
      </div>
    </div>
  );
}

export default TelaClientes;