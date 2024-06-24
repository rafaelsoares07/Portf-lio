import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Home from './pages/Home.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import NotFound from './pages/NotFound.tsx'
import "./App.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement:<NotFound/>
  },
  {
    path:"/about",
    element:<Home/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
