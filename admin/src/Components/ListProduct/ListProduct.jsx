// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import cross_icon from '../../assets/cart_cross_icon.png'

const ListProduct = () => {

    const [allproducts, setAllProducts] =useState([]);

    const fetchInfo =async ()=>{
        await fetch('https://rekker-toys-website-backend.onrender.com/allproducts')
        .then((res)=>res.json())
        .then((data)=>{setAllProducts(data)});
    }

    useEffect(()=>{
        fetchInfo();
    },[])

const remove_product = async (id)=>{
    await fetch('https://rekker-toys-website-backend.onrender.com/removeproduct',{
        method: 'POST',
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({id:id})
    })
    await fetchInfo();
}

  return (
    <div className='list-product'>
        <h1>All Products List</h1>
        <div className="listproduct-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Old Price</p>
            <p>New Price</p>
            <p>Category</p>
            <p>Remove</p>
        </div>
        <div className="listproduct-allproducts">
            <hr />
        {allproducts.map((product,index)=>{
            return      <React.Fragment key={index}>
            <div key={index} className="listproduct-format-main listproduct-format">
            <img src={product.image} alt="" className="listproduct-product-icon" />
            <p>{product.name}</p>
            <p>KES {product.old_price}</p>
            <p>KES {product.new_price}</p>
            <p>{product.category}</p>
            <img onClick={()=>{remove_product(product.id)}} src={cross_icon} alt="" className="listproduct-remove-icon" />
            </div>
            <hr/>
            </React.Fragment>
        })}
        </div>
    </div>
  )
}

export default ListProduct