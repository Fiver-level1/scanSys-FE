import './App.css'
import Home from './Component/Home/Home'
import { Routes, Route } from "react-router-dom"
import Navbar from './Component/Navbar/Navbar'
import OrderCart from './Component/OrderCart/OrderCart'
import Sidebar from './Component/Sidebar/Sidebar'
import OrderNow from './Component/OrderNow/OrderNow'
import { CookiesProvider } from 'react-cookie';
import Help from './Component/Help/Help'

function App() {

  return (
    <>
      <CookiesProvider>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<OrderCart />} />
          <Route path="/orderNow" element={<OrderNow />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </CookiesProvider>
    </>
  )
}

export default App
