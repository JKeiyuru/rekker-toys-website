import React, { useContext, useRef, useState } from 'react' 
import './Navbar.css'

import logo from '../Assets/Logo2.png'
import cart_icon from '../Assets/cart-icon.jpg'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/hamburger.png'
const Navbar = () => {
    
    const [menu,setMenu] = useState("shop")
    const {getTotalCartItems} = useContext(ShopContext)
    const menuRef = useRef()

    const dropdown_toggle = (e) =>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="Logo" />
                <p>Shopper</p>
            </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
            <ul ref={menuRef} className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/' >Shop</Link> {menu === "shop"? <hr/>: <></>}</li>
                <li onClick={()=>{setMenu("toys")}}><Link style={{textDecoration: 'none'}} to='/toys' >Toys</Link>  {menu === "toys"? <hr/>: <></>}</li>
                <li onClick={()=>{setMenu("kitchenware")}}><Link style={{textDecoration: 'none'}} to='kitchenware' > Kitchenware</Link>  {menu === "kitchenware"? <hr/>: <></>}</li>
                <li onClick={()=>{setMenu("stationery")}}> <Link style={{textDecoration: 'none'}} to='stationery' > Stationery </Link> {menu === "stationery"? <hr/>: <></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link style={{textDecoration: 'none'}} to='/login' ><button>Login</button></Link> 
                <Link style={{textDecoration: 'none'}} to='/cart' ><img src={cart_icon} alt="" /></Link> 

                <div className="nav-cart-count">
                    {getTotalCartItems()}             
                </div>
            </div>
        </div>
    )
}

export default Navbar