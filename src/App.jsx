import { Outlet } from "react-router-dom"
import Navbar from "./components/navBar.jsx"

function App() {

  return (
    <>
      <div><Navbar/></div>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
