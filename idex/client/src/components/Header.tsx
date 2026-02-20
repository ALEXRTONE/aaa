import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useLocation } from "react-router-dom";
import auth from "../utils/auth.js";
import { useAuth } from "../utils/AuthProvider";

const Header = () => {
  const loc = useLocation();
  const navigate = useNavigate();
  const { isAuth, setIsAuth } = useAuth();

  const handleLogOut = () => {
    auth.logout();
    navigate("/", { replace: true });
    setIsAuth(false);
  };

  return (
    <div className="h-[10%] w-screen bkgWhite shadow-[0_1px_3px_rgba(0,0,0,0.1)] flex flex-wrap sticky top-0 z-50 pt-3 pb-3">
      <Navbar className="w-screen flex bkgWhite">
        <NavbarBrand className="bg-transparent flex flex-wrap pb-3">
          <Link to={"/"}>
            {" "}
            <img
              src={logo}
              className="mr-3 h-6 sm:h-9 hover:shadow"
              alt="Logo idex"
            />
          </Link>
          <h1 className="pt-1 self-center text-xl font-semibold text-dark flex flex-wrap">
            Datos que se transforman en poder
          </h1>
        </NavbarBrand>

        <NavbarToggle />
        {isAuth ? (

          <NavbarCollapse>

            <div className="flex flex-col md:items-center md:grid md:grid-cols-4 md:gap-4">

              <NavbarLink active={loc.pathname=='/perfil'}>
                <Link className={`hover:text-blue-500 text-${loc.pathname=='/perfil'?"white":"black"} md:text-black`} to={'/perfil'}>Perfil de usuario</Link>
              </NavbarLink>



              <NavbarLink active={loc.pathname=='/home'}>
                <Link className={`hover:text-blue-500 text-${loc.pathname=='/home'?"white":"black"} md:text-black`} to={'/home'}>Datos Históricos</Link>
              </NavbarLink>



              <NavbarLink active={loc.pathname=='/costos'}>
                <Link className={`hover:text-blue-500 text-${loc.pathname=='/costos'?"white":"black"} md:text-black`} to={"/costos"}>Estructura de Costos</Link>
              </NavbarLink>


              <Button className="mt-1" outline color="red" onClick={handleLogOut}>
                  Cerrar sesión
              </Button>
          </div>

          </NavbarCollapse>

        ) : (
          <NavbarCollapse>
            <Link to="/login" >
              <Button outline className="hover:bg-blue-500" color="blue">
                  Iniciar sesión
              </Button>
            </Link>
          </NavbarCollapse>
        )}
      </Navbar>
    </div>
  );
};

export default Header;
