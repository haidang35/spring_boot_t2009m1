import React from "react";
import { Navigate } from "react-router-dom";
import Form from "../../../components/form/Form";
import authService from "../services/AuthService";
import "./LoginForm.scss";

class LoginForm extends Form {
  constructor(props) {
    super(props);
    this.state = {
      form: this._getInitFormData({
        username: "",
        password: "",
      }),
      isLoginSuccess: false
    };
  }

  onLogin = () => {
    this._validateForm();
    if (this._isFormValid()) {
      const { username, password } = this.state.form;
      const data = {
        username: username.value,
        password: password.value,
      };
      authService.login(data).then((res) => {
        if(res) {
            this.setState({
                isLoginSuccess: true
            })
        }
      });
    }
  };

  render() {
    const { username, password } = this.state.form;
    const { isLoginSuccess } = this.state;
    if(isLoginSuccess) {
        return <Navigate to={'/'} />
    }
    return (
      <>
        <div id="login-form">
          <section className="vh-100">
            <div className="container-fluid h-custom">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-9 col-lg-6 col-xl-5">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    className="img-fluid"
                    alt="Sample image"
                  />
                </div>
                <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                  <form>
                    <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                      <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                      <button
                        type="button"
                        className="btn btn-primary btn-floating mx-1"
                      >
                        <i className="fab fa-facebook-f" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary btn-floating mx-1"
                      >
                        <i className="fab fa-twitter" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary btn-floating mx-1"
                      >
                        <i className="fab fa-linkedin-in" />
                      </button>
                    </div>
                    <div className="divider d-flex align-items-center my-4">
                      <p className="text-center fw-bold mx-3 mb-0">Or</p>
                    </div>
                    {/* Email input */}
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example3">
                        Username
                      </label>
                      <input
                        type="text"
                        id="form3Example3"
                        required
                        className={`form-control form-control-lg ${
                          username.err && "is-invalid"
                        }`}
                        placeholder="Enter a valid email address"
                        name="username"
                        onChange={(ev) => this._setValue(ev, "username")}
                      />
                      {username.err && (
                        <div class="invalid-feedback">
                          Username cannot be empty
                        </div>
                      )}
                    </div>
                    {/* Password input */}
                    <div className="form-outline mb-3">
                      <label className="form-label" htmlFor="form3Example4">
                        Password
                      </label>
                      <input
                        type="password"
                        id="form3Example4"
                        required
                        className={`form-control form-control-lg ${
                          password.err && "is-invalid"
                        }`}
                        placeholder="Enter password"
                        name="password"
                        onChange={(ev) => this._setValue(ev, "password")}
                      />
                      {password.err && (
                        <div class="invalid-feedback">
                          Password cannot be empty
                        </div>
                      )}
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      {/* Checkbox */}
                      <div className="form-check mb-0">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          defaultValue=""
                          id="form2Example3"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3"
                        >
                          Remember me
                        </label>
                      </div>
                      <a href="#!" className="text-body">
                        Forgot password?
                      </a>
                    </div>
                    <div className="text-center text-lg-start mt-4 pt-2">
                      <button
                        onClick={this.onLogin}
                        type="button"
                        className="btn btn-primary btn-lg"
                        style={{
                          paddingLeft: "2.5rem",
                          paddingRight: "2.5rem",
                        }}
                      >
                        Login
                      </button>
                      <p className="small fw-bold mt-2 pt-1 mb-0">
                        Don't have an account?{" "}
                        <a href="#!" className="link-danger">
                          Register
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
              {/* Copyright */}
              <div className="text-white mb-3 mb-md-0">
                Copyright © 2020. All rights reserved.
              </div>
              {/* Copyright */}
              {/* Right */}
              <div>
                <a href="#!" className="text-white me-4">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#!" className="text-white me-4">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#!" className="text-white me-4">
                  <i className="fab fa-google" />
                </a>
                <a href="#!" className="text-white">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
              {/* Right */}
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default LoginForm;
