import React from "react";
import Slider from "react-slick";
import UniversalNatureBackground from "./UniversalNatureBackground";

import logo1 from "/src/assets/sponsor/dulogo.png";
import logo2 from "/src/assets/sponsor/dueslogo.png";
import logo3 from "/src/assets/sponsor/moysbdlogo.png";
import logo4 from "/src/assets/sponsor/gffblogo.png";
import logo5 from "/src/assets/sponsor/unidologo.png";


const sponsors = [
  {
    name: "Dhaka University",
     logo: logo1,
    link: "https://www.du.ac.bd/",
  },
  {
    name: "Dhaka University Environment Society",
    logo: logo2,
    link: "https://www.facebook.com/dues2011/",
  },
  {
    name: "Ministry Of Youth & Sports, ",
    logo: logo3,
    link: "https://moysports.gov.bd/",
  },
  {
    name: "Green Future Foundation, Bangladesh",
    logo: logo4,
    link: "https://www.facebook.com/p/Green-Future-Foundation-Bangladesh-61568970126064/",
  },
  {
    name: "United Nations Industrial Development Organization",
    logo: logo5,
    link: "https://www.unido.org/",
  },
];

const SponsoredSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 8000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-screen-xl mx-auto px-4 text-center overflow-x-hidden">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
          Partnered With
        </h2>
        <Slider {...settings}>
          {sponsors.map((sponsor, index) => (
            <div key={index} className="px-4">
              <a
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-2 group"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-16 w-auto object-contain transition transform hover:scale-105"
                />
                <span className="text-gray-700 text-sm font-medium mt-2">
                  {sponsor.name}
                </span>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SponsoredSection;
