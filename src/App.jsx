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
import OrderHistory from './Component/OrderHistory/OrderHistory'
import PaymentSucess from './Component/PaymentStatus/PaymentSucess'
import PaymentFailed from './Component/PaymentStatus/PaymentFailed'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './context/AuthContext'
import ProtectedRoute from './Component/ProtectionRoute/ProtectedRoute'
import PageNotFound from './Component/PageNotFound/PageNotFound'
function App() {
  const navigate = useNavigate();
  const { isLogin } = useContext(AuthContext);
  useEffect(() => {
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const success = params.get('success');
    const failed = params.get("canceled");
    const sessionId = params.get('session_id');
    if (failed) {
      navigate('/payment-fail')
    }
    if (success) {
      navigate('/payment-successful', { state: { sessionId } });
    }
  }, []);


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
          <Route path="/termsAndCondition" element={<TermsAndCondition contðent={termsAndConditions} heading="Terms and Conditions" />} />
          <Route element={<ProtectedRoute isLoggedIn={isLogin} />}>
            <Route path="/orderHistory" element={<OrderHistory />} />
            <Route path="/payment-successful" element={<PaymentSucess />} />
            <Route path="/payment-fail" element={<PaymentFailed />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </CookiesProvider>
    </>
  )
}

export default App
