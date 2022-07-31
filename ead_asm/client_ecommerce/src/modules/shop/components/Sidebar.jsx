import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import categoryService from "../services/CategoryService";

const Sidebar = (props) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = async () => {
    await categoryService.getCategoryList().then((res) => {
      setCategories(res.data);
    });
  };
  return (
    <>
      <div className="col-lg-4  mb-120">
        <aside className="sidebar ltn__shop-sidebar">
          {/* Category Widget */}
          <div className="widget ltn__menu-widget">
            <h4 className="ltn__widget-title ltn__widget-title-border">
              Product categories
            </h4>
            <ul>
              {categories.content &&
                categories.content.map((category, index) => (
                  <li key={index}>
                    <a href="#">
                      {category.name}
                      <span>
                        <i className="fas fa-long-arrow-alt-right" />
                      </span>
                    </a>
                  </li>
                ))}
            </ul>
          </div>
          {/* Price Filter Widget */}
          <div className="widget ltn__price-filter-widget">
            <h4 className="ltn__widget-title ltn__widget-title-border">
              Filter by price
            </h4>
            <div className="price_filter">
              <div className="price_slider_amount">
                <input type="submit" defaultValue="Your range:" />
                <input
                  type="text"
                  className="amount"
                  name="price"
                  placeholder="Add Your Price"
                />
              </div>
              <div className="slider-range" />
            </div>
          </div>
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
                      <a href="product-details.html">Mixel Solid Seat Cover</a>
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
                      <a href="product-details.html">Coil Spring Conversion</a>
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
          {/* Search Widget */}
          <div className="widget ltn__search-widget">
            <h4 className="ltn__widget-title ltn__widget-title-border">
              Search Objects
            </h4>
            <form action="#">
              <input
                type="text"
                name="search"
                placeholder="Search your keyword..."
              />
              <button type="submit">
                <i className="fas fa-search" />
              </button>
            </form>
          </div>
          {/* Tagcloud Widget */}
          <div className="widget ltn__tagcloud-widget">
            <h4 className="ltn__widget-title ltn__widget-title-border">
              Popular Tags
            </h4>
            <ul>
              <li>
                <a href="#">Popular</a>
              </li>
              <li>
                <a href="#">desgin</a>
              </li>
              <li>
                <a href="#">ux</a>
              </li>
              <li>
                <a href="#">usability</a>
              </li>
              <li>
                <a href="#">develop</a>
              </li>
              <li>
                <a href="#">icon</a>
              </li>
              <li>
                <a href="#">Car</a>
              </li>
              <li>
                <a href="#">Service</a>
              </li>
              <li>
                <a href="#">Repairs</a>
              </li>
              <li>
                <a href="#">Auto Parts</a>
              </li>
              <li>
                <a href="#">Oil</a>
              </li>
              <li>
                <a href="#">Dealer</a>
              </li>
              <li>
                <a href="#">Oil Change</a>
              </li>
              <li>
                <a href="#">Body Color</a>
              </li>
            </ul>
          </div>
          {/* Size Widget */}
          <div className="widget ltn__tagcloud-widget ltn__size-widget">
            <h4 className="ltn__widget-title ltn__widget-title-border">
              Product Size
            </h4>
            <ul>
              <li>
                <a href="#">S</a>
              </li>
              <li>
                <a href="#">M</a>
              </li>
              <li>
                <a href="#">L</a>
              </li>
              <li>
                <a href="#">XL</a>
              </li>
              <li>
                <a href="#">XXL</a>
              </li>
            </ul>
          </div>
          {/* Color Widget */}
          <div className="widget ltn__color-widget">
            <h4 className="ltn__widget-title ltn__widget-title-border">
              Product Color
            </h4>
            <ul>
              <li className="black">
                <a href="#" />
              </li>
              <li className="white">
                <a href="#" />
              </li>
              <li className="red">
                <a href="#" />
              </li>
              <li className="silver">
                <a href="#" />
              </li>
              <li className="gray">
                <a href="#" />
              </li>
              <li className="maroon">
                <a href="#" />
              </li>
              <li className="yellow">
                <a href="#" />
              </li>
              <li className="olive">
                <a href="#" />
              </li>
              <li className="lime">
                <a href="#" />
              </li>
              <li className="green">
                <a href="#" />
              </li>
              <li className="aqua">
                <a href="#" />
              </li>
              <li className="teal">
                <a href="#" />
              </li>
              <li className="blue">
                <a href="#" />
              </li>
              <li className="navy">
                <a href="#" />
              </li>
              <li className="fuchsia">
                <a href="#" />
              </li>
              <li className="purple">
                <a href="#" />
              </li>
              <li className="pink">
                <a href="#" />
              </li>
              <li className="nude">
                <a href="#" />
              </li>
              <li className="orange">
                <a href="#" />
              </li>
              <li>
                <a href="#" className="orange" />
              </li>
              <li>
                <a href="#" className="orange" />
              </li>
            </ul>
          </div>
          {/* Banner Widget */}
          <div className="widget ltn__banner-widget">
            <a href="shop.html">
              <img src="img/banner/banner-1.jpg" alt="#" />
            </a>
          </div>
        </aside>
      </div>
    </>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
