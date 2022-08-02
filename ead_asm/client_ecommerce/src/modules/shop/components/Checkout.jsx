import React from "react";
import { Navigate } from "react-router-dom";
import Form from "../../../shared/components/Form";
import HeaderV2 from "../../../shared/layouts/HeaderV2";
import MenuV2 from "../../../shared/layouts/MenuV2";
import { formatCurrencyDefault } from "../../../utils/NumberHelper";
import authService from "../../auth/services/AuthService";
import orderService from "../services/OrderService";
import shoppingCartService from "../services/ShoppingCartService";

class Checkout extends Form {
  constructor(props) {
    super(props);
    this.state = {
      form: this._getInitFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        note: "",
      }),
      isRedirect: false,
    };
  }

  handlePlaceOrder = async () => {
    this._validateForm();
    if (this._isFormValid()) {
      console.log(789);
      const { firstName, lastName, phone, email, address, note } =
        this.state.form;
      const cart = shoppingCartService.getCart();
      let data = {
        customerName: lastName.value + " " + firstName.value,
        customerPhone: phone.value,
        customerEmail: email.value,
        customerAddress: address.value,
        note: note.value,
        paymentMethod: 1,
        userId: 1
      };
      let cartItems = [];
      cart.forEach((item) => {
        cartItems.push({
          productId: item.product.id,
          quantity: item.quantity,
        });
      });
      data["orderDetails"] = cartItems;
      await orderService.clientOrder(data).then((res) => {
        shoppingCartService.removeCart();
        this.setState({
          isRedirect: true,
        });
      });
    }
  };

  render() {
    const { firstName, lastName, phone, email, address, note } =
      this.state.form;
    const { isRedirect } = this.state;
    if (isRedirect) {
      return <Navigate to={"/shop"} />;
    }
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
                    <h1 className="section-title white-color">Checkout</h1>
                  </div>
                  <div className="ltn__breadcrumb-list">
                    <ul>
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>Checkout</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* BREADCRUMB AREA END */}
        {/* WISHLIST AREA START */}
        <div className="ltn__checkout-area mb-105">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="ltn__checkout-inner">
                  <div className="ltn__checkout-single-content ltn__returning-customer-wrap">
                    <h5>
                      Returning customer?{" "}
                      <a
                        className="ltn__secondary-color"
                        href="#ltn__returning-customer-login"
                        data-toggle="collapse"
                      >
                        Click here to login
                      </a>
                    </h5>
                    <div
                      id="ltn__returning-customer-login"
                      className="collapse ltn__checkout-single-content-info"
                    >
                      <div className="ltn_coupon-code-form ltn__form-box">
                        <p>Please login your accont.</p>
                        <form action="#">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="input-item input-item-name ltn__custom-icon">
                                <input
                                  type="text"
                                  name="ltn__name"
                                  placeholder="Enter your name"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-item input-item-email ltn__custom-icon">
                                <input
                                  type="email"
                                  name="ltn__email"
                                  placeholder="Enter email address"
                                />
                              </div>
                            </div>
                          </div>
                          <button className="btn theme-btn-1 btn-effect-1 text-uppercase">
                            Login
                          </button>
                          <label className="input-info-save mb-0">
                            <input type="checkbox" name="agree" /> Remember me
                          </label>
                          <p className="mt-30">
                            <a href="register.html">Lost your password?</a>
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="ltn__checkout-single-content ltn__coupon-code-wrap">
                    <h5>
                      Have a coupon?{" "}
                      <a
                        className="ltn__secondary-color"
                        href="#ltn__coupon-code"
                        data-toggle="collapse"
                      >
                        Click here to enter your code
                      </a>
                    </h5>
                    <div
                      id="ltn__coupon-code"
                      className="collapse ltn__checkout-single-content-info"
                    >
                      <div className="ltn__coupon-code-form">
                        <p>If you have a coupon code, please apply it below.</p>
                        <form action="#">
                          <input
                            type="text"
                            name="coupon-code"
                            placeholder="Coupon code"
                          />
                          <button className="btn theme-btn-2 btn-effect-2 text-uppercase">
                            Apply Coupon
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="ltn__checkout-single-content mt-50">
                    <h4 className="title-2">Billing Details</h4>
                    <div className="ltn__checkout-single-content-info">
                      <form action="#">
                        <h6>Personal Information</h6>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="input-item input-item-name ltn__custom-icon">
                              <input
                                type="text"
                                name="firstName"
                                placeholder="First name"
                                value={firstName.value}
                                onChange={(ev) =>
                                  this._setValue(ev, "firstName")
                                }
                                required
                                className={`form-control ${
                                  firstName.err && "is-invalid"
                                }`}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-item input-item-name ltn__custom-icon">
                              <input
                                type="text"
                                name="lastName"
                                placeholder="Last name"
                                value={lastName.value}
                                onChange={(ev) =>
                                  this._setValue(ev, "lastName")
                                }
                                required
                                className={`form-control ${
                                  lastName.err && "is-invalid"
                                }`}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-item input-item-email ltn__custom-icon">
                              <input
                                type="email"
                                name="email"
                                placeholder="email address"
                                value={email.value}
                                onChange={(ev) => this._setValue(ev, "email")}
                                required
                                className={`form-control ${
                                  email.err && "is-invalid"
                                }`}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-item input-item-phone ltn__custom-icon">
                              <input
                                type="text"
                                name="phone"
                                placeholder="phone number"
                                value={phone.value}
                                onChange={(ev) => this._setValue(ev, "phone")}
                                required
                                className={`form-control ${
                                  phone.err && "is-invalid"
                                }`}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-item input-item-website ltn__custom-icon">
                              <input
                                type="text"
                                name="ltn__company"
                                placeholder="Company name (optional)"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-item input-item-website ltn__custom-icon">
                              <input
                                type="text"
                                name="ltn__phone"
                                placeholder="Company address (optional)"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-4 col-md-6">
                            <h6>Country</h6>
                            <div className="input-item">
                              <select className="nice-select">
                                <option>Select Country</option>
                                <option>Australia</option>
                                <option>Canada</option>
                                <option>China</option>
                                <option>Morocco</option>
                                <option>Saudi Arabia</option>
                                <option>United Kingdom (UK)</option>
                                <option>United States (US)</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12">
                            <h6>Address</h6>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="input-item">
                                  <input
                                    type="text"
                                    placeholder="House number and street name"
                                    name="address"
                                    value={address.value}
                                    onChange={(ev) =>
                                      this._setValue(ev, "address")
                                    }
                                    required
                                    className={`form-control ${
                                      address.err && "is-invalid"
                                    }`}
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="input-item">
                                  <input
                                    type="text"
                                    placeholder="Apartment, suite, unit etc. (optional)"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <h6>Town / City</h6>
                            <div className="input-item">
                              <input type="text" placeholder="City" />
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <h6>State </h6>
                            <div className="input-item">
                              <input type="text" placeholder="State" />
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <h6>Zip</h6>
                            <div className="input-item">
                              <input type="text" placeholder="Zip" />
                            </div>
                          </div>
                        </div>
                        <p>
                          <label className="input-info-save mb-0">
                            <input type="checkbox" name="agree" /> Create an
                            account?
                          </label>
                        </p>
                        <h6>Order Notes (optional)</h6>
                        <div className="input-item input-item-textarea ltn__custom-icon">
                          <textarea
                            name="note"
                            placeholder="Notes about your order, e.g. special notes for delivery."
                            defaultValue={""}
                            value={note.value}
                            onChange={(ev) => this._setValue(ev, "note")}
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ltn__checkout-payment-method mt-50">
                  <h4 className="title-2">Payment Method</h4>
                  <div id="checkout_accordion_1">
                    {/* card */}
                    <div className="card">
                      <h5
                        className="collapsed ltn__card-title"
                        data-toggle="collapse"
                        data-target="#faq-item-2-1"
                        aria-expanded="false"
                      >
                        Check payments
                      </h5>
                      <div
                        id="faq-item-2-1"
                        className="collapse"
                        data-parent="#checkout_accordion_1"
                      >
                        <div className="card-body">
                          <p>
                            Please send a check to Store Name, Store Street,
                            Store Town, Store State / County, Store Postcode.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* card */}
                    <div className="card">
                      <h5
                        className="ltn__card-title"
                        data-toggle="collapse"
                        data-target="#faq-item-2-2"
                        aria-expanded="true"
                      >
                        Cash on delivery
                      </h5>
                      <div
                        id="faq-item-2-2"
                        className="collapse show"
                        data-parent="#checkout_accordion_1"
                      >
                        <div className="card-body">
                          <p>Pay with cash upon delivery.</p>
                        </div>
                      </div>
                    </div>
                    {/* card */}
                    <div className="card">
                      <h5
                        className="collapsed ltn__card-title"
                        data-toggle="collapse"
                        data-target="#faq-item-2-3"
                        aria-expanded="false"
                      >
                        PayPal <img src="img/icons/payment-3.png" alt="#" />
                      </h5>
                      <div
                        id="faq-item-2-3"
                        className="collapse"
                        data-parent="#checkout_accordion_1"
                      >
                        <div className="card-body">
                          <p>
                            Pay via PayPal; you can pay with your credit card if
                            you don’t have a PayPal account.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ltn__payment-note mt-30 mb-30">
                    <p>
                      Your personal data will be used to process your order,
                      support your experience throughout this website, and for
                      other purposes described in our privacy policy.
                    </p>
                  </div>
                  <button
                    className="btn theme-btn-1 btn-effect-1 text-uppercase"
                    type="button"
                    onClick={this.handlePlaceOrder}
                  >
                    Place order
                  </button>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="shoping-cart-total mt-50">
                  <h4 className="title-2">Cart Totals</h4>
                  <table className="table">
                    <tbody>
                      {shoppingCartService.getCart().map((cartItem, index) => (
                        <tr key={index}>
                          <td>
                            {cartItem.product.name}{" "}
                            <strong>× {cartItem.quantity}</strong>
                          </td>
                          <td>
                            {formatCurrencyDefault(cartItem.product.unitPrice)}
                          </td>
                        </tr>
                      ))}

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
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* WISHLIST AREA START */}
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
        {/* FEATURE AREA END */}
      </>
    );
  }
}

export default Checkout;
