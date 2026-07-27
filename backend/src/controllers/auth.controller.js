/** @format */

import authService from "../services/auth.service.js";

class AuthController {
  /* =======================================================
      Register
  ======================================================= */

  async register(req, res, next) {
    try {
      const response = await authService.register(req.body);

      return res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  }

  /* =======================================================
      Login
  ======================================================= */

  async login(req, res, next) {
    try {
      const response = await authService.login(req.body);

      res.cookie("refreshToken", response.data.refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 30 * 24 * 60 * 60 * 1000,
      });

      return res.status(response.statusCode).json({
        success: response.success,
        statusCode: response.statusCode,
        message: response.message,
        data: {
          accessToken: response.data.accessToken,
          admin: response.data.admin,
        },
        timestamp: response.timestamp,
      });
    } catch (error) {
      next(error);
    }
  }

  /* =======================================================
      Logout
  ======================================================= */

  async logout(req, res, next) {
    try {
      res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
      });
      const response = await authService.logout();

      return res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  }

  /* =======================================================
      Get Profile
  ======================================================= */

  async me(req, res, next) {
    try {
      const response = await authService.getProfile(req.user.id);

      return res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  }

  /* =======================================================
      Update Profile
  ======================================================= */

  async updateProfile(req, res, next) {
    try {
      const response = await authService.updateProfile(req.user.id, req.body);

      return res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  }

  /* =======================================================
      Change Password
  ======================================================= */

  async changePassword(req, res, next) {
    try {
      const response = await authService.changePassword(req.user.id, req.body);

      return res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  }

  /* =======================================================
      Refresh Token
  ======================================================= */

  async refreshToken(req, res, next) {
    try {
      const token = req.cookies.refreshToken;

      const response = await authService.refreshToken(token);

      res.cookie("refreshToken", response.data.refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 30 * 24 * 60 * 60 * 1000,
      });

      return res.status(response.statusCode).json({
        success: response.success,
        statusCode: response.statusCode,
        message: response.message,
        data: {
          accessToken: response.data.accessToken,
        },
        timestamp: response.timestamp,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new AuthController();
