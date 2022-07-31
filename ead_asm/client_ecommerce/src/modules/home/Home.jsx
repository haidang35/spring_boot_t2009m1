import React from "react";
import { AddLibrary } from "../../App";
import Header from "../../shared/layouts/Header";
import Menu from "../../shared/layouts/Menu";
import Script from "../../shared/layouts/Script";

const Home = () => {
  return (
    <>
      <Header />
      <Menu />
      <div className="ltn__utilize-overlay" />
      {/* SLIDER AREA START (slider-3) */}
      <div className="ltn__slider-area ltn__slider-3  section-bg-1">
        <div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1">
          {/* ltn__slide-item */}
          <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3">
            <div className="ltn__slide-item-inner">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 align-self-center">
                    <div className="slide-item-info">
                      <div className="slide-item-info-inner ltn__slide-animation">
                        <div className="slide-video mb-50 d-none">
                          <a
                            className="ltn__video-icon-2 ltn__video-icon-2-border"
                            href="https://www.youtube.com/embed/ATI7vfCgwXE?autoplay=1&showinfo=0"
                            data-rel="lightcase:myCollection"
                          >
                            <i className="fa fa-play" />
                          </a>
                        </div>
                        <h6 className="slide-sub-title animated">
                          <img src="img/icons/icon-img/1.png" alt="#" /> 100%
                          genuine Products
                        </h6>
                        <h1 className="slide-title animated ">
                          Tasty &amp; Healthy <br /> Organic Food
                        </h1>
                        <div className="slide-brief animated d-none">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore.
                          </p>
                        </div>
                        <div className="btn-wrapper animated">
                          <a
                            href="shop.html"
                            className="theme-btn-1 btn btn-effect-1 text-uppercase"
                          >
                            Explore Products
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="slide-item-img">
                      <img src="img/slider/23.png" alt="#" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ltn__slide-item */}
          <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3">
            <div className="ltn__slide-item-inner  text-right">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 align-self-center">
                    <div className="slide-item-info">
                      <div className="slide-item-info-inner ltn__slide-animation">
                        <h6 className="slide-sub-title animated">
                          <img src="img/icons/icon-img/1.png" alt="#" /> 100%
                          genuine Products
                        </h6>
                        <h1 className="slide-title animated ">
                          Our Garden's Most <br /> Favorite Food
                        </h1>
                        <div className="slide-brief animated">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore.
                          </p>
                        </div>
                        <div className="btn-wrapper animated">
                          <a
                            href="shop.html"
                            className="theme-btn-1 btn btn-effect-1 text-uppercase"
                          >
                            Explore Products
                          </a>
                          <a
                            href="about.html"
                            className="btn btn-transparent btn-effect-3 text-uppercase"
                          >
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="slide-item-img slide-img-left">
                      <img src="img/slider/21.png" alt="#" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
      {/* SLIDER AREA END */}
      {/* BANNER AREA START */}
      <div className="ltn__banner-area mt-120 mt--90 d-none">
        <div className="container">
          <div className="row ltn__custom-gutter--- justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="ltn__banner-item">
                <div className="ltn__banner-img">
                  <a href="shop.html">
                    <img src="img/banner/1.jpg" alt="Banner Image" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="ltn__banner-item">
                <div className="ltn__banner-img">
                  <a href="shop.html">
                    <img src="img/banner/2.jpg" alt="Banner Image" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="ltn__banner-item">
                <div className="ltn__banner-img">
                  <a href="shop.html">
                    <img src="img/banner/1.jpg" alt="Banner Image" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* BANNER AREA END */}
      {/* BANNER AREA START */}
      <div className="ltn__banner-area mt-120">
        <div className="container">
          <div className="row ltn__custom-gutter--- justify-content-center">
            <div className="col-lg-6 col-md-6">
              <div className="ltn__banner-item">
                <div className="ltn__banner-img">
                  <a href="shop.html">
                    <img src="img/banner/13.png" alt="Banner Image" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="row">
                <div className="col-lg-12">
                  <div className="ltn__banner-item">
                    <div className="ltn__banner-img">
                      <a href="shop.html">
                        <img src="img/banner/14.png" alt="Banner Image" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="ltn__banner-item">
                    <div className="ltn__banner-img">
                      <a href="shop.html">
                        <img src="img/banner/15.png" alt="Banner Image" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* BANNER AREA END */}
      {/* PRODUCT TAB AREA START (product-item-3) */}
      <div className="ltn__product-tab-area ltn__product-gutter pt-85 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2 text-center">
                <h1 className="section-title">Our Products</h1>
              </div>
              <div className="ltn__tab-menu ltn__tab-menu-2 ltn__tab-menu-top-right-- text-uppercase text-center">
                <div className="nav">
                  <a
                    className="active show"
                    data-toggle="tab"
                    href="#liton_tab_3_1"
                  >
                    Food &amp; Drinks
                  </a>
                  <a data-toggle="tab" href="#liton_tab_3_2" className="">
                    Vegetables
                  </a>
                  <a data-toggle="tab" href="#liton_tab_3_3" className="">
                    Dried Foods
                  </a>
                  <a data-toggle="tab" href="#liton_tab_3_4" className="">
                    Bread &amp; Cake
                  </a>
                  <a data-toggle="tab" href="#liton_tab_3_5" className="">
                    Fish &amp; Meat
                  </a>
                </div>
              </div>
              <div className="tab-content">
                <div className="tab-pane fade active show" id="liton_tab_3_1">
                  <div className="ltn__product-tab-content-inner">
                    <div className="row ltn__tab-product-slider-one-active slick-arrow-1">
                      {/* ltn__product-item */}
                      <div className="col-lg-12">
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/11.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">-19%</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                                <li className="review-total">
                                  {" "}
                                  <a href="#"> (24)</a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Carrots Group Scal
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$32.00</span>
                              <del>$46.00</del>
                            </div>
                          </div>
                        </div>
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/7.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">New</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Poltry Farm Meat
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$78.00</span>
                              <del>$85.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ltn__product-item */}
                      <div className="col-lg-12">
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/12.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">-19%</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                                <li className="review-total">
                                  {" "}
                                  <a href="#"> (24)</a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Carrots Group Scal
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$32.00</span>
                              <del>$46.00</del>
                            </div>
                          </div>
                        </div>
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/8.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">New</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Orange Sliced Mix
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$150.00</span>
                              <del>$180.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ltn__product-item */}
                      <div className="col-lg-12">
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/13.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">New</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Orange Fresh Juice
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$75.00</span>
                              <del>$92.00</del>
                            </div>
                          </div>
                        </div>
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/9.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">-19%</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                                <li className="review-total">
                                  {" "}
                                  <a href="#"> (24)</a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Carrots Group Scal
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$32.00</span>
                              <del>$46.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ltn__product-item */}
                      <div className="col-lg-12">
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/14.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">New</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Poltry Farm Meat
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$78.00</span>
                              <del>$85.00</del>
                            </div>
                          </div>
                        </div>
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/10.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">New</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Orange Fresh Juice
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$75.00</span>
                              <del>$92.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ltn__product-item */}
                      <div className="col-lg-12">
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/15.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">New</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Fresh Butter Cake
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$150.00</span>
                              <del>$180.00</del>
                            </div>
                          </div>
                        </div>
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/6.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">-19%</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                                <li className="review-total">
                                  {" "}
                                  <a href="#"> (24)</a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Carrots Group Scal
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$32.00</span>
                              <del>$46.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ltn__product-item */}
                      <div className="col-lg-12">
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/7.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">New</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Orange Sliced Mix
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$150.00</span>
                              <del>$180.00</del>
                            </div>
                          </div>
                        </div>
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/11.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">-19%</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                                <li className="review-total">
                                  {" "}
                                  <a href="#"> (24)</a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Carrots Group Scal
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$32.00</span>
                              <del>$46.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*  */}
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="liton_tab_3_2">
                  <div className="ltn__product-tab-content-inner">
                    <div className="row ltn__tab-product-slider-one-active slick-arrow-1">
                      {/* ltn__product-item */}
                      <div className="col-lg-12">
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/16.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">-19%</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                                <li className="review-total">
                                  {" "}
                                  <a href="#"> (24)</a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Carrots Group Scal
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$32.00</span>
                              <del>$46.00</del>
                            </div>
                          </div>
                        </div>
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/10.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">New</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Poltry Farm Meat
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$78.00</span>
                              <del>$85.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ltn__product-item */}
                      <div className="col-lg-12">
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/15.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">-19%</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                                <li className="review-total">
                                  {" "}
                                  <a href="#"> (24)</a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Carrots Group Scal
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$32.00</span>
                              <del>$46.00</del>
                            </div>
                          </div>
                        </div>
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/9.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">New</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Orange Sliced Mix
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$150.00</span>
                              <del>$180.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ltn__product-item */}
                      <div className="col-lg-12">
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/14.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">New</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Orange Fresh Juice
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$75.00</span>
                              <del>$92.00</del>
                            </div>
                          </div>
                        </div>
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/8.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">-19%</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                                <li className="review-total">
                                  {" "}
                                  <a href="#"> (24)</a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Carrots Group Scal
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$32.00</span>
                              <del>$46.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ltn__product-item */}
                      <div className="col-lg-12">
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/13.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">New</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Poltry Farm Meat
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$78.00</span>
                              <del>$85.00</del>
                            </div>
                          </div>
                        </div>
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/10.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">New</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Orange Fresh Juice
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$75.00</span>
                              <del>$92.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ltn__product-item */}
                      <div className="col-lg-12">
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/15.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">New</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Fresh Butter Cake
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$150.00</span>
                              <del>$180.00</del>
                            </div>
                          </div>
                        </div>
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/6.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">-19%</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                                <li className="review-total">
                                  {" "}
                                  <a href="#"> (24)</a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Carrots Group Scal
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$32.00</span>
                              <del>$46.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ltn__product-item */}
                      <div className="col-lg-12">
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/7.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">New</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Orange Sliced Mix
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$150.00</span>
                              <del>$180.00</del>
                            </div>
                          </div>
                        </div>
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/11.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">-19%</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                                <li className="review-total">
                                  {" "}
                                  <a href="#"> (24)</a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Carrots Group Scal
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$32.00</span>
                              <del>$46.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*  */}
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="liton_tab_3_3">
                  <div className="ltn__product-tab-content-inner">
                    <div className="row ltn__tab-product-slider-one-active slick-arrow-1">
                      {/* ltn__product-item */}
                      <div className="col-lg-12">
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/6.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">-19%</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                                <li className="review-total">
                                  {" "}
                                  <a href="#"> (24)</a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Carrots Group Scal
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$32.00</span>
                              <del>$46.00</del>
                            </div>
                          </div>
                        </div>
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/12.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">New</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Poltry Farm Meat
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$78.00</span>
                              <del>$85.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ltn__product-item */}
                      <div className="col-lg-12">
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/8.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">-19%</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                                <li className="review-total">
                                  {" "}
                                  <a href="#"> (24)</a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Carrots Group Scal
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$32.00</span>
                              <del>$46.00</del>
                            </div>
                          </div>
                        </div>
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/15.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">New</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Orange Sliced Mix
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$150.00</span>
                              <del>$180.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ltn__product-item */}
                      <div className="col-lg-12">
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/9.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">New</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Orange Fresh Juice
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$75.00</span>
                              <del>$92.00</del>
                            </div>
                          </div>
                        </div>
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/11.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">-19%</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                                <li className="review-total">
                                  {" "}
                                  <a href="#"> (24)</a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Carrots Group Scal
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$32.00</span>
                              <del>$46.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ltn__product-item */}
                      <div className="col-lg-12">
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/14.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">New</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Poltry Farm Meat
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$78.00</span>
                              <del>$85.00</del>
                            </div>
                          </div>
                        </div>
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/10.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">New</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Orange Fresh Juice
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$75.00</span>
                              <del>$92.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ltn__product-item */}
                      <div className="col-lg-12">
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/15.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">New</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Fresh Butter Cake
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$150.00</span>
                              <del>$180.00</del>
                            </div>
                          </div>
                        </div>
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/6.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">-19%</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                                <li className="review-total">
                                  {" "}
                                  <a href="#"> (24)</a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Carrots Group Scal
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$32.00</span>
                              <del>$46.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ltn__product-item */}
                      <div className="col-lg-12">
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/7.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">New</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Orange Sliced Mix
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$150.00</span>
                              <del>$180.00</del>
                            </div>
                          </div>
                        </div>
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/11.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">-19%</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                                <li className="review-total">
                                  {" "}
                                  <a href="#"> (24)</a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Carrots Group Scal
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$32.00</span>
                              <del>$46.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*  */}
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="liton_tab_3_4">
                  <div className="ltn__product-tab-content-inner">
                    <div className="row ltn__tab-product-slider-one-active slick-arrow-1">
                      {/* ltn__product-item */}
                      <div className="col-lg-12">
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/3.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">-19%</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                                <li className="review-total">
                                  {" "}
                                  <a href="#"> (24)</a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Carrots Group Scal
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$32.00</span>
                              <del>$46.00</del>
                            </div>
                          </div>
                        </div>
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/5.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">New</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Poltry Farm Meat
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$78.00</span>
                              <del>$85.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ltn__product-item */}
                      <div className="col-lg-12">
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/2.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">-19%</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                                <li className="review-total">
                                  {" "}
                                  <a href="#"> (24)</a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Carrots Group Scal
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$32.00</span>
                              <del>$46.00</del>
                            </div>
                          </div>
                        </div>
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/16.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">New</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Orange Sliced Mix
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$150.00</span>
                              <del>$180.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ltn__product-item */}
                      <div className="col-lg-12">
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/6.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">New</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Orange Fresh Juice
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$75.00</span>
                              <del>$92.00</del>
                            </div>
                          </div>
                        </div>
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/14.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">-19%</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                                <li className="review-total">
                                  {" "}
                                  <a href="#"> (24)</a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Carrots Group Scal
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$32.00</span>
                              <del>$46.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ltn__product-item */}
                      <div className="col-lg-12">
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/14.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">New</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Poltry Farm Meat
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$78.00</span>
                              <del>$85.00</del>
                            </div>
                          </div>
                        </div>
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/10.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">New</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Orange Fresh Juice
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$75.00</span>
                              <del>$92.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ltn__product-item */}
                      <div className="col-lg-12">
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/15.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">New</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Fresh Butter Cake
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$150.00</span>
                              <del>$180.00</del>
                            </div>
                          </div>
                        </div>
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/6.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">-19%</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                                <li className="review-total">
                                  {" "}
                                  <a href="#"> (24)</a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Carrots Group Scal
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$32.00</span>
                              <del>$46.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ltn__product-item */}
                      <div className="col-lg-12">
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/7.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">New</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Orange Sliced Mix
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$150.00</span>
                              <del>$180.00</del>
                            </div>
                          </div>
                        </div>
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/11.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">-19%</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                                <li className="review-total">
                                  {" "}
                                  <a href="#"> (24)</a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Carrots Group Scal
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$32.00</span>
                              <del>$46.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*  */}
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="liton_tab_3_5">
                  <div className="ltn__product-tab-content-inner">
                    <div className="row ltn__tab-product-slider-one-active slick-arrow-1">
                      {/* ltn__product-item */}
                      <div className="col-lg-12">
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/7.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">-19%</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                                <li className="review-total">
                                  {" "}
                                  <a href="#"> (24)</a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Carrots Group Scal
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$32.00</span>
                              <del>$46.00</del>
                            </div>
                          </div>
                        </div>
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/13.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">New</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Poltry Farm Meat
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$78.00</span>
                              <del>$85.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ltn__product-item */}
                      <div className="col-lg-12">
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/5.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">-19%</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                                <li className="review-total">
                                  {" "}
                                  <a href="#"> (24)</a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Carrots Group Scal
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$32.00</span>
                              <del>$46.00</del>
                            </div>
                          </div>
                        </div>
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/15.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">New</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Orange Sliced Mix
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$150.00</span>
                              <del>$180.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ltn__product-item */}
                      <div className="col-lg-12">
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/9.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">New</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Orange Fresh Juice
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$75.00</span>
                              <del>$92.00</del>
                            </div>
                          </div>
                        </div>
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/14.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">-19%</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                                <li className="review-total">
                                  {" "}
                                  <a href="#"> (24)</a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Carrots Group Scal
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$32.00</span>
                              <del>$46.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ltn__product-item */}
                      <div className="col-lg-12">
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/12.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">New</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Poltry Farm Meat
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$78.00</span>
                              <del>$85.00</del>
                            </div>
                          </div>
                        </div>
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/10.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">New</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Orange Fresh Juice
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$75.00</span>
                              <del>$92.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ltn__product-item */}
                      <div className="col-lg-12">
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/15.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">New</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Fresh Butter Cake
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$150.00</span>
                              <del>$180.00</del>
                            </div>
                          </div>
                        </div>
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/6.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">-19%</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                                <li className="review-total">
                                  {" "}
                                  <a href="#"> (24)</a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Carrots Group Scal
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$32.00</span>
                              <del>$46.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ltn__product-item */}
                      <div className="col-lg-12">
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/7.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">New</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Orange Sliced Mix
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$150.00</span>
                              <del>$180.00</del>
                            </div>
                          </div>
                        </div>
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/11.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">-19%</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                                <li className="review-total">
                                  {" "}
                                  <a href="#"> (24)</a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Carrots Group Scal
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$32.00</span>
                              <del>$46.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*  */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* PRODUCT TAB AREA END */}
      {/* COUNTDOWN AREA START */}
      <div className="ltn__call-to-action-area ltn__call-to-action-4 section-bg-1 pt-110 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <img src="img/banner/11.png" alt="#" />
            </div>
            <div className="col-lg-7">
              <div className="call-to-action-inner call-to-action-inner-4 text-color-white--- text-center---">
                <div className="section-title-area ltn__section-title-2 text-center---">
                  <h6 className="ltn__secondary-color">Todays Hot Deals</h6>
                  <h1 className="section-title">
                    Original Stock Honey <br /> Combo Package
                  </h1>
                </div>
                <div
                  className="ltn__countdown ltn__countdown-3 bg-white--"
                  data-countdown="2021/12/28"
                />
                <div className="btn-wrapper animated">
                  <a
                    href="shop.html"
                    className="theme-btn-1 btn btn-effect-1 text-uppercase"
                  >
                    Shop now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* COUNTDOWN AREA END */}
      {/* PRODUCT AREA START (product-item-3) */}
      <div className="ltn__product-area ltn__product-gutter pt-115 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2 text-center">
                <h1 className="section-title">Featured Products</h1>
              </div>
            </div>
          </div>
          <div className="row ltn__tab-product-slider-one-active--- slick-arrow-1">
            {/* ltn__product-item */}
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="ltn__product-item ltn__product-item-3 text-left">
                <div className="product-img">
                  <a href="product-details.html">
                    <img src="img/product/1.png" alt="#" />
                  </a>
                  <div className="product-badge">
                    <ul>
                      <li className="sale-badge">New</li>
                    </ul>
                  </div>
                  <div className="product-hover-action">
                    <ul>
                      <li>
                        <a
                          href="#"
                          title="Quick View"
                          data-toggle="modal"
                          data-target="#quick_view_modal"
                        >
                          <i className="far fa-eye" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title="Add to Cart"
                          data-toggle="modal"
                          data-target="#add_to_cart_modal"
                        >
                          <i className="fas fa-shopping-cart" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title="Wishlist"
                          data-toggle="modal"
                          data-target="#liton_wishlist_modal"
                        >
                          <i className="far fa-heart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-info">
                  <div className="product-ratting">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star-half-alt" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-star" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h2 className="product-title">
                    <a href="product-details.html">Carrots Group Scal</a>
                  </h2>
                  <div className="product-price">
                    <span>$32.00</span>
                    <del>$46.00</del>
                  </div>
                </div>
              </div>
            </div>
            {/* ltn__product-item */}
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="ltn__product-item ltn__product-item-3 text-left">
                <div className="product-img">
                  <a href="product-details.html">
                    <img src="img/product/2.png" alt="#" />
                  </a>
                  <div className="product-hover-action">
                    <ul>
                      <li>
                        <a
                          href="#"
                          title="Quick View"
                          data-toggle="modal"
                          data-target="#quick_view_modal"
                        >
                          <i className="far fa-eye" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title="Add to Cart"
                          data-toggle="modal"
                          data-target="#add_to_cart_modal"
                        >
                          <i className="fas fa-shopping-cart" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title="Wishlist"
                          data-toggle="modal"
                          data-target="#liton_wishlist_modal"
                        >
                          <i className="far fa-heart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-info">
                  <div className="product-ratting">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star-half-alt" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-star" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h2 className="product-title">
                    <a href="product-details.html">Red Hot Tomato</a>
                  </h2>
                  <div className="product-price">
                    <span>$25.00</span>
                    <del>$35.00</del>
                  </div>
                </div>
              </div>
            </div>
            {/* ltn__product-item */}
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="ltn__product-item ltn__product-item-3 text-center">
                <div className="product-img">
                  <a href="product-details.html">
                    <img src="img/product/3.png" alt="#" />
                  </a>
                  <div className="product-badge">
                    <ul>
                      <li className="sale-badge">New</li>
                    </ul>
                  </div>
                  <div className="product-hover-action">
                    <ul>
                      <li>
                        <a
                          href="#"
                          title="Quick View"
                          data-toggle="modal"
                          data-target="#quick_view_modal"
                        >
                          <i className="far fa-eye" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title="Add to Cart"
                          data-toggle="modal"
                          data-target="#add_to_cart_modal"
                        >
                          <i className="fas fa-shopping-cart" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title="Wishlist"
                          data-toggle="modal"
                          data-target="#liton_wishlist_modal"
                        >
                          <i className="far fa-heart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-info">
                  <div className="product-ratting">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star-half-alt" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-star" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h2 className="product-title">
                    <a href="product-details.html">Orange Fresh Juice</a>
                  </h2>
                  <div className="product-price">
                    <span>$75.00</span>
                    <del>$92.00</del>
                  </div>
                </div>
              </div>
            </div>
            {/* ltn__product-item */}
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="ltn__product-item ltn__product-item-3 text-center">
                <div className="product-img">
                  <a href="product-details.html">
                    <img src="img/product/4.png" alt="#" />
                  </a>
                  <div className="product-badge">
                    <ul>
                      <li className="sale-badge">New</li>
                    </ul>
                  </div>
                  <div className="product-hover-action">
                    <ul>
                      <li>
                        <a
                          href="#"
                          title="Quick View"
                          data-toggle="modal"
                          data-target="#quick_view_modal"
                        >
                          <i className="far fa-eye" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title="Add to Cart"
                          data-toggle="modal"
                          data-target="#add_to_cart_modal"
                        >
                          <i className="fas fa-shopping-cart" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title="Wishlist"
                          data-toggle="modal"
                          data-target="#liton_wishlist_modal"
                        >
                          <i className="far fa-heart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-info">
                  <div className="product-ratting">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star-half-alt" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-star" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h2 className="product-title">
                    <a href="product-details.html">Poltry Farm Meat</a>
                  </h2>
                  <div className="product-price">
                    <span>$78.00</span>
                    <del>$85.00</del>
                  </div>
                </div>
              </div>
            </div>
            {/* ltn__product-item */}
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="ltn__product-item ltn__product-item-3 text-center">
                <div className="product-img">
                  <a href="product-details.html">
                    <img src="img/product/5.png" alt="#" />
                  </a>
                  <div className="product-badge">
                    <ul>
                      <li className="sale-badge">New</li>
                    </ul>
                  </div>
                  <div className="product-hover-action">
                    <ul>
                      <li>
                        <a
                          href="#"
                          title="Quick View"
                          data-toggle="modal"
                          data-target="#quick_view_modal"
                        >
                          <i className="far fa-eye" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title="Add to Cart"
                          data-toggle="modal"
                          data-target="#add_to_cart_modal"
                        >
                          <i className="fas fa-shopping-cart" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title="Wishlist"
                          data-toggle="modal"
                          data-target="#liton_wishlist_modal"
                        >
                          <i className="far fa-heart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-info">
                  <div className="product-ratting">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star-half-alt" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-star" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h2 className="product-title">
                    <a href="product-details.html">Fresh Butter Cake</a>
                  </h2>
                  <div className="product-price">
                    <span>$150.00</span>
                    <del>$180.00</del>
                  </div>
                </div>
              </div>
            </div>
            {/* ltn__product-item */}
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="ltn__product-item ltn__product-item-3 text-center">
                <div className="product-img">
                  <a href="product-details.html">
                    <img src="img/product/6.png" alt="#" />
                  </a>
                  <div className="product-badge">
                    <ul>
                      <li className="sale-badge">New</li>
                    </ul>
                  </div>
                  <div className="product-hover-action">
                    <ul>
                      <li>
                        <a
                          href="#"
                          title="Quick View"
                          data-toggle="modal"
                          data-target="#quick_view_modal"
                        >
                          <i className="far fa-eye" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title="Add to Cart"
                          data-toggle="modal"
                          data-target="#add_to_cart_modal"
                        >
                          <i className="fas fa-shopping-cart" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title="Wishlist"
                          data-toggle="modal"
                          data-target="#liton_wishlist_modal"
                        >
                          <i className="far fa-heart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-info">
                  <div className="product-ratting">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star-half-alt" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-star" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h2 className="product-title">
                    <a href="product-details.html">Orange Sliced Mix</a>
                  </h2>
                  <div className="product-price">
                    <span>$150.00</span>
                    <del>$180.00</del>
                  </div>
                </div>
              </div>
            </div>
            {/* ltn__product-item */}
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="ltn__product-item ltn__product-item-3 text-center">
                <div className="product-img">
                  <a href="product-details.html">
                    <img src="img/product/7.png" alt="#" />
                  </a>
                  <div className="product-badge">
                    <ul>
                      <li className="sale-badge">New</li>
                    </ul>
                  </div>
                  <div className="product-hover-action">
                    <ul>
                      <li>
                        <a
                          href="#"
                          title="Quick View"
                          data-toggle="modal"
                          data-target="#quick_view_modal"
                        >
                          <i className="far fa-eye" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title="Add to Cart"
                          data-toggle="modal"
                          data-target="#add_to_cart_modal"
                        >
                          <i className="fas fa-shopping-cart" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title="Wishlist"
                          data-toggle="modal"
                          data-target="#liton_wishlist_modal"
                        >
                          <i className="far fa-heart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-info">
                  <div className="product-ratting">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star-half-alt" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-star" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h2 className="product-title">
                    <a href="product-details.html">Orange Fresh Juice</a>
                  </h2>
                  <div className="product-price">
                    <span>$75.00</span>
                    <del>$92.00</del>
                  </div>
                </div>
              </div>
            </div>
            {/* ltn__product-item */}
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="ltn__product-item ltn__product-item-3 text-center">
                <div className="product-img">
                  <a href="product-details.html">
                    <img src="img/product/8.png" alt="#" />
                  </a>
                  <div className="product-badge">
                    <ul>
                      <li className="sale-badge">New</li>
                    </ul>
                  </div>
                  <div className="product-hover-action">
                    <ul>
                      <li>
                        <a
                          href="#"
                          title="Quick View"
                          data-toggle="modal"
                          data-target="#quick_view_modal"
                        >
                          <i className="far fa-eye" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title="Add to Cart"
                          data-toggle="modal"
                          data-target="#add_to_cart_modal"
                        >
                          <i className="fas fa-shopping-cart" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title="Wishlist"
                          data-toggle="modal"
                          data-target="#liton_wishlist_modal"
                        >
                          <i className="far fa-heart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-info">
                  <div className="product-ratting">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star-half-alt" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-star" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h2 className="product-title">
                    <a href="product-details.html">Poltry Farm Meat</a>
                  </h2>
                  <div className="product-price">
                    <span>$78.00</span>
                    <del>$85.00</del>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
      {/* PRODUCT AREA END */}
      {/* VIDEO AREA START */}
      <div className="ltn__video-popup-area ltn__video-popup-margin">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="ltn__video-bg-img ltn__video-popup-height-600 bg-overlay-black-10-- bg-image"
                data-bg="img/bg/15.jpg"
              >
                <a
                  className="ltn__video-icon-2 ltn__video-icon-2-border"
                  href="https://www.youtube.com/embed/ATI7vfCgwXE?autoplay=1&showinfo=0"
                  data-rel="lightcase:myCollection"
                >
                  <i className="fa fa-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* VIDEO AREA END */}
      {/* TESTIMONIAL AREA START (testimonial-4) */}
      <div className="ltn__testimonial-area section-bg-1 pt-290 pb-70">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2 text-center">
                <h6 className="section-subtitle ltn__secondary-color">
                  // Testimonials
                </h6>
                <h1 className="section-title">
                  Clients Feedbacks<span>.</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="row ltn__testimonial-slider-3-active slick-arrow-1 slick-arrow-1-inner">
            <div className="col-lg-12">
              <div className="ltn__testimonial-item ltn__testimonial-item-4">
                <div className="ltn__testimoni-img">
                  <img src="img/testimonial/6.jpg" alt="#" />
                </div>
                <div className="ltn__testimoni-info">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipi sicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                  <h4>Rosalina D. William</h4>
                  <h6>Founder</h6>
                </div>
                <div className="ltn__testimoni-bg-icon">
                  <i className="far fa-comments" />
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="ltn__testimonial-item ltn__testimonial-item-4">
                <div className="ltn__testimoni-img">
                  <img src="img/testimonial/7.jpg" alt="#" />
                </div>
                <div className="ltn__testimoni-info">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipi sicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                  <h4>Rosalina D. William</h4>
                  <h6>Founder</h6>
                </div>
                <div className="ltn__testimoni-bg-icon">
                  <i className="far fa-comments" />
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="ltn__testimonial-item ltn__testimonial-item-4">
                <div className="ltn__testimoni-img">
                  <img src="img/testimonial/1.jpg" alt="#" />
                </div>
                <div className="ltn__testimoni-info">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipi sicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                  <h4>Rosalina D. William</h4>
                  <h6>Founder</h6>
                </div>
                <div className="ltn__testimoni-bg-icon">
                  <i className="far fa-comments" />
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="ltn__testimonial-item ltn__testimonial-item-4">
                <div className="ltn__testimoni-img">
                  <img src="img/testimonial/2.jpg" alt="#" />
                </div>
                <div className="ltn__testimoni-info">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipi sicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                  <h4>Rosalina D. William</h4>
                  <h6>Founder</h6>
                </div>
                <div className="ltn__testimoni-bg-icon">
                  <i className="far fa-comments" />
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="ltn__testimonial-item ltn__testimonial-item-4">
                <div className="ltn__testimoni-img">
                  <img src="img/testimonial/5.jpg" alt="#" />
                </div>
                <div className="ltn__testimoni-info">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipi sicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                  <h4>Rosalina D. William</h4>
                  <h6>Founder</h6>
                </div>
                <div className="ltn__testimoni-bg-icon">
                  <i className="far fa-comments" />
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
      {/* TESTIMONIAL AREA END */}
      {/* BLOG AREA START (blog-3) */}
      <div className="ltn__blog-area pt-115 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2 text-center">
                <h1 className="section-title white-color---">Leatest Blog</h1>
              </div>
            </div>
          </div>
          <div className="row  ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal">
            {/* Blog Item */}
            <div className="col-lg-12">
              <div className="ltn__blog-item ltn__blog-item-3">
                <div className="ltn__blog-img">
                  <a href="blog-details.html">
                    <img src="img/blog/1.jpg" alt="#" />
                  </a>
                </div>
                <div className="ltn__blog-brief">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-author">
                        <a href="#">
                          <i className="far fa-user" />
                          by: Admin
                        </a>
                      </li>
                      <li className="ltn__blog-tags">
                        <a href="#">
                          <i className="fas fa-tags" />
                          Services
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="ltn__blog-title">
                    <a href="blog-details.html">
                      Common Engine Oil Problems and Solutions
                    </a>
                  </h3>
                  <div className="ltn__blog-meta-btn">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-date">
                          <i className="far fa-calendar-alt" />
                          June 24, 2020
                        </li>
                      </ul>
                    </div>
                    <div className="ltn__blog-btn">
                      <a href="blog-details.html">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Blog Item */}
            <div className="col-lg-12">
              <div className="ltn__blog-item ltn__blog-item-3">
                <div className="ltn__blog-img">
                  <a href="blog-details.html">
                    <img src="img/blog/2.jpg" alt="#" />
                  </a>
                </div>
                <div className="ltn__blog-brief">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-author">
                        <a href="#">
                          <i className="far fa-user" />
                          by: Admin
                        </a>
                      </li>
                      <li className="ltn__blog-tags">
                        <a href="#">
                          <i className="fas fa-tags" />
                          Services
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="ltn__blog-title">
                    <a href="blog-details.html">
                      How and when to replace brake rotors
                    </a>
                  </h3>
                  <div className="ltn__blog-meta-btn">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-date">
                          <i className="far fa-calendar-alt" />
                          July 23, 2020
                        </li>
                      </ul>
                    </div>
                    <div className="ltn__blog-btn">
                      <a href="blog-details.html">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Blog Item */}
            <div className="col-lg-12">
              <div className="ltn__blog-item ltn__blog-item-3">
                <div className="ltn__blog-img">
                  <a href="blog-details.html">
                    <img src="img/blog/3.jpg" alt="#" />
                  </a>
                </div>
                <div className="ltn__blog-brief">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-author">
                        <a href="#">
                          <i className="far fa-user" />
                          by: Admin
                        </a>
                      </li>
                      <li className="ltn__blog-tags">
                        <a href="#">
                          <i className="fas fa-tags" />
                          Services
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="ltn__blog-title">
                    <a href="blog-details.html">
                      Elenance, Servicing &amp; Repairs
                    </a>
                  </h3>
                  <div className="ltn__blog-meta-btn">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-date">
                          <i className="far fa-calendar-alt" />
                          August 22, 2020
                        </li>
                      </ul>
                    </div>
                    <div className="ltn__blog-btn">
                      <a href="blog-details.html">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Blog Item */}
            <div className="col-lg-12">
              <div className="ltn__blog-item ltn__blog-item-3">
                <div className="ltn__blog-img">
                  <a href="blog-details.html">
                    <img src="img/blog/4.jpg" alt="#" />
                  </a>
                </div>
                <div className="ltn__blog-brief">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-author">
                        <a href="#">
                          <i className="far fa-user" />
                          by: Admin
                        </a>
                      </li>
                      <li className="ltn__blog-tags">
                        <a href="#">
                          <i className="fas fa-tags" />
                          Services
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="ltn__blog-title">
                    <a href="blog-details.html">
                      Healthiest Vegetables on Earth
                    </a>
                  </h3>
                  <div className="ltn__blog-meta-btn">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-date">
                          <i className="far fa-calendar-alt" />
                          June 24, 2020
                        </li>
                      </ul>
                    </div>
                    <div className="ltn__blog-btn">
                      <a href="blog-details.html">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Blog Item */}
            <div className="col-lg-12">
              <div className="ltn__blog-item ltn__blog-item-3">
                <div className="ltn__blog-img">
                  <a href="blog-details.html">
                    <img src="img/blog/5.jpg" alt="#" />
                  </a>
                </div>
                <div className="ltn__blog-brief">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-author">
                        <a href="#">
                          <i className="far fa-user" />
                          by: Admin
                        </a>
                      </li>
                      <li className="ltn__blog-tags">
                        <a href="#">
                          <i className="fas fa-tags" />
                          Services
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="ltn__blog-title">
                    <a href="blog-details.html">
                      How te Your Tires Last Longer
                    </a>
                  </h3>
                  <div className="ltn__blog-meta-btn">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-date">
                          <i className="far fa-calendar-alt" />
                          June 24, 2020
                        </li>
                      </ul>
                    </div>
                    <div className="ltn__blog-btn">
                      <a href="blog-details.html">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
      {/* BLOG AREA END */}
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

      {/* Body main wrapper end */}
    </>
  );
};

export default Home;
