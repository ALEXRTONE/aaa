
import { Button, TextInput } from "flowbite-react";
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";
import { useState, type FormEvent, type ChangeEvent } from "react";
import { login } from "../api/login.js";
import auth from '../utils/auth.js'

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
    fontWeight: 'bold',
    color: 'black'
  },
  h2: {
    fontWeight: 'bold',
    fontSize: '18pt'
  },
}

export function LoginForm() {

  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });    
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const res = await login(loginData)
      if (res.token) {
        localStorage.setItem('user',`${loginData.username}`)
        auth.saveLogin(res.token)
        localStorage.setItem('loggedin',`${auth.loggedIn()}`)
      }
    } catch (error) {
      console.error('Failed to login', error)
    }
  }

  return (
    <div style={style.card} className="max-w-md w-sm">
      <Link to={'/'}>
        <img className="cursor-pointer" src={logo} alt="idex logo" style={style.img} />
      </Link>
      <h2 style={style.h2} className="text-center text-black pb-8 pt-5">Iniciar sesión</h2>
      <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <TextInput style={style.input} onChange={handleChange} name="username" id="username" type="input" placeholder="Username" required />
        </div>
        <div>
          <TextInput style={style.input} onChange={handleChange} name="password" id="password" type="password" placeholder="Contraseña" required />
        </div>
        <div className="flex flex-wrap justify-around">
          <Button size="xl" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:bg-gradient-to-bl focus:ring-cyan-300 dark:focus:ring-cyan-800" type="submit" onSubmit={handleSubmit}>Entrar</Button>
          <Link to={'/signup'}>
            <Button size="xl" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:bg-gradient-to-bl focus:ring-cyan-300 dark:focus:ring-cyan-800" type='button'>Crear cuenta</Button>
          </Link>
        </div>
      </form>
    </div>
  );
}
