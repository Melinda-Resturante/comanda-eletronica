import './TelaAtendente.css'


const TelaAtendente = () => {

  const fakeDataCard = [
    {
      id: 1,
      task: `card 1`,
      state: 'available'
    },
    {
      id: 2,
      task: `card 2`,
      state: 'available'
    },
    {
      id: 3,
      task: `card 3`,
      state: 'available'
    },
    {
      id: 4,
      task: `card 4`,
      state: 'busy'
    },
    {
      id: 5,
      task: `card 5`,
      state: 'available'
    },
    {
      id: 6,
      task: `card 6`,
      state: 'available'
    },
    {
      id: 7,
      task: `card 7`,
      state: 'busy'
    },
    {
      id: 8,
      task: `card 8`,
      state: 'busy'
    },
    {
      id: 9,
      task: `card 9`,
      state: 'busy'
    },
    {
      id: 10,
      task: `card 10`,
      state: 'available'
    },
    {
      id: 11,
      task: `card 11`,
      state: 'busy'
    },
    {
      id: 12,
      task: `card 12`,
      state: 'busy'
    },
    {
      id: 13,
      task: `card 13`,
      state: 'available'
    },
    {
      id: 14,
      task: `card 14`,
      state: 'available'
    },
    {
      id: 15,
      task: `card 15`,
      state: 'busy'
    },
]
    
  return (
    <>
         <nav className="navigation">
            <div className="nav-search">
              <label htmlFor="">Buscar: </label>
                <input type="search" placeholder="Numero da Comanda"/>
            </div>
         </nav>

         <main className='main-container'>
       
          {fakeDataCard.map((card) => (
              <div className={`card ${card.state}`}>
                  <h1> {card.id} </h1>
                  <p> {card.task} </p>
              </div>
            ))}
      
         </main>
    </>
  )
}

export default TelaAtendente;