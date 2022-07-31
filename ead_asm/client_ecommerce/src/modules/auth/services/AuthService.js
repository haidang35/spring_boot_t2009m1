import axios from "axios";
import { BASE_URL } from "../../../configs/Service";
import jwtUtil from "../../../utils/JwtUtil";
import { Navigate } from "react-router-dom";
import { ROUTES } from "../../../routes/Router";

const API_ENDPOINTS = {
  REGISTER: "/users/register",
  LOGIN: "/users/login",
};

const accessTokenKey = "access_token";
const expireAtKey = "expire_at";

class AuthService {
  register = async (data) => {
    return await axios.post(BASE_URL + API_ENDPOINTS.REGISTER, data);
  };

  login = async (data) => {
    return await axios
      .post(BASE_URL + API_ENDPOINTS.LOGIN, data)
      .then((res) => {
        this.setAccessToken(res.data.accessToken, res.data.expiredAt);
        return true;
      });
  };

  logout = () => {
    localStorage.removeItem(accessTokenKey);
    localStorage.removeItem(expireAtKey);
    return <Navigate to={ROUTES.LOGIN_PAGE} />;
  };

  getAccessToken = () => {
    return localStorage.getItem(accessTokenKey);
  };

  getExpireTime = () => {
    return localStorage.getItem(expireAtKey);
  };

  setAccessToken = (token, expireAt) => {
    JSON.stringify(localStorage.setItem(accessTokenKey, token));
    JSON.stringify(localStorage.setItem(expireAtKey, expireAt));
  };

  isLogged = () => {
    if (
      this.getAccessToken() != null &&
      this.getAccessToken() !== "" &&
      this.getExpireTime() != null &&
      this.getExpireTime() != ""
    ) {
      return true;
    }
    return false;
  };

  getUserInfo = () => {
    return jwtUtil.parseJwt(this.getAccessToken());
  };

  getAuthorizationWithBearerToken = () => {
    return `Bearer ${this.getAccessToken()}`;
  };

  getHeaderWithAuthorization = () => {
    return {
      Authorization: this.getAuthorizationWithBearerToken(),
    };
  };
}

const authService = new AuthService();
export default authService;
