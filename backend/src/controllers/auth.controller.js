/** @format */

import authService from "../services/auth.service.js";

class AuthController {
  /* ============================
      Register Admin
  ============================ */

  async register(req, res, next) {
    try {
      const user = await authService.register(req.body);

      return res.status(201).json({
        success: true,

        message: "User registered successfully",

        data: user,
      });
    } catch (error) {
      next(error);
    }
  }

  /* ============================
      Login
  ============================ */

  async login(req, res, next) {
    try {
      const result = await authService.login(req.body);

      const { accessToken, refreshToken, user } = result;

      // Refresh Token Cookie

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,

        secure: process.env.NODE_ENV === "production",

        sameSite: "strict",

        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      return res.status(200).json({
        success: true,

        message: "Login successful",

        data: {
          user,

          accessToken,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  /* ============================
      Logout
  ============================ */

  async logout(req, res, next) {
    try {
      const refreshToken = req.cookies.refreshToken;

      await authService.logout(refreshToken);

      res.clearCookie("refreshToken");

      return res.status(200).json({
        success: true,

        message: "Logout successful",
      });
    } catch (error) {
      next(error);
    }
  }

  /* ============================
      Get Current User
  ============================ */

  async me(req, res, next) {
    try {
      const user = await authService.getCurrentUser(req.user.id);

      return res.status(200).json({
        success: true,

        data: user,
      });
    } catch (error) {
      next(error);
    }
  }

  /* ============================
      Refresh Token
  ============================ */

  async refreshToken(req, res, next) {
    try {
      const refreshToken = req.cookies.refreshToken;

      const result = await authService.refreshToken(refreshToken);

      return res.status(200).json({
        success: true,

        message: "Token refreshed successfully",

        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new AuthController();
