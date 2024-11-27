import React from 'react'
import styles from './Start.module.css'
import Title from '../Helpers/Title'
import Subtitle from '../Helpers/Subtitle'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import Produtos from '../Produtos/Produtos';
import Woman from '../../../Images/Mulher1.png'
const Start = () => {
  // gsap.registerPlugin(ScrollTrigger)

  setTimeout(()=>{
    alert('Olá, esse site ainda esta em desenvolvimento, esse é um grande projeto o qual criei meu proprio server Node.js usando a VPS da CONTABO, e utilizo a API da nuvemshop para produtos e finalização de compra, utilizo GSAP e LENIS para animação e scroll suave, espero que goste :)')
    gsap.to("#Carrossel", {
      scrollTrigger: {
        trigger: "#Comeca",   
        start: "top 70%",
        end:"bottom 0%",              
        scrub: .1
      },
      transform:"translateX(-850px)"                
    });
    gsap.to("#Up", {
      scrollTrigger: {
        trigger: "#Comeca",   
        start: "top 70%",  // Quando o topo do trigger atinge 70% da viewport
        once: true         // Executa apenas uma vez
      },
      scale: 1,            // Define o estado final do scale
      duration: 1.5,       // Duração da animação
      ease: "power2.out"   // Tipo de easing para suavizar o efeito
    });
    

  },100)

  return (
    <section id='StartHeader'  className={styles.start}> 
        <section className={styles.Video}>
          <video src="../../Images/VideoHero.mp4" loop preload='auto' playsInline autoPlay muted></video>
        </section>

    <section id='Comeca' className={styles.Others}>

      <div className={styles.Welcome}>
        <div  className={styles.title}>
          <Subtitle>Welcome to</Subtitle>
          <Title>CCOMMERCE</Title>
        </div>     
      </div>

      <div id='Up' className={styles.Up}>
        <div id='Carrossel' className={styles.carrosselContainer}>

          <img src={Woman} alt="" />
          <img src="../../../Images/Mulher 2.jpg" alt="" />
          <img src="../../../Images/Mulher 3.png" alt="" />
          <img src="../../../Images/Mulher 4.png" alt="" />
          <img src="../../../Images/Mulher 5.png" alt="" />
          <img src="../../../Images/Mulher 6.png" alt="" />
        </div>
      </div>

      <div className={styles.styleGame}>
      <div  className={styles.title}>
          <Title>Elevating Your Style Game</Title>
          <Subtitle>Discover the Perfect Blend of Comfort and Trend with Our Exclusive Collection. Explore Deals on Jeans, Sneakers, and More!</Subtitle>
      </div>

      <nav className={styles.gameContainer}>
        <div>
        <li className='two-row'>
          <h2>Jeans</h2>
          <p>Style and comfort meet in our collection of jeans. Discover the latest trends and perfect cuts for an impeccable look.</p>
          <img className={styles.Jeans} src="../../../Images/Jeans.png" alt="" />
        </li>

        <li>
          <h2>Shirts</h2>
          <img className={styles.Shirt} src="../../Images/Shirt.png" alt="" />
        </li>
        </div>


        <li>
        <img className={styles.Prom1} src="../../Images/Promotion.png" alt="" />
          <h2>Promotions</h2>
          <p>Explore exclusive deals on our top products. The perfect opportunity to enrich your wardrobe with trendy pieces at affordable prices.</p>
          <img className={styles.Prom2} src="../../Images/Promotion2.png" alt="" />
        </li>

      <div>


        <li>
          <h2>T-Shirts</h2>
          <img  className={styles.TShirt} src="../../Images/TShirt.png" alt="" />
        </li>

       

        <li className='two-row'>
          <h2>Sneakers</h2>
          <p>Passion for fashion and comfort is reflected in every pair of sneakers. Experience style and functionality in a single step.</p>
          <img className={styles.Sneakers}  src="../../Images/Sneakers.png" alt="" />
        </li>
      </div>
      <div className={styles.Glow}>

       <svg xmlns="http://www.w3.org/2000/svg" width="716" height="743"><path d="M 197 0.5 L 715.5 743 L 0.5 20 Z" fill="hsl(0, 0%, 100%)"></path></svg>  
      </div>

      <div className={styles.Glow2}>

       <svg xmlns="http://www.w3.org/2000/svg" width="716" height="743"><path d="M 197 0.5 L 715.5 743 L 0.5 20 Z" fill="hsl(0, 0%, 100%)"></path></svg>  
      </div>
      </nav>
      {
      /*OPACITY: 0.2
      BLUR:64px

      Colocar o SVG dentro de uma div grande e aplicar o opacity no svg e blur na div
      */}
      </div>

      <div className={styles.Produtos}>
      <Title>TRENDING NOW</Title>
      <Produtos link='produtos?per_page=10'/>
      <Produtos link='produtos?per_page=10'/>
      </div>
    </section>


    </section>
  )
}

export default Start