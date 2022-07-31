import React, { Component } from "react";
import Form from "../../../shared/components/Form";
import HeaderV2 from "../../../shared/layouts/HeaderV2";
import MenuV2 from "../../../shared/layouts/MenuV2";
import authService from "../services/AuthService";
import { Navigate } from "react-router-dom";
import { ROUTES } from "../../../routes/Router";

class Login extends Form {
  constructor(props) {
    super(props);
    this.state = {
      form: this._getInitFormData({
        username: "",
        password: "",
      }),
      isRedirect: false,
    };
  }

  handleSignIn = async () => {
    this._validateForm();
    if (this._isFormValid()) {
      const { username, password } = this.state.form;
      const data = {
        username: username.value,
        password: password.value,
      };
      await authService.login(data).then((res) => {
        if (res) {
          this.setState({ isRedirect: true });
        }
      });
    }
  };

  render() {
    const { username, password } = this.state.form;
    const { isRedirect } = this.state;
    if (isRedirect) {
      return <Navigate to={ROUTES.SHOP_PAGE} />;
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
                    <h1 className="section-title white-color">Account</h1>
                  </div>
                  <div className="ltn__breadcrumb-list">
                    <ul>
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>Login</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* BREADCRUMB AREA END */}
        {/* LOGIN AREA START */}
        <div className="ltn__login-area pb-65">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-area text-center">
                  <h1 className="section-title">
                    Sign In <br />
                    To Your Account
                  </h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
                    <br />
                    Sit aliquid, Non distinctio vel iste.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="account-login-inner">
                  <form action="#" className="ltn__form-box contact-form-box">
                    <input
                      type="text"
                      name="username"
                      placeholder="Username*"
                      value={username.value}
                      onChange={(ev) => this._setValue(ev, "username")}
                      required
                      className={`form-control ${username.err && "is-invalid"}`}
                    />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password*"
                      value={password.value}
                      onChange={(ev) => this._setValue(ev, "password")}
                      required
                      className={`form-control ${password.err && "is-invalid"}`}
                    />
                    <div className="btn-wrapper mt-0">
                      <button
                        className="theme-btn-1 btn btn-block"
                        type="button"
                        onClick={this.handleSignIn}
                      >
                        SIGN IN
                      </button>
                    </div>
                    <div className="go-to-btn mt-20">
                      <a href="#">
                        <small>FORGOTTEN YOUR PASSWORD?</small>
                      </a>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="account-create text-center pt-50">
                  <h4>DON'T HAVE AN ACCOUNT?</h4>
                  <p>
                    Add items to your wishlistget personalised recommendations{" "}
                    <br />
                    check out more quickly track your orders register
                  </p>
                  <div className="btn-wrapper">
                    <a
                      href="register.html"
                      className="theme-btn-1 btn black-btn"
                    >
                      CREATE ACCOUNT
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* LOGIN AREA END */}
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

export default Login;
