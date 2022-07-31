import React, { useEffect, useState } from "react";
import shoppingCartService from "../../modules/shop/services/ShoppingCartService";
import {
  CURRENCY,
  formatCurrency,
  formatCurrencyDefault,
} from "../../utils/NumberHelper";

const MiniCart = () => {
  const [cart, setCart] = useState(shoppingCartService.getCart());
  const [updateFlag, setUpdateFlag] = useState(false);

  useEffect(() => {
    setCart(shoppingCartService.getCart());
  }, [updateFlag]);

  const handleRemoveCartItem = (cartItem) => {
    shoppingCartService.removeCartItem(cartItem.product.id);
    setUpdateFlag(true);
  };
  return (
    <>
      {/* Utilize Cart Menu Start */}
      <div
        id="ltn__utilize-cart-menu"
        className="ltn__utilize ltn__utilize-cart-menu"
      >
        <div className="ltn__utilize-menu-inner ltn__scrollbar">
          <div className="ltn__utilize-menu-head">
            <span className="ltn__utilize-menu-title">Cart</span>
            <button className="ltn__utilize-close">×</button>
          </div>
          <div className="mini-cart-product-area ltn__scrollbar">
            {cart.map((cartItem, index) => (
              <div className="mini-cart-item clearfix">
                <div className="mini-cart-img">
                  <a href="#">
                    <img src={cartItem.product.thumbnail} alt="Image" />
                  </a>
                  <span
                    className="mini-cart-item-delete"
                    onClick={() => handleRemoveCartItem(cartItem)}
                  >
                    <i className="icon-cancel" />
                  </span>
                </div>
                <div className="mini-cart-info">
                  <h6>
                    <a href="#">{cartItem.product.name}</a>
                  </h6>
                  <span className="mini-cart-quantity">
                    {cartItem.quantity} x{" "}
                    {formatCurrencyDefault(cartItem.product.unitPrice)}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mini-cart-footer">
            <div className="mini-cart-sub-total">
              <h5>
                Subtotal:{" "}
                <span>
                  {formatCurrencyDefault(shoppingCartService.getTotalPrice())}
                </span>
              </h5>
            </div>
            <div className="btn-wrapper">
              <a href="cart.html" className="theme-btn-1 btn btn-effect-1">
                View Cart
              </a>
              <a href="cart.html" className="theme-btn-2 btn btn-effect-2">
                Checkout
              </a>
            </div>
            <p>Free Shipping on All Orders Over $100!</p>
          </div>
        </div>
      </div>
      {/* Utilize Cart Menu End */}
    </>
  );
};

export default MiniCart;
