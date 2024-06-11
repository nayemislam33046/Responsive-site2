import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import { Mycontext } from './Home'
import App from './App'
ReactDOM.createRoot(document.getElementById('root')).render(
      <Mycontext>
          <App/>
      </Mycontext>
)
