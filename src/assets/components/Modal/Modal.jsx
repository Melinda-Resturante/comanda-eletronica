import React from 'react'
import './Modal.css'

function Modal({ isOpen, setOpen, data }) {

    const buttonFake = [
        'Almoço', 'Coca-Cola 2L', 'Suco de Laranja 1.5L',
        'Cerveja 600ml', 'Suco de Abacaxi', 'Fanta 2L', 
        'Jantinha', 'Batata Frita'
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
                        <input type='search' />
                    </nav>

                    <section>
                        <h2>Item Comandas</h2>
                       
                    </section>

                    <button onClick={() => setOpen(!isOpen)}>Concluido</button>
                </div>
            </div>
        )
    }
 
}

export default Modal