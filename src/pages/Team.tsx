import React from "react";
import { motion } from "framer-motion";
import { Footer } from "../components/Footer";

export function Team() {
  const team = [
    {
      name: "Ayush Shrivastava",
      role: "CONVENOR",
      image: "/images/AyushShrivastava_Convenor.jpg",
    },
    {
      name: "Jatin Kumar",
      role: "CO - CONVENOR",
      image: "/images/JATIN_CO_CONVENOR.jpg",
    },
    {
      name: "Rajneesh Mishra",
      role: "CO - CONVENOR",
      image: "/images/RajneeshMishra_CO_Convenor.jpg",
    },
    {
      name: "Shlok Saxena",
      role: "SECRETARY",
      image: "/images/Shlok_Astro_Secy.jpg",
    },
    {
      name: "Raj Singh",
      role: "JT. SECRETARY",
      image: "/images/RAJ_ASTRO_JT.SECY.jpg",
    },
    {
      name: "Ankesh Ansh",
      role: "JT. SECRETARY",
      image: "/images/Ankesh_Astro_Jt.Secy (1).jpg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Team Section */}
      <div className="container mx-auto px-4 py-16">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-600"
        >
          Meet Our Team
        </motion.h1>

        {/* 3x2 Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              {/* Image with border and shadow */}
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg transition-transform transform hover:scale-105">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name & Role */}
              <h2 className="text-lg md:text-xl font-semibold mt-4 text-blue-400">
                {member.name}
              </h2>
              <p className="text-sm md:text-base text-purple-400">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
