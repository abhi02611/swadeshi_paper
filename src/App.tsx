import './App.css'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Home from './pages/Home/Home'
import NavBar from './component/NavBar/NavBar'
import Footer from './component/Footer/Footer'
import CarCollection from './pages/CardCollection/CarCollection'
import CardDetail from './pages/CardDetail/CardDetail'
import CheckOut from './pages/CheckOut/CheckOut'
import SignIn from './pages/Login/Login'
import SignUp from './pages/Reigister/Register'
import Login from './pages/Login/Login'
import Register from './pages/Reigister/Register'


const route = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/card',
    element: <CarCollection />
  },
  {
    path: '/detail',
    element: <CardDetail />
  },
  {
    path: '/checkout',
    element: <CheckOut />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
])

function App() {

  return (
    <>
      <NavBar />
      <RouterProvider router={route} />
      <Footer />
    </>
   
  )
}

export default App
