import { Button } from "flowbite-react"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"


const LeftNavbar = () => {
    const loc = useLocation()
    const vis = loc.pathname != '/' ? 'flex' : 'none'

    return (

        <div style={{display: vis}} className="sidebar-nav flex flex-wrap gap-3">
            <Link to={'/perfil'}>
            <Button style={loc.pathname == '/perfil' ? {background: '#0071e3', color: 'white'} : {}}>👤 Perfil de usuario</Button>
            </Link>
            <Link to={'/home'}>
            <Button style={loc.pathname == '/home' ? {background: '#0071e3', color: 'white'} : {}}>📊 Datos Históricos</Button>
            </Link>
            <Link to={'/costos'}>
            <Button style={loc.pathname == '/costos' ? {background: '#0071e3', color: 'white'} : {}}>📈 Estructura de Costos</Button>
            </Link>
        </div>


    )
}

export default LeftNavbar