import { Link } from 'react-router-dom' 
import { useState } from 'react'

function Navbar() {
    // Stato per gestire l'apertura del menu (true = aperto, false = chiuso)
    const [menuOpen, setMenuOpen] = useState(false); 

    // Lista dei nomi delle voci del menu
    const vociMenu = ["Home", "Società", "Squadre", "Storia", "Contatti", "SafeGuarding"]

    // Funzione per alternare lo stato di apertura del menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Inverte il valore di menuOpen
    }

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed top-0 left-0 w-full z-50"> {/* Navbar con sfondo chiaro o scuro */}
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"> {/* Wrapper per allineare gli elementi */}
                
                {/* Link al logo, che riporta alla home */}
                <Link to='/' className="flex items-center space-x-2 rtl:space-x-reverse">
                    <img src="/logo2.png" className="h-15" /> {/* Logo dell'app */}
                </Link> 

                {/* Bottone hamburger per il menu mobile */}
                <button
                    onClick={toggleMenu} // Aggiungi il gestore per il click sul bottone
                    data-collapse-toggle="navbar-default" // Indica il controllo di visibilità del menu
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default" // Definisce quale sezione è controllata dal bottone
                    aria-expanded={menuOpen ? "true" : "false"} // Modifica aria-expanded per l'accessibilità
                >
                    <span className="sr-only">Open main menu</span> {/* Descrizione per gli screen reader */}
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg> {/* Icona hamburger */}
                </button>

                {/* Menu che viene mostrato quando menuOpen è true (visibile in modalità mobile) */}
                <div className={`w-full md:block md:w-auto ${menuOpen ? 'block' : 'hidden'}`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {/* Mappa attraverso le voci del menu e crea un elemento <li> per ciascuna */}
                        {vociMenu.map((voce, index) => (
                            <li key={index}>
                                <Link 
                                    to={voce === "Home" ? "/" : "/" + voce} // Imposta il percorso corretto per ogni voce del menu
                                    className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    {voce} 
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
