import React, { useEffect, useState } from 'react'
import styles from './ProdutctsChoose.module.css'
const ProductsChoose = ({title, endPoint}) => {
    const [products,setProducts] = useState(null)
    useEffect(()=>{
        async function Request() {
            const pedido = await fetch(`http://localhost:3000${endPoint}`)
            setProducts(await pedido.json())
        }

        Request()
    },[endPoint])

  return (
    <section>
        <h2>{title}</h2>
        {
            products != null?
            products.map(product => {
                console.log(product)
            return <div className={styles.singlesProduct} key={product.id}>
                <img src={product.images[0].src} alt="" />
                <h3>{product.name.pt}</h3>
                <h4>{product.variants[0].price}</h4>
            </div>}):
            null
        }
    </section>
  )
}

export default ProductsChoose