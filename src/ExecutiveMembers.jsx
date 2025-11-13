import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import NavbarMenus from "/src/components/NavbarMenus";
import Footer from "/src/components/footer.jsx";


import avatar from "/src/assets/members/avatar.png";
import DrMohammadZashimUddin from "/src/assets/members/DrMohammadZashimUddin.jpeg";
import MohammadNurulIslam from "/src/assets/members/MohammadNurulIslam.jpeg";
import DrMohammedAlmajaddedeAlfasane from "/src/assets/members/DrMohammedAlmajaddedeAlfasane.jpeg";
import RashedKamalAnik from "/src/assets/members/RashedKamalAnik.jpeg";
import KhalidHossain from "/src/assets/members/KhalidHossain.jpeg";
import RafiulIslam from "/src/assets/members/RafiulIslam.jpg";
import MahfujHassan from "/src/assets/members/MahfujHassan.jpeg";
import AbulaisShomrat from "/src/assets/members/AbulaisShomrat.jpeg";
import OmarFaruqueMazumder from "/src/assets/members/OmarFaruqueMazumder.jpeg";

const OrganizationalHierarchy = () => {
  const [showNav, setShowNav] = useState(false);

  const handleNav = () => {
    setShowNav(!showNav);
  };

  // Since we don't have actual images, we'll use placeholder avatars
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

const orgHierarchy = [
  {
    level: "Board of Directors",
    members: [
      { designation: "Chairman", name: "Dr. Mohammad Zashim Uddin", photo: DrMohammadZashimUddin },
      { designation: "Vice President", name: "Mohammad Nurul Islam", photo: MohammadNurulIslam },
      { designation: "General Secretary", name: "Dr. Mohammed Almajaddede Alfasane", photo: DrMohammedAlmajaddedeAlfasane },
      { designation: "Treasurer", name: "Rashed Kamal Anik", photo: RashedKamalAnik },
      { designation: "Organizing Secretary", name: "Khalid Hossain", photo: KhalidHossain },
      { designation: "Executive Member 01", name: "Abulais Shomrat", photo:  AbulaisShomrat},
      { designation: "Executive Member 02", name: "Omar Faruque Mazumder", photo: OmarFaruqueMazumder },
    ],
    subGroups: [
      {
        level: "Advisors",
        members: [
          { designation: "Advisor", name: "Dr. Akhtar Hossain Khan", photo: avatar },
          { designation: "Advisor", name: "Dr. Abdus Salam", photo: avatar },
          { designation: "Advisor", name: "Dr. Muhammad Ekramul Haque", photo: avatar },
          { designation: "Advisor", name: "Dr. ASM Mohiuddin", photo: avatar },
        ],
        subGroups: [
          {
            level: "CEO",
            members: [
              { designation: "Chief Executive Officer", name: "Dr. Mohammed Almajaddede Alfasane", photo: DrMohammedAlmajaddedeAlfasane },
            ],
            subGroups: [
              {
                level: "Directors",
                isParallel: true, // This marks the parallel level
                subGroups: [
                  {
                    level: "Director Program and Finance",
                    members: [
                      { designation: "Program Director", name: "Rashed Kamal Anik", photo: RashedKamalAnik },
                    ],
                    sub: [
                      { designation: "Deputy Program Director", name: "Mst. Zeba Zesmin", photo: avatar },
                      { designation: "Head of Corporate Affairs", name: "Rafiul Islam Rafi", photo: RafiulIslam },
                    ],
                  },
                  {
                    level: "Director International Affairs",
                    members: [
                      { designation: "International Affairs Director", name: "Abulais Shomrat", photo: AbulaisShomrat },
                    ],
                    sub: [
                      { designation: "Head of International Affairs", name: "Ivy Akter", photo: avatar },
                    ],
                    subGroups: [
                      {
                        level: "International Affairs Interns",
                        members: [
                          { designation: "Intern", name: "Md. Shah Sufi Wach", photo: avatar },
                          { designation: "Intern", name: "Md. Shariful Islam", photo: avatar },
                        ],
                      },
                    ],
                  },
                  {
                    level: "Director Admin and Research",
                    members: [
                      { designation: "Research Director", name: "Khalid Hossain", photo: KhalidHossain },
                    ],
                    sub: [
                      { designation: "Research Associate", name: "Zinia Naz Linde", photo: avatar },
                    ],
                    subGroups: [
                      {
                        level: "Research Assistant",
                        members: [
                          { designation: "Research Assistant", name: "Md. Zayedul Haque", photo: avatar },
                        ],
                        subGroups: [
                          {
                            level: "Junior Research Assistant",
                            members: [
                              { designation: "Junior Research Assistant", name: "Israt Jahan Nijum", photo: avatar },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    level: "Director Development",
                    members: [
                      { designation: "Director Development", name: "Sheikh Rasheduzzaman Rashed", photo: avatar },
                    ],
                    sub: [
                      { designation: "Head of IT", name: "Mahfuj Hassan", photo: MahfujHassan },
                    ],
                    subGroups: [
                      {
                        level: "IT Intern",
                        members: [
                          { designation: "IT Intern", name: "Ahib Mukul Limon", photo: avatar },
                        ],
                        subGroups: [
                          {
                            level: "Junior IT Interns",
                            members: [
                              { designation: "Junior IT Intern", name: "Atik Al Aziz", photo: avatar },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];




  const LevelCard = ({ level, members, isFirst = false, isLast = false, isParallel = false }) => (
    <div className={`flex flex-col items-center ${!isFirst ? 'mt-8' : ''}`}>
      {/* Level Title */}
      <div className={`bg-green-800 text-white px-4 py-2 rounded-lg shadow-lg mb-4 text-center ${isParallel ? 'min-w-[200px]' : 'min-w-[220px]'} border border-green-900`}>
        <h3 className="font-semibold text-sm">{level}</h3>
      </div>

      {/* Members Grid */}
      <div className={`flex ${isParallel ? 'flex-row flex-wrap justify-center gap-4' : 'flex-wrap justify-center gap-4'}`}>
        {members.map((member, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg p-4 w-52 text-center border border-green-300 hover:shadow-xl transition-all duration-300 backdrop-blur-sm bg-white/95"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Avatar with actual photo or avatar */}
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-3 overflow-hidden bg-gradient-to-br from-green-600 to-emerald-700 border-2 border-green-400 shadow-md">
              {member.photo && member.photo !== avatar ? (
                <img 
                  src={member.photo} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-white font-bold text-xl">
                  {getInitials(member.name)}
                </span>
              )}
            </div>
            
            {/* Member Info */}
            <h4 className="font-semibold text-gray-800 text-sm mb-1 leading-tight">{member.name}</h4>
            <p className="text-xs text-green-800 leading-tight font-medium">{member.designation}</p>
          </motion.div>
        ))}
      </div>

      {/* Down Arrow */}
      {!isLast && (
        <div className="mt-4">
          <svg className="w-6 h-6 text-green-700 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      )}
    </div>
  );

  const ParallelLevels = ({ level, subGroups }) => (
    <div className="flex flex-col items-center mt-8 w-full">
      {/* Parallel Level Title */}
      <div className="bg-emerald-700 text-white px-4 py-2 rounded-lg shadow-lg mb-6 text-center min-w-[220px] border border-emerald-800">
        <h3 className="font-semibold text-sm">{level}</h3>
      </div>

      {/* Parallel Directors Container - Adjusted gap for better spacing */}
      <div className="flex flex-wrap justify-center gap-6 w-full max-w-6xl mx-auto">
        {subGroups.map((group, index) => (
          <div key={index} className="flex flex-col items-center flex-1 min-w-[250px] max-w-[280px]">
            {/* Individual Director Level */}
            <LevelCard
              level={group.level}
              members={group.members}
              isFirst={true}
              isLast={false}
              isParallel={true}
            />

            {/* Render direct sub members */}
            {group.sub && (
              <div className="flex flex-col items-center mt-4 w-full">
                <div className="mb-4">
                  <svg className="w-6 h-6 text-green-700 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
                <LevelCard
                  level={`${group.level} Team`}
                  members={group.sub}
                  isLast={!group.subGroups}
                />
              </div>
            )}

            {/* Render sub groups for each director */}
            {group.subGroups && (
              <div className="flex flex-col items-center mt-4 w-full">
                {renderHierarchy(group.subGroups, 0, true)}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderHierarchy = (data, depth = 0, isChildOfParallel = false) => {
    return data.map((group, index) => {
      const isFirst = depth === 0 && index === 0;
      const isLast = !group.subGroups && !group.sub;

      // Handle parallel levels
      if (group.isParallel) {
        return (
          <ParallelLevels
            key={`parallel-${depth}-${index}`}
            level={group.level}
            subGroups={group.subGroups}
          />
        );
      }

      return (
        <div key={`${depth}-${index}`} className="w-full">
          <LevelCard
            level={group.level}
            members={group.members}
            isFirst={isFirst && !isChildOfParallel}
            isLast={isLast}
          />

          {/* Render sub groups */}
          {group.subGroups && (
            <div className="flex flex-col items-center">
              {renderHierarchy(group.subGroups, depth + 1, group.isParallel)}
            </div>
          )}

          {/* Render direct sub members */}
          {group.sub && (
            <div className="flex flex-col items-center mt-8">
              <div className="mb-4">
                <svg className="w-6 h-6 text-green-700 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <LevelCard
                level={`${group.level} Team`}
                members={group.sub}
                isLast={true}
              />
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div className="min-h-screen relative">
      {/* Deep Green Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Deep green top section for navbar contrast */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-green-950 via-green-900 to-green-800"></div>
        
        {/* Main content area background */}
        <div className="absolute top-32 inset-0 bg-gradient-to-br from-emerald-50 to-green-100">
          {/* Simple green bottom for footer area */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-green-800 to-green-700"></div>
        </div>
      </div>
      
      {/* Navbar at the top */}
      <div className="relative z-20">
        <NavbarMenus showNav={showNav} handleNav={handleNav} />
      </div>
      
      {/* Main content */}
      <div className="py-8 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h1 
              className="text-4xl font-bold text-green-900 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              BSERI Member Panel
            </motion.h1>
            <motion.p 
              className="text-green-800 text-lg"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Leadership Structure and Reporting Lines
            </motion.p>
          </div>

          {/* Organization Chart */}
          <motion.div 
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-green-300"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center">
              {renderHierarchy(orgHierarchy)}
            </div>
          </motion.div>

          {/* Legend */}
          
        </div>
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default OrganizationalHierarchy;