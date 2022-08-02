import React, { useEffect, useState } from "react";
import { ROUTES } from "../../../routes/Router";
import HeaderV2 from "../../../shared/layouts/HeaderV2";
import MenuV2 from "../../../shared/layouts/MenuV2";
import {
  formatCurrency,
  formatCurrencyDefault,
} from "../../../utils/NumberHelper";
import shoppingCartService from "../services/ShoppingCartService";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [isUpdate, setUpdate] = useState(false);

  useEffect(() => {
    setCart(shoppingCartService.getCart());
  }, [isUpdate]);

  const handleUpdateCart = () => {
    setUpdate(true);
  };

  const handleChangeQuantityCartItem = (ev, cartItem) => {
    const quantity = parseFloat(ev.target.value);
    shoppingCartService.updateCartItemQuantity(cartItem.product.id, quantity);
    setUpdate(true);
  };
  console.log(cart[0] && cart[0].product.unitPrice);
  return (
    <>
      <HeaderV2 />
      <MenuV2 />
      <div className="ltn__utilize-overlay" />
      {/* BREADCRUMB AREA START */}
      <div
        className="ltn__breadcrumb-area ltn__breadcrumb-area-2 ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image"
        data-bg="img/bg/9.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
                <div className="section-title-area ltn__section-title-2">
                  <h6 className="section-subtitle ltn__secondary-color">
                    // Welcome to our company
                  </h6>
                  <h1 className="section-title white-color">Cart</h1>
                </div>
                <div className="ltn__breadcrumb-list">
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>Cart</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* BREADCRUMB AREA END */}
      {/* SHOPING CART AREA START */}
      <div className="liton__shoping-cart-area mb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="shoping-cart-inner">
                <div className="shoping-cart-table table-responsive">
                  <table className="table">
                    {/* <thead>
                              <th class="cart-product-remove">Remove</th>
                              <th class="cart-product-image">Image</th>
                              <th class="cart-product-info">Product</th>
                              <th class="cart-product-price">Price</th>
                              <th class="cart-product-quantity">Quantity</th>
                              <th class="cart-product-subtotal">Subtotal</th>
                          </thead> */}
                    <tbody>
                      {cart.map((cartItem, index) => (
                        <tr key={index}>
                          <td className="cart-product-remove">x</td>
                          <td className="cart-product-image">
                            <a href="product-details.html">
                              <img src="img/product/1.png" alt="#" />
                            </a>
                          </td>
                          <td className="cart-product-info">
                            <h4>
                              <a href="product-details.html">
                                {cartItem.product.name}
                              </a>
                            </h4>
                          </td>
                          <td className="cart-product-price">
                            {formatCurrencyDefault(cartItem.product.unitPrice)}
                          </td>
                          <td className="cart-product-quantity">
                            <div className="cart-plus-minus">
                              <input
                                type="number"
                                defaultValue={cartItem.quantity}
                                name="qtybutton"
                                className="cart-plus-minus-box"
                                onChange={(ev) =>
                                  handleChangeQuantityCartItem(ev, cartItem)
                                }
                              />
                            </div>
                          </td>
                          <td className="cart-product-subtotal">
                            {formatCurrencyDefault(
                              cartItem.product.unitPrice * cartItem.quantity
                            )}
                          </td>
                        </tr>
                      ))}

                      <tr className="cart-coupon-row">
                        <td colSpan={6}>
                          <div className="cart-coupon">
                            <input
                              type="text"
                              name="cart-coupon"
                              placeholder="Coupon code"
                            />
                            <button
                              type="submit"
                              className="btn theme-btn-2 btn-effect-2"
                            >
                              Apply Coupon
                            </button>
                          </div>
                        </td>
                        <td>
                          <button
                            type="submit"
                            className="btn theme-btn-2 btn-effect-2-- disabled"
                            onClick={handleUpdateCart}
                          >
                            Update Cart
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="shoping-cart-total mt-50">
                  <h4>Cart Totals</h4>
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>Cart Subtotal</td>
                        <td>
                          {formatCurrencyDefault(
                            shoppingCartService.getTotalPrice()
                          )}
                        </td>
                      </tr>
                      <tr>
                        <td>Shipping and Handing</td>
                        <td>$00.00</td>
                      </tr>
                      <tr>
                        <td>Vat</td>
                        <td>$00.00</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Order Total</strong>
                        </td>
                        <td>
                          <strong>
                            {formatCurrencyDefault(
                              shoppingCartService.getTotalPrice()
                            )}
                          </strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="btn-wrapper text-right">
                    <Link
                      to={ROUTES.CHECKOUT_PAGE}
                      className="theme-btn-1 btn btn-effect-1"
                    >
                      Proceed to checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SHOPING CART AREA END */}
      {/* FEATURE AREA START ( Feature - 3) */}
      <div className="ltn__feature-area before-bg-bottom-2 mb--30--- plr--5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="ltn__feature-item-box-wrap ltn__border-between-column white-bg">
                <div className="row">
                  <div className="col-xl-3 col-md-6 col-12">
                    <div className="ltn__feature-item ltn__feature-item-8">
                      <div className="ltn__feature-icon">
                        <img src="img/icons/icon-img/11.png" alt="#" />
                      </div>
                      <div className="ltn__feature-info">
                        <h4>Curated Products</h4>
                        <p>
                          Provide Curated Products for all product over $100
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6 col-12">
                    <div className="ltn__feature-item ltn__feature-item-8">
                      <div className="ltn__feature-icon">
                        <img src="img/icons/icon-img/12.png" alt="#" />
                      </div>
                      <div className="ltn__feature-info">
                        <h4>Handmade</h4>
                        <p>
                          We ensure the product quality that is our main goal
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6 col-12">
                    <div className="ltn__feature-item ltn__feature-item-8">
                      <div className="ltn__feature-icon">
                        <img src="img/icons/icon-img/13.png" alt="#" />
                      </div>
                      <div className="ltn__feature-info">
                        <h4>Natural Food</h4>
                        <p>
                          Return product within 3 days for any product you buy
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6 col-12">
                    <div className="ltn__feature-item ltn__feature-item-8">
                      <div className="ltn__feature-icon">
                        <img src="img/icons/icon-img/14.png" alt="#" />
                      </div>
                      <div className="ltn__feature-info">
                        <h4>Free home delivery</h4>
                        <p>
                          We ensure the product quality that you can trust
                          easily
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
