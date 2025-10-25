import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './carosello.css'
import { useState} from 'react';
import notizie from '../data/notizie.json'; // dati temporanei fino integrazione DB

const slide = notizie.notizie;


function Carosello() {

     // 1. Stato per l'apertura/chiusura del modale
    const [isModalOpen, setIsModalOpen] = useState(false);
    // 2. Stato per memorizzare i dati della slide cliccata
    const [selectedSlide, setSelectedSlide] = useState(null);

    // Funzione per aprire il modale e impostare i dati
    const openModal = (item) => {
        setSelectedSlide(item);
        setIsModalOpen(true);
    };

    // Funzione per chiudere il modale
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedSlide(null); // Pulisce i dati quando si chiude
    };


    return (
        // Contenitore principale con padding e sfondo leggero
        <div className="bg-gray-50 py-12">
            <div className="w-full text-center mb-8">
                <h2 className="text-4xl font-bold text-[#1E3A8A] mb-2">Ultime Notizie</h2>
                <div className="w-24 h-1 bg-[#1E3A8A] mx-auto rounded-full"></div>
            </div>

            {/* Wrapper per centrare e limitare la larghezza del carosello */}
            <div className="carousel-wrapper">
                <Carousel
                    showArrows={true}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={5000}
                    showThumbs={false}  
                    showStatus={false}  
                >
                    {slide.map((item, index) => (
                        // Contenitore per ogni slide
                        <div key={index} className="slide-card" onClick={() => openModal(item)} >
                            <img src={item.img} alt={item.titolo} className="slide-image" />
                            <div className="slide-text-content">
                                <h3 className="text-2xl font-semibold text-gray-800">{item.titolo}</h3>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
            {/* Inizio Modale: Condizionale e Funzionale */}
            {isModalOpen && ( // Renderizza il modale solo se isModalOpen è true
                <div 
                    className="fixed inset-0 bg-gray-300/75 overflow-y-auto h-full w-full flex justify-center items-center z-50"
                    onClick={closeModal} // Chiude il modale cliccando sull'overlay scuro
                >
                    <div
                        className="relative bg-white p-6 rounded-lg shadow-xl max-w-5xl h-3/4 w-full m-4"
                        onClick={(e) => e.stopPropagation()} // Impedisce la chiusura cliccando all'interno del modale
                    >
                        {/* Bottone di Chiusura */}
                        <button
                            onClick={closeModal} // Usa la funzione di chiusura
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl font-semibold"
                        >
                            &times;
                        </button>

                        {/* Contenuto del Modale */}
                        <div className="mt-4">
                            {/* Visualizza i dati della slide selezionata */}
                            {selectedSlide && (
                                <div className="text-center">
                                    <img src={selectedSlide.img} alt={selectedSlide.titolo} className="w-full h-24 object-cover mx-auto mb-4" />
                                    <h3 className="text-3xl font-bold mb-2 text-[#1E3A8A]">{selectedSlide.titolo}</h3>
                                    <p className="text-gray-600">{selectedSlide.testo}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
            {/* Fine Modale */}
        </div>

    );
}

export default Carosello;