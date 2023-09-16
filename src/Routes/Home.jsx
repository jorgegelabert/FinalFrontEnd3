import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import styles from './Home.module.css'
import { useContext } from 'react';
import { ModeContext } from '../Components/contexts/ModeContext';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentistas,setDentistas] = useState ([])
  const [renderizado,setRenderizado] = useState (false)
  const {tema,setTema} = useContext(ModeContext);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response)=> response.json())
      .then((data)=>{
          setDentistas(data);
          setRenderizado(true);
      })
      .catch((error)=>{
        console.error("Error al obtener la informacion - ",error);
      })
        
    },[])


  return (
    <main className={styles.flex} style={{background:tema.backgroundHome,color:tema.font}}>
      <h1 className={styles.home}>Home</h1>
      <div className={styles.cardgrid}>
        {renderizado ? dentistas.map(
          dentista => (<Card key={dentista.id} name={dentista.name} username={dentista.username} id={dentista.id}></Card> )) : <h1>No se pudo renderizar los dentistas</h1>}
      </div>
    </main>
  )
}

export default Home