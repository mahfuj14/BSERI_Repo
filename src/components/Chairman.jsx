import React from "react";
import { Link } from "react-router-dom";
import ChairmanImg from "../assets/members/DrMohammadZashimUddin.jpeg";

const ChairmanSection = () => {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* ================== LEFT SIDE ================== */}
        <div className="flex flex-col items-center text-center space-y-6">

          {/* Image + Name */}
          <div className="relative flex flex-col items-center">
            <img
              src={ChairmanImg}
              alt="Chairman"
              className="w-48 h-48 object-cover rounded-full shadow-lg border-4 border-green-700 mb-4"
            />

            <h2 className="text-2xl font-bold text-green-900">
              Dr. Mohammad Zashim Uddin
            </h2>

            <p className="text-green-700 font-medium text-sm uppercase tracking-wide">
              Chairman, BSERI
            </p>
          </div>

          {/* Bio */}
          <p className="text-gray-700 leading-relaxed text-base max-w-md">
            Dr. Mohammad Zashim Uddin is a Professor in the Department of Botany
            at the University of Dhaka, specializing in Plant Taxonomy,
            Ethnobotany, and Conservation Biology. He has authored over 88
            research articles and books focusing on biodiversity conservation
            and traditional ethnobotanical knowledge. He holds a Ph.D. in Plant
            Taxonomy and is a leading voice in advancing ecological research in Bangladesh.
          </p>

          {/* View CV Button */}
          <Link
            to="/chairmanDetails"
            className="group inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r 
            from-green-600 to-emerald-600 text-white font-semibold rounded-lg shadow-lg 
            hover:shadow-xl transition-all duration-300 hover:from-green-700 hover:to-emerald-700 
            transform hover:-translate-y-1"
          >
            <svg
              className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            View Dr. Mohammad Zashim Uddin's Full Profile
            <svg
              className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-4 max-w-md">
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <div className="text-lg font-bold text-green-800">99+</div>
              <div className="text-xs text-gray-600">Publications</div>
            </div>

            <div className="text-center p-3 bg-green-50 rounded-lg">
              <div className="text-lg font-bold text-green-800">1,598</div>
              <div className="text-xs text-gray-600">Citations</div>
            </div>

            <div className="text-center p-3 bg-green-50 rounded-lg">
              <div className="text-lg font-bold text-green-800">#2</div>
              <div className="text-xs text-gray-600">Rank in BD</div>
            </div>
          </div>

          {/* ResearchGate + Google Scholar */}
          <div className="mt-8 pt-6 border-t border-green-200 flex flex-wrap gap-3 justify-center">

            {/* ResearchGate */}
            <a
              href="https://www.researchgate.net/profile/M-Uddin-5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-white text-green-700 rounded-lg 
              border border-green-200 hover:bg-green-50 hover:border-green-300 transition-colors text-sm"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 
                12-12S18.627 0 12 0zm-2.033 16.01c.564-1.789 
                1.632-3.932 1.821-4.474.273-.787-.211-1.136-1.74.209l-.34-.64c1.744-1.897 
                5.335-2.326 4.113.613-.763 1.835-1.309 3.074-1.621 4.03-.455 
                1.393.694.828 1.819-.211.153.25.203.331.356.619-2.498 
                2.378-5.271 2.588-4.408-.146z" />
              </svg>
              ResearchGate
            </a>

            {/* Google Scholar */}
            <a
              href="https://scholar.google.com/citations?user=Cv-ThckAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-white text-green-700 rounded-lg 
              border border-green-200 hover:bg-green-50 hover:border-green-300 transition-colors text-sm"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L1 9l11 7 9-5.727V17h2V9L12 2zm0 11.197L4.803 
                9 12 4.803 19.197 9 12 13.197zM6 18h12v2H6z" />
              </svg>
              Google Scholar
            </a>
          </div>
        </div>

        {/* ================== RIGHT SIDE ================== */}
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
            Together, we can forge a sustainable future rooted in ecological harmony.
          </p>

          <span className="absolute -bottom-5 right-6 text-green-600 text-6xl font-serif rotate-180">
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
