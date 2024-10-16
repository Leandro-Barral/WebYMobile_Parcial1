import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import RecipesPage from './Pages/RecipesPage'

function App() {
  const [mode, setMode] = useState("light");
  const [btnStyle, setBtnStyle] = useState({backgroundColor: "white"});
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage colorMode={mode}/>} />
          <Route path="/details/:id" element={<RecipesPage colorMode={mode}/>} />
        </Routes>
      </BrowserRouter>
      <button id='modo-oscuro' style={btnStyle} onClick={() => {
        if(mode === "light"){
          setMode("dark")
          setBtnStyle({
            backgroundColor: "black",
            color: "white"
          });
        }
        else{
          setMode("light")
          setBtnStyle({
            backgroundColor: "white",
            color: "black"
          });
        }
      }}>{mode === "light" ? "Modo Oscuro" : "Modo Claro"}</button>
    </>
      
  )
}

export default App
