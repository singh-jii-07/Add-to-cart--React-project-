
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar';
import ProductListPages from './Pages/ProductListPages';
import CartPages from './Pages/CartPages'


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <div>
          <Navbar />
          <ProductListPages />
        </div>
      )
      
    },
    {
      path: '/cart',
      element: (
        <div>
          <Navbar />
          <CartPages/>
        </div>
      )
    }
  ]);

  return (
    <>

   <RouterProvider router={router} />
    </>
  )
}

export default App
