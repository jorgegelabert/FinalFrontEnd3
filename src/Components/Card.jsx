import React from "react";
import styles from "./Card.module.css"
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { ModeContext } from '../Components/contexts/ModeContext';


const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    localStorage.setItem(id, JSON.stringify({id,name,username}));
  }
  const {tema,setTema} = useContext(ModeContext);

  return (
    <div className={styles.card} style={{color:tema.font}}>
        <div className={styles.content}>
          <img className={styles.doctor} src="../public/images/doctor.jpg" alt="imagen de doctor" />
          <Link to={`/Detail/${id}`}><h2 className={styles.h2}>{name}</h2></Link>
        </div>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className={styles.favButton}>Agregar a Favoritos</button>
    </div>
  );
};

export default Card;
