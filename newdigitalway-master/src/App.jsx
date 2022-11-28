import './App.css'

import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Emploi from './pages/emploi/Emploi';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/emploi" element={<Emploi />}></Route>
      </Routes>

    </div>
  )
}

export default App
