import React, { Component, useEffect, useRef, useState } from "react";
import HeaderV2 from "../../../shared/layouts/HeaderV2";
import MenuV2 from "../../../shared/layouts/MenuV2";
import { useParams } from "react-router-dom";
import productService from "../services/ProductService";
import AddToCartModal from "../shared/components/AddToCartModal";
import shoppingCartService from "../services/ShoppingCartService";
import { formatCurrencyDefault } from "../../../utils/NumberHelper";

const ProductDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [quantity, setQuantity] = useState(1);
  const qty = useRef(1);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    return await productService.getProductDetails(id).then((res) => {
      setData(res.data);
    });
  };

  const handleChangeQuantity = (ev) => {
    console.log(ev.target.value);
    setQuantity((value) => ev.target.value);
  };

  const handleAddToCart = () => {
    const selectedQty = qty.current.value;
    const cartItem = {
      product: data,
      quantity: parseFloat(selectedQty),
    };
    shoppingCartService.addToCart(cartItem);
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
                  <h1 className="section-title white-color">Product Details</h1>
                </div>
                <div className="ltn__breadcrumb-list">
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>Product Details</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* BREADCRUMB AREA END */}
      {/* SHOP DETAILS AREA START */}
      <div className="ltn__shop-details-area pb-85">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="ltn__shop-details-inner mb-60">
                <div className="row">
                  <div className="col-md-6">
                    <div className="ltn__shop-details-img-gallery">
                      <div className="ltn__shop-details-large-img">
                        <div className="single-large-img">
                          <a
                            href="img/product/1.png"
                            data-rel="lightcase:myCollection"
                          >
                            <img src="img/product/1.png" alt="Image" />
                          </a>
                        </div>
                        <div className="single-large-img">
                          <a
                            href="img/product/2.png"
                            data-rel="lightcase:myCollection"
                          >
                            <img src="img/product/2.png" alt="Image" />
                          </a>
                        </div>
                        <div className="single-large-img">
                          <a
                            href="img/product/3.png"
                            data-rel="lightcase:myCollection"
                          >
                            <img src="img/product/3.png" alt="Image" />
                          </a>
                        </div>
                        <div className="single-large-img">
                          <a
                            href="img/product/4.png"
                            data-rel="lightcase:myCollection"
                          >
                            <img src="img/product/4.png" alt="Image" />
                          </a>
                        </div>
                        <div className="single-large-img">
                          <a
                            href="img/product/5.png"
                            data-rel="lightcase:myCollection"
                          >
                            <img src="img/product/5.png" alt="Image" />
                          </a>
                        </div>
                        <div className="single-large-img">
                          <a
                            href="img/product/6.png"
                            data-rel="lightcase:myCollection"
                          >
                            <img src="img/product/6.png" alt="Image" />
                          </a>
                        </div>
                        <div className="single-large-img">
                          <a
                            href="img/product/7.png"
                            data-rel="lightcase:myCollection"
                          >
                            <img src="img/product/7.png" alt="Image" />
                          </a>
                        </div>
                      </div>
                      <div className="ltn__shop-details-small-img slick-arrow-2">
                        <div className="single-small-img">
                          <img src="img/product/1.png" alt="Image" />
                        </div>
                        <div className="single-small-img">
                          <img src="img/product/2.png" alt="Image" />
                        </div>
                        <div className="single-small-img">
                          <img src="img/product/3.png" alt="Image" />
                        </div>
                        <div className="single-small-img">
                          <img src="img/product/4.png" alt="Image" />
                        </div>
                        <div className="single-small-img">
                          <img src="img/product/5.png" alt="Image" />
                        </div>
                        <div className="single-small-img">
                          <img src="img/product/6.png" alt="Image" />
                        </div>
                        <div className="single-small-img">
                          <img src="img/product/7.png" alt="Image" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="modal-product-info shop-details-info pl-0">
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
                            <a href="#"> ( 95 Reviews )</a>
                          </li>
                        </ul>
                      </div>
                      <h3>{data && data.name}</h3>
                      <div className="product-price">
                        <span>{formatCurrencyDefault(data && data.unitPrice)}</span>
                      </div>
                      <div className="modal-product-meta ltn__product-details-menu-1">
                        <ul>
                          <li>
                            <strong>Categories:</strong>
                            <span>
                              <a href="#">
                                {data.category && data.category.name}
                              </a>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="ltn__product-details-menu-2">
                        <ul>
                          <li>
                            <div className="cart-plus-minus">
                              <input
                                type="text"
                                value={quantity}
                                name="qtybutton"
                                className="cart-plus-minus-box"
                                ref={qty}
                                onChange={handleChangeQuantity}
                              />
                            </div>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="theme-btn-1 btn btn-effect-1"
                              title="Add to Cart"
                              data-toggle="modal"
                              data-target="#add_to_cart_modal"
                              onClick={handleAddToCart}
                            >
                              <i className="fas fa-shopping-cart" />
                              <span>ADD TO CART</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="ltn__product-details-menu-3">
                        <ul>
                          <li>
                            <a
                              href="#"
                              className=""
                              title="Wishlist"
                              data-toggle="modal"
                              data-target="#liton_wishlist_modal"
                            >
                              <i className="far fa-heart" />
                              <span>Add to Wishlist</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className=""
                              title="Compare"
                              data-toggle="modal"
                              data-target="#quick_view_modal"
                            >
                              <i className="fas fa-exchange-alt" />
                              <span>Compare</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <hr />
                      <div className="ltn__social-media">
                        <ul>
                          <li>Share:</li>
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
                      <hr />
                      <div className="ltn__safe-checkout">
                        <h5>Guaranteed Safe Checkout</h5>
                        <img
                          src="img/icons/payment-2.png"
                          alt="Payment Image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Shop Tab Start */}
              <div className="ltn__shop-details-tab-inner ltn__shop-details-tab-inner-2">
                <div className="ltn__shop-details-tab-menu">
                  <div className="nav">
                    <a
                      className="active show"
                      data-toggle="tab"
                      href="#liton_tab_details_1_1"
                    >
                      Description
                    </a>
                    <a
                      data-toggle="tab"
                      href="#liton_tab_details_1_2"
                      className=""
                    >
                      Reviews
                    </a>
                  </div>
                </div>
                <div className="tab-content">
                  <div
                    className="tab-pane fade active show"
                    id="liton_tab_details_1_1"
                  >
                    <div className="ltn__shop-details-tab-content-inner">
                      {data && data.description}
                    </div>
                  </div>
                  <div className="tab-pane fade" id="liton_tab_details_1_2">
                    <div className="ltn__shop-details-tab-content-inner">
                      <h4 className="title-2">Customer Reviews</h4>
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
                            <a href="#"> ( 95 Reviews )</a>
                          </li>
                        </ul>
                      </div>
                      <hr />
                      {/* comment-area */}
                      <div className="ltn__comment-area mb-30">
                        <div className="ltn__comment-inner">
                          <ul>
                            <li>
                              <div className="ltn__comment-item clearfix">
                                <div className="ltn__commenter-img">
                                  <img
                                    src="img/testimonial/1.jpg"
                                    alt="Image"
                                  />
                                </div>
                                <div className="ltn__commenter-comment">
                                  <h6>
                                    <a href="#">Adam Smit</a>
                                  </h6>
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
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Doloribus, omnis fugit
                                    corporis iste magnam ratione.
                                  </p>
                                  <span className="ltn__comment-reply-btn">
                                    September 3, 2020
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="ltn__comment-item clearfix">
                                <div className="ltn__commenter-img">
                                  <img
                                    src="img/testimonial/3.jpg"
                                    alt="Image"
                                  />
                                </div>
                                <div className="ltn__commenter-comment">
                                  <h6>
                                    <a href="#">Adam Smit</a>
                                  </h6>
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
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Doloribus, omnis fugit
                                    corporis iste magnam ratione.
                                  </p>
                                  <span className="ltn__comment-reply-btn">
                                    September 2, 2020
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="ltn__comment-item clearfix">
                                <div className="ltn__commenter-img">
                                  <img
                                    src="img/testimonial/2.jpg"
                                    alt="Image"
                                  />
                                </div>
                                <div className="ltn__commenter-comment">
                                  <h6>
                                    <a href="#">Adam Smit</a>
                                  </h6>
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
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Doloribus, omnis fugit
                                    corporis iste magnam ratione.
                                  </p>
                                  <span className="ltn__comment-reply-btn">
                                    September 2, 2020
                                  </span>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* comment-reply */}
                      <div className="ltn__comment-reply-area ltn__form-box mb-30">
                        <form action="#">
                          <h4 className="title-2">Add a Review</h4>
                          <div className="mb-30">
                            <div className="add-a-review">
                              <h6>Your Ratings:</h6>
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
                            </div>
                          </div>
                          <div className="input-item input-item-textarea ltn__custom-icon">
                            <textarea
                              placeholder="Type your comments...."
                              defaultValue={""}
                            />
                          </div>
                          <div className="input-item input-item-name ltn__custom-icon">
                            <input
                              type="text"
                              placeholder="Type your name...."
                            />
                          </div>
                          <div className="input-item input-item-email ltn__custom-icon">
                            <input
                              type="email"
                              placeholder="Type your email...."
                            />
                          </div>
                          <div className="input-item input-item-website ltn__custom-icon">
                            <input
                              type="text"
                              name="website"
                              placeholder="Type your website...."
                            />
                          </div>
                          <label className="mb-0">
                            <input type="checkbox" name="agree" /> Save my name,
                            email, and website in this browser for the next time
                            I comment.
                          </label>
                          <div className="btn-wrapper">
                            <button
                              className="btn theme-btn-1 btn-effect-1 text-uppercase"
                              type="submit"
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Shop Tab End */}
            </div>
            <div className="col-lg-4">
              <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar">
                {/* Top Rated Product Widget */}
                <div className="widget ltn__top-rated-product-widget">
                  <h4 className="ltn__widget-title ltn__widget-title-border">
                    Top Rated Product
                  </h4>
                  <ul>
                    <li>
                      <div className="top-rated-product-item clearfix">
                        <div className="top-rated-product-img">
                          <a href="product-details.html">
                            <img src="img/product/1.png" alt="#" />
                          </a>
                        </div>
                        <div className="top-rated-product-info">
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
                                  <i className="fas fa-star" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fas fa-star" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <h6>
                            <a href="product-details.html">
                              Mixel Solid Seat Cover
                            </a>
                          </h6>
                          <div className="product-price">
                            <span>$49.00</span>
                            <del>$65.00</del>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="top-rated-product-item clearfix">
                        <div className="top-rated-product-img">
                          <a href="product-details.html">
                            <img src="img/product/2.png" alt="#" />
                          </a>
                        </div>
                        <div className="top-rated-product-info">
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
                                  <i className="fas fa-star" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fas fa-star" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <h6>
                            <a href="product-details.html">Vegetables Juices</a>
                          </h6>
                          <div className="product-price">
                            <span>$49.00</span>
                            <del>$65.00</del>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="top-rated-product-item clearfix">
                        <div className="top-rated-product-img">
                          <a href="product-details.html">
                            <img src="img/product/3.png" alt="#" />
                          </a>
                        </div>
                        <div className="top-rated-product-info">
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
                          <h6>
                            <a href="product-details.html">
                              Coil Spring Conversion
                            </a>
                          </h6>
                          <div className="product-price">
                            <span>$49.00</span>
                            <del>$65.00</del>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* Banner Widget */}
                <div className="widget ltn__banner-widget">
                  <a href="shop.html">
                    <img src="img/banner/2.jpg" alt="#" />
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
      {/* SHOP DETAILS AREA END */}
      {/* PRODUCT SLIDER AREA START */}
      <div className="ltn__product-slider-area ltn__product-gutter pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2">
                <h6 className="section-subtitle ltn__secondary-color">
                  // cars
                </h6>
                <h1 className="section-title">
                  Related Products<span>.</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="row ltn__related-product-slider-one-active slick-arrow-1">
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
                    <a href="product-details.html">Red Hot Tomato</a>
                  </h2>
                  <div className="product-price">
                    <span>$149.00</span>
                    <del>$162.00</del>
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
                    <a href="product-details.html">Vegetables Juices</a>
                  </h2>
                  <div className="product-price">
                    <span>$62.00</span>
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
            <div className="col-lg-12">
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
            <div className="col-lg-12">
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
                    <a href="product-details.html">Orange Sliced Mix</a>
                  </h2>
                  <div className="product-price">
                    <span>$150.00</span>
                    <del>$180.00</del>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
      {/* PRODUCT SLIDER AREA END */}
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
      <AddToCartModal data={data} />
    </>
  );
};

export default ProductDetails;
