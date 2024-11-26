import React from "react"
import Header from "./Elements/HDFT/Header"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './General.css'
import Start from "./Elements/Start/Start"
import { UserStorage } from "../UserContext"
import Produtos from "./Elements/Produtos/Produtos"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import Lenis from "@studio-freight/lenis"



 function App() {

   return (
     <>
    
    <BrowserRouter>
    <UserStorage>
      <Header/>
      <Routes>
        <Route path="/" element={<Start/>}/>
        <Route path="/Produtos/*" element={<Produtos/>}/>
      </Routes>
    </UserStorage>
    </BrowserRouter>
    </>
  )
}

export default App
