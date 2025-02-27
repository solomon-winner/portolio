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
            <h2 className="text-4xl font-mono">
              <span className="text-teal-600 hover:text-teal-500">//</span> About the Developer
            </h2>
            <p className="text-[1rem] font-thin text-gray-300 leading-relaxed">
            I'm a full-stack software developer with a passion for building scalable and efficient web and mobile applications. With expertise in MERN, and Flutter, I have developed diverse projects.

Currently, I work at Echnoserve Consulting, where I contribute to high-impact projects, including a tree-based restoration registry for the Ethiopian Prime Minister's Office and a European Union deforestation registry. Beyond my professional role, I enjoy tackling coding challenges, and continuously improving my skills.

I thrive in problem-solving, creating intuitive user experiences, and delivering high-quality software. Always eager to learn, innovate, and take on new challenges.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-gray-700/30 rounded-xl">
                <FiAward className="text-3xl text-blue-400 mb-4" />
                <div className="text-2xl font-bold mb-2">2K+</div>
                <div className="text-gray-400">Github Commits</div>
              </div>
              <div className="p-6 bg-gray-700/30 rounded-xl">
                <FiCode className="text-3xl text-purple-400 mb-4" />
                <div className="text-2xl font-bold mb-2">40+</div>
                <div className="text-gray-400">Repositeries</div>
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