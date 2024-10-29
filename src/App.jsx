import './App.css'
import Home from './Component/Home/Home'
import { Routes, Route } from "react-router-dom"
import Navbar from './Component/Navbar/Navbar'
import OrderCart from './Component/OrderCart/OrderCart'
import Sidebar from './Component/Sidebar/Sidebar'
import { CookiesProvider } from 'react-cookie';

function App() {

  return (
    <>
      <CookiesProvider>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<OrderCart />} />
        </Routes>
      </CookiesProvider>
    </>
  )
}

export default App
