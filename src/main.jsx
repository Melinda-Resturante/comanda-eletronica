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

import ErrorPage from './assets/routes/ErrorPage/ErrorPage.jsx';

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
        element: <TelaAtendente/>
      },
      {
        path: "caixa",
        element: <TelaCaixa/>
      },
      {
        path: "gerente",
        element: <TelaGerente/>
      },
      {
        path: "estoquista",
        element: <TelaEstoquista/>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
