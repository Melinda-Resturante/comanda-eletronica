import React, { useState } from 'react';
import DetalhesClienteModal from './DetalhesClienteModal';
import CustomTable from '../Custom/CustomTable/CustomTable';
import CustomModal from '../Custom/CustomModal/CustomModal';
import FormularioClientes from './Formulario/FormularioClientes';

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
      <button className='btn btAdd' onClick={openCadastroModal}>Cadastrar cliente</button>
      <CustomModal isOpen={modalCadastroIsOpen} onClose={closeCadastroModal}>
        <FormularioClientes onSubmit={handleSubmit} />
      </CustomModal>

      <div className="table-container">
        <CustomTable
          data={clientes}
          columns={[
            { key: 'nome', header: 'Nome' },
            { key: 'sobrenome', header: 'Sobrenome' },
            { key: 'telefone', header: 'Telefone' },
            { key: 'rua', header: 'Rua' },
            { key: 'numero', header: 'Número' },
            { key: 'complemento', header: 'Complemento' },
            { key: 'bairro', header: 'Bairro' }
          ]}
          onDetails={openDetalhesModal}
        />
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