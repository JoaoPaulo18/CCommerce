import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { UserContext } from '../../../UserContext';
import { FiSun, FiMoon, FiSearch  } from 'react-icons/fi'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Lenis from '@studio-freight/lenis';



const lenis = new Lenis({duration:2.5, wrapper:document.documentElement});
const Header = () => {
 
  const [dark,setDark] = useState(true);
  const [menu,setMenu] = useState(false);
  const [WIN,setWin] = useState(null)
  const refe = useRef(null)
// USAR O FETCH E REDUCE PARA ADICIONAR E AJUSTAR O ID DE CADA ITEM NO OBJETO CART
// CRIAR UMA VARIAVEL ESCRITA NUMERO ANTIGO, ARMAZENA O ID DO ITEM QUE FOI REMOVIDO, E NO FOREACH DIMINUI 1 APENAS DOS NUMEROS QUE FOREM MAIOR QUE ESSE ULTIMO
// AO CLICAR EM COMPRAR, VERIFICAR SE NO CART EXISTE ALGUM PRODUTO COM A MESMA VARIANTE, SE SIM APENAS ADICIONAR MAIS UMA PEÇA NA COMPRA, SE NÃO CRIAR OUTRO 

const Call = useCallback(()=>{
  const lenis = new Lenis({duration:2,wrapper:refe});
return lenis
})
const useLenis = (time) =>{
  if(!lenis.isStopped){
    lenis.raf(time*1000)
  }
}

useEffect(()=>{
  
  if(menu){
    setWin(refe.current)

    lenis.options.wrapper = WIN
    lenis.options.content = WIN


  }
  else{
    setWin(document.documentElement)
    lenis.options.wrapper = WIN
    lenis.options.content = WIN
    // lenis.options.wrapper = WIN
    // console.log(WIN)
    
  }
},[menu,lenis,WIN])
gsap.ticker.add(useLenis)


lenis.on('scroll', ScrollTrigger.update);





gsap.ticker.lagSmoothing(0)
gsap.registerPlugin(ScrollTrigger)

// Selecionando o elemento que queremos animar
setTimeout(()=>{
  gsap.to("#header", {
    scrollTrigger: {
      trigger: "#Comeca",   // O elemento que irá disparar o efeito
      start: ".5%",            // Quando a parte superior do elemento atingir 80% da tela
     // Quando a parte superior do elemento atingir 30% da tela
      scrub: false,    
      toggleActions: "play none none reverse",  
                   // Faz com que a animação seja sincronizada com o scroll
                   // Exibe marcadores para ajudar a visualizar a posição de scroll (opcional)
    },
    boxShadow:"0px .2px 0px 0px #D0D0D0",
    background: "var(--Background)",
    duration:.1                  // Cor que o texto vai mudar
  });
      
},100)
  return (
    <header id='header' className={styles.header}>
    <div className={styles.wrapper}>
    <div onClick={()=>setMenu(!menu)} className={styles.Fries}>
          <span></span>
          <span></span>
          <span></span>
       </div>

      <nav  className={`${styles.Navigation} ${menu?'ativo':'desativo'}`}>

         <span onClick={()=> setMenu(!menu)} className={styles.background}></span>

          <ul  className={styles.MainList}>
            <div>
              <h3>Menu</h3>
              <button onClick={()=> setMenu(!menu)} className={styles.close}></button>  
            </div>
           <div ref={refe}  className={styles.containerMenu}>

          <Link to={'/'}>Home</Link>
          <a onClick={(e)=>e.target.classList.toggle('active')} href="#" className={styles.Links}>
            Product
            <ul className={styles.sublist}>
              <li><a onClick={console.log('Vamos colocar aqui o setLink para colocar qual rota devemos puxar')}>Advisable</a></li>
              <li><a>Best-Seller</a></li>
              <li><a>Alphabetically-AZ</a></li>
              <li><a>Alphabetically-ZA</a></li>
              <li><a>Price-from-low-to-high</a></li>
              <li><a>Price-from-high-to-low</a></li>
              <li><a>Date-from-old-to-new</a></li>
              <li><a>Date-from-new-to-old</a></li>
            </ul>
          </a>

          <a  onClick={(e)=>e.target.classList.toggle('active')} href="#" className={styles.Links}>
            Short-by
            <ul className={styles.sublist}>
              <li><a onClick={console.log('Vamos colocar aqui o setLink para colocar qual rota devemos puxar')}>Jeans</a></li>
              <li><a>Shirts</a></li>
              <li><a>T-Shirts</a></li>
              <li><a>Sneakers</a></li>
              <li><a>Promotions</a></li>
            </ul>
          </a>

          <Link>Blog</Link>
          <Link>FAQ</Link>
          <Link>Contact</Link>
           </div>
        </ul>
      </nav>
       
       <Link className={styles.logo} to={'/'}>
       <svg xmlns="http://www.w3.org/2000/svg" width="182" height="18"><path d="M 155.146 17.975 C 153.433 17.975 151.879 17.594 150.485 16.833 C 149.108 16.055 148.019 14.988 147.218 13.63 C 146.433 12.257 146.04 10.709 146.04 8.988 C 146.04 7.266 146.433 5.727 147.218 4.37 C 148.019 2.996 149.108 1.928 150.485 1.167 C 151.879 0.389 153.441 0 155.171 0 C 156.628 0 157.942 0.265 159.111 0.794 C 160.296 1.324 161.289 2.086 162.09 3.079 L 159.591 5.462 C 158.454 4.105 157.045 3.426 155.363 3.426 C 154.322 3.426 153.393 3.666 152.576 4.146 C 151.759 4.61 151.118 5.263 150.654 6.108 C 150.205 6.952 149.981 7.912 149.981 8.988 C 149.981 10.063 150.205 11.023 150.654 11.868 C 151.118 12.712 151.759 13.374 152.576 13.854 C 153.393 14.317 154.322 14.549 155.363 14.549 C 157.045 14.549 158.454 13.862 159.591 12.488 L 162.09 14.872 C 161.289 15.881 160.296 16.651 159.111 17.181 C 157.926 17.71 156.604 17.975 155.146 17.975 Z" fill={dark?"rgba(255,255,255,1)":"rgb(0,0,0)"}></path><path d="M 138.857 17.678 L 135.613 12.836 L 135.421 12.836 L 132.033 12.836 L 132.033 17.678 L 128.141 17.678 L 128.141 0.298 L 135.421 0.298 C 136.91 0.298 138.2 0.555 139.289 1.068 C 140.394 1.581 141.243 2.309 141.836 3.253 C 142.429 4.196 142.725 5.313 142.725 6.604 C 142.725 7.895 142.421 9.013 141.812 9.956 C 141.219 10.883 140.37 11.595 139.265 12.091 L 143.037 17.678 Z M 138.785 6.604 C 138.785 5.628 138.48 4.883 137.872 4.37 C 137.263 3.84 136.374 3.575 135.205 3.575 L 132.033 3.575 L 132.033 9.633 L 135.205 9.633 C 136.374 9.633 137.263 9.369 137.872 8.839 C 138.48 8.309 138.785 7.564 138.785 6.604 Z" fill={dark?"rgba(255,255,255,1)":"rgb(0,0,0)"}></path><path d="M 99.181 17.678 L 99.157 7.25 L 94.208 15.84 L 92.454 15.84 L 87.528 7.473 L 87.528 17.678 L 83.876 17.678 L 83.876 0.298 L 87.096 0.298 L 93.391 11.098 L 99.589 0.298 L 102.785 0.298 L 102.833 17.678 Z" fill={dark?"rgba(255,255,255,1)":"rgb(0,0,0)"}></path><path d="M 76.62 17.678 L 76.596 7.25 L 71.647 15.84 L 69.893 15.84 L 64.967 7.473 L 64.967 17.678 L 61.315 17.678 L 61.315 0.298 L 64.535 0.298 L 70.83 11.098 L 77.029 0.298 L 80.224 0.298 L 80.272 17.678 Z" fill={dark?"rgba(255,255,255,1)":"rgb(0,0,0)"}></path><path d="M 48.509 17.975 C 46.763 17.975 45.186 17.586 43.776 16.808 C 42.383 16.03 41.285 14.963 40.484 13.606 C 39.7 12.232 39.307 10.692 39.307 8.988 C 39.307 7.283 39.7 5.752 40.484 4.394 C 41.285 3.021 42.383 1.945 43.776 1.167 C 45.186 0.389 46.763 0 48.509 0 C 50.255 0 51.825 0.389 53.218 1.167 C 54.612 1.945 55.709 3.021 56.51 4.394 C 57.311 5.752 57.711 7.283 57.711 8.988 C 57.711 10.692 57.311 12.232 56.51 13.606 C 55.709 14.963 54.612 16.03 53.218 16.808 C 51.825 17.586 50.255 17.975 48.509 17.975 Z M 48.509 14.549 C 49.502 14.549 50.399 14.317 51.2 13.854 C 52.001 13.374 52.626 12.712 53.074 11.868 C 53.539 11.023 53.771 10.063 53.771 8.988 C 53.771 7.912 53.539 6.952 53.074 6.108 C 52.626 5.263 52.001 4.61 51.2 4.146 C 50.399 3.666 49.502 3.426 48.509 3.426 C 47.516 3.426 46.619 3.666 45.818 4.146 C 45.017 4.61 44.385 5.263 43.92 6.108 C 43.472 6.952 43.248 7.912 43.248 8.988 C 43.248 10.063 43.472 11.023 43.92 11.868 C 44.385 12.712 45.017 13.374 45.818 13.854 C 46.619 14.317 47.516 14.549 48.509 14.549 Z" fill={dark?"rgba(255,255,255,1)":"rgb(0,0,0)"}></path><path d="M 28.76 17.975 C 27.046 17.975 25.492 17.594 24.098 16.833 C 22.721 16.055 21.632 14.988 20.831 13.63 C 20.046 12.257 19.654 10.709 19.654 8.988 C 19.654 7.266 20.046 5.727 20.831 4.37 C 21.632 2.996 22.721 1.928 24.098 1.167 C 25.492 0.389 27.054 0 28.784 0 C 30.241 0 31.555 0.265 32.724 0.794 C 33.909 1.324 34.902 2.086 35.703 3.079 L 33.204 5.462 C 32.067 4.105 30.658 3.426 28.976 3.426 C 27.935 3.426 27.006 3.666 26.189 4.146 C 25.372 4.61 24.731 5.263 24.267 6.108 C 23.818 6.952 23.594 7.912 23.594 8.988 C 23.594 10.063 23.818 11.023 24.267 11.868 C 24.731 12.712 25.372 13.374 26.189 13.854 C 27.006 14.317 27.935 14.549 28.976 14.549 C 30.658 14.549 32.067 13.862 33.204 12.488 L 35.703 14.872 C 34.902 15.881 33.909 16.651 32.724 17.181 C 31.539 17.71 30.217 17.975 28.76 17.975 Z" fill={dark?"rgba(255,255,255,1)":"rgb(0,0,0)"}></path><path d="M 9.106 17.975 C 7.392 17.975 5.838 17.594 4.445 16.833 C 3.067 16.055 1.978 14.988 1.177 13.63 C 0.392 12.257 0 10.709 0 8.988 C 0 7.266 0.392 5.727 1.177 4.37 C 1.978 2.996 3.067 1.928 4.445 1.167 C 5.838 0.389 7.4 0 9.13 0 C 10.588 0 11.901 0.265 13.07 0.794 C 14.256 1.324 15.249 2.086 16.05 3.079 L 13.551 5.462 C 12.414 4.105 11.004 3.426 9.322 3.426 C 8.281 3.426 7.352 3.666 6.535 4.146 C 5.718 4.61 5.078 5.263 4.613 6.108 C 4.165 6.952 3.94 7.912 3.94 8.988 C 3.94 10.063 4.165 11.023 4.613 11.868 C 5.078 12.712 5.718 13.374 6.535 13.854 C 7.352 14.317 8.281 14.549 9.322 14.549 C 11.004 14.549 12.414 13.862 13.551 12.488 L 16.05 14.872 C 15.249 15.881 14.256 16.651 13.07 17.181 C 11.885 17.71 10.564 17.975 9.106 17.975 Z" fill={dark?"rgba(255,255,255,1)":"rgb(0,0,0)"}></path><path d="M 167.584 176.483 L 167.584 173.172 L 182 173.172 L 182 176.483 Z" fill="rgb(0,0,0)"></path><path d="M 167.584 18 L 167.584 14.69 L 182 14.69 L 182 18 Z" fill={dark?"rgba(255,255,255,1)":"rgb(0,0,0)"}></path><path d="M 167.584 10.552 L 167.584 7.241 L 179.197 7.241 L 179.197 10.552 Z" fill={dark?"rgba(255,255,255,1)":"rgb(0,0,0)"}></path><path d="M 108.319 3.517 L 108.319 0.207 L 122.735 0.207 L 122.735 3.517 Z" fill={dark?"rgba(255,255,255,1)":"rgb(0,0,0)"}></path><path d="M 108.319 17.586 L 108.319 14.276 L 122.735 14.276 L 122.735 17.586 Z" fill={dark?"rgba(255,255,255,1)":"rgb(0,0,0)"}></path><path d="M 108.319 10.552 L 108.319 7.241 L 119.932 7.241 L 119.932 10.552 Z" fill={dark?"rgba(255,255,255,1)":"rgb(0,0,0)"}></path><path d="M 167.319 3.517 L 167.319 0.207 L 181.735 0.207 L 181.735 3.517 Z" fill={dark?"rgba(255,255,255,1)":"rgb(0,0,0)"}></path></svg>
       </Link>

       <ul className={styles.Buttons}>
        <button onClick={()=>{setDark(!dark); document.documentElement.classList.toggle('Dark')}}>
          {
            dark?
            <FiMoon color='rgb(255,255,255)' size={20}/>
            :
            <FiSun color="rgb(0,0,0)" size={20}/>
          }
        </button>

        <button>
        <FiSearch size={20} color={dark?"rgba(255,255,255,1)":"rgb(0,0,0)"} />
        </button>
       </ul>
    </div>
       
    </header>
  )
};

// Vamos criar um contexto relatando qual a pesquisa que a pessoa que fazer para assim que redirecionada ela vai puxar esse link externo que nao pode ser mudado se nao vai cagar o bglh tudo

export default Header;