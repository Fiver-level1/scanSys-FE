import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { AppProvider } from "./context/myContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="525120713593-7m1eno5nqhjlg799n75tkvvl7um023cd.apps.googleusercontent.com">
      <AuthProvider>
        <AppProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AppProvider>
      </AuthProvider>
    </GoogleOAuthProvider>
  </StrictMode>
);
