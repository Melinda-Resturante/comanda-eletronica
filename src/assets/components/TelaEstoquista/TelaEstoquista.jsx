import React from 'react';
import "./TelaEstoque.css";
import CrudEstoque from './Crud/CrudEstoque';

function TelaEstoquista() {

  return (
    <div className='ContainerEstoque'>
      <h1 className='TituloEstoque'>Estoque</h1>
        <CrudEstoque/>
    </div>
  )
}

export default TelaEstoquista;