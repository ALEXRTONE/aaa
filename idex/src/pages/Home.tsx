import LeftNavbar from '../components/LeftNavbar'
import RightSidebar from '../components/RightSidebar'
import Header from '../components/Header'

const style = {
    homeContainer: {
        height: '100%',
        width:'100%',
    },
    home: {
        border: '1px solid green',
        height: '100vh',
        width: '60%',
        background: '#ededed',
        alignContent: 'center',
    },
    h2: {
        padding: '40px',
        border: '1px solid red',
        fontSize: '24px',
        fontWeight: '700'
    },
}

const Home = () => {

    return (
        <>
            <Header />
            <div style={style.homeContainer} className='flex flex-row'>
                <LeftNavbar />
                <div style={style.home}>
                    <h2 style={style.h2}>Accesos a datos históricos</h2>
                </div>
                <RightSidebar />
            </div>
        </>
    )
}

export default Home