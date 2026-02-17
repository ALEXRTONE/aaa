import { Card } from "flowbite-react";
import Header from '../components/Header';
import { useEffect, useState } from "react";
import { apiUser } from "../api/apiUsers";
import type { User } from "../interfaces/Users";
import Baner from '../assets/banerPerfil.png';



const style = {
    profile: {
        width: '100%',
        height: '100%',
        padding: '40px',
        background: 'rgb(237, 237, 237)',
    },
}

const UserProfile = () => {
    const [user, setUser] = useState<User>({ id: 0, username: 'loading...', email: 'loading...', membresia: 'loading...' })
    
    useEffect(() => {
        const userName_ = localStorage.getItem('user') || '';
        const fetcUser = async () => {
            if (userName_) {
                const user_ = await apiUser(userName_);
                if (user_) {
                    setUser(user_)
                }
            }     
        };

        fetcUser()
    },[])

    return (
        <div className="" > 
            <Header />
            <div className="flex flex-row h-screen">
                <div className="profileContainer flex justify-center" style={style.profile}>
                    
                    <Card className="cardPerfil max-w-md text-center align-center border-0 rounded-xl overflow-y-scroll" renderImage={() => <img className="rounded-t-xl" width={500} height={500} src={Baner} alt="cover photo" />}>
                        <h5 className="text-3xl font-bold tracking-tight text-black">
                        Perfil de Usuario
                        </h5>
                        <p className="text-lg font-normal text-black" ><strong>Usuario:</strong> <span id="perfilUsuarioNombre">{user.username}</span></p>
                        <p className="text-lg font-normal text-black" ><strong>Correo:</strong> <span id="perfilUsuarioCorreo">{user.email}</span></p>
                        <p className="text-lg font-normal text-black" ><strong>Tipo de cuenta:</strong> <span id="perfilUsuarioTipo">{user.membresia.toUpperCase()}</span></p>

                    { user.membresia.toUpperCase() === 'PRO' ?
                        <button type="button" className="text-lg focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Cancela membresía</button>
                        : 
                        <a href="https://buy.stripe.com/test_bJe4gBbiT8mc81d1AocAo02" target="_blank" rel="noopener noreferrer"><button type="button" className="text-lg focus:outline-none text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-600">Activar membresía</button></a>
                    }
                    </Card>

                </div>
            </div>
        </div>
    )
}

export default UserProfile