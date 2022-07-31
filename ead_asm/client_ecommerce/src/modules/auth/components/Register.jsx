import React, { Component } from "react";
import { REGEX_TEL } from "../../../constants/validation";
import Form from "../../../shared/components/Form";
import HeaderV2 from "../../../shared/layouts/HeaderV2";
import MenuV2 from "../../../shared/layouts/MenuV2";
import authService from "../services/AuthService";
import { Navigate } from "react-router-dom";

class Register extends Form {
  constructor(props) {
    super(props);
    this.state = {
      form: this._getInitFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        address: "",
        phone: "",
        username: "",
      }),
      isRedirect: false,
    };
  }

  handleCreateAccount = async () => {
    this._validateForm();
    if (this._isFormValid()) {
      const {
        fullName,
        email,
        password,
        confirmPassword,
        address,
        phone,
        username,
      } = this.state.form;
      const data = {
        fullName: fullName.value,
        email: email.value,
        username: username.value,
        phone: phone.value,
        address: address.value,
        password: password.value,
      };
      await authService.register(data).then((res) => {
        this.setState({
          isRedirect: true,
        });
      });
    }
  };

  render() {
    const {
      fullName,
      email,
      password,
      confirmPassword,
      address,
      phone,
      username,
    } = this.state.form;
    const { isRedirect } = this.state;
    if (isRedirect) {
      return <Navigate to={'/login'}/>;
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
                      <li>Register</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* BREADCRUMB AREA END */}
        {/* LOGIN AREA START (Register) */}
        <div className="ltn__login-area pb-110">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-area text-center">
                  <h1 className="section-title">
                    Register <br />
                    Your Account
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
              <div className="col-lg-6 offset-lg-3">
                <div className="account-login-inner">
                  <form action="#" className="ltn__form-box contact-form-box">
                    {fullName.err && (
                      <div className="invalid-feedback">
                        FullName cannot be empty
                      </div>
                    )}
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={fullName.value}
                      onChange={(ev) => this._setValue(ev, "fullName")}
                      className={`form-control ${fullName.err && "is-invalid"}`}
                      required
                    />
                    {email.err && (
                      <div className="invalid-feedback">
                        {email.err == "*"
                          ? "Email cannot be empty"
                          : "Invalid email"}
                      </div>
                    )}
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={email.value}
                      onChange={(ev) => this._setValue(ev, "email")}
                      className={`form-control ${email.err && "is-invalid"}`}
                      required
                    />
                    {phone.err && (
                      <div className="invalid-feedback">
                        {phone.err == "*"
                          ? "Phone cannot be empty"
                          : "Invalid phone number"}
                      </div>
                    )}
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      value={phone.value}
                      onChange={(ev) => this._setValue(ev, "phone")}
                      pattern={REGEX_TEL}
                      className={`form-control ${email.err && "is-invalid"}`}
                      required
                    />
                    {username.err && (
                      <div className="invalid-feedback">
                        Username cannot be empty
                      </div>
                    )}
                    <input
                      type="text"
                      name="username"
                      placeholder="Username*"
                      value={username.value}
                      onChange={(ev) => this._setValue(ev, "username")}
                      className={`form-control ${email.err && "is-invalid"}`}
                      required
                    />
                    {password.err && (
                      <div className="invalid-feedback">
                        Password cannot be empty
                      </div>
                    )}
                    <input
                      type="password"
                      name="password"
                      placeholder="Password*"
                      value={password.value}
                      onChange={(ev) => this._setValue(ev, "password")}
                      className={`form-control ${email.err && "is-invalid"}`}
                      required
                    />
                    {confirmPassword.err && (
                      <div className="invalid-feedback">
                        Confirm password cannot be empty
                      </div>
                    )}
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password*"
                      value={confirmPassword.value}
                      onChange={(ev) => this._setValue(ev, "confirmPassword")}
                      className={`form-control ${email.err && "is-invalid"}`}
                      required
                    />
                    {address.err && (
                      <div className="invalid-feedback">
                        Address cannot be empty
                      </div>
                    )}
                    <input
                      type="text"
                      name="address"
                      placeholder="Address*"
                      value={address.value}
                      onChange={(ev) => this._setValue(ev, "address")}
                      className={`form-control ${email.err && "is-invalid"}`}
                      required
                    />
                    <div className="btn-wrapper">
                      <button
                        className="theme-btn-1 btn reverse-color btn-block"
                        type="button"
                        onClick={this.handleCreateAccount}
                      >
                        CREATE ACCOUNT
                      </button>
                    </div>
                  </form>
                  <div className="by-agree text-center">
                    <p>By creating an account, you agree to our:</p>
                    <p>
                      <a href="#">
                        TERMS OF CONDITIONS &nbsp; &nbsp; | &nbsp; &nbsp;
                        PRIVACY POLICY
                      </a>
                    </p>
                    <div className="go-to-btn mt-50">
                      <a href="login.html">ALREADY HAVE AN ACCOUNT ?</a>
                    </div>
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

export default Register;
