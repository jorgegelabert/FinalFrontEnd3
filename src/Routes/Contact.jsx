import React from 'react'
import Form from '../Components/Form'
import styles from './Contact.module.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h2>¿Quiere saber mas?</h2>
      <p >Envíanos tus preguntas y nos pondremos en contacto contigo</p>
      <Form/>
    </div>
  )
}

export default Contact