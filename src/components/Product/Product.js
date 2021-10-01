import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'
import Rating from 'react-rating';
const Product = (props) => {
    // console.log(props)
    const { img, name, seller, price, stock, star, features } = props.product;

    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="prodect-item">
                <h5 className="product-name">{name}</h5>
                <div className="product-description">
                    <div>
                        <p><small>by: {seller}</small></p>
                        <p><small className="p-price">${price}</small></p>
                        <p><small>only {stock} left in stock - order soon </small></p>
                        <button onClick={() => props.handleAddToCart(props.product)} className="btn-add-to-cart">{<FontAwesomeIcon icon={faShoppingCart} />} Add to cart</button>
                    </div>
                    <div className="ratting-feature">
                        <Rating readonly
                            initialRating={star}
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color" />
                        <p>Feature</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;