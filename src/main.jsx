import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AppKitProvider } from './AppKitProvider' // Import your AppKit provider

// Render the app
ReactDOM.createRoot(document.getElementById('root')).render(
    <AppKitProvider>
      <App />
    </AppKitProvider>
)
