import { Button, TextInput } from "flowbite-react";
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { type UserSignup } from "../interfaces/Users.js";
import { apiSignup } from '../api/apiSignup.js';

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
    color: 'black',
    border: '1px solid rgb(204, 204, 204)',
    fontWeight: 'bold'
  },
  h2: {
    fontWeight: 'bold',
    fontSize: '18pt'
  },
}

const Signup = () => {

  const [signupData, setSignup] = useState<UserSignup>({
    username: '',
    password: '',
    email: ''
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignup({
      ...signupData,
      [name]: value
    });
  }

  const handleSignup = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await apiSignup(signupData);
      window.location.assign('/login')
    } catch (error: any) {
      console.error('Failed to Signup', error);
    }
  }

    return (
      <div className='login-container'>
      <div style={style.card} className="max-w-md w-sm">
      <Link to={'/'}>
        <img className="cursor-pointer" src={logo} alt="idex logo" style={style.img} />
      </Link> 
      <h2 style={style.h2} className="text-center text-black pb-8 pt-5">Crear cuenta</h2>
      <form onSubmit={handleSignup} className="flex max-w-md flex-col gap-4" >
        <div>
          <TextInput onChange={handleChange} name="username" style={style.input} id="username" type="text" placeholder="Usuario" required />
        </div>
        <div>
          <TextInput onChange={handleChange} name="email" style={style.input} id="email" type="email" placeholder="Name@example.com" required />
        </div>
        <div>
          <TextInput onChange={handleChange} name="password" style={style.input} id="password" type="password" placeholder="Contraseña" required />
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