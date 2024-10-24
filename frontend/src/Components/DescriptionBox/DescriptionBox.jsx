import React from 'react';
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>An ecommerce website is an online store where customers can find products, 
                    browse offerings, and place purchases online. It facilitates the transaction 
                    between a buyer and seller. A digital storefront can serve as the virtual equivalent
                     of the product shelves, sales staff, and cash register of a physical shop.
                     Other components of an online store might include product listings, product categories, and customer reviews. 
                </p>
                <p>Ecommerce takes as many different forms as there are various ways to interact with online channels.
                     For example, sellers and buyers exchange goods and services through m-commerce, enterprise commerce, 
                     and social selling destinations like Amazon Live.
                </p>
            </div>
        </div>
    );
}

export default DescriptionBox;