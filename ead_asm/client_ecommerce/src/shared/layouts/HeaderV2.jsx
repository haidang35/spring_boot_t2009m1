import React from "react";
import { menuItems } from "../../configs/LayoutConfig";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/Router";
import authService from "../../modules/auth/services/AuthService";
import shoppingCartService from "../../modules/shop/services/ShoppingCartService";

const HeaderV2 = () => {
  return (
    <>
      {/* HEADER AREA START (header-5) */}
      <header className="ltn__header-area ltn__header-5 ltn__header-transparent gradient-color-2">
        {/* ltn__header-top-area start */}
        <div className="ltn__header-top-area d-none">
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
        <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-black plr--9---">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="site-logo-wrap">
                  <div className="site-logo">
                    <Link to={ROUTES.HOME_PAGE}>
                      <img src="img/logo-2.png" alt="Logo" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col header-menu-column menu-color-white">
                <div className="header-menu d-none d-xl-block">
                  <nav>
                    <div className="ltn__main-menu">
                      <ul>
                        {menuItems.map((item, index) => (
                          <li className="menu-icon" key={index}>
                            <Link to={item.path}>{item.label}</Link>
                          </li>
                        ))}
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
                      {!authService.isLogged() ? (
                        <ul>
                          <li>
                            <Link to={ROUTES.LOGIN_PAGE}>Sign in</Link>
                          </li>
                          <li>
                            <Link to={ROUTES.REGISTER_PAGE}>Register</Link>
                          </li>
                        </ul>
                      ) : (
                        <ul>
                          <li>
                            <a href="account.html">My Account</a>
                          </li>
                          <li>
                            <a href="wishlist.html">Wishlist</a>
                          </li>
                          <li onClick={() => authService.logout()}>
                            <a href="#">Logout</a>
                          </li>
                        </ul>
                      )}
                      <ul></ul>
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
                    <sup>{shoppingCartService.getCartItemsQuantity()}</sup>
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

export default HeaderV2;
