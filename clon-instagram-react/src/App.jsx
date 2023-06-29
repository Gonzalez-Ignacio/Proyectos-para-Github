import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { useState } from 'react'
import './App.css'
import Navbar from './componentes/Navbar';
import Nav from './componentes/Nav';
import Feed from './componentes/Feed';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Nav />
      <Feed />
      {/* <Historia /> */}
    </div>
  )
}

export default App
