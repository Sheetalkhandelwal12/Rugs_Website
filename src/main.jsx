import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <Auth0Provider
    domain="dev-udnik1stkqh6yraj.us.auth0.com"
    clientId="9cIWPabN1VTF47oPV9vjaHK0qTuZRjyM"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
)
