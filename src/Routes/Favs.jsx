import React, { useEffect, useState } from 'react'
import Card from "../Components/Card";
import styles from "./Home.module.css"
import styles2 from "../Components/Card.module.css"
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context



const Favs = () => {

  const [dentistasFav,setDentistasFav] = useState ([])
  const [renderizado,setRenderizado] = useState (false)

  useEffect(()=>{
    for (let id = 0; id < 100; id++) {
      const dent1 = JSON.parse(localStorage.getItem(id));
      if(dent1){
      setDentistasFav(oldArray => [...oldArray, dent1]);}
    }
    
    setRenderizado(true)  
    
        
    },[])



  return (

      <><h1>Dentistas Favoritos</h1><div className={styles.cardgrid}>
      {renderizado ? dentistasFav.map(
        dentista => (
          <div key={dentista.name} className={styles2.card}>
            <div className={styles2.content}>
              <img className={styles2.doctor} src="../public/images/doctor.jpg" alt="imagen de doctor" />
              <Link to={`/Detail/${dentista.id}`}><h2 className={styles2.h2}>{dentista.name}</h2></Link>
            </div>
          </div>
        ) ): <h1>No se pudo renderizar los dentistas</h1>}
    </div></>
          
          );
};

export default Favs;
