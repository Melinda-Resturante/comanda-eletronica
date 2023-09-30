import './Table.css'

const Table = ({setOpenDrop, openDrop}) => {
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
               <tr>
                <td>Almoço Kg</td>
                 <td>R$35,87</td>
                 <td>
                    <div>
                        <button className='descBtn'>Descrição</button>
                        <button className='removeBtn'>Remove</button>
                    </div>
                 </td>
                </tr>
              <tr>
                 <td>Coca-Cola 2L</td>
                 <td>R$9,76</td>
                 <td>
                    <div>
                        <button className='descBtn'>Descrição</button>
                        <button className='removeBtn'>Remove</button>
                        {openDrop ? 
                         ( <i className='bx bxs-minus-circle'
                              onClick={() => setOpenDrop(!openDrop)}></i>) 
                              : ( <i className='bx bxs-plus-circle'
                                     onClick={() => setOpenDrop(!openDrop)}></i> 
                        )}
                    </div>
                 </td>
               </tr>
                <tr>
                    <td>Fanta 600ml</td>
                    <td>R$8,89</td>
                    <td>
                        <div>
                            <button className='descBtn'>Descrição</button>
                            <button className='removeBtn'>Remove</button>
                            {openDrop ? 
                         ( <i className='bx bxs-minus-circle'
                              onClick={() => setOpenDrop(!openDrop)}></i>) 
                              : ( <i className='bx bxs-plus-circle'
                                     onClick={() => setOpenDrop(!openDrop)}></i> 
                        )}
                        </div>
                    </td>
                </tr>
            <tr>
                <td>Caipirinha</td>
                <td>R$6,19</td>
                <td>
                    <div>
                        <button className='descBtn'>Descrição</button>
                        <button className='removeBtn'>Remove</button>
                        {openDrop ? 
                         ( <i className='bx bxs-minus-circle'
                              onClick={() => setOpenDrop(!openDrop)}></i>) 
                              : ( <i className='bx bxs-plus-circle'
                                     onClick={() => setOpenDrop(!openDrop)}></i> 
                        )}
                    </div>
                </td>
            </tr>    
              </tbody>
           
          </table>
      </section>
    </>
  )
}

export default Table