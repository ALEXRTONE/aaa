import LeftNavbar from '../components/LeftNavbar'
import Header from '../components/Header'
import GraphInfo from '../components/home-component/GraphInfo';

// Usar << objectArray.filter( (object) => listOfPassKeys.includes( Object.keys( object )[0] ) ) >> para json original
// Usar << objectArray.filter( (object) => listOfPassKeys.includes( object.passKey ) ) >> para json modificado

const style = {
    homeContainer: {
        height: '100%',
        width:'100%',
        background: '#ededed',
    }
}

const Home = () => {

    return (
        <>
            <Header />
            <div style={style.homeContainer} className='flex flex-row overflow-y-scroll'>
                <LeftNavbar />                    
                <GraphInfo />    
            </div>
        </>
    )
}

export default Home