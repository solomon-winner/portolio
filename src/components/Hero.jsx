import { motion, useScroll, useTransform } from 'framer-motion';
import {FiMail, FiCode} from 'react-icons/fi';
import profilePhoto from '../assets/PPP.jpg';
import { useRef } from 'react';

export const Hero = () => { 
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: heroRef });
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    return (
        <section 
            className="relative h-screen flex items-center overflow-hidden bg-gray-900"
            ref={heroRef}
        >
            <motion.div 
                className="absolute inset-0 flex items-center justify-end"
                style={{ scale }}
            >
                <div className="relative w-1/2 h-full group">
                    {/* Glitch Container */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute inset-0 glitch-container">
                            <img 
                                src={profilePhoto} 
                                alt="Profile" 
                                className="w-full h-full object-cover object-left grayscale contrast-125"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 via-pink-400/15 to-teal-400/20 mix-blend-light" />
                        </div>
                    </div>
                    
                    {/* Glitch Effects */}
                    <div className="absolute inset-0 glitch-overlay opacity-40 mix-blend-lighten" />
                    
                    {/* Cyber Accents */}
                    <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-48 h-48 bg-teal-400/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-teal-400 to-pink-400" />
                </div>
            </motion.div>

            <div className="relative z-10 container mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-2xl"
                >
                    <div className="text-4xl md:text-5xl font-bold mb-6 leading-tight space-y-4">
                        <h1 className="bg-gradient-to-r from-teal-400 via-pink-400 to-teal-400 bg-clip-text text-transparent animate-gradient">
                            Solomon Yalew
                        </h1>
                        <span className="inline-block md:text-3xl text-gray-200 font-mono tracking-tight bg-gray-800 px-4 py-2 rounded-lg border border-teal-400/20">
                            &lt;Software Developer/&gt;
                        </span>
                    </div>
                    <p className="text-[1rem] font-thin text-gray-300 mb-8 max-w-xl bg-gray-900/60 backdrop-blur-sm px-6 py-4 rounded-xl border border-teal-400/10">
                    Ethiopian full-stack developer passionate about solving problems and driving meaningful change. Focused, purpose-driven, and dedicated to building innovative and efficient solutions.
                    </p>
                    <div className="flex gap-4">
                        <a 
                            href="#contact" 
                            className="px-8 py-3 bg-teal-600 hover:bg-teal-500 rounded-lg flex items-center gap-2 transition-all group"
                        >
                            <FiMail className="group-hover:animate-bounce" /> 
                            <span className="font-mono">Connect()</span>
                        </a>
                        <a 
                            href="#Projects" 
                            className="px-8 py-3 border border-teal-400/30 hover:border-pink-400/60 rounded-lg flex items-center gap-2 transition-all group backdrop-blur-sm"
                        >
                            <FiCode className="text-pink-400 group-hover:animate-spin" /> 
                            <span className="font-mono text-gray-300">ViewWork</span>
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scanlines overlay */}
            <div className="absolute inset-0 scanlines pointer-events-none opacity-20" />
        </section>
    )
}