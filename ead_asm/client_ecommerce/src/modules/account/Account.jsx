import React, { useEffect, useState } from "react";
import HeaderV2 from "../../shared/layouts/HeaderV2";
import MenuV2 from "../../shared/layouts/MenuV2";
import orderService from "../shop/services/OrderService";

const Account = () => {
  const [orders, setOrders] = useState([]);
  console.log("🚀 ~ file: Account.jsx ~ line 8 ~ Account ~ orders", orders);

  useEffect(() => {
    getOrdersByUser();
  }, []);

  const getOrdersByUser = () => {
    orderService.getListOrderByUser().then((res) => {
      setOrders(res.data);
    });
  };
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
                  <h1 className="section-title white-color">My Account</h1>
                </div>
                <div className="ltn__breadcrumb-list">
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>My Account</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* BREADCRUMB AREA END */}
      {/* WISHLIST AREA START */}
      <div className="liton__wishlist-area pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* PRODUCT TAB AREA START */}
              <div className="ltn__product-tab-area">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="ltn__tab-menu-list mb-50">
                        <div className="nav">
                          <a
                            className="active show"
                            data-toggle="tab"
                            href="#liton_tab_1_1"
                          >
                            Dashboard <i className="fas fa-home" />
                          </a>
                          <a data-toggle="tab" href="#liton_tab_1_2">
                            Orders <i className="fas fa-file-alt" />
                          </a>
                          <a data-toggle="tab" href="#liton_tab_1_3">
                            Downloads <i className="fas fa-arrow-down" />
                          </a>
                          <a data-toggle="tab" href="#liton_tab_1_4">
                            address <i className="fas fa-map-marker-alt" />
                          </a>
                          <a data-toggle="tab" href="#liton_tab_1_5">
                            Account Details <i className="fas fa-user" />
                          </a>
                          <a href="login.html">
                            Logout <i className="fas fa-sign-out-alt" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="tab-content">
                        <div
                          className="tab-pane fade active show"
                          id="liton_tab_1_1"
                        >
                          <div className="ltn__myaccount-tab-content-inner">
                            <p>
                              Hello <strong>UserName</strong> (not{" "}
                              <strong>UserName</strong>?{" "}
                              <small>
                                <a href="login-register.html">Log out</a>
                              </small>{" "}
                              )
                            </p>
                            <p>
                              From your account dashboard you can view your{" "}
                              <span>recent orders</span>, manage your{" "}
                              <span>shipping and billing addresses</span>, and{" "}
                              <span>
                                edit your password and account details
                              </span>
                              .
                            </p>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="liton_tab_1_2">
                          <div className="ltn__myaccount-tab-content-inner">
                            <div className="table-responsive">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th>Order Id</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {orders &&
                                    orders.map((order, index) => (
                                      <tr key={index}>
                                        <td>{order.id}</td>
                                        <td>{order.createdAt}</td>
                                        <td>{order.status}</td>
                                        <td>{order.totalMoney}</td>
                                        <td>
                                          <a href="cart.html">View</a>
                                        </td>
                                      </tr>
                                    ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="liton_tab_1_3">
                          <div className="ltn__myaccount-tab-content-inner">
                            <div className="table-responsive">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th>Product</th>
                                    <th>Date</th>
                                    <th>Expire</th>
                                    <th>Download</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Carsafe - Car Service PSD Template</td>
                                    <td>Nov 22, 2020</td>
                                    <td>Yes</td>
                                    <td>
                                      <a href="#">
                                        <i className="far fa-arrow-to-bottom mr-1" />{" "}
                                        Download File
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Carsafe - Car Service HTML Template</td>
                                    <td>Nov 10, 2020</td>
                                    <td>Yes</td>
                                    <td>
                                      <a href="#">
                                        <i className="far fa-arrow-to-bottom mr-1" />{" "}
                                        Download File
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      Carsafe - Car Service WordPress Theme
                                    </td>
                                    <td>Nov 12, 2020</td>
                                    <td>Yes</td>
                                    <td>
                                      <a href="#">
                                        <i className="far fa-arrow-to-bottom mr-1" />{" "}
                                        Download File
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="liton_tab_1_4">
                          <div className="ltn__myaccount-tab-content-inner">
                            <p>
                              The following addresses will be used on the
                              checkout page by default.
                            </p>
                            <div className="row">
                              <div className="col-md-6 col-12 learts-mb-30">
                                <h4>
                                  Billing Address{" "}
                                  <small>
                                    <a href="#">edit</a>
                                  </small>
                                </h4>
                                <address>
                                  <p>
                                    <strong>Alex Tuntuni</strong>
                                  </p>
                                  <p>
                                    1355 Market St, Suite 900 <br />
                                    San Francisco, CA 94103
                                  </p>
                                  <p>Mobile: (123) 456-7890</p>
                                </address>
                              </div>
                              <div className="col-md-6 col-12 learts-mb-30">
                                <h4>
                                  Shipping Address{" "}
                                  <small>
                                    <a href="#">edit</a>
                                  </small>
                                </h4>
                                <address>
                                  <p>
                                    <strong>Alex Tuntuni</strong>
                                  </p>
                                  <p>
                                    1355 Market St, Suite 900 <br />
                                    San Francisco, CA 94103
                                  </p>
                                  <p>Mobile: (123) 456-7890</p>
                                </address>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="liton_tab_1_5">
                          <div className="ltn__myaccount-tab-content-inner">
                            <p>
                              The following addresses will be used on the
                              checkout page by default.
                            </p>
                            <div className="ltn__form-box">
                              <form action="#">
                                <div className="row mb-50">
                                  <div className="col-md-6">
                                    <label>First name:</label>
                                    <input type="text" name="ltn__name" />
                                  </div>
                                  <div className="col-md-6">
                                    <label>Last name:</label>
                                    <input type="text" name="ltn__lastname" />
                                  </div>
                                  <div className="col-md-6">
                                    <label>Display Name:</label>
                                    <input
                                      type="text"
                                      name="ltn__lastname"
                                      placeholder="Ethan"
                                    />
                                  </div>
                                  <div className="col-md-6">
                                    <label>Display Email:</label>
                                    <input
                                      type="email"
                                      name="ltn__lastname"
                                      placeholder="example@example.com"
                                    />
                                  </div>
                                </div>
                                <fieldset>
                                  <legend>Password change</legend>
                                  <div className="row">
                                    <div className="col-md-12">
                                      <label>
                                        Current password (leave blank to leave
                                        unchanged):
                                      </label>
                                      <input type="password" name="ltn__name" />
                                      <label>
                                        New password (leave blank to leave
                                        unchanged):
                                      </label>
                                      <input
                                        type="password"
                                        name="ltn__lastname"
                                      />
                                      <label>Confirm new password:</label>
                                      <input
                                        type="password"
                                        name="ltn__lastname"
                                      />
                                    </div>
                                  </div>
                                </fieldset>
                                <div className="btn-wrapper">
                                  <button
                                    type="submit"
                                    className="btn theme-btn-1 btn-effect-1 text-uppercase"
                                  >
                                    Save Changes
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* PRODUCT TAB AREA END */}
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
};

export default Account;
