import React from "react"
import Header from "./Elements/HDFT/Header"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './General.css'
import Start from "./Elements/Start/Start"
function App() {
// function AdicionarCarrinho(){
//   fetch('http://localhost:3000/carrinho')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data); // Processar os dados dos produtos
//     })
//     .catch(error => {
//         console.error('Erro ao buscar produtos:', error);
//     });
//   return (
//     <>
//       <button onClick={AdicionarCarrinho()}>Adicionar Carrinho</button>
//     </>
//   )
// }
// fetch('http://localhost:3000/carrinho')
// .then(response => response.json())
// .then(data => {
//     console.log(data); // Processar os dados dos produtos
// })
// .catch(error => {
//     console.error('Erro ao buscar produtos:', error);
// });


// fetch('http://localhost:3000/produtos')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data); // Processar os dados dos produtos
//     })
//     .catch(error => {
//         console.error('Erro ao buscar produtos:', error);
//     });





  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Start/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
