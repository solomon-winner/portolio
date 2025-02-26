import { motion, useScroll, useTransform } from 'framer-motion';
import {FiMail, FiCode} from 'react-icons/fi';
import profilePhoto from '../assets/E.jpg';
import { useRef } from 'react';

export const Hero = () => { 
    
    const heroRef = useRef(null);
      const { scrollYProgress } = useScroll({ target: heroRef });
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    return (
        <section 
        className="relative h-screen flex items-center overflow-hidden"
        ref={heroRef}
      >
        <motion.div 
          className="absolute inset-0"
          style={{ scale }}
        >
          <img 
            src={profilePhoto} 
            alt="Profile" 
            className="w-full h-full object-cover object-center justify-self-end"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-gray-900/90" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-2xl"
          >
            <div className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Digital Craftsman
              </span>
              <br />
              <span>
              Shaping Tomorrow's Web
              </span>
            </div>
            <p className="text-xl font-thin text-gray-200 mb-8 max-w-xl">
              Full-cycle developer specializing in high-performance applications
              and cutting-edge web experiences.
            </p>
            <div className="flex gap-4">
              <a 
                href="#contact" 
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center gap-2 transition-all"
              >
                <FiMail /> Connect Now
              </a>
              <a 
                href="#Projects" 
                className="px-8 py-3 border border-gray-600 hover:border-blue-400 rounded-lg flex items-center gap-2 transition-all"
              >
                <FiCode /> View Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    )
}