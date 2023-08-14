import { Outlet } from 'react-router-dom';

import './App.css'
import Sidebar from './assets/components/Sidebar/Sidebar';

function App() {
  return (
    <div>
      <Sidebar />
      <section className="home-section">
        <div className="home-content">
          <Outlet/>
        </div>
      </section>
    </div>
  )
}

export default App
