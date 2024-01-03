import React, { useState } from 'react';
import useCaixa from '../../../hooks/useCaixa';
import './TelaCaixa.css';

const TelaCaixa = () => {
  const [numeroComanda, setNumeroComanda] = useState('');
  const {
    dadosComanda,
    adicionarItem,
    desconto,
    setDesconto,
    pagamento,
    setPagamento,
    valorRecebido,
    setValorRecebido,
    totalSemDesconto,
    totalComDesconto,
    valorFaltando,
    troco,
  } = useCaixa(numeroComanda);
  const [novoItem, setNovoItem] = useState({ nome: '', valor: '', quantidade: '' });

  const handleNumeroComandaChange = (event) => {
    setNumeroComanda(event.target.value);
  };

  const handleDescontoChange = (event) => {
    setDesconto(Number(event.target.value));
  };

  const handlePagamentoChange = (event) => {
    setPagamento(event.target.value);
  };

  const handleValorRecebidoChange = (event) => {
    setValorRecebido(Number(event.target.value));
  };

  const handleNovoItemChange = (event) => {
    const { name, value } = event.target;
    setNovoItem({
      ...novoItem,
      [name]: value,
    });
  };

  const handleSubmitNovoItem = (event) => {
    event.preventDefault();
    adicionarItem({ ...novoItem, precoTotal: novoItem.valor * novoItem.quantidade });
    setNovoItem({ nome: '', valor: '', quantidade: '' });
  };

  return (
    <div className="tela-caixa">
      <h2>Tela de Caixa</h2>
      <input
        type="text"
        placeholder="Digite o número da comanda"
        value={numeroComanda}
        onChange={handleNumeroComandaChange}
        className='input-group'
      />
      {numeroComanda && (
      <div className="dados-comanda">
        <h3>Dados da Comanda:</h3>
        <ul>
          {dadosComanda &&
            dadosComanda.map((item, index) => (
              <li key={index} className="item-comanda">
                <p>Nome: {item.nome}</p>
                <p>Valor: R$ {item.valor}</p>
                <p>Quantidade: {item.quantidade}</p>
                <p>Preço Total: R$ {item.precoTotal}</p>
              </li>
            ))}
        </ul>
      </div>
    )}
      {numeroComanda && (
        <div>
          <h3>Adicionar Novo Item:</h3>
          <form onSubmit={handleSubmitNovoItem}>
            <input
              type="text"
              placeholder="Nome do item"
              name="nome"
              value={novoItem.nome}
              onChange={handleNovoItemChange}
              className='input-group'
            />
            <input
              type="text"
              placeholder="Valor"
              name="valor"
              value={novoItem.valor}
              onChange={handleNovoItemChange}
              className='input-group'
            />
            <input
              type="text"
              placeholder="Quantidade"
              name="quantidade"
              value={novoItem.quantidade}
              onChange={handleNovoItemChange}
              className='input-group'
            />
            <button type="submit" className='btn btAdd'>Adicionar Item</button>
          </form>
          </div>
      )}
      {numeroComanda && (
        <div>
          <h3>Desconto:</h3>
          <input
            type="text"
            placeholder="Desconto em R$"
            value={desconto}
            onChange={handleDescontoChange}
            className='input-group'
          />
        </div>
      )}
     {numeroComanda && (
        <div>
          <h3>Pagamento:</h3>
          <select value={pagamento} onChange={handlePagamentoChange}>
            <option value="">Selecione o tipo de pagamento</option>
            <option value="Débito">Débito</option>
            <option value="Crédito">Crédito</option>
            <option value="Vale refeição">Vale refeição</option>
            <option value="PIX">PIX</option>
            <option value="Dinheiro">Dinheiro</option>
          </select>
        </div>
      )}
      {numeroComanda && (
        <div>
          <h3>Valor Recebido:</h3>
          <input
            type="text"
            placeholder="Valor recebido em R$"
            value={valorRecebido}
            onChange={handleValorRecebidoChange}
            className='input-group'
          />
        </div>
      )}
      {numeroComanda && (
        <div>
          <h3>Valores:</h3>
          <p>Total sem desconto: R$ {totalSemDesconto}</p>
          <p>Total com desconto: R$ {totalComDesconto}</p>
          <p>Valor faltando: R$ {valorFaltando > 0 ? valorFaltando : 0}</p>
          <p>Troco: R$ {troco > 0 ? troco : 0}</p>
        </div>
      )}
    </div>
  );
};

export default TelaCaixa;