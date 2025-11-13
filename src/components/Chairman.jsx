import React from "react";
import ChairmanImg from "../assets/members/DrMohammadZashimUddin.jpeg"; // 📸 Replace with actual chairman image

const ChairmanSection = () => {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* 🧑 Left: Chairman Image + Bio (Updated) */}
        <div className="flex flex-col items-center  text-center space-y-6">
          <div className="relative flex flex-col items-center md:items-start">
            <img
              src={ChairmanImg}
              alt="Chairman"
              className="w-48 h-48 object-cover rounded-full shadow-lg border-4 border-green-700 block mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold text-green-900">
              Dr. Mohammad Zashim Uddin
            </h2>
            <p className="text-green-700 font-medium text-sm uppercase tracking-wide">
              Chairman, BSERI
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed text-base max-w-md">
            Dr. Mohammad Zashim Uddin is a Professor in the Department of Botany
            at the University of Dhaka, specializing in Plant Taxonomy,
            Ethnobotany, and Conservation Biology. He has authored over 88
            research articles and books focusing on biodiversity conservation
            and traditional ethnobotanical knowledge. He holds a Ph.D. in Plant
            Taxonomy from the University of Dhaka and is a leading voice in
            advancing ecological research in Bangladesh.
          </p>
        </div>

        {/* 📝 Right: Chairman Speech (Unchanged) */}
        <div className="relative bg-green-50 p-8 rounded-xl shadow-lg border border-green-200">
          <span className="absolute -top-5 left-6 text-green-600 text-6xl font-serif leading-none">
            “
          </span>
          <p className="text-gray-800 text-lg leading-relaxed italic pl-6">
            We are delighted to introduce the Bangladesh Society for Ecological
            Research Initiative (BSERI), a scientific and non-profit
            organization dedicated to promoting ecological awareness and
            research-based conservation in Bangladesh. Our nation is rich in
            biodiversity and ecological heritage, but faces escalating
            environmental threats. BSERI aims to act as a catalyst for
            scientific research, environmental education, and policy advocacy.
            Together, we can forge a sustainable future rooted in ecological
            harmony.
          </p>
          <span className="absolute -bottom-5 right-6 text-green-600 text-6xl font-serif leading-none rotate-180">
            “
          </span>
          <p className="mt-6 text-right text-green-800 font-semibold">
            — Dr. Mohammad Zashim Uddin
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChairmanSection;
