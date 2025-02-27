import { FiGithub, FiLinkedin, FiMail} from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

export const  Contacts = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
    .then((result) => {
      setMessage('Message sent successfully! 🚀');
      form.current.reset();
    })
    .catch((error) => {
      setMessage('Failed to send message. Please try again.');
    })
    .finally(() => {
      setLoading(false);
      setTimeout(() => setMessage(''), 5000);
    });
  };


    return (
               <section id="contact" className="py-24 px-6">
                 <div className="container mx-auto max-w-4xl">
                   <div className="bg-gray-800 rounded-2xl p-12 shadow-2xl">
                     <h2 className="text-4xl font-mono mb-8">
                     <span className="text-teal-600 hover:text-teal-500 mr-5">//</span>
                      Get In Touch</h2>
                     <p className="text-xl font-mono text-gray-400 mb-12">
                     I'm always open to new opportunities and collaborations. Reach out, and let's connect!
                     </p>
                     <div className="grid md:grid-cols-2 gap-12">
                       <div className="space-y-8">
                         <div className="flex items-center gap-4">
                           
                           <a href="mailto:solomonyalew664@gmail.com" className="hover:text-blue-400 transition-colors">
                            <FiMail className="text-2xl text-blue-400" />
                           </a>
                         </div>
                         <div className="flex items-center gap-4">
                           
                           <a href="https://www.linkedin.com/in/solomon-yalew-86b03a257/" className="hover:text-blue-400 transition-colors">
                           <FiLinkedin className="text-2xl text-blue-400" />
                           </a>
                         </div>
                         <div className="flex items-center gap-4">
                           
                           <a href="https://github.com/solomon-winner" className="hover:text-blue-400 transition-colors">
                             <FiGithub className="text-2xl text-blue-400" />
                           </a>
                         </div>
                       </div>
                       <form ref={form} onSubmit = {handleSubmit} className="space-y-6">
                       <div>
                <label htmlFor="from_name" className="sr-only">Name</label>
                <input
                  id="from_name"
                  name="from_name"
                  type="text"
                  placeholder="Name"
                  className="w-full p-4 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <label htmlFor="reply_to" className="sr-only">Email</label>
                <input
                  id="reply_to"
                  name="reply_to"
                  type="email"
                  placeholder="Email"
                  className="w-full p-4 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Put Your Idea here"
                  rows="4"
                  className="w-full p-4 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send'}
              </button>
                         {message && (
                <p className={`text-center p-3 rounded-lg ${
                  message.includes('successfully') ? 'bg-green-900/50' : 'bg-red-900/50'
                }`}>
                  {message}
                </p>
              )}
                       </form>
                     </div>
                   </div>
                 </div>
               </section>
        
    )
}
