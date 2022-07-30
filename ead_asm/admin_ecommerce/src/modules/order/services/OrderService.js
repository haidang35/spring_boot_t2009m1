import axios from "axios";
import { BASE_URL } from "../../../constants/service";
import authService from "../../auth/services/AuthService";

const API_ENDPOINTS = {
  GET_LIST_ORDER: "/orders",
  GET_ORDER_DETAILS: "/orders/",
};

class OrderService {
  getOrderList = async (page, limit) => {
    return await axios.get(BASE_URL + API_ENDPOINTS.GET_LIST_ORDER, {
      params: {
        page,
        limit,
      },
      headers: { ...authService.getHeaderWithAuthentication() },
    });
  };

  getOrderDetails = async (id) => {
    return await axios.get(BASE_URL + API_ENDPOINTS.GET_ORDER_DETAILS + id, {
      headers: { ...authService.getHeaderWithAuthentication() },
    });
  };
}

const orderService = new OrderService();
export default orderService;
