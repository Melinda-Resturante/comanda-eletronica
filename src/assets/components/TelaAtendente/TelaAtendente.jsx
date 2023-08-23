import './TelaAtendente.css';

const TelaAtendente = () => {

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

  const fakeDataCard = generateFakeData(50);

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
          <div className={`card ${card.state}`} key={card.id}>
            <h1> {card.id} </h1>
            <p> {card.task} </p>
          </div>
        ))}
      </main>
    </>
  )
}

export default TelaAtendente;
