import React from 'react';
import { useStateValue } from '../../StateProvider';
import './CheckoutProduct.css';

function CheckoutProduct({image, id, title, price, rating}) {
    const [{basket}, dispatch] = useStateValue();
    console.log(basket);
    const addQuantityToBasket = (e) => {
        const quantity = parseInt(e.target.value)
        dispatch({
          type: "ADD_QUANTITY",
          id: id,
          quantity: quantity
        });
      };

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
                        <p key={i}>★</p>
                    ))}
                </div>
                <div className="actions-container">
                    <div className="item-quantity">
                   <select onChange={addQuantityToBasket}>
                       <option value="1">Qty: 1</option>
                       <option value="2">Qty: 2</option>
                       <option value="3">Qty: 3</option>
                   </select>
                   </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
                </div>
                
            </div>
        </div>
    )
}

export default CheckoutProduct
