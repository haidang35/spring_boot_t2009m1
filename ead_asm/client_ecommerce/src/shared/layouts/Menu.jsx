import React from "react";

const Menu = () => {
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
            <div className="mini-cart-item clearfix">
              <div className="mini-cart-img">
                <a href="#">
                  <img src="img/product/1.png" alt="Image" />
                </a>
                <span className="mini-cart-item-delete">
                  <i className="icon-cancel" />
                </span>
              </div>
              <div className="mini-cart-info">
                <h6>
                  <a href="#">Red Hot Tomato</a>
                </h6>
                <span className="mini-cart-quantity">1 x $65.00</span>
              </div>
            </div>
            <div className="mini-cart-item clearfix">
              <div className="mini-cart-img">
                <a href="#">
                  <img src="img/product/2.png" alt="Image" />
                </a>
                <span className="mini-cart-item-delete">
                  <i className="icon-cancel" />
                </span>
              </div>
              <div className="mini-cart-info">
                <h6>
                  <a href="#">Vegetables Juices</a>
                </h6>
                <span className="mini-cart-quantity">1 x $85.00</span>
              </div>
            </div>
            <div className="mini-cart-item clearfix">
              <div className="mini-cart-img">
                <a href="#">
                  <img src="img/product/3.png" alt="Image" />
                </a>
                <span className="mini-cart-item-delete">
                  <i className="icon-cancel" />
                </span>
              </div>
              <div className="mini-cart-info">
                <h6>
                  <a href="#">Orange Sliced Mix</a>
                </h6>
                <span className="mini-cart-quantity">1 x $92.00</span>
              </div>
            </div>
            <div className="mini-cart-item clearfix">
              <div className="mini-cart-img">
                <a href="#">
                  <img src="img/product/4.png" alt="Image" />
                </a>
                <span className="mini-cart-item-delete">
                  <i className="icon-cancel" />
                </span>
              </div>
              <div className="mini-cart-info">
                <h6>
                  <a href="#">Orange Fresh Juice</a>
                </h6>
                <span className="mini-cart-quantity">1 x $68.00</span>
              </div>
            </div>
          </div>
          <div className="mini-cart-footer">
            <div className="mini-cart-sub-total">
              <h5>
                Subtotal: <span>$310.00</span>
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
      {/* Utilize Mobile Menu Start */}
      <div
        id="ltn__utilize-mobile-menu"
        className="ltn__utilize ltn__utilize-mobile-menu"
      >
        <div className="ltn__utilize-menu-inner ltn__scrollbar">
          <div className="ltn__utilize-menu-head">
            <div className="site-logo">
              <a href="index.html">
                <img src="img/logo.png" alt="Logo" />
              </a>
            </div>
            <button className="ltn__utilize-close">×</button>
          </div>
          <div className="ltn__utilize-menu-search-form">
            <form action="#">
              <input type="text" placeholder="Search..." />
              <button>
                <i className="fas fa-search" />
              </button>
            </form>
          </div>
          <div className="ltn__utilize-menu">
            <ul>
              <li>
                <a href="#">Home</a>
                <ul className="sub-menu">
                  <li>
                    <a href="index.html">Home Pages 01</a>
                  </li>
                  <li>
                    <a href="index-2.html">Home Pages 02</a>
                  </li>
                  <li>
                    <a href="index-3.html">Home Pages 03</a>
                  </li>
                  <li>
                    <a href="index-4.html">Home Pages 04</a>
                  </li>
                  <li>
                    <a href="index-5.html">
                      Home Pages 05{" "}
                      <span className="menu-item-badge">video</span>
                    </a>
                  </li>
                  <li>
                    <a href="index-6.html">Home Pages 06</a>
                  </li>
                  <li>
                    <a href="index-7.html">Home Pages 07</a>
                  </li>
                  <li>
                    <a href="index-8.html">Home Pages 08</a>
                  </li>
                  <li>
                    <a href="index-9.html">Home Pages 09</a>
                  </li>
                  <li>
                    <a href="index-10.html">Home Pages 10</a>
                  </li>
                  <li>
                    <a href="index-11.html">
                      Home Pages 11{" "}
                      <span className="menu-item-badge">Service</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">About</a>
                <ul className="sub-menu">
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="service.html">Services</a>
                  </li>
                  <li>
                    <a href="service-details.html">Service Details</a>
                  </li>
                  <li>
                    <a href="portfolio.html">Portfolio</a>
                  </li>
                  <li>
                    <a href="portfolio-2.html">Portfolio - 02</a>
                  </li>
                  <li>
                    <a href="portfolio-details.html">Portfolio Details</a>
                  </li>
                  <li>
                    <a href="team.html">Team</a>
                  </li>
                  <li>
                    <a href="team-details.html">Team Details</a>
                  </li>
                  <li>
                    <a href="faq.html">FAQ</a>
                  </li>
                  <li>
                    <a href="locations.html">Google Map Locations</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Shop</a>
                <ul className="sub-menu">
                  <li>
                    <a href="shop.html">Shop</a>
                  </li>
                  <li>
                    <a href="shop-grid.html">Shop Grid</a>
                  </li>
                  <li>
                    <a href="shop-left-sidebar.html">Shop Left sidebar</a>
                  </li>
                  <li>
                    <a href="shop-right-sidebar.html">Shop right sidebar</a>
                  </li>
                  <li>
                    <a href="product-details.html">Shop details </a>
                  </li>
                  <li>
                    <a href="cart.html">Cart</a>
                  </li>
                  <li>
                    <a href="wishlist.html">Wishlist</a>
                  </li>
                  <li>
                    <a href="checkout.html">Checkout</a>
                  </li>
                  <li>
                    <a href="order-tracking.html">Order Tracking</a>
                  </li>
                  <li>
                    <a href="account.html">My Account</a>
                  </li>
                  <li>
                    <a href="login.html">Sign in</a>
                  </li>
                  <li>
                    <a href="register.html">Register</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">News</a>
                <ul className="sub-menu">
                  <li>
                    <a href="blog.html">News</a>
                  </li>
                  <li>
                    <a href="blog-grid.html">News Grid</a>
                  </li>
                  <li>
                    <a href="blog-left-sidebar.html">News Left sidebar</a>
                  </li>
                  <li>
                    <a href="blog-right-sidebar.html">News Right sidebar</a>
                  </li>
                  <li>
                    <a href="blog-details.html">News details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Pages</a>
                <ul className="sub-menu">
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="service.html">Services</a>
                  </li>
                  <li>
                    <a href="service-details.html">Service Details</a>
                  </li>
                  <li>
                    <a href="portfolio.html">Portfolio</a>
                  </li>
                  <li>
                    <a href="portfolio-2.html">Portfolio - 02</a>
                  </li>
                  <li>
                    <a href="portfolio-details.html">Portfolio Details</a>
                  </li>
                  <li>
                    <a href="team.html">Team</a>
                  </li>
                  <li>
                    <a href="team-details.html">Team Details</a>
                  </li>
                  <li>
                    <a href="faq.html">FAQ</a>
                  </li>
                  <li>
                    <a href="history.html">History</a>
                  </li>
                  <li>
                    <a href="contact.html">Appointment</a>
                  </li>
                  <li>
                    <a href="locations.html">Google Map Locations</a>
                  </li>
                  <li>
                    <a href="404.html">404</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                  <li>
                    <a href="coming-soon.html">Coming Soon</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
          <div className="ltn__utilize-buttons ltn__utilize-buttons-2">
            <ul>
              <li>
                <a href="account.html" title="My Account">
                  <span className="utilize-btn-icon">
                    <i className="far fa-user" />
                  </span>
                  My Account
                </a>
              </li>
              <li>
                <a href="wishlist.html" title="Wishlist">
                  <span className="utilize-btn-icon">
                    <i className="far fa-heart" />
                    <sup>3</sup>
                  </span>
                  Wishlist
                </a>
              </li>
              <li>
                <a href="cart.html" title="Shoping Cart">
                  <span className="utilize-btn-icon">
                    <i className="fas fa-shopping-cart" />
                    <sup>5</sup>
                  </span>
                  Shoping Cart
                </a>
              </li>
            </ul>
          </div>
          <div className="ltn__social-media-2">
            <ul>
              <li>
                <a href="#" title="Facebook">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="#" title="Twitter">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#" title="Linkedin">
                  <i className="fab fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="#" title="Instagram">
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Utilize Mobile Menu End */}
    </>
  );
};

export default Menu;
