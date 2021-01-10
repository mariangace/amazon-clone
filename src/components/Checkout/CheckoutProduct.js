import React from 'react';
import { useStateValue } from '../../StateProvider';
import './CheckoutProduct.css';

function CheckoutProduct({image, id, title, price, rating}) {
    const [{basket}, dispatch] = useStateValue();

    console.log(basket);
    const removeFromBasket = () => {
        //remove from basket 
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id:id,

        })
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image"  src={image} alt={"product_img"}/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_,i)=> (
                        <p>★</p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
