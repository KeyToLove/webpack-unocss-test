import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.less'
import 'uno.css'

const App = () => {
    return <h1 className="title" c-amber text-center bg-skyblue >Hello Unocss</h1>
}
const root =  createRoot(document.getElementById('app'))

root.render(<App />)