import { motion } from 'framer-motion';
import {metrics} from '../assets/Metrics';

export const Metrics = () => {

return(
    <section className="py-24 px-6 bg-gray-800/50 backdrop-blur-lg">
    <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
      {metrics.map((metric, index) => (
        <motion.div 
          key={metric.label}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: index * 0.1 }}
          className="text-center p-6 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all"
        >
          <div className="text-4xl font-bold mb-2">{metric.value}</div>
          <div className="text-gray-400">{metric.label}</div>
        </motion.div>
      ))}
    </div>
  </section>
)
}