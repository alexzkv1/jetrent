import { Waves } from 'lucide-react';
import { Link } from "react-router";

export default function Header() {
    return(
        <header className="px-5 py-4 w-300 bg-blue-700 border-gray-400 border-3 mt-5 rounded-2xl shadow-2xl">
            <div className="flex justify-between items-center">
                <Waves className="text-gray-200 opacity-80 justify-start" size={28} />
                <button className="relative overflow-hidden px-4 py-2 rounded-lg border-2 bg-blue-900 border-gray-400 text-2xl 
                font-bold text-gray-200 opacity-80 transition-colors duration-300 group">
                    <span className="relative z-10">Broneeri</span>
                    <span className="pointer-events-none  left-0 bottom-0 w-full h-full">
                        <svg
                            className="absolute left-0 bottom-0 w-full h-full transition-all duration-500 group-hover:translate-y-0 translate-y-full"
                            viewBox="0 0 200 40"
                            preserveAspectRatio="none"
                        >
                        <path
                                d="M0,30 Q50,10 100,30 T200,30 V40 H0 Z"
                                fill="#10204b"
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
                </button>
            </div>
        </header>
    )
}