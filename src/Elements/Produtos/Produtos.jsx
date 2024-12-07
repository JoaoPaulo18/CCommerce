import React from 'react'
import styles from './Produtos.module.css'
import { Link } from 'react-router-dom'
import { UserContext } from '../../../UserContext'
import { TbMathMaxMin } from 'react-icons/tb'
const Produtos = ({link}) => {


  const [data,setData] = React.useState(null);
  const [err,setErr] = React.useState(false);
  const [loading,setLoading] = React.useState(false);
  const [end,setEnd] = React.useState(false);
  const {setProduct} = React.useContext(UserContext);
  const ProdutoRef = React.useRef(null);
  const Wrapper = React.useRef(null);
  const [start,setStart] = React.useState(true);
  const [contagem,setContagem] = React.useState(0);
  const [debug,setDebug] = React.useState(0);
  const [TamanhoSection, setTamanho] = React.useState(0);

  const url = 'https://cyberneticsonline.zapto.org:3000/'

//Para fazer a contagem, pegar o total de produtos e diminuir no Tamanho Section
React.useEffect(()=>{
  if(Wrapper.current)
  setTamanho(+(Wrapper.current.getBoundingClientRect().width / (250+19.2)).toFixed(2))
if(ProdutoRef.current)
{
  if(Math.floor(ProdutoRef.current.getBoundingClientRect().left) > 0) setDebug(Math.floor(ProdutoRef.current.getBoundingClientRect().left))

  setContagem(ProdutoRef.current.childNodes.length)
} 

},[Wrapper,ProdutoRef,data])




const Less = React.useCallback(()=>{
  if(end){
    setStart(true)
 
    if(TamanhoSection<Math.floor(TamanhoSection)+0.1){
      
      if(debug > 0){
        console.log(debug)
        ProdutoRef.current.style.left = `${ProdutoRef.current.getBoundingClientRect().left + 250 - debug + 19.2 }px`
      }
      else
        ProdutoRef.current.style.left = `${ProdutoRef.current.getBoundingClientRect().left + 250 + 19.2 }px`
    }

    else if(TamanhoSection<Math.floor(TamanhoSection)+0.6){
      console.log('final')
  
      if(Math.floor(ProdutoRef.current.getBoundingClientRect().left) > 0)
        ProdutoRef.current.style.left = `${ProdutoRef.current.getBoundingClientRect().left + Math.abs(250 * (Math.abs((TamanhoSection-Math.floor(TamanhoSection))) - 1) ) +19.2 + 81}px`
      else 
        ProdutoRef.current.style.left = `${ProdutoRef.current.getBoundingClientRect().left + Math.abs(250 * (Math.abs((TamanhoSection-Math.floor(TamanhoSection))) - 1) ) +19.2 }px`

      }

    else{
      console.log('final')
  
      if(Math.floor(ProdutoRef.current.getBoundingClientRect().left) > 0)
    ProdutoRef.current.style.left = `${ProdutoRef.current.getBoundingClientRect().left + Math.abs(250 * (Math.abs((TamanhoSection-Math.floor(TamanhoSection))) - 1) ) + 250+19.2 + 81 }px`
  

    else{
      console.log('final')
    ProdutoRef.current.style.left = `${ProdutoRef.current.getBoundingClientRect().left + Math.abs(250 * (Math.abs((TamanhoSection-Math.floor(TamanhoSection))) - 1) ) + 250+19.2  }px`
    }
    }
    setEnd(false);
    }else{
      ProdutoRef.current.style.left = `${ProdutoRef.current.getBoundingClientRect().left + 250 + 19.2 + debug   }px`
    }
    setContagem(contagem+1)
  },[TamanhoSection,start,contagem,debug])
  
  
  const Plus = React.useCallback(()=>{
    
      if(start){
      setEnd(true)
      if(TamanhoSection<Math.floor(TamanhoSection)+0.1){
     
        if(Math.floor(ProdutoRef.current.getBoundingClientRect().left) > 0)
          ProdutoRef.current.style.left = `${ProdutoRef.current.getBoundingClientRect().left - 250 - debug -19.2 }px`
        else
          ProdutoRef.current.style.left = `${ProdutoRef.current.getBoundingClientRect().left - 250 -19.2 }px`
      }

      else if(TamanhoSection<Math.floor(TamanhoSection)+0.6){
        if(Math.floor(ProdutoRef.current.getBoundingClientRect().left) > 0)
          ProdutoRef.current.style.left = `${ProdutoRef.current.getBoundingClientRect().left - Math.abs(250 * (Math.abs((TamanhoSection-Math.floor(TamanhoSection))) - 1) ) -19.2 - debug}px`
        else 
          ProdutoRef.current.style.left = `${ProdutoRef.current.getBoundingClientRect().left - Math.abs(250 * (Math.abs((TamanhoSection-Math.floor(TamanhoSection))) - 1) ) -19.2 }px`

        }

      else{
        if(Math.floor(ProdutoRef.current.getBoundingClientRect().left) > 0)

      ProdutoRef.current.style.left = `${ProdutoRef.current.getBoundingClientRect().left - Math.abs(250 * (Math.abs((TamanhoSection-Math.floor(TamanhoSection))) - 1) ) - 250-19.2 -debug }px`

      else
      ProdutoRef.current.style.left = `${ProdutoRef.current.getBoundingClientRect().left - Math.abs(250 * (Math.abs((TamanhoSection-Math.floor(TamanhoSection))) - 1) ) - 250-19.2  }px`
      }
      setStart(false);
      }else{
        ProdutoRef.current.style.left = `${ProdutoRef.current.getBoundingClientRect().left - 250-19.2-debug  }px`
     }
setContagem(contagem-1)
},[TamanhoSection,start,contagem,debug])

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
  
  <section ref={Wrapper}  className={styles.wrapper}>
    <div  ref={ProdutoRef} style={{left:'0px'}}  className={styles.ProdutosContainer}> 
        {data.map(item => <Link className={styles.ProdutoSingle}  onClick={()=>setProduct(item.canonical_url)} link={item.canonical_url} key={item.id}>
            
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

          {item.variants.length>1?<span className={styles.variants}>{item.variants.length} Styles Available</span>:null}
            </div>
        </Link>)}
    </div>

    <span 
style={{display :`${(contagem - Math.round(TamanhoSection)) >= Math.round(data.length - Math.round(TamanhoSection))? 'none' : 'block'}`, pointerEvents:`${(contagem - Math.round(TamanhoSection)) >= Math.round(data.length - Math.round(TamanhoSection)) ? 'none' : 'all'}`}}  onClick={Less} className={styles.Less}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><path fill="transparent" stroke="hsl(0, 0%, 100%)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.5 12.5 25 20l-7.5 7.5"/></svg></span> 


    <span     style={{display:`${(contagem-Math.round(TamanhoSection))==0 ? 'none' : 'block'}`, pointerEvents:`${(contagem-Math.round(TamanhoSection))==0 ? 'none' : 'all'}`}}   onClick={Plus} className={styles.Plus}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><path fill="transparent" stroke="hsl(0, 0%, 100%)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.5 12.5 25 20l-7.5 7.5"/></svg></span>

  </section>
    
    : err ? <h1>Um erro ocorreu tente novamente</h1> : loading??<h1>Carregando...</h1>
}

export default Produtos