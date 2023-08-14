import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import TelaLogin from './assets/components/TelaLogin/Login.jsx';
import TelaAtendente from './assets/components/TelaAtendente/TelaAtendente.jsx';
import TelaCaixa from './assets/components/TelaCaixa/TelaCaixa.jsx';

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
        path: "atentende",
        element: <TelaAtendente/>
      },
      {
        path: "caixa",
        element: <TelaCaixa/>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
