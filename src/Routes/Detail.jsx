import {useParams,useNavigate} from "react-router-dom"
import React, { useEffect, useState } from 'react'
import styles from './Detail.module.css'
import { useContext } from 'react';
import { ModeContext } from '../Components/contexts/ModeContext';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const dentId = useParams();
  
  const {tema,setTema} = useContext(ModeContext);
  const [dentistas,setDentistas] = useState ([])
  const name = dentistas.name;
  const email = dentistas.email;
  const phone = dentistas.phone;
  const website = dentistas.website;
  const [renderizado,setRenderizado] = useState (false)
  const url= 'https://jsonplaceholder.typicode.com/users/'+dentId.dentId;


useEffect(()=>{
    fetch(url)
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
    <div className={styles.datos} style={{background:tema.backgroundHome,color:tema.font}}>
      <h1 className={styles.h1}>Datos del dentista</h1>
      <table >
        <tr>
          <th scope={styles.col}>Nombre</th>
          <th scope={styles.col}>Mail</th>
          <th scope={styles.col}>Telefono</th>
          <th scope={styles.col}>Sitio Web</th>
        </tr>
        {renderizado ? 
            <tr style={{background:tema.backgroundHome,color:tema.font}}>
              <td>{name}</td>
              <td>{email}</td>
              <td>{phone}</td>
              <td>{website}</td>
          </tr> : <p>No se encontraron datos del dentista</p>}
        </table>
    </div>
  )
}

export default Detail