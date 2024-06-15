import homeDonate from "../pictures/homeDonate.png";
import Navbar from "../components/navbar";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex justify-between">
        <div className="w-2/5 h-full p-40 flex align-middle justify-center">
            <p className="text-8xl text-center text-teal-700">Welcome to VOPA!</p>
        </div>
        
        <img className="w-3/5 h-full" src={homeDonate}></img>
      </div>
    </>
  );
}

export default Home;
