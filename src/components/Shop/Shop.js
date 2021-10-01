import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
            })
    }, []);

    useEffect(() => {
        const savedCart = getStoredCart();
        const storedCart = [];
        if (products.length) {

            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
    }, [products])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);

        //save to local storage for now
        addToDb(product.key);
    }
    const handleSearch = event => {
        const searchText = event.target.value;
        const matchProduct = products.filter(product => product.name.
            toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchProduct);
        console.log(matchProduct);
    }
    return (
        <div>
            <div className="search-area">
                <input
                    type="text"
                    onChange={handleSearch}
                    placeholder="type here to search" />
            </div>
            <div className="shop-container">
                <div className="product-container">
                    {/* {
                        console.log(typeof (displayProducts))
                    } */}
                    {
                        displayProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}></Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>

        </div>
    );
};

export default Shop;