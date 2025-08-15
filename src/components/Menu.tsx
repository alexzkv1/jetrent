import { useState } from "react";
import { Waves, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "motion/react";

export default function Menu() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <motion.button whileHover={{ scale: 1.3 }}
                onClick={() => setOpen(true)}
            >
                <Waves className="text-white justify-start" size={28} />
            </motion.button>

            {open && (
                <div
                    className="fixed inset-0 bg-gray-400 opacity-90 z-40"
                    onClick={() => setOpen(false)}
                />
            )}
            <div
                className={`fixed top-0 left-0 min-h-screen w-full max-w-150 bg-blue-800 border-r-4 shadow-lg z-50 transform transition-all duration-500  ${
                    open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                } flex flex-col justify-center`}
                style={{ pointerEvents: open ? "auto" : "none" }}
            >
                <div className="absolute top-4 right-4 md:hidden">
                    <button onClick={() => setOpen(false)}>
                        <X size={28} className="text-white" />
                    </button>
                </div>

                <ul className="flex flex-col items-center text-5xl mt-5">
                    <motion.li whileHover={{ scale: 1.2 }} className="p-8"><Link onClick={() => setOpen(false)} className="duration-500 hover:text-gray-400" to="/gallery">Gallerii</Link></motion.li>
                    <hr className="border-2 w-full max-w-80 rounded-2xl" />
                    <motion.li whileHover={{ scale: 1.2 }} className="p-8"><Link onClick={() => setOpen(false)} className="duration-500 hover:text-gray-400" to="/hinnakiri">Hinnakiri</Link></motion.li>
                    <hr className="border-2 w-full max-w-80 rounded-2xl" />
                    <motion.li whileHover={{ scale: 1.2 }} className="p-8"><Link onClick={() => setOpen(false)} className="duration-500 hover:text-gray-400" to="/kontakt">Kontakt</Link></motion.li>
                    <hr className="border-2 w-full max-w-80 rounded-2xl" />
                </ul>

                <div className="absolute bottom-3 left-0 w-full flex justify-center space-x-6 text-gray-200 text-md">
                    <motion.a whileHover={{ scale: 1.1   }} href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="duration-500 hover:text-gray-400" aria-label="Instagram">Instagram</motion.a>
                    <motion.a whileHover={{ scale: 1.1 }} href="https://tiktok.com/" target="_blank" rel="noopener noreferrer" className="duration-500 hover:text-gray-400" aria-label="Tiktok">Tiktok</motion.a>
                    <motion.a whileHover={{ scale: 1.1 }} href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="duration-500 hover:text-gray-400" aria-label="Facebook">Facebook</motion.a>
                </div>
            </div>
        </>
    );
}
