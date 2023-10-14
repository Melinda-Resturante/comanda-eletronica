import React from 'react';
import PropTypes from 'prop-types';
import './CustomTable.css';

const CustomTable = ({ data, columns, onEdit, onDelete, onDetails, onPassword }) => {
  return (
    <table className="custom-table">
      <thead>
        <tr>
          {columns.map(column => (
            <th key={column.key}>{column.header}</th>
          ))}
          {(onEdit || onDelete || onDetails) && <th>Ações</th>}
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            {columns.map(column => (
              <td key={column.key}>
                {column.key === 'cargo' ? column.formatter(item[column.key]) : item[column.key]}
              </td>
            ))}
            {(onEdit || onDelete || onDetails) && (
              <td>
                {onEdit && <button className='btnTable editar' onClick={() => onEdit(item)}>Editar</button>}
                {onDelete && <button className='btnTable deletar' onClick={() => onDelete(item.id)}>Excluir</button>}
                {onDetails && <button className='btnTable detalhes' onClick={() => onDetails(item)}>Ver detalhes</button>}
                {onPassword && <button className='btnTable senha' onClick={() => onPassword(item)}>Cadastrar Senha</button>}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

CustomTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      header: PropTypes.string.isRequired,
      formatter: PropTypes.func 
    })
  ).isRequired,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  onDetails: PropTypes.func,
  onPassword: PropTypes.func,
};

export default CustomTable;
