import React from 'react'
import styles from './Email.module.css'
import Roupas from '../../../Images/Roupas.png'
import Title from '../Helpers/Title'
import Subtitle from '../Helpers/Subtitle'
import Button from '../Helpers/Button'
const Email = () => {
  return (
    <section className={styles.EmailContainer}>
        <div className={styles.imagesContainer}>
            <img src={Roupas} alt="" />
            <img src={Roupas} alt="" />
            <img src={Roupas} alt="" />
            <img src={Roupas} alt="" />
            <img src={Roupas} alt="" />
            <img src={Roupas} alt="" />
        </div>
        <div className={styles.EmailTexts}>
        <Title>Discover Style Just a Button Press Away!</Title>
        <form>
            <input type="email" className={styles.input} placeholder='Your email adress'/>
            <Button>Subscribe</Button>
        </form>

        <Subtitle>Instantly access the latest fashion trends and exclusive deals on our site. Discover your perfect style in a few clicks!</Subtitle>
        </div>
    </section>
  )
}

export default Email