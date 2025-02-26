import { motion, useScroll, useTransform } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiChevronRight, FiAward, FiCode, FiDatabase, FiGlobe} from 'react-icons/fi';
import Secondprofile from '../assets/BW.jpg';
import { useRef } from 'react';

export const About = () => {
    return (
        <section className="py-24 px-6 bg-gray-800/50 backdrop-blur-lg">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold">
              <span className="text-blue-400">//</span> About the Developer
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              With a decade of experience in full-stack development, I bridge 
              the gap between technical excellence and business value. My work 
              focuses on creating scalable solutions that drive measurable 
              results while maintaining elegant code architecture.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-gray-700/30 rounded-xl">
                <FiAward className="text-3xl text-blue-400 mb-4" />
                <div className="text-2xl font-bold mb-2">15+</div>
                <div className="text-gray-400">Industry Awards</div>
              </div>
              <div className="p-6 bg-gray-700/30 rounded-xl">
                <FiCode className="text-3xl text-purple-400 mb-4" />
                <div className="text-2xl font-bold mb-2">300k+</div>
                <div className="text-gray-400">Lines Contributed</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl transform group-hover:rotate-1 transition duration-500" />
            <img 
              src={Secondprofile} 
              alt="About" 
              className="w-full h-96 object-cover object-center rounded-2xl shadow-2xl relative z-10"
            />
            <div className="absolute -inset-8 border-2 border-gray-600/30 rounded-2xl transform group-hover:-translate-x-2 group-hover:-translate-y-2 transition duration-500" />
          </motion.div>
        </div>
      </section>

    )
}