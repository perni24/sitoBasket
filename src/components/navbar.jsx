import { useState } from 'react';

function Navbar() {
    // State per gestire l'apertura/chiusura del menu mobile
    const [isOpen, setIsOpen] = useState(false);
    const  vociMenu = ["Home", "Società", "Squadre", "Storia", "Contatti", "SafeGuarding"]
    return (
        // Container principale della navbar con sfondo e ombra
        <nav className="bg-black shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    {/* Logo e nome del sito */}
                    <div className="flex space-x-1">
                        <div>
                            <a href="#" className="flex items-center py-4">
                            <img src='./logo.png' alt='logo' className='w-40'/>
                            </a>
                        </div>
                    </div>

                    {/* Menu principale - nascosto su mobile */}
                    <div className="hidden md:flex items-center space-x-1">
                        <a href="#" className="py-4 px-2 text-[#0084c5] border-b-4 border-[#0084c5] font-semibold">Home</a>
                        <a href="#" className="py-4 px-2 text-white font-semibold hover:text-[#F97316] transition duration-300">Team</a>
                        <a href="#" className="py-4 px-2 text-white font-semibold hover:text-[#F97316] transition duration-300">News</a>
                        <a href="#" className="py-4 px-2 text-white font-semibold hover:text-[#F97316] transition duration-300">Contatti</a>
                    </div>

                    {/* Pulsante menu mobile */}
                    <div className="md:hidden flex items-center">
                        <button className="outline-none" onClick={() => setIsOpen(!isOpen)}>
                            <svg className="w-6 h-6 text-gray-500 hover:text-blue-500"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Menu mobile */}
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <a href="#" className="block py-2 px-4 text-sm hover:bg-blue-500 hover:text-white transition duration-300">Home</a>
                <a href="#" className="block py-2 px-4 text-sm hover:bg-blue-500 hover:text-white transition duration-300">Team</a>
                <a href="#" className="block py-2 px-4 text-sm hover:bg-blue-500 hover:text-white transition duration-300">News</a>
                <a href="#" className="block py-2 px-4 text-sm hover:bg-blue-500 hover:text-white transition duration-300">Contatti</a>
            </div>
        </nav>
    );
}

export default Navbar;