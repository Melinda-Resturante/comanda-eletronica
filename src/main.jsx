import React from 'react'
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
import Comandas from './assets/components/Comandas/Comandas.jsx';
import Aberto from './assets/components/Comandas/Aberto/Aberto.jsx';
import Convenio from './assets/components/Comandas/Convenio/Convenio.jsx';
import Pendente from './assets/components/Comandas/Pendente/Pendente.jsx';
import Finalizadas from './assets/components/Comandas/Finalizadas/Finalizadas.jsx';

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
        element: <Private> <TelaAtendente/> </Private>,
      },
      {
        path: "caixa",
        element: <TelaCaixa/> 
      },
      {
        path: "gerente",
        element: <TelaGerente /> 
      },
      {
        path: "estoquista",
        element: <TelaEstoquista/> 
      },
      {
        path: "funcionarios",
        element: <Funcionarios/> 
      },
      {
        path: "clientes",
        element:<TelaClientes/>
      },
      {
        path: "comandas",
        element: <Comandas />,
        children: [
          {
            path: 'aberto',
            element: <Aberto />
          },
          {
            path: 'convenio',
            element: <Convenio />
          },
          {
            path: 'pendente',
            element: <Pendente />
          },
          {
            path: 'finalizadas',
            element: <Finalizadas />
          }
        ]
      },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
