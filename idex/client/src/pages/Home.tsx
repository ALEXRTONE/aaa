import Header from '../components/Header';
import GraphInfo from '../components/home-component/GraphInfo';
import LeftNavbar from '../components/LeftNavbar';

// Usar << objectArray.filter( (object) => listOfPassKeys.includes( Object.keys( object )[0] ) ) >> para json original
// Usar << objectArray.filter( (object) => listOfPassKeys.includes( object.passKey ) ) >> para json modificado

const Home = () => {

    return (
    <>
        <Header />
        <div className='flex overflow-y-scroll w-screen h-screen bg-[#ededed] w-full'>
            <GraphInfo />
        </div>
    </>
    )
}

export default Home