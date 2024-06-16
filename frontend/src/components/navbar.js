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
      <div className="relative text-gray-600 text-l font-bold bg-teal-50 h-14 flex items-center p-10 justify-between border-b-2 border-teal-400 shadow-md">
        <div className="relative">
          <Link to="/">
            <div className="w-2/5 h-1/3">
              {/* You can place your logo here */}
            </div>
          </Link>
        </div>
        <nav className="relative flex w-1/2 justify-around items-center">
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
                className="bg-teal-400 text-white px-4 py-2 rounded hover:bg-teal-500 transition duration-300"
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
                className="bg-teal-400 text-white px-4 py-2 rounded hover:bg-teal-500 transition duration-300"
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
              <Link to="/about" className="hover:text-teal-500 transition duration-300">
                <h1>About</h1>
              </Link>
              <Link to="/contactUs" className="hover:text-teal-500 transition duration-300">
                <h1>Contact Us</h1>
              </Link>
              <Link to="/loginNGO" className="hover:text-teal-500 transition duration-300">
                <h1>NGO Login</h1>
              </Link>
              <Link to="/login" className="bg-teal-400 text-white px-4 py-2 rounded hover:bg-teal-500 transition duration-300">
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
