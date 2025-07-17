import Navbar from './components/LeftNavbar';
import { Outlet } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
