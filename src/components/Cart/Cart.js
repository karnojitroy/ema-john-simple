import React from 'react';
import './Cart.css'
const Cart = (props) => {
    console.log(props.cart)
    // console.log(props.cart.length)
    const { cart } = props;
    // console.log(cart)
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    // const total = cart.reduce((previus, product) => previus + product.price, 0);
    const totalShipping = cart.reduce((previus, product) => previus + product.shipping, 0);
    const tax = (total * 8) / 100;
    const orderTotal = total + totalShipping + tax;

    return (
        <div>
            <h2>Order Summary</h2>
            <p>Items ordered: {totalQuantity}</p>
            <div className="table-container">
                <table tbody className="cart-left-table">
                    <tbody>
                        <tr>
                            <td>Items:</td>
                        </tr>
                        <tr>
                            <td>Shipping & Handling:</td>

                        </tr>
                        <tr>
                            <td>Total before tax:</td>

                        </tr>
                        <tr>
                            <td>Estimated Tax:</td>

                        </tr>
                        <tr>
                            <td><b>Order Total:</b></td>
                        </tr>
                    </tbody>
                </table>

                <table className="cart-price-value-table">
                    <tbody>
                        <tr>
                            <td>${total.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>${totalShipping.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>${total.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>${tax.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td><b>${orderTotal.toFixed(2)}</b></td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <button className="order-review">Review your order</button>
        </div>
    );
};

export default Cart;