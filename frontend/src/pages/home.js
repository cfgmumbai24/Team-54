import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import { useAuthContextNGO } from "../hooks/useAuthContextNGO";
import { useLogoutNGO } from "../hooks/useLogoutNGO";
import logo from "../pictures/OIP.jpeg"

const Home = () => {
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
    <>
      <header className="bg-teal-50 border-b-2 border-teal-400 shadow-md">
        <div className="container mx-auto p-4 md:flex md:items-center md:justify-between">
          <div className="flex justify-between items-center">
            <Link to="/">
              <div className="text-xl font-bold text-teal-600">
                {/* You can replace this with your logo */}
                <img src={logo} alt="Logo" className="h-8" />
              </div>
            </Link>
            <button
              className="text-gray-600 hover:text-teal-500 focus:outline-none md:hidden"
              onClick={() => {
                document.getElementById('navbarNav').classList.toggle('hidden');
              }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
          <nav
            id="navbarNav"
            className="flex-col md:flex-row flex md:flex items-center md:space-x-6 mt-4 md:mt-0 hidden md:flex"
          >
            {donor && (
              <>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-teal-500 transition duration-300"
                >
                  Home
                </Link>
                <Link
                  to="/classes"
                  className="text-gray-600 hover:text-teal-500 transition duration-300"
                >
                  School
                </Link>
                <Link
                  to="/dash"
                  className="text-gray-600 hover:text-teal-500 transition duration-300"
                >
                  Take Test
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
                <Link
                  to="/"
                  className="text-gray-600 hover:text-teal-500 transition duration-300"
                >
                  Home
                </Link>
                <Link
                  to="/all-schools"
                  className="text-gray-600 hover:text-teal-500 transition duration-300"
                >
                  School
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
                <Link
                  to="/"
                  className="text-gray-600 hover:text-teal-500 transition duration-300"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-teal-500 transition duration-300"
                >
                  About Us
                </Link>
                <Link
                  to="/contactUs"
                  className="text-gray-600 hover:text-teal-500 transition duration-300"
                >
                  Contact Us
                </Link>
                <Link
                  to="/loginNGO"
                  className="text-gray-600 hover:text-teal-500 transition duration-300"
                >
                  NGO Login
                </Link>
                <Link
                  to="/login"
                  className="mt-2 md:mt-0 bg-teal-400 text-white px-4 py-2 rounded hover:bg-teal-500 transition duration-300"
                >
                  School Login
                </Link>
              </>
            )}
          </nav>
        </div>
      </header>

      <div className="flex flex-col md:flex-row justify-between items-center md:p-20">
        <div className="w-full md:w-2/5 h-full p-10 md:p-40 flex justify-center items-center">
          <p className="text-4xl md:text-8xl text-center text-teal-700">Welcome to VOPA!</p>
        </div>
        {/* Image placeholder (commented out) */}
        {/* <img className="w-3/5 h-full" src="/path/to/your/image.png" alt="Description" /> */}
      </div>
    </>
  );
};

export default Home;
