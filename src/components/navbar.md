# Documentazione del Componente: Navbar

Questo documento fornisce una panoramica del componente `Navbar` React.

## Indice

- [Descrizione](#descrizione)
- [Posizione del File](#posizione-del-file)
- [Caratteristiche](#caratteristiche)
- [Dipendenze](#dipendenze)
- [Props](#props)
- [Gestione dello Stato](#gestione-dello-stato)
- [Esempio di Utilizzo](#esempio-di-utilizzo)

---

### Descrizione

Il componente `Navbar` renderizza la barra di navigazione principale dell'applicazione. È progettata per essere responsive, mostrando un menu completo su schermi desktop e un menu "hamburger" a comparsa su dispositivi mobili. La navbar è fissata nella parte superiore della pagina per una facile accessibilità.

### Posizione del File

`src/components/navbar.jsx`

### Caratteristiche

- **Responsive**: Si adatta automaticamente a diverse dimensioni dello schermo.
- **Menu Hamburger**: Su schermi di piccole dimensioni (mobili), le voci di menu sono accessibili tramite un bottone a icona (hamburger).
- **Navigazione Fissa**: La barra di navigazione rimane visibile in cima alla pagina durante lo scorrimento.
- **Logo Aziendale**: Include un logo che funge da link per tornare alla homepage.
- **Routing Dinamico**: Utilizza `react-router-dom` per gestire i link di navigazione, indirizzando l'utente alle pagine appropriate.

### Dipendenze

- **React**: Utilizza l'hook `useState` per la gestione dello stato interno.
- **React Router**: Il componente `<Link>` di `react-router-dom` è usato per la navigazione tra le pagine.
- **Tailwind CSS**: L'intero stile del componente è gestito tramite le classi di utilità di Tailwind CSS.

### Props

Il componente `Navbar` non accetta alcuna prop.

### Gestione dello Stato

Il componente gestisce un singolo stato interno:

- `menuOpen` (boolean): Controlla la visibilità del menu di navigazione su schermi di piccole dimensioni. Viene attivato (`true`) o disattivato (`false`) dalla funzione `toggleMenu` quando l'utente clicca sul bottone hamburger.

### Esempio di Utilizzo

Per utilizzare la `Navbar`, importala e inseriscila nel layout principale della tua applicazione, come ad esempio in `App.jsx`.

```jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
// ... importa altre pagine

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* ... definisci altre rotte */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
```
