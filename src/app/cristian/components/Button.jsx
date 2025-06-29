'use client'
import { say  } from 'cowsay-browser';
import { useState } from 'react';
import styles from './button.module.css';


export function Button () {
  const [message, setMessage ] = useState('')

  function handleButton () {
    alert("Mi primer Boton")
  }

  function handleCowsay () {
    //console.log(message)
    console.log(say({ text: message }));
    alert('Revisa la consola')
  }

  return(
    <>
    <h1 className={styles.title}>Cristian Lopez</h1>
    <div className={styles.exercise}>
      <h2 className={styles.h2}>Mi primer Boton</h2>
      <button className={styles.button} onClick={handleButton}>Register</button>
    </div>
    <div className={styles.exercise}>
      <h2 className={styles.h2}>Libreria Cowsay</h2>
      <label className={styles.label}>Ingresa un mensaje para imprimir en consola:</label>
      <input className={styles.input} value={message} onChange={e => setMessage(e.target.value)}></input>
      <button className={styles.button} onClick={handleCowsay}>Ejecutar Cowsay</button>
    </div>
      
    </>
    
  )
}