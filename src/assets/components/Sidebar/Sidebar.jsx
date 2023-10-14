import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import "./Sidebar.css";

import LogoIMG from "../../images/nome melinda.png";
import authLoginStore from '../../../store/Auth';
import { useDecryptUser } from '../../../security/userDecrypt';

function Sidebar() {

  const { logout } = authLoginStore()
  const { decryptUser } = useDecryptUser()
  const navigate = useNavigate()

  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 512);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSubMenuClick = (e) => {
    const arrowParent = e.currentTarget.parentElement.parentElement;
    arrowParent.classList.toggle('showMenu');
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth > 512);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`sidebar ${isSidebarOpen ? '' : 'close'}`}>
      <div className="menu" onClick={toggleSidebar}>
        <i className='bx bx-menu'></i>
      </div>
    <div className="logo">
      <img className="logo_img" src={LogoIMG}></img>
    </div>
    <ul className="nav-links">
      <li>
        <a href="/">
          <i className='bx bx-grid-alt' ></i>
          <span className="link_name">Inicio</span>
        </a>
        <ul className='sub-menu blank'>
          <li><a className='link_name' href="#">Inicio</a></li>
        </ul>
      </li>

      <li>
        <div className="iocn-link">
          <a href="#">
          <i className='bx bxs-book-content'></i>
            <span className="link_name">Comandas</span>
          </a>
          <i className={`bx bxs-chevron-down arrow ${isSidebarOpen ? 'showMenu' : ''}`} onClick={handleSubMenuClick}></i>
        </div>
        <ul className='sub-menu'>
          <li><a className='link_name' href="#">Comandas</a></li>
          <li><a href="#">Pendente</a></li>
          <li><a href="#">Em aberto</a></li>
          <li><a href="#">Finalizadas</a></li>
          <li><a href="#">Convênio</a></li>
        </ul>
      </li>

      <li>
        <a href="#">
        <i className='bx bxs-food-menu'></i>
          <span className="link_name">Delivery</span>
        </a>
        <ul className='sub-menu blank'>
          <li><a className='link_name' href="#">Delivery</a></li>
        </ul>
      </li>

      <li>
        <a href="/clientes">
        <i className='bx bx-user'></i>
          <span className="link_name">Clientes</span>
        </a>
        <ul className='sub-menu blank'>
          <li><a className='link_name' href="#">Clientes</a></li>
        </ul>
      </li>

      <li>
        <a href="#">
        <i className='bx bx-money'></i>
          <span className="link_name">Financeiro</span>
        </a>
        <ul className='sub-menu blank'>
          <li><a className='link_name' href="#">Financeiro</a></li>
        </ul>
      </li>

      <li>
        <Link to="/estoquista">
        <i className='bx bx-box'></i>
          <span className="link_name">Estoque</span>
        </Link>
        <ul className='sub-menu blank'>
          <li><a className='link_name' href="#">Estoque</a></li>
        </ul>
      </li>

      <li>
        <Link to="/funcionarios">
        <i className='bx bxs-user-pin'></i>
          <span className="link_name">Funcionários</span>
        </Link>
        <ul className='sub-menu blank'>
          <li><a className='link_name' href="#">Funcionários</a></li>
        </ul>
      </li>

      <li>
        <div className="profile-details">
          <div className="profile-content">
          <i className='bx bxs-user-circle'></i>
          </div>
          <div className="name-job">
            <div className="profile_name">{decryptUser?.nome}</div>
            <div className="job">{decryptUser?.cargo}</div>
          </div>
          <i className='bx bx-log-out' onClick={() => logout(navigate)}></i>
        </div>
      </li>
    </ul>
  </div>
  )
}

export default Sidebar;