import React from "react";
import "./Checkout.css";
import Subtotal from "../Subtotal/Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../../StateProvider";

function Checkout() {

  const [{basket}] = useStateValue()
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/img17/books/prime-book-box/2019/ILM_intropricing_1300x90._CB461534774_.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>
          { /* CheckoutProduct */}
          {/* <CheckoutProduct 
            id={'12343'}
            title={'test'}
            image={"https://images-na.ssl-images-amazon.com/images/I/61-kzqdinNL._AC_SY450_.jpg"}
            price={122}
            rating={5}
          />
          <CheckoutProduct 
            id={'12343'}
            title={'test'}
            image={"https://images-na.ssl-images-amazon.com/images/I/61-kzqdinNL._AC_SY450_.jpg"}
            price={122}
            rating={5}
          /> */}
          {basket.map(item => (
            <CheckoutProduct 
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            />
          ))}
          
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
