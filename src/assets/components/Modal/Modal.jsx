import { useState } from 'react'
import './Modal.css'
import Table from '../Table/Table'
import DropDown from '../DropDown/DropDown'
import useFetchProduts from '../../../hooks/useFetchProduts'
import productStore from '../../../store/products'

function Modal({ isOpen, setOpen, data }) {
    const [openDrop, setOpenDrop] = useState(false)

    const { products } = useFetchProduts()
    const { addProducts } = productStore()

    if(isOpen) {
        return (
            <div className='backgroundModal'>
                <div className='Modal'>
                    <h1>Comanda {data.id}</h1>

                    <section className='section-button'>
                        {products?.map((product, index) => (
                            <button 
                             key={index}
                             onClick={() =>{ addProducts(product) }}
                             >
                               {product.nome_produto}
                            </button>
                        ))}
                    </section>

                    <nav className='search-container'>
                        <h3>Pesquisar: </h3>
                        <input type='search' placeholder='Pesquisar...'/>
                    </nav>

                     <Table  setOpenDrop={setOpenDrop} openDrop={openDrop} />
                     <DropDown isVisible={openDrop} />
                   
                    <div className="confirmBtn">
                        <button>Fechar</button>
                        <button onClick={() => setOpen(!isOpen)}>Confirmar</button>
                    </div>
                </div>
            </div>
        )
    }
 
}

export default Modal