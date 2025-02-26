import { motion} from 'framer-motion';
import { FiChevronRight} from 'react-icons/fi';

export const Projects = () => {
    const projects = [
        { 
          title: 'Enterprise AI Platform', 
          role: 'Lead Architect',
          impact: 'Increased processing efficiency by 55%',
          stack: ['TensorFlow', 'Kubernetes', 'GraphQL'],
          link: '#'
        },
        { 
          title: 'Global E-Commerce System', 
          role: 'Full-Stack Lead',
          impact: 'Handled 2M+ monthly transactions',
          stack: ['React', 'Node.js', 'AWS'],
          link: '#'
        },
      ];
    return(
        <section className="py-24 px-6 relative">
        <div className="container mx-auto">
          <h2 id = "Projects" className="text-4xl font-bold mb-16">Architected Solutions</h2>
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
                  <div className="bg-gray-700 h-96 rounded-2xl shadow-2xl"></div>
                </div>
                <div className={`order-${index % 2 === 0 ? '2' : '1'}`}>
                  <div className="text-blue-400 mb-4">{project.role}</div>
                  <h3 className="text-3xl font-bold mb-6">{project.title}</h3>
                  <div className="text-xl text-gray-400 mb-8">{project.impact}</div>
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
                  <a 
                    href={project.link} 
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
                  >
                    Explore Case Study <FiChevronRight />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    )
}