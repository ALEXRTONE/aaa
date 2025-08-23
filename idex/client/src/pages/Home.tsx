import LeftNavbar from '../components/LeftNavbar'
import RightSidebar from '../components/RightSidebar'
import Header from '../components/Header'
import GraphInfo from '../components/GraphInfo';

// Usar << objectArray.filter( (object) => listOfPassKeys.includes( Object.keys( object )[0] ) ) >> para json original
// Usar << objectArray.filter( (object) => listOfPassKeys.includes( object.passKey ) ) >> para json modificado

const style = {
    homeContainer: {
        height: '100%',
        width:'100%',
        background: '#ededed',
    },
    home: {
        padding: '60px',
        height: '100vh',
        width: '60%',
        background: '#ededed',
        marginLeft: '222px',
    },
    h2: {
        marginBottom: '1.5rem',
        fontSize: '24px',
        fontWeight: '700'
    },
}

const Home = () => {

    return (
        <>
            <Header />
            <div style={style.homeContainer} className='flex flex-row overflow-y-scroll'>
                <LeftNavbar />
                <div style={style.home}>
                    <h2 style={style.h2}>Accesos a datos históricos</h2>
                    <GraphInfo />    
                </div>
                <RightSidebar />
            </div>
        </>
    )
}

export default Home