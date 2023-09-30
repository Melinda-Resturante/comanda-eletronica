import React, { useState } from 'react';
import "./CrudEstoque.css";
import Modal from 'react-modal';

Modal.setAppElement('#root');

function CrudEstoque() {
  const [estoque, setEstoque] = useState([]);
  const [novoItem, setNovoItem] = useState({
    id: '',
    nome: '',
    descricao: '',
    preco: '',
    quantidade: '',
    categoria: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('');
  const [ordenacao, setOrdenacao] = useState('');
  const [itemEditado, setItemEditado] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovoItem({ ...novoItem, [name]: value });
  };

  const handleCategoriaChange = (e) => {
    const categoria = e.target.value;
    setCategoriaSelecionada(categoria);
  };

  const handleOrdenarItens = () => {
    const novoEstoque = [...estoque];
    if (ordenacao === 'asc') {
      novoEstoque.sort((a, b) => a.nome.localeCompare(b.nome));
      setOrdenacao('desc');
    } else {
      novoEstoque.sort((a, b) => b.nome.localeCompare(a.nome));
      setOrdenacao('asc');
    }
    setEstoque(novoEstoque);
  };

  const handleEditarItem = (item) => {
    setItemEditado(item);
    setNovoItem(item);
    setIsModalOpen(true);
  };

  const handleConfirmacaoExclusao = (item) => {
    const confirmacao = window.confirm(`Deseja realmente excluir o item "${item.nome}"?`);
    if (confirmacao) {
      handleExcluirItem(item);
    }
  };

  const handleExcluirItem = (item) => {
    const novoEstoque = estoque.filter((i) => i !== item);
    setEstoque(novoEstoque);
  };

  const handleAddItem = () => {
    if (
      !novoItem.nome ||
      !novoItem.descricao ||
      !novoItem.preco ||
      !novoItem.quantidade ||
      !novoItem.categoria
    ) {
      alert("Preencha todos os campos antes de adicionar.");
      return;
    }

    if (itemEditado) {
      const novoEstoque = estoque.map((item) => {
        if (item === itemEditado) {
          return {
            ...item,
            ...novoItem,
          };
        }
        return item;
      });

      setEstoque(novoEstoque);

      setItemEditado(null);
    } else {
      setEstoque([...estoque, novoItem]);
    }

    setNovoItem({
      id: '',
      nome: '',
      descricao: '',
      preco: '',
      quantidade: '',
      categoria: '',
    });

    setIsModalOpen(false);
  };

  return (
    <div className='crud'>
      <div className='formulario'>
        <button className='buttonCrud' onClick={() => setIsModalOpen(true)}>Adicionar Item</button>
        <button className='buttonCrud' onClick={handleOrdenarItens}>Ordenar por Nome</button>
      </div>
      
      <div className='filtro-categoria'>
        <label>Filtrar por Categoria:</label>
        <select
          name='filtroCategoria'
          value={categoriaSelecionada}
          onChange={handleCategoriaChange}
        >
          <option value=''>Todas</option>
          <option value='sucos'>Sucos</option>
          <option value='refrigerantes'>Refrigerantes</option>
          <option value='cervejas'>Cervejas</option>
          <option value='doces'>Doces</option>
        </select>
      </div>
      
      <section className='tabela-estoque'>
        <table id="customizacao">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Preço</th>
              <th>Quantidade</th>
              <th>Categoria</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {estoque.map((item, index) => {
              if (!categoriaSelecionada || item.categoria === categoriaSelecionada) {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.nome}</td>
                    <td>{item.descricao}</td>
                    <td>{item.preco}</td>
                    <td>{item.quantidade}</td>
                    <td>{item.categoria}</td>
                    <td>
                      <button className='btn' onClick={() => handleEditarItem(item)}>Editar</button>
                      <button className='btn' onClick={() => handleConfirmacaoExclusao(item)}>Excluir</button>
                    </td>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>
        </table>
      </section>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Adicionar Item Modal"
      >
        <h2>{itemEditado ? 'Editar Item' : 'Adicionar Novo Item'}</h2>
        <input
          type='number'
          name='id'
          placeholder='ID'
          value={novoItem.id}
          onChange={handleInputChange}
        />
        <input
          type='text'
          name='nome'
          placeholder='Nome'
          value={novoItem.nome}
          onChange={handleInputChange}
        />
        <input
          type='text'
          name='descricao'
          placeholder='Descrição'
          value={novoItem.descricao}
          onChange={handleInputChange}
        />
        <input
          type='text'
          name='preco'
          placeholder='Preço'
          value={novoItem.preco}
          onChange={handleInputChange}
        />
        <input
          type='number'
          name='quantidade'
          placeholder='Quantidade'
          value={novoItem.quantidade}
          onChange={handleInputChange}
        />
        <div className='filtro-categoria'>
          <label>Categoria:</label>
          <select
            name='categoria'
            value={novoItem.categoria}
            onChange={handleInputChange}
          >
            <option value=''>Selecione uma categoria</option>
            <option value='sucos'>Sucos</option>
            <option value='refrigerantes'>Refrigerantes</option>
            <option value='cervejas'>Cervejas</option>
            <option value='doces'>Doces</option>
          </select>
        </div>
        <button onClick={handleAddItem}>{itemEditado ? 'Salvar' : 'Adicionar'}</button>
        <button onClick={() => {
          setIsModalOpen(false);
          setItemEditado(null);
        }}>Fechar</button>
      </Modal>
    </div>
  );
}

export default CrudEstoque;
