import React, { useEffect, useState } from "react";
import HeaderV2 from "../../shared/layouts/HeaderV2";
import MenuV2 from "../../shared/layouts/MenuV2";
import Feature from "./components/Feature";
import FilterBar from "./components/FilterBar";
import ProductItem from "./components/ProductItem";
import ShopBreadcumb from "./components/ShopBreadcumb";
import Sidebar from "./components/Sidebar";
import productService from "./services/ProductService";
import QuickViewModal from "./shared/components/QuickViewModal";
import AddToCartModal from "./shared/components/AddToCartModal";
import WishlistModal from "./shared/components/WishlistModal";
import { ROUTES } from "../../routes/Router";
import { Link, useLocation } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [quickViewProduct, setQuickViewProduct] = useState({});
  const [addToCartProduct, setAddToCartProduct] = useState({});
  const [wishlistProduct, setWishlistProduct] = useState({});
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  let page = parseInt(query.get("page") || "1", 10);

  useEffect(() => {
    getProductList();
  }, [page]);

  const getProductList = async () => {
    const params = {
      page,
    };
    console.log(params);
    await productService.getProductList(params).then((res) => {
      setProducts(res.data);
    });
  };

  const handleSetQuickViewProduct = (product) => {
    setQuickViewProduct(product);
  };

  const handleSetAddToCartProduct = (product) => {
    setAddToCartProduct(product);
  };

  const handleSetWishlistProduct = (product) => {
    setWishlistProduct(product);
  };
  return (
    <>
      <HeaderV2 />
      <MenuV2 />
      <div className="ltn__utilize-overlay" />
      <ShopBreadcumb />
      {/* PRODUCT DETAILS AREA START */}
      <div className="ltn__product-area ltn__product-gutter">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 order-lg-2 mb-120">
              <FilterBar />
              <div className="tab-content">
                <div
                  className="tab-pane fade active show"
                  id="liton_product_grid"
                >
                  <div className="ltn__product-tab-content-inner ltn__product-grid-view">
                    <div className="row">
                      {products.content &&
                        products.content.map((product, index) => (
                          <ProductItem
                            key={index}
                            data={product}
                            onAddToCart={handleSetAddToCartProduct}
                          />
                        ))}
                    </div>
                  </div>
                </div>
              </div>
              <Pagination
                page={page}
                count={products.totalPages}
                renderItem={(item) => (
                  <PaginationItem
                    component={Link}
                    to={`${ROUTES.SHOP_PAGE}${
                      item.page === 1 ? "" : `?page=${item.page}`
                    }`}
                    {...item}
                  />
                )}
              />
            </div>
            <Sidebar />
          </div>
        </div>
      </div>
      {/* PRODUCT DETAILS AREA END */}
      <QuickViewModal />
      <AddToCartModal data={addToCartProduct} />
      <WishlistModal />
      <Feature />
    </>
  );
};

export default Shop;
