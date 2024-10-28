import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
const Header = () => {
    const [media,setMedia] = useState(false)
    const [state,setState] = useState('unactive')
    const [Hamburguer,setHamb] = useState(false)
    const [Menu,setMenu] = useState(true)
    useEffect(() => {
        const handleMediaQuery = () => {
            if (window.matchMedia("(max-width: 700px)").matches) {
                setHamb(true);
            } else {
                setHamb(false);
            }
        }
        handleMediaQuery()
    },[]);


    useEffect(() => {
        const handleMediaQuery = () => {
            if (window.matchMedia("(max-width: 450px)").matches) {
                setMedia(true);
            } else {
                setMedia(false);
            }
        }
        handleMediaQuery()
    },[]);

    function Change(){
        state == 'active' ? setState('unactive') : setState('active')
    }

  return (
    <header className={styles.header}>
        <span onClick={Hamburguer == true ? () => setMenu(!Menu) : null} className={`${styles.Hamburguer} ${Menu}`}></span>
        <Link to='/'>SHOP.CO</Link>

        <nav className={`${styles.Mainnav} ${Menu}`}>
            <ul className={styles.Ul}>
                <li><a href="">Shop</a></li>

                <li><a href="">Sobre nós</a></li>
                <li><a href="">Novos</a></li>
                <li><a href="">Estilos</a></li>
            </ul>
        </nav>

        <div  className={styles.input}>
            <img onClick={media == true ? () => Change() : null} src="../../Images/Search.svg" alt="" />
            <input  className={state} type="text" placeholder='Procure por produtos'/>
        </div>

        <span className={styles.cart}>
            <img src="../../Images/Cart.svg" alt="" />
        </span>
    </header>
  )
};

export default Header;