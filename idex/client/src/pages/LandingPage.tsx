import Header from '../components/Header'
import PriceCard from '../components/PriceCard'

const LandingPage = () => {
    const gratis = {
        plan: 'gratuito',
        precio: 0,
        meses: 6,
        filtros: 'básicos',
        acceso: 'limitado',
        soporte: false,
        link: '/signup'
    }
    const pro = {
        plan: 'profesional',
        precio: 99,
        meses: 12,
        filtros: 'avanzados',
        acceso: 'completo',
        soporte: true,
        link: 'https://buy.stripe.com/test_bJe4gBbiT8mc81d1AocAo02'
    }

    return (
        <>
        <Header />
        <div className='content-center h-screen bg-[#ededed]'>
            <p className='mt-1 pl-70 pr-70 mb-15 text-center'>
                IDEX es una plataforma avanzada de visualización de datos históricos que permite a empresas y profesionales acceder a información clave sobre precios y tendencias de commodities. Con análisis intuitivos y acceso sencillo a datos relevantes, IDEX ayuda a tomar decisiones informadas y estratégicas.
            </p>
            <div className='flex justify-center gap-20 w-screen'>
                <PriceCard {...gratis}  />
                <PriceCard {...pro}  />
            </div>
        </div>
        </>
    )
}

export default LandingPage