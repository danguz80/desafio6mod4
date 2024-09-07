import {createContext, useState, useEffect} from "react";
	export const CartContext = createContext();

	const CartProvider = ({children}) => { 

			const [cart, setCart] = useState([]) 		

			const getData = async() => {
			    const response = await fetch ("http://localhost:4000/api/pizzas")
			    const data = await response.json()
                let allData = data.map(item => ({...item, agregado: false}))
			    setCart(allData) 
}

		useEffect(()=>{ 
            getData ();
        },[])
		
	return (
			<CartContext.Provider value = {{cart, setCart}}>
				{children}
			</CartContext.Provider>
)
}
	export default CartProvider

