import axios from "axios";
import { BASE_URL } from "../../../configs/Service";

const API_ENDPOINTS = {
  GET_PRODUCT_LIST: "/products",
  GET_PRODUCT_DETAILS: "/products/",
};

class ProductService {
  getProductList = async (params) => {
    return await axios.get(BASE_URL + API_ENDPOINTS.GET_PRODUCT_LIST, {
      params,
    });
  };

  getProductDetails = async (id) => {
    return await axios.get(BASE_URL + API_ENDPOINTS.GET_PRODUCT_DETAILS + id);
  };
}

const productService = new ProductService();
export default productService;
