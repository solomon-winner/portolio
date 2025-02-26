import {  FiCode, FiDatabase, FiGlobe} from 'react-icons/fi';

export const Skills = () => {
    return (
               <section className="py-24 px-6 bg-gray-800/50">
                 <div className="container mx-auto">
                   <h2 className="text-4xl font-bold mb-16">Technical Spectrum</h2>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     <div className="p-8 bg-gray-700/30 rounded-2xl hover:bg-gray-700/50 transition-all">
                       <FiCode className="text-4xl mb-6 text-blue-400" />
                       <h3 className="text-2xl font-bold mb-4">Frontend Mastery</h3>
                       <ul className="space-y-3 text-gray-400">
                         <li>React Ecosystem Expert</li>
                         <li>State Management Patterns</li>
                         <li>Web Performance Optimization</li>
                       </ul>
                     </div>
                     <div className="p-8 bg-gray-700/30 rounded-2xl hover:bg-gray-700/50 transition-all">
                       <FiDatabase className="text-4xl mb-6 text-purple-400" />
                       <h3 className="text-2xl font-bold mb-4">Backend Expertise</h3>
                       <ul className="space-y-3 text-gray-400">
                         <li>Distributed Systems</li>
                         <li>Microservices Architecture</li>
                         <li>Database Optimization</li>
                       </ul>
                     </div>
                     <div className="p-8 bg-gray-700/30 rounded-2xl hover:bg-gray-700/50 transition-all">
                       <FiGlobe className="text-4xl mb-6 text-green-400" />
                       <h3 className="text-2xl font-bold mb-4">DevOps & Cloud</h3>
                       <ul className="space-y-3 text-gray-400">
                         <li>AWS Certified Solutions</li>
                         <li>CI/CD Pipelines</li>
                         <li>Infrastructure as Code</li>
                       </ul>
                     </div>
                   </div>
                 </div>
               </section>
        
    )
}