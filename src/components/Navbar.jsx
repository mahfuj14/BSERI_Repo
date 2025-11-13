import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {Link} from "react-router-dom"
import {ReactTyped} from "react-typed";
import NavbarMenus from "./NavbarMenus"; // adjust the path if needed


// ✅ Import all images from src/assets
import scene1 from "../assets/beautiful-japanese-forest-scene1.jpg";
import scene2 from "../assets/beautiful-japanese-forest-scene2.jpg";
import scene3 from "../assets/beautiful-japanese-forest-scene3.jpg";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // ✅ Background images array
  const images = [scene1, scene2, scene3];

  const handleNav = () => {
    setShowNav(!showNav);
  };

  // Auto background slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // change image every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Slider */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${img})`,
          }}
        ></div>
      ))}

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Navbar */}
      <NavbarMenus showNav={showNav} handleNav={handleNav} />

      {/* Hero Section */}
      <div className="relative text-white z-10">
        <div className="max-w-screen-md w-full h-[calc(100vh-96px)] mx-auto text-center flex flex-col justify-center px-4">
          <div className="flex justify-center items-center">
            <p className="md:text-4xl sm:text-3xl text-xl font-bold py-2 whitespace-nowrap">
              <span className="text-yellow-400">Bangladesh</span> Society for <span className="text-yellow-400"> Ecological Research</span> Initiative
            </p>
            <ReactTyped
              className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-caribbean-green"
              strings={["BSERI", "BSERI", "BSERI"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </div>
          <p className="md:text-2xl text-xl font-bold text-gray-300">
            Registered Office: 4/A-B(Room no 305), 4th Floor, Baitul Kayer, Puran Palton, Dhaka-1000
          </p>
          <button className="bg-caribbean-green w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-white hover:text-caribbean-green transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
