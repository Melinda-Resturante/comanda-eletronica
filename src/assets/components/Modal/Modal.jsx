import React from 'react'
import './Modal.css'

function Modal({ isOpen, setOpen, data }) {

    const buttonFake = [
        'Almoço', 'Coca-Cola 2L', 'Suco de Laranja 1.5L',
        'Cerveja 600ml', 'Suco de Abacaxi', 'Fanta 2L', 
        'Jantinha', 'Batata Frita', 'Caipirinha', 'Feijoada', 'Café'
    ]


    if(isOpen) {
        return (
            <div className='backgroundModal'>
                <div className='Modal'>
                    <h1>Comanda {data.id}</h1>

                    <section className='section-button'>
                        {buttonFake.map((btn, index) => (
                            <button key={index}>
                                {btn}
                            </button>
                        ))}
                    </section>

                    <nav className='search-container'>
                        <h3>Pesquisar: </h3>
                        <input type='search' placeholder='Search...'/>
                    </nav>

                        <h2>Item Comandas</h2>
                    <section className='table-container'>

                      <table id="customers">
                        <tr>
                            <th>Comida</th>
                            <th>Valor</th>
                            <th>Remover</th>
                        </tr>
                        <tr>
                            <td>Almoço Kg</td>
                            <td>R$35,87</td>
                            <td>
                                <button className='descBtn'>Descrição</button>
                                <button className='removeBtn'>Remove</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Coca-Cola 2L</td>
                            <td>R$9,76</td>
                            <td>
                                <button className='descBtn'>Descrição</button>
                                <button className='removeBtn'>Remove</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Batata Frita</td>
                            <td>R$15,89</td>
                            <td>
                                <button className='descBtn'>Descrição</button>
                                <button className='removeBtn'>Remove</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Batata Frita</td>
                            <td>R$15,89</td>
                            <td>
                                <button className='descBtn'>Descrição</button>
                                <button className='removeBtn'>Remove</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Batata Frita</td>
                            <td>R$15,89</td>
                            <td>
                                <button className='descBtn'>Descrição</button>
                                <button className='removeBtn'>Remove</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Batata Frita</td>
                            <td>R$15,89</td>
                            <td>
                                <button className='descBtn'>Descrição</button>
                                <button className='removeBtn'>Remove</button>
                            </td>
                        </tr>
                    
                        </table>
                    </section>
                    <div className="confirmBtn">

                    <button onClick={() => setOpen(!isOpen)}>Confirmar</button>
                    </div>
                </div>
            </div>
        )
    }
 
}

export default Modal