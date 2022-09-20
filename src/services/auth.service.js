import axios from "axios";
import { ENV } from "../constants";

const login = async (username, password) => {
  return await axios
    .post(ENV.API_BASE_URL + "auth/login", {
      username: username,
      password: password,
    })
    .then((response) => {
      if (response.data?.token) {
        localStorage.setItem("@auth:user.token", response.data?.token);
      }
      return response.data;
    });
};

const AuthService = {
  login,
};

export default AuthService;
