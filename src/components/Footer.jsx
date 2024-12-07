import React from "react";
import { SOCIAL_MEDIA_LINKS } from "../constants";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mb-8 mt-20">
      <div className="flex items-center justify-center">
        {/* Replaced logo image with heading */}
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-3xl font-bold text-white hover:text-yellow-300 cursor-pointer"
          onClick={(e) => {
            // Assuming you want to scroll to the #hero section
            const targetElement = document.querySelector("#hero");
            if (targetElement) {
              const offset = -85;
              const elementPosition = targetElement.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.scrollY + offset;
              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
              });
            }
          }}
        >
          ARUN SINGH
        </motion.h1>
      </div>

      {/* Mobile Numbers Section */}
      <div className="flex items-center justify-center gap-8 mt-8 mb-8">
        {/* Replace text with an icon */}
        <div className="text-white text-lg">
          <i className="flex items-center justify-center">
            <FaPhoneAlt className="text-white" size={24} />
          </i>
        </div>
        <div className="flex gap-6">
          {/* Clickable phone number */}
          <a
            href="tel:+9399137686"
            className="text-lg text-green-300 hover:text-yellow-500"
          >
            +93991 37686
          </a>
        </div>
      </div>
      {/* Download Resume Section */}
      <div className="flex items-center justify-center gap-8 mb-8">
        <a
          href="https://drive.google.com/uc?export=download&id=1R1qjH1_-_QV0plRJYnk0gVtx1nR1CGij"
          download
          className="text-lg text-blue-400 hover:text-yellow-500"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              scale: [1, 1.1, 1], // Makes the text "wave" by scaling up and down
              rotate: [0, 10, -10, 0] // Rotate the text left and right
            }}
            transition={{
              duration: 3, // Duration of one wave cycle
              repeat: Infinity, // Repeat the animation infinitely
              repeatType: "loop", // Loop the animation continuously
              ease: "easeInOut" // Smooth easing
            }}
          >
            Download My Resume
          </motion.span>
        </a>
      </div>

      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: index * 0.5 }}
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </motion.a>
        ))}
      </div>

      <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
        &copy;compileTab. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
