
import Hero from '../components/Hero';
import Card from '../components/Card';
import Feedback from '../components/Feedback';
import { motion } from 'motion/react';

export default function Main() {
    return(
        <>
        <div className='flex items-center justify-center min-h-screen'>
        <div className="w-full flex flex-col items-center">
          <Hero />
          <motion.div transition={{ duration: 0.4, ease: "easeOut" }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} whileHover={{ scale: 1.05 }} viewport={{ once: true }}  className="w-full max-w-400 px-10 bg-[#1f2937]/95 rounded-2xl border-3 py-5 mt-20">
            <motion.h1 whileHover={{ scale: 1.08 }} transition={{ duration: 0.4, ease: "easeOut" }} viewport={{ once: true }}  className="text-4xl font-semibold text-white text-center bg-gray-900/90 border-2 rounded-2xl shadow-lg max-w-7xl mx-auto px-6 py-4 mb-10">
            Meie Jetid
            </motion.h1>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl gap-5 px-4 mx-auto">
                <Card title='Sea-Doo Gti-130'  buttonText='Broneeri' imageUrl='./GTI.jpg' id='gti' />
                <Card title='Yamaha GP1800R SVHO' buttonText='Broneeri' imageUrl='./Yamaha.jpg' id='yamaha' />
                <Card title='Sea-Doo Spark Trixx' buttonText='Broneeri' imageUrl='./Spark.jpg' id='spark' />
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className='mt-30'>
      <Feedback />
      </div>
     </>
    )
}