import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import TelaLogin from './assets/components/TelaLogin/Login.jsx';
import TelaAtendente from './assets/components/TelaAtendente/TelaAtendente.jsx';
import TelaCaixa from './assets/components/TelaCaixa/TelaCaixa.jsx';
import TelaGerente from './assets/components/TelaGerente/TelaGerente.jsx';
import TelaEstoquista from './assets/components/TelaEstoquista/TelaEstoquista.jsx';
import Funcionarios from './assets/routes/Funcionarios/Funcionarios.jsx';
import TelaClientes from './assets/components/TelaClientes/TelaClientes.jsx';
import ErrorPage from './assets/routes/ErrorPage/ErrorPage.jsx';
import Private from './assets/routes/PrivateRoutes/Private.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <TelaLogin/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "atendente",
        element: <Private> <TelaAtendente/> </Private>  
      },
      {
        path: "caixa",
        element: <Private> <TelaCaixa/> </Private>
      },
      {
        path: "gerente",
        element: <Private> <TelaGerente /> </Private>
      },
      {
        path: "estoquista",
        element: <Private> <TelaEstoquista/> </Private>
      },
      {
        path: "funcionarios",
        element: <Private> <Funcionarios/> </Private>
      },
      {
        path: "clientes",
        element: <TelaClientes/>
      },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
