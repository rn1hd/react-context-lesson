import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import withRouter from "../../with-router";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../providers/cart/cart.provider";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const navigate = useNavigate();
  const { cartItems, toggleHidden } = useContext(CartContext);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          navigate("/checkout");
          toggleHidden();
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default withRouter(CartDropdown);
