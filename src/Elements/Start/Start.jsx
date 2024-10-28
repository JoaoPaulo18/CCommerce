import React from 'react'
import styles from './Start.module.css'
import ProductsChoose from '../Helpers/ProductsChoose'
const Start = () => {
  return (
    <main>
        <section className={styles.hero}></section>
    {/* colocar os Patrocinios aqui */}
   
    <ProductsChoose title={'New Arrivals'} endPoint={'/produtos'}/>
    </main>
  )
}

export default Start