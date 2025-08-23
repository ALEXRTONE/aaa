import LeftNavbar from "../components/LeftNavbar"
import Header from '../components/Header';

const style = {
    profile: {
        width: '100%',
        height: '100%',
        padding: '40px',
        background: 'rgb(237, 237, 237)',
        marginLeft: '222px',

    },
}

const UserProfile = () => {

    return (
        <div style={{height: '100%'}}> 
            <Header />
            <div style={{height: '100%'}} className="flex flex-row">
                <LeftNavbar />
                <div className="profileContainer" style={style.profile}>
                    <h2 style={{fontSize: '24px', fontWeight: '700'}}>Perfil de Usuario</h2>
                    <p><strong>Usuario:</strong> <span id="perfilUsuarioNombre">alex</span></p>
                    <p><strong>Correo:</strong> <span id="perfilUsuarioCorreo">alex_rt96@hotmail.com</span></p>
                    <p><strong>Contraseña:</strong> <span id="perfilUsuarioPassword">1234</span></p>
                    <p><strong>Tipo de cuenta:</strong> <span id="perfilUsuarioTipo">Con Suscripción</span></p>
                    <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Cancela membresía</button>

                </div>
            </div>
        </div>
    )
}

export default UserProfile