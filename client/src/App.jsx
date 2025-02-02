import "./App.css";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="w-screen h-[90vh] flex justify-center items-center text-[8rem]">
        <div>
          <div>JOB PORTAL</div>
          <div className="text-[2rem] flex justify-center">
            <div className="bg-red-400 p-2 rounded-lg hover:bg-red-500">BROWSE JOBS</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
