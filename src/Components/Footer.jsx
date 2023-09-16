import React from 'react'
import styles from "./Footer.module.css"
import { useContext } from 'react';
import { ModeContext } from '../Components/contexts/ModeContext';

const Footer = () => {

const {tema,setTema} = useContext(ModeContext);

  return (
    <footer className={styles.footer} style={{background:tema.backgroundFoo,color:tema.font}}>
        <div className={styles.power}>
        <p>Powered by</p>
        <img src="../public/images/breakingbad.png" alt='logo BreakingBad' className={styles.img} />
        </div>
        <div className={styles.iconos}>
        <img className={styles.icono} src="../public/images/ico-whatsapp.png" alt='icono whatsapp' />
        <img className={styles.icono} src="../public/images/ico-facebook.png" alt='icono facebook' />
        <img className={styles.icono} src="../public/images/ico-instagram.png" alt='icono instagram' />
        <img className={styles.icono} src="../public/images/ico-tiktok.png" alt='icono tiktok' />
        </div>
    </footer>
  )
}

export default Footer
