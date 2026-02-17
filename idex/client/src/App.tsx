import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/wraper/ProtectedRoutes";
import { CombinedProviders } from "./utils/CombinedProvider";
import { RedirectionRoute } from "./components/wraper/RedirectionRoute";
import LandingPage from './pages/LandingPage'
import Login from './pages/Login';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import Signup from './pages/Signup';
import Costos from './pages/Costos'


const App = () => {
  return (
    <CombinedProviders>
      <BrowserRouter>
        {/* páginas */}
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route
            path="/login"
            element={
              <RedirectionRoute>
                <Login />
              </RedirectionRoute>
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/perfil"
            element={
              <ProtectedRoute>
                <UserProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <RedirectionRoute>
                <Signup />
              </RedirectionRoute>
            }
          />
          <Route
            path="/costos"
            element={
              <ProtectedRoute>
                <Costos />
              </ProtectedRoute>
            }
          />
          <Route path="/404" element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </CombinedProviders>
  );
};

export default  App