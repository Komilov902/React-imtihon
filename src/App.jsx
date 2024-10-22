import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import NavbarLay from './navbarLayout/NavbarLay'

import Home from './pages/Home';
import About from './pages/About';
import Info from './pages/Info';

import Cursor from './cursor/Cursor';
import PageOne from './page1/PageOne';
import Navbar from './Nav/Navbar';
import Telegram from './telegram/Telegram';
import Itabout from './ItAbout/Itabout';

import Notfound from './404/NotFound';
import Galery from './Galery/Galery';
  



function App() {
  const routes = createBrowserRouter([
    {
      path:'/',
      element: <NavbarLay/>,
      children: [
        {
          path: '/',
          element: [
            <>
              <Navbar/>
              <PageOne/>
              <Cursor/>
              <Telegram/>
              <Itabout/>
            </>
          ]
        },
        {
          path: '/home',
          element: <Home/>
        },
        {
          path: '/about',
          element: <About/>
        },
        {
          path: '/info',
          element: <Info/>
        },
        {
          path: '*',
          element: <Notfound/>
        },
        {
          path: '/galery',
          element: <Galery/>
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App
