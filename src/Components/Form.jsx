import React, { useState } from "react";
import styles from './Form.module.css'

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [nombreUsuario, setNombreUsuario] = useState('')
  const [emailUsuario, setEmailUsuario] = useState('')
  const [datosErroneos, setDatosErroneos] = useState(false)
  const [datosCorrectos, setDatosCorrectos] = useState(false)
  console.log(datosErroneos);

  function handlerNombreUsuario (e) {
    setNombreUsuario(e.target.value);
    setEnviado(false);
}

function handlerEmailUsuario (e) {
    setEmailUsuario(e.target.value);
}

function handlerSubmit (e) {
    e.preventDefault();
    console.log("Se envio el formulario")
    const validaUsuario = validadorUsuario(nombreUsuario);
    const validaEmail = validadorEmail(emailUsuario);

    if(!validaUsuario || !validaEmail){
      setDatosErroneos(true)
      setDatosCorrectos(false)
    }else{
      setDatosErroneos(false)
      setDatosCorrectos(true)
    }

}


const validadorUsuario = (usuario) =>{
  const sinEspacios = usuario.trim();

  if(sinEspacios.length > 5){
    return true;
  }else{
    return false;
  }
}

const validadorEmail = (email) =>{
  const validacionEmail=  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  if(validacionEmail.test(email)){
    return true;
  }else{
    return false;
  }
}

  return (
    <div className={styles.form} >
      <form action="submit" className={styles.form}>
        <div className={styles.label}>
            <label htmlFor="nombreUsuario"><p>Ingresa tu nombre completo </p></label>
            <input type="text" name='nombreUsuario' onChange={handlerNombreUsuario}/>
        </div>
        <div className={styles.label}>
            <label htmlFor="emailUsuario" className={styles.label2}><p>Ingresa tu email </p>  </label>
            <input type="email" name='emailUsuario' onChange={handlerEmailUsuario}/>
        </div>
        <div>
            <button type='submit' onClick={handlerSubmit}>Enviar</button>
        </div>

      </form>
      <div>
            {datosErroneos && (<p>Por favor verifique su informacion nuevamente</p>)}
      </div>
      <div>
            {datosCorrectos && (<p>Gracias {nombreUsuario}, te contactaremos cuando antes vía mail</p>)}
      </div>

    </div>
  );
};

export default Form;
