import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../store/reducer";

function Subtotal() {

  const [{ basket }] = useStateValue();

  const calculateProductQuantity = () => {
    if(basket.length > 0){
      let quantity = 0;
      for(let product of basket){
        quantity+=product.quantity;
      }
      return quantity;
    }
    return 0;
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Subtotal ({ShoppingBasket.length} items): */}
              Subtotal ({calculateProductQuantity()} items):
              <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        //value={calculateSubtotal()}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
