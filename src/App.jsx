import './App.css'
import Home from './Component/Home/Home'
import { Routes, Route } from "react-router-dom"
import Navbar from './Component/Navbar/Navbar'
import OrderCart from './Component/OrderCart/OrderCart'
import Sidebar from './Component/Sidebar/Sidebar'
import OrderNow from './Component/OrderNow/OrderNow'
import { CookiesProvider } from 'react-cookie';
import Help from './Component/Help/Help'
import TermsAndCondition from './Component/TermsAndCondition/TermsAndCondition'
import { termsAndConditions } from './content/termsAndCondition'
import { privacyPolicy } from './content/privacyAndPolicy'
import ClickBoundary from './Component/onBlur/ClickBoundary'
import { AppContext, AppDispatchContext } from './context/myContext'
import { useContext } from 'react'
import OrderHistory from './Component/OrderHistory/OrderHistory'

function App() {

  const { sidebarRef } = useContext(AppContext);
  const { setShowPopup } = useContext(AppDispatchContext);

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
          <Route path="/termsAndCondition" element={<TermsAndCondition content={termsAndConditions} heading="Terms and Conditions" />} />
          <Route path='/privacyPolicy' element={<TermsAndCondition content={privacyPolicy} heading="Privacy Policy" />} />
          <Route path='/orderHistory' element={<OrderHistory/>} />
        </Routes>
      </CookiesProvider>
    </>
  )
}

export default App
