import React, { createContext, useContext, useReducer } from 'react'

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state,action) =>{
    switch(action.type){
        case "Add":
            return [...state, {id: action.id, name: action.name, quan: action.quan, size: action.size, price: action.price, img: action.img}];
        
        default:
            console.log("Error in reducer")
    }
}

export const CartProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,[]);

    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    )
}

export const UseCart = () => useContext(CartStateContext);
export const DispatchCart = () => useContext(CartDispatchContext);