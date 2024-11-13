import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import HomePage from "./componentes/HomePage"
import NotFound from "./componentes/notfound"
import Navbar from "./componentes/navbar"
export default function App() {


  return (
    <BrowserRouter>

      <div />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <div />
    </BrowserRouter>
  )
}


