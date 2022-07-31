import React from "react";
import PropTypes from "prop-types";

const FilterBar = (props) => {
  return (
    <>
      <div className="ltn__shop-options">
        <ul>
          <li>
            <div className="ltn__grid-list-tab-menu ">
              <div className="nav">
                <a
                  className="active show"
                  data-toggle="tab"
                  href="#liton_product_grid"
                >
                  <i className="fas fa-th-large" />
                </a>
                <a data-toggle="tab" href="#liton_product_list">
                  <i className="fas fa-list" />
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="short-by text-center">
              <select className="nice-select">
                <option>Default sorting</option>
                <option>Sort by popularity</option>
                <option>Sort by new arrivals</option>
                <option>Sort by price: low to high</option>
                <option>Sort by price: high to low</option>
              </select>
            </div>
          </li>
          <li>
            <div className="showing-product-number text-right">
              <span>Showing 9 of 20 results</span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

FilterBar.propTypes = {};

export default FilterBar;
