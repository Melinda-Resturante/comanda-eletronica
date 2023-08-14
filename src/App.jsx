import { Outlet } from 'react-router-dom';

import './App.css'
<<<<<<< HEAD
import Login from './components/Login/Login'
=======
import Sidebar from './assets/components/Sidebar/Sidebar';
>>>>>>> 7c3fe3b1eb1b4ee754ff3ef4b366635ffe310f57

function App() {
  return (
<<<<<<< HEAD
    <>
      <Login />
    </>
=======
    <div>
      <Sidebar />
      <section className="home-section">
        <div className="home-content">
          <Outlet/>
        </div>
      </section>
    </div>
>>>>>>> 7c3fe3b1eb1b4ee754ff3ef4b366635ffe310f57
  )
}

export default App
