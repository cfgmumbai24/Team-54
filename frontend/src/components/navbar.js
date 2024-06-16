import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import { useAuthContextNGO } from "../hooks/useAuthContextNGO";
import { useLogoutNGO } from "../hooks/useLogoutNGO";

const Navbar = () => {
  const { donor } = useAuthContext();
  const { logout } = useLogout();
  const { ngo } = useAuthContextNGO();
  const { logoutNGO } = useLogoutNGO();

  const handleClick = () => {
    logout();
  };

  const handleClickNGO = () => {
    logoutNGO();
  };

  return (
    <header className="relative">
      <div className="relative text-gray-600 font-bold bg-teal-50 h-14 flex flex-col md:flex-row items-center p-4 md:p-10 justify-between border-b-2 border-teal-400 shadow-md">
        <div className="relative flex items-center justify-center mb-4 md:mb-0">
          <Link to="/">
            <div className="w-2/5 h-1/3">
              {/* You can place your logo here */}
            </div>
          </Link>
        </div>
        <nav className="relative flex flex-col md:flex-row w-full md:w-1/2 justify-around items-center text-sm md:text-base">
          {donor && (
            <>
              <Link to="/" className="hover:text-teal-500 transition duration-300">
                <h1>Home</h1>
              </Link>
              <Link to="/classes" className="hover:text-teal-500 transition duration-300">
                <h1>School</h1>
              </Link>
              <Link to="/dash" className="hover:text-teal-500 transition duration-300">
                <h1>Take test</h1>
              </Link>
              <button
                onClick={handleClick}
                className="mt-2 md:mt-0 bg-teal-400 text-white px-4 py-2 rounded hover:bg-teal-500 transition duration-300"
              >
                Logout
              </button>
            </>
          )}

          {ngo && (
            <>
              <Link to="/" className="hover:text-teal-500 transition duration-300">
                <h1>Home</h1>
              </Link>
              <Link to="/all-schools" className="hover:text-teal-500 transition duration-300">
                <h1>School</h1>
              </Link>
              <button
                onClick={handleClickNGO}
                className="mt-2 md:mt-0 bg-teal-400 text-white px-4 py-2 rounded hover:bg-teal-500 transition duration-300"
              >
                Logout
              </button>
            </>
          )}

          {!donor && !ngo && (
            <>
              <Link to="/" className="hover:text-teal-500 transition duration-300">
                <h1>Home</h1>
              </Link>
              <Link to="/aboutus" className="hover:text-teal-500 transition duration-300">
                <h1>About us</h1>
              </Link>
              <Link to="/contactUs" className="hover:text-teal-500 transition duration-300">
                <h1>Contact Us</h1>
              </Link>
              <Link to="/loginNGO" className="hover:text-teal-500 transition duration-300">
                <h1>NGO Login</h1>
              </Link>
              <Link to="/login" className="mt-2 md:mt-0 bg-teal-400 text-white px-4 py-2 rounded hover:bg-teal-500 transition duration-300">
                <h1>School Login</h1>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
