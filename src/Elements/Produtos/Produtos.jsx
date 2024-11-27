import React from 'react'
import styles from './Produtos.module.css'
import { Link } from 'react-router-dom'
import { UserContext } from '../../../UserContext'
const Produtos = ({link}) => {
  const [data,setData] = React.useState(null);
  const [err,setErr] = React.useState(false);
  const [loading,setLoading] = React.useState(false);
  const {setProduct} = React.useContext(UserContext);
  const ProdutoRef = React.useRef(null)
  const [scroll, setScroll] = React.useState(0)

  const url = 'https://154.38.164.159:3000/'
  // const url = 'https://localhost:3000/'


 const Plus =  React.useCallback(()=>{

  })
 const Less =  React.useCallback(()=>{
      
  })
React.useEffect(()=>{

  if(ProdutoRef.current && data){
  console.log(ProdutoRef.current.scrollWidth??null)
  console.log(ProdutoRef.current.scrollLeft=2830)
  }
},[data])

  React.useEffect(()=>{
    async function FETCH(){
      setLoading(true)
      try{
        const start = await fetch(url+link);
        const json = await start.json()
        setData(json)
   
        }
        catch(err){
          setErr(true)
        }finally{
          setLoading(false)
        }
      }
    FETCH()
  },[])


 
  return data ? 
  
  <section className={styles.wrapper}>

    <div ref={ProdutoRef} className={styles.ProdutosContainer}> 
        {data.map(item => <Link className={styles.ProdutoSingle} onClick={setProduct(item.canonical_url)} link={item.canonical_url} key={item.id}>
            
            <div className={styles.imageContainer}>
            <img src={item.images[0].src} alt="" />
            {item.tags?<h3>{item.tags.split(',')[0]}</h3>:null}
            </div>
            <div className={styles.infosContainer}>

              <h2>
                {item.name.pt} 
                {item.variants[0].promotional_price?
                <span>
                    {Math.abs(Math.floor(Math.floor(item.variants[0].promotional_price * 100) / item.variants[0].price - 100))}
                  %
                </span>
                :null
                }</h2>

                <h3>${
                  item.variants[0].promotional_price?
                  item.variants[0].promotional_price:
                  item.variants[0].price
                }

                {
                    item.variants[0].promotional_price?
                <span>
                    ${item.variants[0].price}
                </span>:
                  null
                }
          
          </h3>

          <span className={styles.variants}>{item.variants.length>1? item.variants.length:null}</span>
            </div>
        </Link>)}
    </div>

    <span style={{opacity:`${scroll==0 ? '0' : '1'}`, pointerEvents:`${scroll==0 ? 'none' : 'all'}`}} onClick={Plus} className={styles.Less}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><path fill="transparent" stroke="hsl(0, 0%, 100%)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.5 12.5 25 20l-7.5 7.5"/></svg></span>


    <span onClick={Less} className={styles.Plus}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><path fill="transparent" stroke="hsl(0, 0%, 100%)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.5 12.5 25 20l-7.5 7.5"/></svg></span>
    
  </section>
    
    : err ? <h1>Um erro ocorreu tente novamente</h1> : loading??<h1>Carregando...</h1>
}

export default Produtos