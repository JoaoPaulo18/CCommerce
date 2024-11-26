import React from 'react'
export const UserContext = React.createContext()
export const UserStorage = ({children}) => {
    const [cart,setCart] = React.useState([]);
    const [menu,setMenu] = React.useState(1);
    const [product,setProduct] = React.useState(null)
  return (
    <UserContext.Provider value={{cart,setCart,menu,setMenu,product,setProduct}}>
        {children}
    </UserContext.Provider>
  )
}

