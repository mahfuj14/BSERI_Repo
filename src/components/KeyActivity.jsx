import React from "react";
import { motion } from "framer-motion";
import ObjectivesImg from "../assets/bg_objectives.jpg";
import { Leaf, BookOpen, Users, Globe, FileText, Calendar } from "lucide-react";

// 🌿 Fade-in variant for motion
const fadeInVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15 },
  }),
};

// 🌱 Key Activities
const activities = [
  { text: "National ecological surveys and biodiversity assessments.", icon: Globe },
  { text: "Tree plantation and habitat restoration drives.", icon: Leaf },
  { text: "Educational campaigns and eco-literacy programs.", icon: BookOpen },
  { text: "Community-based conservation initiatives.", icon: Users },
  { text: "Academic publications and research dissemination.", icon: FileText },
  { text: "Organizing observances around World Environment Day, Earth Day, and more.", icon: Calendar },
];

const KeyActivity = () => {
  return (
    <div
      className="w-full text-white py-20 px-6 relative overflow-hidden"
      style={{
        backgroundImage: `url(${ObjectivesImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 🌿 Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/85 via-emerald-800/70 to-green-900 mix-blend-multiply"></div>

      <div className="relative max-w-screen-xl mx-auto flex flex-col items-center text-center z-20">
        {/* 🏷️ Section Title */}
        <motion.p
          className="text-caribbean-green font-bold uppercase tracking-widest mb-2"
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          BSERI KEY ACTIVITIES
        </motion.p>

        <motion.h1
          className="md:text-4xl sm:text-3xl text-2xl font-bold mb-8 leading-snug"
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          Building a Greener, More Sustainable Future
        </motion.h1>

        {/* 🌱 Activities List */}
        <div className="w-full max-w-3xl flex flex-col space-y-4">
          {activities.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center bg-white/10 backdrop-blur-md p-4 rounded-lg shadow-lg border border-white/10 hover:bg-white/20 transition-all duration-300"
              variants={fadeInVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index + 2}
            >
              <item.icon className="text-caribbean-green mr-4" size={28} />
              <p className="text-left text-gray-100 text-base">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyActivity;