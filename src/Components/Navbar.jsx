
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import { useContext } from 'react';
import { ModeContext } from '../Components/contexts/ModeContext';
import { Temas } from '../Components/contexts/ModeContext';
import React, { useEffect, useState } from 'react'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {tema,setTema} = useContext(ModeContext);

  const handleChangeTema =() =>{ tema === Temas.light ? setTema(Temas.dark) : setTema(Temas.light)  }


  return (
    <header className={styles.footer} style={{background:tema.backgroundNav,color:tema.font}}>
    <img className={styles.logo} src="../public/images/LogoClinicaDental.png" alt="logo png" />
    <nav className={styles.navbar} >
      <ul className={styles.links} >
        <li className={styles.li} id={styles.inicio}>
          <Link to="/" className={styles.a} style={{color:tema.font}}>Inicio</Link>
        </li>
        <li className={styles.li} id={styles.contacto}>
          <Link to="/contact" className={styles.a} style={{color:tema.font}}>Contacto</Link>
        </li>
        <li className={styles.li} id={styles.favoritos}>
          <Link to="/favs" className={styles.a} style={{color:tema.font}}>Favoritos</Link>
        </li>
      </ul>
      <button id={styles.boton} onClick={handleChangeTema}>Cambiar Tema</button>
    </nav>
  </header>
  )
}

export default Navbar