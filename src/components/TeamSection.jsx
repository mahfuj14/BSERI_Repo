import React from "react";
import TreasurerImg from "../assets/members/RashedKamalAnik.jpeg";
import Exec1Img from "../assets/members/AbulaisShomrat.jpeg";
import Exec2Img from "../assets/members/OmarFaruqueMazumder.jpeg";
import OrgSecretary from "../assets/members/KhalidHossain.jpeg";
import Avatar from "../assets/members/avatar.png";

const members = [
  {
    name: "Rashed Kamal Anik",
    role: "Treasurer",
    img: TreasurerImg,
    description: `Rashed Kamal Anik is a graduate in Soil, Water and Environment (SWE) from the University of Dhaka. 
    He currently serves as the General Secretary of the Dhaka University Environment Society, 
    where he is actively engaged in promoting environmental awareness and sustainability. 
    Anik completed his Higher Secondary education at Notre Dame College, Dhaka, where he also held the prestigious position of General Secretary of the Notre Dame Eco and Space Club.`,
  },
  {
    name: "Khaled Hosen",
    role: "Organizing Secretary",
    img: OrgSecretary,
    description: `Khaled Hosen is a dynamic and experienced student leader who has held several prestigious positions during his academic journey. 
    He served as the former Vice President of the Jagannath University Debating Society, demonstrating his strong communication and leadership skills. 
    Additionally, he was the General Secretary of the Jagannath University Economics Club, where he showcased his organizational abilities and academic enthusiasm. 
    Moreover, Khaled held the position of President of the Nalchithy Upazila Student Welfare Association, reflecting his dedication to community development and student welfare.`,
  },
  {
    name: "Abulais Shomrat",
    role: "Executive Member",
    img: Exec1Img,
    description: `Abulais Shomrat is an enthusiastic and dedicated individual with a strong commitment to academic and voluntary activities. 
    He is currently pursuing his Master’s (MS) in Botany at the University of Dhaka. 
    Alongside his academic pursuits, he has actively contributed as a volunteer in the Bangladesh Biology Olympiad, showcasing his passion for science education. 
    Additionally, he has served as a volunteer for the Prokriti Foundation, reflecting his dedication to social and environmental causes.`,
  },
  {
    name: "Omar Faruque Mazumdar",
    role: "Executive Member",
    img: Exec2Img,
    description: `Omar Faruque Mazumdar is a passionate and socially engaged individual. 
    He has contributed as a founding member of Haat Foundation Feni and Diabetic Hospital Feni. 
    His leadership roles include serving as the President of Nurani Madrasha, Madhugram and as the founding President of South Town School & College. 
    Academically, he is pursuing a B.A. (Honors) in Philosophy at the University of Chittagong. 
    His diverse contributions reflect his strong dedication to education, health, and community development.`,
  },
];

const TeamSection = () => {
  return (
    <section className="w-full bg-white py-20 px-6 relative">
      {/* Timeline line */}
      <div className="absolute left-1/2 top-0 h-full w-1 bg-green-300 transform -translate-x-1/2"></div>

      <div className="max-w-screen-xl mx-auto flex flex-col space-y-16 relative">
        {members.map((member, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >
            {/* Card */}
            <div
              className={`bg-green-50 border border-green-100 shadow-lg p-6 rounded-2xl w-full md:w-5/12 ${
                index % 2 === 0 ? "md:mr-12" : "md:ml-12"
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-20 h-20 rounded-full border-4 border-green-400 shadow-lg object-cover"
                />
                <div>
                  <h3 className="text-lg font-bold text-green-900">{member.role}</h3>
                  <p className="text-emerald-700 font-semibold">{member.name}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{member.description}</p>
            </div>

            {/* Circle on timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-green-400 rounded-full w-6 h-6 border-4 border-white shadow-md"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
