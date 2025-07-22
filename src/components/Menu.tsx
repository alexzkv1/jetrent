import { useState } from "react";
import { Waves, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Menu() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setOpen(true)}
            >
                <Waves className="text-white justify-start" size={28} />
            </button>

            {open && (
                <div
                    className="fixed inset-0 bg-gray-400 opacity-90 z-40"
                    onClick={() => setOpen(false)}
                />
            )}

            <div
                className={`fixed top-0 left-0 min-h-screen w-full max-w-150 bg-blue-800 border-r-4 shadow-lg z-50 transform transition-transform duration-500 ${
                    open ? "translate-x-0" : "-translate-x-full"
                } flex flex-col justify-center`}
            >
                <div className="absolute top-4 right-4 md:hidden">
                    <button onClick={() => setOpen(false)}>
                        <X size={28} className="text-white" />
                    </button>
                </div>

                <ul className="flex flex-col items-center text-5xl mt-5">
                    <li className="p-8 border-b-3"><Link onClick={() => setOpen(false)} to="/gallery">Gallerii</Link></li>
                    <li className="p-8 border-b-3"><Link onClick={() => setOpen(false)} to="/hinnakiri">Hinnakiri</Link></li>
                    <li className="p-8 border-b-3"><Link onClick={() => setOpen(false)} to="/jetid">Jetid</Link></li>
                    <li className="p-8 border-b-3"><Link onClick={() => setOpen(false)} to="/kontakt">Kontakt</Link></li>
                </ul>

                <div className="absolute bottom-3 left-0 w-full flex justify-center space-x-6 text-gray-200 text-md">
                    <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
                    <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer" aria-label="Tiktok">Tiktok</a>
                    <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">Facebook</a>
                </div>
            </div>
        </>
    );
}
