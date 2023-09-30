import { useState } from 'react';
import './TelaAtendente.css';
import Modal from '../Modal/Modal';
import authLoginStore from '../../../store/Auth';

const TelaAtendente = () => {
  const [open, setOpen] = useState(false)
  const [fakeData, setFakeData] = useState('')

  const { user } = authLoginStore()
  console.log(user)

  const generateFakeData = (count) => {
    const data = [];
    for (let i = 1; i <= count; i++) {
      data.push({
        id: i,
        task: `card ${i}`,
        state: i % 3 === 0 ? 'busy' : 'available'
      });
    }
    return data;
  };

  const fakeDataCard = generateFakeData(300);

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
          <div className={`card ${card.state}`} key={card.id} onClick={() => handleOpenModal(card.id, card.state, card.task)}>
            <h1> {card.id} </h1>
            <p> {card.task} </p>
          </div>
        ))}
      </main>
    </>
  )
}

export default TelaAtendente;
