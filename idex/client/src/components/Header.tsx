import { Button, Navbar, NavbarBrand } from "flowbite-react";
import { Link } from "react-router-dom"
import logo from '../assets/logo.png';
import { useLocation } from "react-router-dom"


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
    const loc = useLocation()

    return (
    <div style={style.hdr} className="hdr flex flex-wrap sticky top-0 z-50 bg-white mt-3 pb-3">
        <Navbar style={style.navdiv} className="flex flex-wrap">
        <NavbarBrand className="flex flex-wrap ml-20 mr-140">
            <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo idex" />
            <h1 className="pt-1 self-center text-xl font-semibold text-dark">Datos que se transforman en poder</h1>
        </NavbarBrand>

        { (loc.pathname === '/home' || loc.pathname === '/costos' || loc.pathname === '/perfil') ? (
            <Link to='/'>
                <Button outline color='red'>Cerrar sesión</Button>
            </Link>
        ) : (
            <Link to='/login'>
                <Button outline color='blue'>Iniciar sesión</Button>
            </Link>
        )}

        </Navbar>
    </div>
    )
}

export default Header