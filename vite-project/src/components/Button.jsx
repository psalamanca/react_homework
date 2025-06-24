export function Button () {

  function handleClick () {
    console.log("Mi primer Boton")
    alert("Mi primer Boton")
  }

  return(
    <button className=" border-solid px-5 py-5 border-1 rounded-xl text-white hover:bg-green-800" onClick={handleClick}>Register</button>
  )
}