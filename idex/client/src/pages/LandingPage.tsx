import Header from '../components/Header'
import PriceCard from '../components/PriceCard'

const LandingPage = () => {
    const pro = {
        plan: 'profesional',
        precio: 99,
        meses: 12,
        filtros: 'avanzados',
        acceso: 'completo',
        soporte: true,
        linkPro: 'https://buy.stripe.com/test_bJe4gBbiT8mc81d1AocAo02',
        linkGratis: '/signup',
}

    return (
        <div>
            <Header />
            <div className='content-center h-dvh bg-[#ededed]'>
                <p className='flex m-3 md:my-5 md:mx-40 text-center'>
                    IDEX es una plataforma avanzada de visualización de datos históricos que permite a empresas y profesionales acceder a información clave sobre precios y tendencias de commodities. Con análisis intuitivos y acceso sencillo a datos relevantes, IDEX ayuda a tomar decisiones informadas y estratégicas.
                </p>
                <div className='flex justify-center gap-20 w-screen mb-3'>
                    <PriceCard {...pro}  />
                </div>
            </div>
        </div>
    )
}

export default LandingPage