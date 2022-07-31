import axios from "axios";
import { BASE_URL } from "../../../configs/Service";

const API_ENDPOINTS = {
  GET_CATEGORY_LIST: "/categories",
  GET_CATEGORY_DETAILS: "/categories/",
};

class CategoryService {
  getCategoryList = async () => {
    return await axios.get(BASE_URL + API_ENDPOINTS.GET_CATEGORY_LIST);
  };

  getCategoryDetails = async (id) => {
    return await axios.get(BASE_URL + API_ENDPOINTS.GET_CATEGORY_DETAILS + id);
  };
}

const categoryService = new CategoryService();
export default categoryService;
