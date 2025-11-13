import React from "react";
import { motion } from "framer-motion";
import ObjectivesImg from "../assets/environment-background.jpg";
import { Globe, Leaf, Users, BookOpen, TreePine, Shield,Earth,Flower2,Trees,Mountain,CloudSnow,Droplet } from "lucide-react";

// 🌿 Animation variant
const fadeInVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

// 🌱 Objective points
const objectives = [
  { text: "Enhance Enhancing public understanding and engagement in ecological issues.", icon: Globe },
  { text: "Support Supporting native biodiversity and forest conservation efforts.", icon: Leaf },
  { text: "Creating Creating green employment opportunities for marginalized communities.", icon: Users },
  { text: "Promoting gender inclusivity in environmental actions.", icon:  Flower2},
  { text: "Empower Involving students in conservation-oriented extracurricular activities.", icon: BookOpen },
  { text: "Recognizing contributions to ecological preservation.", icon: TreePine },
  { text: "Advancing urban greening and sustainable infrastructure.", icon:Shield },
  { text: "Addressing environmental degradation and protecting water bodies.", icon: Droplet },
  { text: "Advocating for 25% forest coverage and widespread native plant nurseries.", icon: CloudSnow },
  { text: "Supporting eco-friendly waste management and carbon taxation.", icon: Mountain },
  { text: "Strengthening climate resilience and disaster preparedness.", icon: Shield },
  { text: "Promoting green economy initiatives and the “Three Zero Project.”", icon: Trees },
  { text: "Training future researchers in ecology and conservation funding.", icon: Users },
  { text: "Engaging in any lawful activities that further the Society’s goals.", icon: Earth },
];

const Objectives = () => {
  return (
<section className="relative w-full py-20 px-6 overflow-hidden bg-gradient-to-b from-green-900/85 via-emerald-800/70 to-green-900">
      <div className="relative max-w-screen-xl mx-auto flex flex-col md:flex-row items-start text-left z-20 gap-8">
        {/* Left Column: Text */}
        <div className="flex-1 space-y-6">
          <motion.h1
            className="text-lime-400 md:text-3xl sm:text-2xl text-xl font-bold leading-snug max-w-2xl text-green-100 text-center drop-shadow-lg"
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            BSERI OBJECTIVES
          </motion.h1>

          <motion.p
            className="text-green-50/90 max-w-3xl text-sm md:text-base leading-relaxed"
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            BSERI is committed to fostering environmental awareness, conserving
            biodiversity, and promoting sustainable development across Bangladesh.
            Our core objectives include:
          </motion.p>

          <div className="w-full max-w-4xl grid md:grid-cols-2 gap-4">
            {objectives.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start bg-white/10 backdrop-blur-md p-4 rounded-lg shadow-md border border-white/10 
                hover:bg-white/20 transition-all duration-300 hover:translate-x-1 hover:scale-[1.02]"
                variants={fadeInVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index + 3} // stagger effect
              >
                <item.icon className="text-caribbean-green mr-3 mt-1 flex-shrink-0" size={24} />
                <p className="text-left text-green-50 text-sm leading-snug">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Background Image */}
        <div
          className="flex-1 hidden md:block relative h-[770px] mt-16 rounded-xl overflow-hidden shadow-2xl border-5 border-green-900"
          style={{
            backgroundImage: `url(${ObjectivesImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center right",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-green-900/85 rounded-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Objectives;
