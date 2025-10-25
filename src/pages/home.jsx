import Carosello from "../components/carosello";

function Home() {
    return (
        <>
            <div className="relative w-full h-screen">
                {/* Sfondo che copre solo l'area visibile inizialmente */}
                <img src="/sfondo.jpg" alt="" className="absolute top-0 left-0 w-full h-full object-cover" />

                {/* Div per l'ombra sopra l'immagine */}
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 shadow-sm"></div>

                {/* Logo e scritte centrati sopra lo sfondo */}
                <div className="flex flex-col justify-center items-center w-full h-full absolute top-0 left-0">
                    <img src="/logo.png" alt="Logo" className="max-w-[150px] sm:max-w-[250px] md:max-w-[400px] mb-4" />

                    <div className="flex flex-col justify-center items-center">
                        {/* Descrizione 1 */}
                        <span className="text-white font-bold text-sm sm:text-base md:text-lg lg:text-3xl mt-2">
                            Un punto di riferimento per Basket e Minibasket
                        </span>

                        {/* Descrizione 2 */}
                        <span className="text-white font-bold text-sm sm:text-base md:text-lg lg:text-3xl mt-1">
                            a Trescore Balneario e dintorni dal 1962
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <Carosello/>
            </div>
        </>
    );
}

export default Home;
