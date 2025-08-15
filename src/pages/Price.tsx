import PriceCard from "../components/PriceCard";
import { motion } from "motion/react";

export default function Price() {
  return (
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-full bg-[#1f2937]/95 rounded-xl border-2 py-5 mt-10 md:mt-20 mx-auto">
            <div className="bg-gray-900 border-2 rounded-2xl max-w-4xl mx-5 lg:mx-auto px-5 sm:px-6 py-4 mb-8 shadow-2xl">
              <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold text-white text-center'>Hinnad</h1>
              <hr className="border-b  my-4" />
              <p className="text-base sm:text-lg text-gray-300 text-center max-w-3xl mx-auto py-4 sm:py-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc bibendum, mi at bibendum scelerisque, est ligula pellentesque turpis, nec placerat nunc dui non dui. 
                Donec iaculis finibus erat vitae mattis. Nunc eget nibh gravida libero sodales tempus. Integer tincidunt elit.
              </p>
            </div>
            <div className="pb-5 flex flex-col items-center px-10">
              <motion.div className="flex items-center justify-between w-full mb-2 mt-5"
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              variants={{
              hidden: {},
              show: {
              transition: { staggerChildren: 0.1 }
              }
              }}>
              <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, x: -20 },
                show: { opacity: 1, x: 0, transition: { duration: 0.4 } }
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-2xl sm:text-4xl font-bold text-white text-left">
                Seadoo GTI-130 / Seadoo SPARK Trixx
              </motion.h2>
              <div className="lg:flex sm:grid sm:grid-cols-1 pl-1 justify-end">
                <img
                src="/gti-130.png"
                alt="Jetski"
                width={150}
                height={150}
                className="object-cover"
                />
                <img
                src="/spark-icon.png"
                alt="Jetski"
                width={150}
                height={150}
                className="object-cover"
                />
              </div>
              </motion.div>
              <hr className="border-b w-full mt-2" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-4">
              <PriceCard 
              time='30 minutit' 
              price="50€" 
              features={["Päästevestid kaasas", "Täis paak kütust", "Ohutusjuhend", "Kuni 2 inimest"]} 
              />
              <PriceCard 
              time='1 tund' 
              price="100€" 
              features={["Päästevestid kaasas", "Täis paak kütust", "Ohutusjuhend", "Kuni 2 inimest"]} 
              />
              <PriceCard 
              time='1 päev' 
              price="150€" 
              features={["Päästevestid kaasas", "Täis paak kütust", "Ohutusjuhend", "Kuni 2 inimest"]} 
              />
            </div>
            <div className="mt-30 pb-5 flex flex-col items-center px-10">
              <motion.div className="flex items-center justify-between w-full mb-2 mt-5"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
              hidden: {},
              show: {
              transition: { staggerChildren: 0.1 }
              }
              }}>
              <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, x: -20 },
                show: { opacity: 1, x: 0, transition: { duration: 0.4 } }
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-2xl sm:text-4xl font-bold text-white text-left">
                Yamaha GP1800R SVHO
              </motion.h2>
              <div className="lg:flex sm:grid sm:grid-cols-1 pl-1 justify-end ">
                <img
                src="/yamaha-icon.jpg"
                alt="Jetski"
                width={150}
                height={150}
                className="object-cover"
                />
              </div>
              </motion.div>
              <hr className="border-b w-full mt-2" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-4">
              <PriceCard 
              time='30 minutit' 
              price="150€" 
              features={["Päästevestid kaasas", "Täis paak kütust", "Ohutusjuhend", "Kuni 2 inimest"]} 
              />
              <PriceCard 
              time='1 tund' 
              price="300€" 
              features={["Päästevestid kaasas", "Täis paak kütust", "Ohutusjuhend", "Kuni 2 inimest"]} 
              />
              <PriceCard 
              time='1 päev' 
              price="650€" 
              features={["Päästevestid kaasas", "Täis paak kütust", "Ohutusjuhend", "Kuni 2 inimest"]} 
              />
            </div>
          </div>
        </div>
      </div>
  );
}