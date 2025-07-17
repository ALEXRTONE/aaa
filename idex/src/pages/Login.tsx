import logo from '../assets/logo.png'
const style = {
    login_container: { 
        alignItems: 'center',
        justifyContent: 'center',
        height: '50vh', 
        backgroundColor: 'transaprent' 
    },
    login_box: { 
        backgroundColor: '#fff',
        padding: '40px 60px',
        borderRadius: '20px',
        boxShadow: '0 4px 12px rgba(0, 240, 240, 0.1)',
        width: '300px'
    }
    
}

const Login = () => {


    return (
        <div className="login-container" id="login" style={style.login_container}>
        <div className="login-box" style={style.login_box}>
        <img alt="IDEX Logo" src={logo} style={{height: '60px', marginBottom: '20px'}}/>
        <h2>Iniciar sesión</h2>
        <input id="loginUser" placeholder="Usuario" type="text"/>
        <input id="loginPassword" placeholder="Contraseña" type="password"/>
        <button >Entrar</button>
        <button >Crear cuenta</button>
        <p id="error" style={{color: 'red', display: 'none'}}>Usuario o contraseña incorrectos</p>
        </div>
        </div>
    )
}

export default Login