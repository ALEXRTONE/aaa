import Header from '../components/Header'

const style = {
    landing: { 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
     },

     landing2: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.9)',
        padding: '60px',
        borderRadius: '16px',
        maxWidth: '1000px,'
    },
    landing3: {
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        padding: '30px',
        width: '300px',
        textAlign: 'center',
    },
    landing4: {
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        padding: '30px',
        width: '300px', 
        textAlign: 'center'
    }
}

const LandingPage = () => {

    return (
        <div style={{background: '#ededed', height: '100%'}}>
            <Header />
            <p style={{textAlign: 'center'}} className='mt-5 pl-70 pr-70 mb-15'>
                IDEX es una plataforma avanzada de visualización de datos históricos que permite a empresas y profesionales acceder a información clave sobre precios y tendencias de commodities. Con análisis intuitivos y acceso sencillo a datos relevantes, IDEX ayuda a tomar decisiones informadas y estratégicas.
            </p>
            <div>
                <div className="landing" id="landing" style={style.landing}>
                <div className='flex flex-wrap gap-40' style={style.landing2}>
                    <div style={style.landing3}>
                    <h2>Plan Gratuito</h2>
                    <p style={{fontSize: '14px', color: '#555'}}>Accede a:</p>
                    <ul style={{textAlign: 'left', paddingLeft: '20px', fontSize: '14px'}}>
                        <li>6 meses de datos históricos</li>
                        <li>Filtros básicos por commodity</li>
                        <li>Acceso limitado a gráficas</li>
                    </ul>
                    <p style={{fontSize: '18px', fontWeight: 'bold'}}>$0 MXN</p>
                    <button>Iniciar Sesión</button>
                    </div>
                    <div style={style.landing4}>
                    <h2>Plan Pro</h2>
                    <p style={{fontSize: '14px', color: '#555'}}>Incluye todo el contenido del plan gratuito más:</p>
                    <ul style={{textAlign: 'left', paddingLeft: '20px', fontSize: '14px'}}>
                        <li>12 meses de datos históricos</li>
                        <li>Filtros avanzados y personalizados</li>
                        <li>Acceso completo a gráficas</li>
                        <li>Soporte prioritario</li>
                    </ul>
                    <p style={{fontSize: '18px', fontWeight: 'bold'}}>$99 MXN / mes</p>
                    <button color='blue' >Suscribirme</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage