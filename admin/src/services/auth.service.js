// /** @format */

// import api from "@/api/axios";
// import API from "../constants/api";

// const authService = {
//   login(payload) {
//     return api.post(API.AUTH.LOGIN, payload);
//   },

//   logout() {
//     return api.post(API.AUTH.LOGOUT);
//   },

//   getProfile() {
//     return api.get(API.AUTH.PROFILE);
//   },

//   changePassword(payload) {
//     return api.patch(API.AUTH.CHANGE_PASSWORD, payload);
//   },
// };

// export default authService;

/** @format */
import api from "@/api/axios";
import API from "@/constants/api";

const authService = {
  login(payload) {
    return api.post(API.AUTH.LOGIN, payload);
  },

  logout() {
    return api.post(API.AUTH.LOGOUT);
  },

  getProfile() {
    return api.get(API.AUTH.PROFILE);
  },
};

export default authService;