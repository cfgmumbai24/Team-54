import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import { useAuthContextNGO } from "./hooks/useAuthContextNGO";

//pages
import Home from "./pages/home";
import Signup from "./pages/Donor/signup";
import Login from "./pages/Donor/login";
import SignupNGO from "./pages/NGO/signupNGO";
import LoginNGO from "./pages/NGO/loginNGO";

function App() {
  const {donor} = useAuthContext()
  const {ngo} = useAuthContextNGO()

  return (
    <div className="bg-teal-50 h-screen">
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={!donor ? <Signup/> : <Navigate to="/" /> }/>
          <Route path="/login" element={!donor ? <Login/> : <Navigate to="/" />}/>
          <Route path="/signupNGO" element={!ngo ? <SignupNGO/> : <Navigate to="/" /> }/>
          <Route path="/loginNGO" element={!ngo ? <LoginNGO/> : <Navigate to="/" />}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
