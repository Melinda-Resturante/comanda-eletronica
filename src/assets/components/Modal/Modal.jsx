import React, { useState } from 'react'
import './Modal.css'
import Table from '../Table/Table'
import DropDown from '../DropDown/DropDown'

function Modal({ isOpen, setOpen, data }) {
    const [openDrop, setOpenDrop] = useState(false)

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

                     <Table  setOpenDrop={setOpenDrop} openDrop={openDrop} />
                     <DropDown isVisible={openDrop} />
                   
                    <div className="confirmBtn">
                    <button onClick={() => setOpen(!isOpen)}>Confirmar</button>
                    </div>
                </div>
            </div>
        )
    }
 
}

export default Modal