import { motion} from 'framer-motion';
import { FiChevronRight} from 'react-icons/fi';
import { projects } from '../assets/Projects';
export const Projects = () => {

    return(
        <section className="py-24 px-6 relative">
        <div className="container mx-auto">
          <h2 id = "Projects" className="text-4xl font-mono mb-16">
          <span className="text-teal-600 hover:text-teal-500">//</span> Projects</h2>
          <div className="space-y-24">
            {projects.map((project, index) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={`order-${index % 2 === 0 ? '1' : '2'}`}>
                <div 
                  className="bg-gray-700 h-[10rem] md:h-[15rem] rounded-2xl shadow-2xl bg-cover bg-center"
                  style={{ backgroundImage: project.img ? `url(${project?.img})` : 'none' }}
                >
                  {!project.img && (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      Image coming soon
                    </div>
                  )}
                </div>
                </div>
                <div className={`order-${index % 2 === 0 ? '2' : '1'}`}>
                  <div className="text-blue-400 mb-4">{project.role}</div>
                  <h3 className="text-3xl font-mono mb-6">{project.title}</h3>
                  <div className="text-[1rem] text-gray-400 mb-8 font-thin">{project.description}</div>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.stack.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-4 py-2 bg-gray-700 rounded-full text-sm hover:bg-gray-600 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project?.link?<a 
                    href={project.link} 
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
                  >
                    Live Demo <FiChevronRight />
                  </a>: null }
                 { project?.github?<a 
                    href={project.github} 
                    className="ml-5 inline-flex items-center gap-2 text-cyan-500 hover:text-blue-300"
                  >
                    Github Code <FiChevronRight />
                  </a>: null}

                  { project?.api?<a 
                    href={project.api} 
                    className="ml-5 inline-flex items-center gap-2 text-cyan-500 hover:text-blue-300"
                  >
                   Github Code of API<FiChevronRight />
                  </a>: null}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    )
}