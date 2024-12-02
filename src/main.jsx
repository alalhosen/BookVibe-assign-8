
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ListedBooks from './components/Home/ListedBooks.jsx'
import PagesToResd from './components/Home/PagesToResd.jsx'
import MainLayout from './layouts/MainLayout';
import Home from './components/Home/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/listedBooks',
        element: <ListedBooks />,
        loader:fetch('https://dev.to/api/articles?per_page=9&top=7')
      },
      {
        path: '/pagesToRead',
        element: <PagesToResd />
      }
    ]
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
