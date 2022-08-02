import axios from "axios"
import { BASE_URL } from "../../../configs/Service";


const API_ENDPOINTS = {
    ORDER: '/orders',
    GET_ORDERS_BY_USERS: '/orders/users/'
}

class OrderService {
    

    clientOrder = async (data) => {
        return await axios.post(BASE_URL + API_ENDPOINTS.ORDER, data);
    }

    getListOrderByUser = async (userId = 1) => {
        return await axios.get(BASE_URL + API_ENDPOINTS.GET_ORDERS_BY_USERS + userId);
    }
}

const orderService = new OrderService();
export default orderService;