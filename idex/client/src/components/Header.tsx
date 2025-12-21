import { Button, Navbar, NavbarBrand } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom"
import logo from '../assets/logo.png';
import { useLocation } from "react-router-dom"
import auth from '../utils/auth.js'
import { useAuth } from "../utils/AuthProvider";


const style = {
    hdr: {
        height: '10%',
        width: '100%',
        justifyContent: 'space-between',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    },
    navdiv: {
        background: 'transparent',
        width: '100%'
    },
}

const Header = () => {
    const loc = useLocation();
    const navigate = useNavigate();
    const { isAuth, setIsAuth } = useAuth();
    

    const handleLogOut = () => {
        auth.logout();
        navigate("/", {replace: true});
        setIsAuth(false);
    }

    return (
    <div style={style.hdr} className="hdr flex flex-wrap sticky top-0 z-50 bg-white pt-3 pb-3">
        <Navbar style={style.navdiv} className="flex">
            {/* ml-20 mr-140 */}
        <NavbarBrand className="flex flex-wrap ">
            <Link to={'/'}> <img src={logo} className="mr-3 h-6 sm:h-9 hover:shadow" alt="Logo idex" /> </Link>
            <h1 className="pt-1 self-center text-xl font-semibold text-dark">Datos que se transforman en poder</h1>
        </NavbarBrand>

        { (loc.pathname === '/home' || loc.pathname === '/costos' || loc.pathname === '/perfil' && isAuth) ? (
            <Link to='/'>
                <Button outline color='red' onClick={handleLogOut}>Cerrar sesión</Button>
            </Link>
        ) : (
            <Link to='/login'>
                <Button outline className="hover:bg-blue-500" color='blue'>Iniciar sesión</Button>
            </Link>
        )}

        </Navbar>
    </div>
    )
}

export default Header