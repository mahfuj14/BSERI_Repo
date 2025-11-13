import React from "react";
import VicePresidentImg from "../assets/members/MohammadNurulIslam.jpeg";
import GeneralSecretaryImg from "../assets/members/DrMohammedAlmajaddedeAlfasane.jpeg";

const VpandGS = () => {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Vice President Card */}
        <div className="relative bg-green-100/30 rounded-xl overflow-hidden shadow-lg border border-green-200">
          <div className="absolute inset-0 bg-gradient-to-b from-green-200/40 via-emerald-100/30 to-green-50/20 mix-blend-multiply rounded-xl"></div>
          <div className="relative flex flex-col items-center text-center p-6 space-y-4">
            <img
              src={VicePresidentImg}
              alt="Vice President"
              className="w-40 h-40 object-cover rounded-full shadow-md border-4 border-green-400"
            />
            <h3 className="text-2xl font-bold text-green-900">Vice President</h3>
            <p className="text-xl font-semibold text-green-700">Dr. Mohammad Nurul Islam</p>
            <p className="text-gray-700 leading-relaxed text-sm">
              Dr. Mohammad Nurul Islam is a Professor in the Department of Botany at the University of Dhaka. 
              He holds a Ph.D. in Plant Molecular Biology and specializes in developing virus-resistant crops. 
              With over 77 published research articles, he serves on the editorial boards of several journals 
              and is the General Secretary of the Bangladesh Association for Plant Tissue Culture and Biotechnology. 
              He is also the Director of the Chromosome Research Centre at the University of Dhaka.
            </p>
          </div>
        </div>

        {/* General Secretary Card */}
        <div className="relative bg-green-100/30 rounded-xl overflow-hidden shadow-lg border border-green-200">
          <div className="absolute inset-0 bg-gradient-to-b from-green-200/40 via-emerald-100/30 to-green-50/20 mix-blend-multiply rounded-xl"></div>
          <div className="relative flex flex-col items-center text-center p-6 space-y-4">
            <img
              src={GeneralSecretaryImg}
              alt="General Secretary"
              className="w-40 h-40 object-cover rounded-full shadow-md border-4 border-green-400"
            />
            <h3 className="text-2xl font-bold text-green-900">General Secretary</h3>
            <p className="text-xl font-semibold text-green-700">Dr. Mohammed Almujaddade Alfasane</p>
            <p className="text-gray-700 leading-relaxed text-sm">
              Professor Dr. Mohammed Almujaddade Alfasane is a renowned botanist at the University of Dhaka, 
              specializing in phycology and hydrobiology. He discovered 14 new phytoplankton species and 
              invented a nanofilter from algae for water purification. He earned his Ph.D. from DU and has 
              published over 67 research papers. Currently, he serves as Chief Editor of the Bangladesh Journal 
              of Plant Taxonomy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VpandGS;
