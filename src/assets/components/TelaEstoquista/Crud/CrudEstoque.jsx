import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useDecryptUser } from '../../../../security/userDecrypt';
import CustomTable from '../../Custom/CustomTable/CustomTable';
import CustomModal from '../../Custom/CustomModal/CustomModal';

Modal.setAppElement('#root');

function CrudEstoque() {
  const { decryptUser } = useDecryptUser();
  const authToken = decryptUser.acssesToken;

  const categoriasPermitidas = ['alomoço', 'bebida alcólica', 'bebida não alcólica', 'doces'];

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
  const [ordenacao, setOrdenacao] = useState('');
  const [itemEditado, setItemEditado] = useState(null);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('');
  const [categorias, setCategorias] = useState([
    'alomoço',
    'bebida alcólica',
    'bebida não alcólica',
    'doces',
  ]);

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
      if (Array.isArray(data)) {
        setEstoque(data);
      } else {
        console.error('Erro: os dados retornados não são um array:', data);
      }
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
;

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
    alert('Preencha todos os campos antes de adicionar.');
    return;
  }

  if (!categoriasPermitidas.includes(novoItem.categoria.toLowerCase())) {
    alert('Por favor, selecione uma categoria válida: almoço, bebida alcóolica, bebida não alcóolica ou doces.');
    return;
  }

  const id = parseInt(novoItem.id);

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`,
    },
    body: JSON.stringify({
      id: id, 
      nome_produto: novoItem.nome_produto,
      descricao: novoItem.descricao,
      preco: novoItem.preco,
      quantidade: novoItem.quantidade,
      categoria: novoItem.categoria.toLowerCase(),
    }),
  };
  
    fetch('https://comanda-eletronica-api.vercel.app/produtos', requestOptions)
      .then(response => response.json())
      .then(data => {
        if (data.id) {
          setEstoque(prevEstoque => [...prevEstoque, data]);
          setIsModalOpen(false);
          setNovoItem({
            id: '',
            nome_produto: '',
            descricao: '',
            preco: '',
            quantidade: '',
            categoria: '',
          });
        } else {
          console.error('Erro ao adicionar o produto:', data);
          alert('Erro ao adicionar o produto. Por favor, tente novamente mais tarde.');
        }
      })
      .catch(error => {
        console.error('Erro ao adicionar o produto:', error);
        alert('Erro ao adicionar o produto. Por favor, tente novamente mais tarde.');
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
    console.log("Item a ser editado:", item);
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
    console.log("Valor de itemEditado:", itemEditado); 
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
          id: null,
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

  const handleSelecionarCategoria = (categoria) => {
    setCategoriaSelecionada(categoria);
  };

  return (
    <div className='crud'>
      <div className='formulario'>
        <button className='btn btAdd' onClick={() => setIsModalOpen(true)}>Adicionar Item</button>
        <button className='btn btAdd' onClick={handleOrdenarItens}>Ordenar por ID</button>
      </div>
      
      <div className='filtro-categoria'>
        <label>Categoria:</label>
        <select
          name='categoria'
          value={categoriaSelecionada}
          onChange={(e) => handleSelecionarCategoria(e.target.value)}
          className="input-group"
        >
          <option value=''>Selecione uma categoria</option>
          {categorias.map((categoria) => (
            <option key={categoria} value={categoria.toLowerCase()}>
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
      <div>
        <label>ID</label>
        <input
          type='number'
          name='id'
          placeholder='ID'
          value={novoItem.id || ''}
          onChange={handleInputChange}
          className="input-group"
        />

        <label>Nome</label>
        <input
          type='text'
          name='nome_produto'
          placeholder='Nome'
          value={novoItem.nome_produto}
          onChange={handleInputChange}
          className="input-group"
        />
        <label>Descrição</label>
        <input
          type='text'
          name='descricao'
          placeholder='Descrição'
          value={novoItem.descricao}
          onChange={handleInputChange}
          className="input-group"
        />
        <label>Preço</label>
        <input
          type='text'
          name='preco'
          placeholder='Preço'
          value={novoItem.preco}
          onChange={handleInputChange}
          className="input-group"
        />
        <label>Quantidade</label>
        <input
          type='number'
          name='quantidade'
          placeholder='Quantidade'
          value={novoItem.quantidade}
          onChange={handleInputChange}
          className="input-group"
        />

      <div className='filtro-categoria'>
        <label>Categoria:</label>
        <select
          name='categoria'
          value={categoriaSelecionada}
          onChange={(e) => handleSelecionarCategoria(e.target.value)}
          className="input-group"
        >
          <option value=''>Selecione uma categoria</option>
          {categorias.map((categoria) => (
            <option key={categoria} value={categoria.toLowerCase()}>
              {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
            </option>
          ))}
        </select>
      </div>
  </div>
      <button className='btn2 btSalvar' onClick={itemEditado ? handleSalvarEdicao : handleAddItem}>
        {itemEditado ? 'Salvar' : 'Adicionar'}
      </button>
    </CustomModal>
    </div>
  );
}

export default CrudEstoque;
