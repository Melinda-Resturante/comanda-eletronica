import { Outlet } from 'react-router-dom';

import './App.css'
import Sidebar from './assets/components/Sidebar/Sidebar';
import authLoginStore from './store/Auth';
import { useEffect } from 'react';

function App() {

  const { initialize } = authLoginStore()

useEffect(() => {
  initialize()
  console.log('inicializado com sucesso')
}, [])

  return (
    <div>
      <Sidebar />
      <section className="home-section">
          <Outlet/>    
      </section>
    </div>
  )
}

export default App
