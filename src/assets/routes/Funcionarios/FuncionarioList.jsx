import React from 'react';

const FuncionarioList = ({ funcionarios, onDelete, onEdit }) => {
  return (
    <ul className='func'>
      {funcionarios.map((funcionario, index) => (
        <li className='listFunc' key={index}>
          {funcionario.registro} - {funcionario.nome} - {funcionario.funcao}
          <button className='btnFunc' onClick={() => onDelete(index)}>Excluir</button>
          <button className='btnFunc' onClick={() => onEdit(index)}>Editar</button>
        </li>
      ))}
    </ul>
  );
};

export default FuncionarioList;
