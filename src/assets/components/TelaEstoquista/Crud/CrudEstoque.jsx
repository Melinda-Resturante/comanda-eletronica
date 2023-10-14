import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useDecryptUser } from '../../../../security/userDecrypt';
import CustomTable from '../../Custom/CustomTable/CustomTable';
import CustomModal from '../../Custom/CustomModal/CustomModal';

Modal.setAppElement('#root');

function CrudEstoque() {
  const { decryptUser } = useDecryptUser();
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

      <CustomTable
              data={estoque}
              columns={[
                { key: 'id', header: 'ID' },
                { key: 'nome_produto', header: 'Nome' },
                { key: 'descricao', header: 'Descrição' },
                { key: 'preco', header: 'Preço' },
                { key: 'quantidade', header: 'Quantidade' },
                { key: 'categoria', header: 'Categoria' },
              ]}
              onEdit={handleEditarItem}
              onDelete={handleExcluirItem}
            />

      <CustomModal
            isOpen={isModalOpen}
            onClose={() => {
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
          >
      <h2>{itemEditado ? 'Editar Item' : 'Adicionar Novo Item'}</h2>
      <label>ID</label>
      <input
        type='number'
        name='id'
        placeholder='ID'
        value={novoItem.id}
        onChange={handleInputChange}
        className='modal-input'
      />
      <label>Nome</label>
      <input
        type='text'
        name='nome_produto'
        placeholder='Nome'
        value={novoItem.nome_produto}
        onChange={handleInputChange}
        className='modal-input'
      />
      <label>Descrição</label>
      <input
        type='text'
        name='descricao'
        placeholder='Descrição'
        value={novoItem.descricao}
        onChange={handleInputChange}
        className='modal-input'
      />
      <label>Preço</label>
      <input
        type='text'
        name='preco'
        placeholder='Preço'
        value={novoItem.preco}
        onChange={handleInputChange}
        className='modal-input'
      />
      <label>Quantidade</label>
      <input
        type='number'
        name='quantidade'
        placeholder='Quantidade'
        value={novoItem.quantidadeLocal}
        onChange={handleInputChange}
        className='modal-input'
      />
      <div className='filtro-categoria'>
    <label>Categoria:</label>
    <select
      name='categoria'
      value={novoItem.categoria}
      onChange={handleInputChange}
      className='modal-select'
    >
      <option value=''>Selecione uma categoria</option>
      {categorias.map((categoria) => (
        <option key={categoria} value={categoria}>
          {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
        </option>
      ))}
    </select>
  </div>
      <button className='modal-button' onClick={itemEditado ? handleSalvarEdicao : handleAddItem}>
        {itemEditado ? 'Salvar' : 'Adicionar'}
      </button>
    </CustomModal>
    </div>
  );
}

export default CrudEstoque;
