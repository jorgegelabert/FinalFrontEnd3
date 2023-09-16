import {Outlet} from "react-router-dom"
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import styles from "./App.module.css"
import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { ModeContext } from './Components/contexts/ModeContext';


function App() {

  const {tema,setTema} = useContext(ModeContext);

  return (
      <div className="App" style={{background:tema.backgroundHome,color:tema.font}}>
          <Navbar/>
          <Outlet/>
          <Footer/>        
      </div>
  );
}

export default App;
