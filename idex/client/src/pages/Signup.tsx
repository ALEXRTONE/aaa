import { Button, TextInput } from "flowbite-react";
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";

const style = {
  card: {
    padding: '2%',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
    borderRadius: '20px',
    background: 'white'
  },
  img: {
        padding: '10%'
    },
  input: {
    background: 'white',
    border: '1px solid rgb(204, 204, 204)',
    fontWeight: 'bold'
  },
  h2: {
    fontWeight: 'bold',
    fontSize: '18pt'
  },
}

const Signup = () => {

    return (
      <div className='login-container'>
      <div style={style.card} className="max-w-md w-sm">
      <Link to={'/'}>
        <img className="cursor-pointer" src={logo} alt="idex logo" style={style.img} />
      </Link> 
      <h2 style={style.h2} className="text-center text-black pb-8 pt-5">Crear cuenta</h2>
      <form className="flex max-w-md flex-col gap-4" >
        <div>
          <TextInput style={style.input} id="username" type="text" placeholder="Usuario" required />
        </div>
        <div>
          <TextInput style={style.input} id="email1" type="email" placeholder="Name@example.com" required />
        </div>
        <div>
          <TextInput style={style.input} id="password1" type="password" placeholder="Contraseña" required />
        </div>
        <div className="flex flex-wrap justify-around">
          <Link to={'/login'}>
            <Button size="xl" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:bg-gradient-to-bl focus:ring-cyan-300 dark:focus:ring-cyan-800" type='button'> ← Regresar</Button>
          </Link>
          <Button size="xl" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:bg-gradient-to-bl focus:ring-cyan-300 dark:focus:ring-cyan-800" type="submit">Continuar</Button>
        </div>
      </form>
    </div>
    </div>
    )
}

export default Signup