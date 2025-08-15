import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

type CardProps = {
    title: string;
    imageUrl: string;
    buttonText: string;
    id: string;
};

export default function Card({ title, imageUrl, buttonText, id }: CardProps) {
    return (
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4, ease: "easeOut" }}  className="bg-blue-800 border border-blue-700 rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
            <figure className="relative w-full aspect-[3/4] overflow-hidden">
                <img
                    src={imageUrl}
                    className="w-full h-full object-cover"
                    alt={title}
                    loading="lazy"
                />
                <Link 
                    to={`/jetid/${id}`}
                    className="hidden sm:absolute sm:inset-0 sm:bg-gray-800/90 sm:flex sm:items-center sm:justify-center sm:opacity-0 sm:hover:opacity-100 sm:transition-opacity sm:duration-300"
                >
                    <span className="text-white text-lg font-semibold px-4 py-2 border-2 border-white rounded-lg hover:bg-white hover:text-gray-800 transition-colors duration-300">
                        Uuri Rohkem
                    </span>
                </Link>
            </figure>
            <div className="flex flex-col justify-between flex-grow p-4">
                <div>
                    <h2 className="text-lg font-semibold text-white mb-3 pb-2 border-b border-blue-600">
                        {title}
                    </h2>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                    <Link 
                        to={`/jetid/${id}`} 
                        className="sm:hidden block w-full bg-black text-white font-medium py-2 px-4 rounded-lg text-center transition-colors duration-300"
                    >
                        Uuri Rohkem
                    </Link>
                    <Link 
                    to="/broneeri"
                    className='w-full'>
                    <motion.button
                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg text-center transition-colors duration-300"
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    whileHover={{ scale: 1.05 }}
                    >
                        {buttonText}
                    </motion.button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}