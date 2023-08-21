import React, { useState, useEffect } from 'react';

const FuncionarioForm = ({ onSubmit, editingFuncionario }) => {
  const [registro, setRegistro] = useState('');
  const [nome, setNome] = useState('');
  const [funcao, setFuncao] = useState('');
  const [errorMessages, setErrorMessages] = useState({
    registro: '',
    nome: '',
    funcao: '',
  });

  useEffect(() => {
    if (editingFuncionario) {
      setRegistro(editingFuncionario.registro);
      setNome(editingFuncionario.nome);
      setFuncao(editingFuncionario.funcao);
    }
  }, [editingFuncionario]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!registro || !nome || !funcao) {
      setErrorMessages({
        registro: registro ? '' : 'Campo obrigatório',
        nome: nome ? '' : 'Campo obrigatório',
        funcao: funcao ? '' : 'Campo obrigatório',
      });
      return;
    }

    onSubmit({ registro, nome, funcao });
    setRegistro('');
    setNome('');
    setFuncao('');
    setErrorMessages({
      registro: '',
      nome: '',
      funcao: '',
    });
  };

  return (
    <form className='formFunc' onSubmit={handleSubmit}>
        <h3 className='titFunc'>Cadastro Funcionário</h3>
      <input
        className='inputFunc'
        type="text"
        placeholder="Número de Registro"
        value={registro}
        onChange={(e) => setRegistro(e.target.value)}
      />
      {errorMessages.registro && <p className="error-message">{errorMessages.registro}</p>}
      <input
        className='inputFunc'
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      {errorMessages.nome && <p className="error-message">{errorMessages.nome}</p>}
      <input
        className='inputFunc'
        type="text"
        placeholder="Função"
        value={funcao}
        onChange={(e) => setFuncao(e.target.value)}
      />
      {errorMessages.funcao && <p className="error-message">{errorMessages.funcao}</p>}
      <button className='btnFunc' type="submit">{editingFuncionario ? 'Salvar Edição' : 'Adicionar Funcionário'}</button>
    </form>
  );
};

export default FuncionarioForm;
