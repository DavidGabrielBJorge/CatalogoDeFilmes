import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {
  return (
      <div className='App'>
        <Navbar></Navbar>
        <h2>Film catalog</h2>
        <Outlet></Outlet>
      </div>
  )
}

export default App
