import { Navbar } from "../components/Navbar";
import { CarouselImages } from "../database/carouselImages";
import { Carousel } from "../components/Carousel";
import { useState } from "react";
import { Link } from "react-router-dom";
export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  let totalImage = CarouselImages.length;
  const handleLeftBtnClick = () => {
    if (currentSlide+1 === totalImage) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide+1)
    }
  }
  const handleRightBtnClick = () => {
    if (currentSlide === 0) {
      setCurrentSlide(totalImage-1);
    } else {
      setCurrentSlide(currentSlide-1)
    }
  }


  return (
    <>
      <Navbar />
      <div className="w-screen h-[80vh] flex justify-center items-center text-[8rem]">
        <div>
          <div>JOB PORTAL</div>
          <div className="text-[2rem] flex justify-center">
            <div className="bg-red-400 !p-2 rounded-lg hover:bg-red-500 cursor-pointer"><Link to="/jobs">BROWSE JOB</Link></div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-[2rem]">Featured JOBS</h1>
        <div className="carousel-container relative w-screen h-[20vh]">
          {
            CarouselImages.map(({src}, idx) => (
              <Carousel key={idx} idx={idx} imageURL={src} currentSlide={currentSlide}/>
            ))
          }

          <button className="btn left-btn cursor-pointer" onClick={handleLeftBtnClick}>&lt;</button>
          <button className="btn right-btn cursor-pointer" onClick={handleRightBtnClick}>&gt;</button>
        </div>
      </div>
    </>
  );
}


// import { useState } from "react";
// import "./App.css";
// import { Navbar } from "./components/Navbar";
// import { CarouselImages } from "./database/carouselImages";
// import { Carousel } from "./components/Carousel";

// function App() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const totalImages = CarouselImages.length;

//   const handleRightBtnClick = () => {
//     setCurrentSlide((prev) => (prev + 1) % totalImages);
//   };

//   const handleLeftBtnClick = () => {
//     setCurrentSlide((prev) => (prev - 1 + totalImages) % totalImages);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="w-screen h-[90vh] flex justify-center items-center text-[8rem]">
//         <div>
//           <div>JOB PORTAL</div>
//           <div className="text-[2rem] flex justify-center">
//             <div className="bg-red-400 p-2 rounded-lg hover:bg-red-500">BROWSE JOBS</div>
//           </div>
//         </div>
//       </div>

//       <div className="relative w-screen h-[12vh] overflow-hidden">
//         <h1 className="text-center text-3xl font-bold my-4">Featured JOBS</h1>

//         <div className="carousel-container flex transition-transform duration-500 ease-in-out">
//           {CarouselImages.map(({ src }, idx) => (
//             <Carousel key={src} imageURL={src} idx={idx} currentSlide={currentSlide}/>
//           ))}
//         </div>

//         <button className="btn left-btn absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded" onClick={handleLeftBtnClick}>
//           &lt;
//         </button>
//         <button className="btn right-btn absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded" onClick={handleRightBtnClick}>
//           &gt;
//         </button>
//       </div>
//     </>
//   );
// }

// export default App;
