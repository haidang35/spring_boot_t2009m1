import axios from "axios";
import { BASE_URL } from "../../../constants/service";
import authService from "../../auth/services/AuthService";

const API_ENDPOINT = {
  GET_PRODUCT_LIST: "/products",
  CREATE_NEW_PRODUCT: "/products",
};

class ProductService {
  getProductList = async (params = {}) => {
    return await axios.get(BASE_URL + API_ENDPOINT.GET_PRODUCT_LIST, {
      params,
      headers: { ...authService.getHeaderWithAuthentication() },
    });
  };

  createNewProduct = async (data) => {
    return await axios.post(BASE_URL + API_ENDPOINT.CREATE_NEW_PRODUCT, data, {
      headers: { ...authService.getHeaderWithAuthentication() },
    });
  };
}

const productService = new ProductService();
export default productService;
