import { FiGithub, FiLinkedin, FiMail} from 'react-icons/fi';

export const  Contacts = () => {
    return (
               <section id="contact" className="py-24 px-6">
                 <div className="container mx-auto max-w-4xl">
                   <div className="bg-gray-800 rounded-2xl p-12 shadow-2xl">
                     <h2 className="text-4xl font-bold mb-8">Strategic Collaboration</h2>
                     <p className="text-xl text-gray-400 mb-12">
                       Let's architect solutions that push technological boundaries and deliver measurable business impact.
                     </p>
                     <div className="grid md:grid-cols-2 gap-12">
                       <div className="space-y-8">
                         <div className="flex items-center gap-4">
                           <FiMail className="text-2xl text-blue-400" />
                           <a href="mailto:contact@example.com" className="hover:text-blue-400 transition-colors">
                             contact@example.com
                           </a>
                         </div>
                         <div className="flex items-center gap-4">
                           <FiLinkedin className="text-2xl text-blue-400" />
                           <a href="#" className="hover:text-blue-400 transition-colors">
                             linkedin.com/in/yourprofile
                           </a>
                         </div>
                         <div className="flex items-center gap-4">
                           <FiGithub className="text-2xl text-blue-400" />
                           <a href="#" className="hover:text-blue-400 transition-colors">
                             github.com/yourusername
                           </a>
                         </div>
                       </div>
                       <form className="space-y-6">
                         <input
                           type="text"
                           placeholder="Organization"
                           className="w-full p-4 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400"
                         />
                         <input
                           type="email"
                           placeholder="Strategic Contact Email"
                           className="w-full p-4 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400"
                         />
                         <textarea
                           placeholder="Challenge Statement"
                           rows="4"
                           className="w-full p-4 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400"
                         />
                         <button
                           type="submit"
                           className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-lg font-semibold transition-all"
                         >
                           Initiate Partnership
                         </button>
                       </form>
                     </div>
                   </div>
                 </div>
               </section>
        
    )
}