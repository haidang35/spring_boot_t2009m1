import axios from "axios";
import { BASE_URL, BASE_URL_AUTH } from "../../../constants/service";
import jwtUtil from "../../../utils/JwtUtil";

const API_ENDPOINTS = {
  LOGIN: "/login",
};

const accessTokenKey = "access_token";
const expireAtKey = "expire_at";

class AuthService {
  login = async (data) => {
    return await axios
      .post(BASE_URL_AUTH + API_ENDPOINTS.LOGIN, data)
      .then((res) => {
        this.setAccessToken(res.data.accessToken, res.data.expiredAt);
        return true;
      });
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

  getHeaderWithAuthentication = () => {
    return {
      Authorization: this.getAuthorizationWithBearerToken(),
    };
  };
}

const authService = new AuthService();
export default authService;
