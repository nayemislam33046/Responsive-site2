import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { MyContext } from './Context/context'


ReactDOM.createRoot(document.getElementById('root')).render(
<MyContext>
<App/>
</MyContext>
)