import { Outlet } from 'react-router-dom';

import './App.css'
import Sidebar from './assets/components/Sidebar/Sidebar';

function App() {
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
