import { useState } from "react";
import { Waves } from 'lucide-react';

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
                className={`fixed top-0 left-0 h-full w-150 bg-blue-950 border-r-4 border-gray-300 shadow-lg z-50 transform transition-transform duration-500 ${
                    open ? "translate-x-0" : "-translate-x-full"
                } flex flex-col justify-center`}
            >
                <ul className="flex flex-col items-center text-5xl">
                    <li className="p-10 border-b-3">Gallery</li>
                    <li className="p-10 border-b-3">About</li>
                    <li className="p-10 border-b-3">Contact</li>
                </ul>
                <div className="absolute bottom-8 left-0 w-full flex justify-center space-x-6">
                    <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" >Instagram</a>
                </div>
            </div>
        </>
    );
}