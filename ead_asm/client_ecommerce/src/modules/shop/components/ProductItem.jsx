import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../routes/Router";

const ProductItem = ({ data, onAddToCart }) => {
  return (
    <>
      <div className="col-xl-4 col-sm-6 col-6">
        <div className="ltn__product-item ltn__product-item-3 text-center">
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
                    onClick={() => onAddToCart(data)}
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
              <Link to={`${ROUTES.PRODUCT_DETAILS_PAGE}/${data && data.id}`}>
                {data && data.name}
              </Link>
            </h2>
            <div className="product-price">
              <span>${data && data.unitPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
