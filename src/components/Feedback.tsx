import { motion } from "motion/react"

export default function Feedback() {
    const transition = {
        duration: 1,
        delay: 1,
        ease: [0, 0.71, 0.2, 1.01],
    }
    return(
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, ease: "easeOut" }} transition={transition}  viewport={{ once: true }} className="bg-gray-900 w-full flex flex-col justify-center text-center p-10 rounded-2xl shadow-lg border-2">
            <h1 className="text-3xl font-bold mb-4 text-white">What our clients say</h1>
            <hr className="w-full mx-auto border-t-2 border-blue-600 mb-8" />
            <div className="flex flex-col md:flex-row gap-6 justify-center">
            <motion.div whileHover={{ scale: 1.07 }} className="bg-gray-800 p-6 rounded-xl flex flex-col items-center w-full md:w-1/3">
                <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Client 1"
                className="w-16 h-16 rounded-full mb-3 border-2 border-white"
                />
                <p className="text-gray-300 text-sm mb-2">"Amazing service! The team was very responsive and helpful."</p>
                <span className="text-gray-400 text-xs">- John Doe</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.07 }} className="bg-gray-800 p-6 rounded-xl flex flex-col items-center w-full md:w-1/3">
                <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Client 2"
                className="w-16 h-16 rounded-full mb-3 border-2 border-white"
                />
                <p className="text-gray-300 text-sm mb-2">"Great experience overall. Would recommend to others."</p>
                <span className="text-gray-400 text-xs">- Jane Smith</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.07 }} className="bg-gray-800 p-6 rounded-xl flex flex-col items-center w-full md:w-1/3">
                <img
                src="https://randomuser.me/api/portraits/men/65.jpg"
                alt="Client 3"
                className="w-16 h-16 rounded-full mb-3 border-2 border-white"
                />
                <p className="text-gray-300 text-sm mb-2">"Exceptional quality and fast delivery. Will use again!"</p>
                <span className="text-gray-400 text-xs">- Alex Lee</span>
            </motion.div>
            </div>
        </motion.div>
    )
}
