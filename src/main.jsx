import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Routes/Home.jsx'
import Contact from './Routes/Contact.jsx'
import Detail from './Routes/Detail.jsx'
import Favs from './Routes/Favs.jsx'
import NoPage from './Routes/NoPage.jsx'
import { ModeContextProvider } from './Components/contexts/ModeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ModeContextProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route index element={<Home/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="detail/:dentId" element={<Detail/>}/>
        <Route path="favs" element={<Favs/>}/>
        <Route path="*" element={<NoPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </ModeContextProvider>
)
