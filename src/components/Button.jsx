import { say  } from 'cowsay';
import { useState } from 'react';


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
    <div className='grid grid-cols-2 gap-4 p-10'>
      <h2 className=''>Boton de registrar</h2>
      <button className=" border-solid px-5 py-5 border-1 rounded-xl text-white hover:bg-green-800" onClick={handleButton}>Register</button>
    </div>
    <div className='grid grid-cols-3 gap-4'>
      <label>Ingresa un mensaje para imprimir en consola:</label>
      <input className='border-solid border-1 rounded-xl px-5 py-5'  value={message} onChange={e => setMessage(e.target.value)}></input>
      <button className=" border-solid px-5 py-5 border-1 rounded-xl text-white hover:bg-green-800" onClick={handleCowsay}>Ejecutar Cowsay</button>
    </div>
      
    </>
    
  )
}