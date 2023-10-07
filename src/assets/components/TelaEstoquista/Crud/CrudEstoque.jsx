import React, { useState, useEffect } from 'react';
import "./CrudEstoque.css";
import Modal from 'react-modal';
import authLoginStore from '../../../../store/Auth.js';
import { useDecryptUser } from '../../../../security/userDecrypt';

Modal.setAppElement('#root');

function CrudEstoque() {
  const { user } = authLoginStore();
  const { decryptUser } = useDecryptUser(user);
  const authToken = decryptUser.acssesToken;

  const [estoque, setEstoque] = useState([]);
  const [novoItem, setNovoItem] = useState({
    id: '',
    nome_produto: '',
    descricao: '',
    preco: '',
    quantidade: '', 
    categoria: '',   
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('');
  const [ordenacao, setOrdenacao] = useState('');
  const [itemEditado, setItemEditado] = useState(null);
  const [novaCategoria, setNovaCategoria] = useState('');
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    console.log(estoque);
    fetchProdutos();
  }, []); 

  const fetchProdutos = () => {
    fetch('https://comanda-eletronica-api.vercel.app/produtos', {
      headers: {
        'Authorization': `Bearer ${authToken}`,
      }
    })
    .then(response => response.json())
    .then(data => {
      setEstoque(data);
    })
    .catch(error => {
      console.error('Erro ao buscar os produtos:', error);
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovoItem({
      ...novoItem,
      [name]: value,
    });
  };

  const handleCategoriaChange = (e) => {
    const categoria = e.target.value;
    setCategoriaSelecionada(categoria);
  };

  const handleAdicionarCategoria = () => {
    if (novaCategoria.trim() === '') {
      alert('Por favor, insira um nome para a categoria.');
      return;
    }
    setCategorias([...categorias, novaCategoria]);

    setNovaCategoria('');
    setIsModalOpen(false);
  };

  const handleOrdenarItens = () => {
    const novoEstoque = [...estoque];
    if (ordenacao === 'asc') {
      novoEstoque.sort((a, b) => a.id - b.id); 
      setOrdenacao('desc');
    } else {
      novoEstoque.sort((a, b) => b.id - a.id); 
      setOrdenacao('asc');
    }
    setEstoque(novoEstoque);
  };

  const handleAddItem = () => {
    if (
      !novoItem.nome_produto ||
      !novoItem.descricao ||
      !novoItem.preco ||
      !novoItem.quantidade ||
      !novoItem.categoria
    ) {
      alert("Preencha todos os campos antes de adicionar.");
      return;
    }

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
      },
      body: JSON.stringify(novoItem),
    };

    fetch('https://comanda-eletronica-api.vercel.app/produtos', requestOptions)
      .then(response => response.json())
      .then(data => {
        fetchProdutos();
        setIsModalOpen(false); 
      })
      
      .catch(error => {
        console.error('Erro ao adicionar o produto:', error);
        alert('Erro ao adicionar o produto. Por favor, tente novamente mais tarde.');
      });

    setNovoItem({
      nome_produto: '',
      descricao: '',
      preco: '',
      quantidade: '',
      categoria: '',
    });
  };

  const handleExcluirItem = (id) => {
    const requestOptions = {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${authToken}`,
      },
    };

    fetch(`https://comanda-eletronica-api.vercel.app/produtos/${id}`, requestOptions)
      .then(response => {
        if (response.ok) {
          fetchProdutos();
        } else {
          console.error('Erro ao excluir o produto:', response.statusText);
        }
      })
      .catch(error => {
        console.error('Erro ao excluir o produto:', error);
      });
  };

  const handleEditarItem = (item) => {
    setNovoItem({
      id: item.id,
      nome_produto: item.nome_produto,
      descricao: item.descricao,
      preco: item.preco,
      quantidade: item.quantidade,
      categoria: item.categoria,
    });
    setCategoriaSelecionada(item.categoria); 
    setItemEditado(item);
    setIsModalOpen(true); 
  };
  
  const handleSalvarEdicao = () => {
    if (!novoItem.nome_produto || !novoItem.descricao || !novoItem.preco || !novoItem.quantidade || !novoItem.categoria) {
      alert("Preencha todos os campos antes de editar.");
      return;
    }
  
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
      },
      body: JSON.stringify(novoItem),
    };
  
    fetch(`https://comanda-eletronica-api.vercel.app/produtos/${novoItem.id}`, requestOptions)
      .then(response => response.json())
      .then(data => {
        fetchProdutos();
        setIsModalOpen(false); 
        setNovoItem({
          id: '',
          nome_produto: '',
          descricao: '',
          preco: '',
          quantidade: '',
          categoria: '',
        });
        setItemEditado(null);
      })
      .catch(error => {
        console.error('Erro ao editar o produto:', error);
        alert('Erro ao editar o produto. Por favor, tente novamente mais tarde.');
      });
  };
  
  return (
    <div className='crud'>
      <div className='formulario'>
        <button className='buttonCrud' onClick={() => setIsModalOpen(true)}>Adicionar Item</button>
        <button className='buttonCrud' onClick={handleOrdenarItens}>Ordenar por ID</button>
      </div>
      
      <div className='filtro-categoria'>
        <label>Filtrar por Categoria:</label>
        <select
          name='filtroCategoria'
          value={categoriaSelecionada}
          onChange={handleCategoriaChange}
        >
          <option value=''>Todas</option>
          {categorias.map((categoria) => (
            <option key={categoria} value={categoria}>
              {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
            </option>
          ))}
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
          {estoque.map((item) => {
            if (!categoriaSelecionada || item.categoria === categoriaSelecionada) {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.nome_produto}</td>
                  <td>{item.descricao}</td>
                  <td>{Number(item.preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                  <td>{item.quantidade}</td>
                  <td>{item.categoria}</td>
                  <td>
                    <button className='btn' onClick={() => handleEditarItem(item)}>Editar</button>
                    <button className='btn' onClick={() => handleExcluirItem(item.id)}>Excluir</button>
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
         onRequestClose={() => {
           setIsModalOpen(false);
           setItemEditado(null);
           setNovoItem({
             id: '',
             nome_produto: '',
             descricao: '',
             preco: '',
             quantidade: '',
             categoria: '',
           });
           setNovaCategoria(''); 
         }}
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
        name='nome_produto'
        placeholder='Nome'
        value={novoItem.nome_produto}
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
        value={novoItem.quantidadeLocal}
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
      {categorias.map((categoria) => (
        <option key={categoria} value={categoria}>
          {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
        </option>
      ))}
    </select>
  </div>
      <div className='filtro-categoria'>
        <label>Nova Categoria:</label>
        <input
          type='text'
          name='novaCategoria'
          placeholder='Nova Categoria'
          value={novaCategoria}
          onChange={(e) => setNovaCategoria(e.target.value)}
        />
        <button onClick={handleAdicionarCategoria}>Adicionar Categoria</button>
      </div>
      <button onClick={itemEditado ? handleSalvarEdicao : handleAddItem}>
        {itemEditado ? 'Salvar' : 'Adicionar'}
      </button>
      <button onClick={() => {
        setIsModalOpen(false);
        setItemEditado(null);
        setNovoItem({
          id: '',
          nome_produto: '',
          descricao: '',
          preco: '',
          quantidade: '',
          categoria: '',
        });
        setNovaCategoria('');
      }}>Fechar</button>
    </Modal>
    </div>
  );
}

export default CrudEstoque;
