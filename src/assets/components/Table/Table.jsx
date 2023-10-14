import productStore from '../../../store/products'
import './Table.css'

const Table = ({ setOpenDrop, openDrop }) => {

  const { productsButton, deleteProducts } = productStore()

  return (
    <>
    <h2>Item Comandas</h2>
        <section className='table-container'>
            <table id="customers">
              <thead>
                <tr>
                    <th>Comida</th>
                    <th>Valor</th>
                    <th>Remover</th>
                </tr>
              </thead>
              <tbody>
                {productsButton?.map((product, index) => (
                  <tr key={index}>
                     <td>{product.nome_produto}</td>
                     <td>R$ {product.preco}</td>
                     <td>
                        <div>
                            <button className='descBtn' onClick={() => setOpenDrop(!openDrop)}>Descrição</button>
                            <button className='removeBtn' onClick={() => deleteProducts(index)}>Remover</button>
                        </div>
                     </td>
                  </tr>
                ))}
              </tbody>
           
          </table>
      </section>
    </>
  )
}

export default Table