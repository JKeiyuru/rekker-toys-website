import React, { createContext, useEffect, useState } from 'react';

export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    let cart = {};
     for (let index = 0; index < 300+1; index++){
        cart[index] = 0;
     }
     return cart;
 }

const ShopContextProvider = (props) => {
    const [all_products,setAll_Prodcut] = useState([]);
    const [cartItems,setCartItems] = useState(getDefaultCart())

    useEffect(()=>{
        fetch('https://rekker-toys-website-backend.onrender.com/allproducts')
        .then((response)=>response.json())
        .then((data)=>setAll_Prodcut(data))

        if(localStorage.getItem('auth-token')){
            fetch('https://rekker-toys-website-backend.onrender.com/getcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:"",
            }).then((response)=>response.json())
            .then((data)=>setCartItems(data));
        }
    },[])

       

    const addToCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        if (localStorage.getItem('auth-token')) {
            fetch('https://rekker-toys-website-backend.onrender.com/addtocart',{
                method:'POST',
                headers:{
                    Accept:'appplication/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId}),
                
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
           
        }
    } 
    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(localStorage.getItem('auth-token')){
            fetch('https://rekker-toys-website-backend.onrender.com/removefromcart',{
                method:'POST',
                headers:{
                    Accept:'appplication/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId}),
                
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
        }
    }  

    const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        for (const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo = all_products.find((product)=>product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }
    const getTotalCartItems = () =>{
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item]>0)
            {
                totalItem += cartItems[item];
            }
        }
        return totalItem
    }

    const contextValue = {getTotalCartItems,getTotalCartAmount,all_products,cartItems,addToCart,removeFromCart}
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
