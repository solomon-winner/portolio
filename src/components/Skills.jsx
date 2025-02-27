import {  FiCode, FiDatabase, FiGlobe, FiSmartphone} from 'react-icons/fi';

export const Skills = () => {
    return (
               <section className="py-24 px-6 bg-gray-800/50">
                 <div className="container mx-auto">
                   <h2 className="text-4xl font-mono mb-16">
                   <span className="text-teal-600 hover:text-teal-500 mr-5">//</span>
                       Skillset</h2>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     <div className="p-8 bg-gray-700/30 rounded-2xl hover:bg-gray-700/50 transition-all">
                       <FiCode className="text-4xl mb-6 text-blue-400" />
                       <h3 className="text-xl font-mono font-bold mb-8">Frontend Mastery</h3>
                       <ul className="space-y-3 font-mono text-gray-400">
                         <li className="hover:text-blue-400 cursor-pointer">React Ecosystem Expert</li>
                         <li className="hover:text-blue-400 cursor-pointer">State Management Patterns</li>
                         <li className="hover:text-blue-400 cursor-pointer">Web Performance Optimization</li>
                       </ul>
                     </div>
                     <div className="p-8 bg-gray-700/30 rounded-2xl hover:bg-gray-700/50 transition-all">
                       <FiDatabase className="text-4xl mb-6 text-purple-400" />
                       <h3 className="text-xl font-mono font-bold mb-8">Backend Expertise</h3>
                       <ul className="space-y-3 font-mono text-gray-400">
                         <li className="hover:text-purple-400 cursor-pointer">SQL Databases (MySQL)</li>
                         <li className="hover:text-purple-400 cursor-pointer">NoSQL Databases (MongoDB)</li>
                         <li className="hover:text-purple-400 cursor-pointer">Database Design & Optimization</li>
                       </ul>
                     </div>
                     <div className="p-8 bg-gray-700/30 rounded-2xl hover:bg-gray-700/50 transition-all">
  <FiSmartphone className="text-4xl mb-6 text-green-400" />
  <h3 className="text-xl font-mono font-bold mb-8">Mobile App Development</h3>
  <ul className="space-y-3 font-mono text-gray-400">
    <li className="hover:text-green-400 cursor-pointer">Cross-Platform App Development (Flutter)</li>
    <li className="hover:text-green-400 cursor-pointer">App UI/UX Design and Prototyping</li>
    <li className="hover:text-green-400 cursor-pointer">API Integration & Backend Development</li>
  </ul>
</div>

                   </div>
                 </div>
               </section>
        
    )
}