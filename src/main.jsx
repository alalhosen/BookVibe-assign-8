
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import ListedBooks from './components/Home/ListedBooks.jsx'
import PagesToResd from './components/Home/PagesToResd.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path:'/listedBooks',
    element:<ListedBooks/>,
  },
  {
    path:'/pagesToRead',
    element:<PagesToResd/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)
