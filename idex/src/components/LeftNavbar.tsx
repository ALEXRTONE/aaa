import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"


const LeftNavbar = () => {
    const loc = useLocation()

    return (
        <div className="sidebar-nav">
            <Link to={'/perfil'}>
            <button style={loc.pathname == '/perfil' ? {background: '#0071e3', color: 'white'} : {}}>👤 Perfil de usuario</button>
            </Link>
            <Link to={'/home'}>
            <button style={loc.pathname == '/home' ? {background: '#0071e3', color: 'white'} : {}}>📊 Datos Históricos</button>
            </Link>
            <Link to={'/costos'}>
            <button style={loc.pathname == '/costos' ? {background: '#0071e3', color: 'white'} : {}}>📈 Estructura de Costos</button>
            </Link>
        </div>

    )
}

export default LeftNavbar