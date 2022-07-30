import React from "react";

const Header = () => {
  return (
    <>
      {/* HEADER AREA START (header-5) */}
      <header className="ltn__header-area ltn__header-5 ltn__header-transparent gradient-color-4---">
        {/* ltn__header-top-area start */}
        <div className="ltn__header-top-area">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="ltn__top-bar-menu">
                  <ul>
                    <li>
                      <a href="locations.html">
                        <i className="icon-placeholder" /> 15/A, Nest Tower, NYC
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                        <i className="icon-mail" /> info@webmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-5">
                <div className="top-bar-right text-right">
                  <div className="ltn__top-bar-menu">
                    <ul>
                      <li>
                        {/* ltn__language-menu */}
                        <div className="ltn__drop-menu ltn__currency-menu ltn__language-menu">
                          <ul>
                            <li>
                              <a href="#" className="dropdown-toggle">
                                <span className="active-currency">English</span>
                              </a>
                              <ul>
                                <li>
                                  <a href="#">Arabic</a>
                                </li>
                                <li>
                                  <a href="#">Bengali</a>
                                </li>
                                <li>
                                  <a href="#">Chinese</a>
                                </li>
                                <li>
                                  <a href="#">English</a>
                                </li>
                                <li>
                                  <a href="#">French</a>
                                </li>
                                <li>
                                  <a href="#">Hindi</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        {/* ltn__social-media */}
                        <div className="ltn__social-media">
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
                              <a href="#" title="Instagram">
                                <i className="fab fa-instagram" />
                              </a>
                            </li>
                            <li>
                              <a href="#" title="Dribbble">
                                <i className="fab fa-dribbble" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ltn__header-top-area end */}
        {/* ltn__header-middle-area start */}
        <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-white sticky-active-into-mobile--- plr--9---">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="site-logo-wrap">
                  <div className="site-logo">
                    <a href="index.html">
                      <img src="img/logo.png" alt="Logo" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col header-menu-column menu-color-white---">
                <div className="header-menu d-none d-xl-block">
                  <nav>
                    <div className="ltn__main-menu">
                      <ul>
                        <li className="menu-icon">
                          <a href="#">Home</a>
                          <ul className="sub-menu menu-pages-img-show ltn__sub-menu-col-2---">
                            <li>
                              <a href="index.html">Home Style 01</a>
                              <img src="img/home-demos/home-1.jpg" alt="#" />
                            </li>
                            <li>
                              <a href="index-2.html">Home Style 02</a>
                              <img src="img/home-demos/home-2.jpg" alt="#" />
                            </li>
                            <li>
                              <a href="index-3.html">Home Style 03</a>
                              <img src="img/home-demos/home-3.jpg" alt="#" />
                            </li>
                            <li>
                              <a href="index-4.html">Home Style 04</a>
                              <img src="img/home-demos/home-4.jpg" alt="#" />
                            </li>
                            <li>
                              <a href="index-5.html">
                                Home Style 05{" "}
                                <span className="menu-item-badge">video</span>
                              </a>
                              <img src="img/home-demos/home-5.jpg" alt="#" />
                            </li>
                            <li>
                              <a href="index-6.html">Home Style 06</a>
                              <img src="img/home-demos/home-6.jpg" alt="#" />
                            </li>
                            <li>
                              <a href="index-7.html">Home Style 07</a>
                              <img src="img/home-demos/home-7.jpg" alt="#" />
                            </li>
                            <li>
                              <a href="index-8.html">Home Style 08</a>
                              <img src="img/home-demos/home-8.jpg" alt="#" />
                            </li>
                            <li>
                              <a href="index-9.html">Home Style 09</a>
                              <img src="img/home-demos/home-9.jpg" alt="#" />
                            </li>
                            <li>
                              <a href="index-10.html">Home Style 10</a>
                              <img src="img/home-demos/home-10.jpg" alt="#" />
                            </li>
                            <li>
                              <a href="index-11.html">
                                Home Style 11{" "}
                                <span className="menu-item-badge">Service</span>
                              </a>
                              <img src="img/home-demos/home-11.jpg" alt="#" />
                            </li>
                          </ul>
                        </li>
                        <li className="menu-icon">
                          <a href="#">About</a>
                          <ul>
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
                              <a href="portfolio.html">Gallery</a>
                            </li>
                            <li>
                              <a href="portfolio-2.html">Gallery - 02</a>
                            </li>
                            <li>
                              <a href="portfolio-details.html">
                                Gallery Details
                              </a>
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
                        <li className="menu-icon">
                          <a href="#">Shop</a>
                          <ul>
                            <li>
                              <a href="shop.html">Shop</a>
                            </li>
                            <li>
                              <a href="shop-grid.html">Shop Grid</a>
                            </li>
                            <li>
                              <a href="shop-left-sidebar.html">
                                Shop Left sidebar
                              </a>
                            </li>
                            <li>
                              <a href="shop-right-sidebar.html">
                                Shop right sidebar
                              </a>
                            </li>
                            <li>
                              <a href="product-details.html">Shop details </a>
                            </li>
                            <li>
                              <a href="product-details-no-sidebar.html">
                                Shop details no sidebar{" "}
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Other Pages{" "}
                                <span className="float-right">&gt;&gt;</span>
                              </a>
                              <ul>
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
                                  <a href="order-tracking.html">
                                    Order Tracking
                                  </a>
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
                          </ul>
                        </li>
                        <li className="menu-icon">
                          <a href="#">News</a>
                          <ul>
                            <li>
                              <a href="blog.html">News</a>
                            </li>
                            <li>
                              <a href="blog-grid.html">News Grid</a>
                            </li>
                            <li>
                              <a href="blog-left-sidebar.html">
                                News Left sidebar
                              </a>
                            </li>
                            <li>
                              <a href="blog-right-sidebar.html">
                                News Right sidebar
                              </a>
                            </li>
                            <li>
                              <a href="blog-details.html">News details</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-icon">
                          <a href="#">Pages</a>
                          <ul className="mega-menu">
                            <li>
                              <a href="#">Inner Pages</a>
                              <ul>
                                <li>
                                  <a href="portfolio.html">Gallery</a>
                                </li>
                                <li>
                                  <a href="portfolio-2.html">Gallery - 02</a>
                                </li>
                                <li>
                                  <a href="portfolio-details.html">
                                    Gallery Details
                                  </a>
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
                              </ul>
                            </li>
                            <li>
                              <a href="#">Inner Pages</a>
                              <ul>
                                <li>
                                  <a href="history.html">History</a>
                                </li>
                                <li>
                                  <a href="contact.html">Appointment</a>
                                </li>
                                <li>
                                  <a href="locations.html">
                                    Google Map Locations
                                  </a>
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
                              <a href="#">Shop Pages</a>
                              <ul>
                                <li>
                                  <a href="shop.html">Shop</a>
                                </li>
                                <li>
                                  <a href="shop-left-sidebar.html">
                                    Shop Left sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-right-sidebar.html">
                                    Shop right sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-grid.html">Shop Grid</a>
                                </li>
                                <li>
                                  <a href="product-details.html">
                                    Shop details{" "}
                                  </a>
                                </li>
                                <li>
                                  <a href="cart.html">Cart</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="shop.html">
                                <img
                                  src="img/banner/menu-banner-1.png"
                                  alt="#"
                                />
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                        <li className="special-link">
                          <a href="contact.html">GET A QUOTE</a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
              <div className="ltn__header-options ltn__header-options-2">
                {/* header-search-1 */}
                <div className="header-search-wrap">
                  <div className="header-search-1">
                    <div className="search-icon">
                      <i className="icon-search for-search-show" />
                      <i className="icon-cancel  for-search-close" />
                    </div>
                  </div>
                  <div className="header-search-1-form">
                    <form id="#" method="get" action="#">
                      <input
                        type="text"
                        name="search"
                        defaultValue=""
                        placeholder="Search here..."
                      />
                      <button type="submit">
                        <span>
                          <i className="icon-search" />
                        </span>
                      </button>
                    </form>
                  </div>
                </div>
                {/* user-menu */}
                <div className="ltn__drop-menu user-menu">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="icon-user" />
                      </a>
                      <ul>
                        <li>
                          <a href="login.html">Sign in</a>
                        </li>
                        <li>
                          <a href="register.html">Register</a>
                        </li>
                        <li>
                          <a href="account.html">My Account</a>
                        </li>
                        <li>
                          <a href="wishlist.html">Wishlist</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                {/* mini-cart */}
                <div className="mini-cart-icon">
                  <a
                    href="#ltn__utilize-cart-menu"
                    className="ltn__utilize-toggle"
                  >
                    <i className="icon-shopping-cart" />
                    <sup>2</sup>
                  </a>
                </div>
                {/* mini-cart */}
                {/* Mobile Menu Button */}
                <div className="mobile-menu-toggle d-xl-none">
                  <a
                    href="#ltn__utilize-mobile-menu"
                    className="ltn__utilize-toggle"
                  >
                    <svg viewBox="0 0 800 600">
                      <path
                        d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                        id="top"
                      />
                      <path d="M300,320 L540,320" id="middle" />
                      <path
                        d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                        id="bottom"
                        transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ltn__header-middle-area end */}
      </header>
      {/* HEADER AREA END */}
    </>
  );
};

export default Header;
