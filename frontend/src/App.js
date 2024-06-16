import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import { useAuthContextNGO } from "./hooks/useAuthContextNGO";
import 'bootstrap/dist/css/bootstrap.min.css';

//pages
import Home from "./pages/home";
import Signup from "./pages/Donor/signup";
import Login from "./pages/Donor/login";
import SignupNGO from "./pages/NGO/signupNGO";
import LoginNGO from "./pages/NGO/loginNGO";
import Allcards from "./pages/allcards.js";
import SchoolDashboard from "./pages/SchoolDashboard.js";
import SchoolDashboardHistory from "./pages/SchoolDashboardHistory.js";

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
          <Route path="/all-schools" element={<Allcards/>}/>
          <Route path="/dash" element={<SchoolDashboard/>}/>
          <Route path="/dash1" element={<SchoolDashboardHistory/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
