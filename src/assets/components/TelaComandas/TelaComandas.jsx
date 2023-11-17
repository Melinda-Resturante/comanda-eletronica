import React, { useState } from 'react'
import Modal from '../Modal/Modal';
import './TelaComandas.css'

const TelaComandas = ({ stateColor }) => {
    const [open, setOpen] = useState(false)
    const [fakeData, setFakeData] = useState('')

    
    const generateFakeData = (count) => {
      const data = [];
      for (let i = 1; i <= count; i++) {
        data.push({
          id: i,
          task: `card ${i}`,
        });
      }
      return data;
    };
  
    const fakeDataCard = generateFakeData(100);
  
    const handleOpenModal = (id, state, task) => {
      const data = {
        id: id,
        state: state,
        task: task
      }
  
      setFakeData(data)
      setOpen(!open)
    }
  
    return (
      <>
      <Modal isOpen={open} setOpen={setOpen} data={fakeData}/>
  
        <nav className="navigation">
          <div className="nav-search">
            <label htmlFor="">Buscar: </label>
            <input type="search" placeholder="Numero da Comanda"/>
          </div>
        </nav>
  
        <main className='main-container'>
          {fakeDataCard.map((card) => (
            <div className={`card ${stateColor}`} key={card.id} onClick={() => handleOpenModal(card.id, card.state, card.task)}>
              <h1> {card.id} </h1>
            </div>
          ))}
        </main>
      </>
    )
}

export default TelaComandas