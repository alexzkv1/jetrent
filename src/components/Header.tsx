import Menu from './Menu';
import { Link } from 'react-router-dom';
import {useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const transition : object = {
        duration: 1.5,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
    }
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 100);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrolled])

    return(
    <motion.div  initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={transition} 
    className="flex justify-center z-10 relative px-2 sm:px-0">
        <div className={`lg:max-w-350 fixed w-full transition-colors duration-300 py-4 lg:rounded-2xl ${
        scrolled ? "bg-blue-800 border-2 border-gray-200" : "bg-transparent shadow-2xl"}`}>
            <div className="flex items-center justify-between px-2 sm:px-4 md:px-5 lg:px-5">
                <Menu />
               <Link to='/'><motion.img whileHover={{ scale: 1.2 }} transition={{ duration: 0.2, ease: "easeOut" }} src='./logo.svg' alt='Logo' className='w-16 h-16 lg:w-18 lg:h-18' /></Link>
                <Link to="/broneeri">
                <motion.button whileHover={{ scale: 1.15 }} transition={{ duration: 0.2, ease: "easeOut" }} className="btn relative overflow-hidden rounded-lg border-2 bg-blue-900 border-gray-400 lg:text-2xl
                font-bold text-white  transition-colors duration-300 group text-xl py-6 px-1 sm:px-3 md:px-4 lg:py-8 lg:px-5">
                    <span className="relative z-10">Broneeri</span>
                    <span className="pointer-events-none  left-0 bottom-0 w-full h-full">
                        <svg
                            className="absolute left-0 bottom-0 w-full h-full transition-all duration-500 group-hover:translate-y-0 translate-y-full"
                            viewBox="0 0 200 40"
                            preserveAspectRatio="none"
                        >
                        <path
                                d="M0,30 Q50,10 100,30 T200,30 V40 H0 Z"
                                fill="#10204"
                                fillOpacity="0.4"
                        >
                        <animate
                                    attributeName="d"
                                    dur="2s"
                                    repeatCount="indefinite"
                                    values="
                                        M0,30 Q50,10 100,30 T200,30 V40 H0 Z;
                                        M0,30 Q50,20 100,10 T200,30 V40 H0 Z;
                                        M0,30 Q50,10 100,30 T200,30 V40 H0 Z
                                    "
                        />
                        </path>
                        </svg>
                    </span>
                </motion.button>
                </Link>
            </div>
        </div>
        </motion.div>
        
    )
}