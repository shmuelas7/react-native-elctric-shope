import React,{createContext,useState} from 'react'

export const DataContext = createContext()

const ShopContext = (props) => {
    const [shoppingItems, setShoppingItems] = useState([])
    return (
        <DataContext.Provider value={{shoppingItems:shoppingItems,setShoppingItems:setShoppingItems}}>
            {props.children}
        </DataContext.Provider>
    )
}

export default ShopContext