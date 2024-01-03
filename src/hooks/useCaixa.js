import { useState, useEffect } from 'react';
import dadosComandas from './dadosExemplo';

const useCaixa = (numeroComanda) => {
  const [dadosComanda, setDadosComanda] = useState([]);
  const [desconto, setDesconto] = useState(0);
  const [pagamento, setPagamento] = useState('');
  const [valorRecebido, setValorRecebido] = useState(0);

  useEffect(() => {
    const dados = dadosComandas[numeroComanda] || [];
    const comandaComPrecosTotais = dados.map(item => ({
      ...item,
      precoTotal: item.valor * item.quantidade,
    }));
    setDadosComanda(comandaComPrecosTotais);
  }, [numeroComanda]);

  const adicionarItem = (novoItem) => {
    const precoTotal = novoItem.valor * novoItem.quantidade;
    const itemComPrecoTotal = { ...novoItem, precoTotal };
    setDadosComanda([...dadosComanda, itemComPrecoTotal]);
  };

  const calcularTotalSemDesconto = () => {
    return dadosComanda.reduce((total, item) => total + item.precoTotal, 0);
  };

  const totalSemDesconto = calcularTotalSemDesconto();
  const totalComDesconto = totalSemDesconto - desconto;
  const valorFaltando = totalComDesconto - valorRecebido;
  const troco = valorRecebido - totalComDesconto;

  return {
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
  };
};

export default useCaixa;