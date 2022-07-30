import axios from "axios";
import { BASE_URL } from "../../../constants/service";
import authService from "../../auth/services/AuthService";

const API_ENDPOINTS = {
  GET_LIST_CATEGORY: "/categories",
  CREATE_CATEGORY: "/categories",
};

const headerConfig = authService.getHeaderWithAuthentication();

class CategoryService {
  getCategoryList = async (params = {}) => {
    return await axios.get(BASE_URL + API_ENDPOINTS.GET_LIST_CATEGORY, {
      params,
      headers: { ...headerConfig },
    });
  };

  createNewCategory = async (data) => {
    return await axios.post(BASE_URL + API_ENDPOINTS.CREATE_CATEGORY, data, {
      headers: {
        ...headerConfig,
      },
    });
  };
}

const categoryService = new CategoryService();
export default categoryService;
