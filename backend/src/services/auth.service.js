/** @format */

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import authRepository from "../repositories/auth.repository.js";

import {
  registerSchema,
  loginSchema,
  updateProfileSchema,
  changePasswordSchema,
} from "../validations/auth.validation.js";

import jwtConfig from "../config/jwt.js";

import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

class AuthService {
  /* =======================================================
      Register
  ======================================================= */

  async register(payload) {
    const data = registerSchema.parse(payload);

    const emailExists = await authRepository.existsByEmail(data.email);

    if (emailExists) {
      throw new ApiError({
        statusCode: 409,
        message: "Email already exists.",
      });
    }

    const usernameExists = await authRepository.existsByUsername(data.username);

    if (usernameExists) {
      throw new ApiError({
        statusCode: 409,
        message: "Username already exists.",
      });
    }

    const hashedPassword = await bcrypt.hash(data.password, 12);

    const admin = await authRepository.create({
      username: data.username,
      email: data.email,
      password: hashedPassword,
    });

    return new ApiResponse({
      statusCode: 201,
      message: "Administrator registered successfully.",
      data: {
        id: admin.id,
        username: admin.username,
        email: admin.email,
        role: admin.role,
      },
    });
  }

  /* =======================================================
      Login
  ======================================================= */

  async login(payload) {
    const data = loginSchema.parse(payload);

    const admin = await authRepository.findByEmail(data.email);

    if (!admin) {
      throw new ApiError({
        statusCode: 401,
        message: "Invalid email or password.",
      });
    }

    const passwordMatched = await bcrypt.compare(data.password, admin.password);

    if (!passwordMatched) {
      throw new ApiError({
        statusCode: 401,
        message: "Invalid email or password.",
      });
    }

    const accessToken = this.generateAccessToken(admin);
    const refreshToken = this.generateRefreshToken(admin);

    return new ApiResponse({
      statusCode: 200,
      message: "Login successful.",
      data: {
        accessToken,
        refreshToken,
        admin: {
          id: admin.id,
          username: admin.username,
          email: admin.email,
          role: admin.role,
        },
      },
    });
  }

  /* =======================================================
      Get Profile
  ======================================================= */

  async getProfile(adminId) {
    const admin = await authRepository.findById(adminId);

    if (!admin) {
      throw new ApiError({
        statusCode: 404,
        message: "Administrator not found.",
      });
    }

    return new ApiResponse({
      message: "Profile fetched successfully.",
      data: {
        id: admin.id,
        username: admin.username,
        email: admin.email,
        role: admin.role,
        createdAt: admin.createdAt,
        updatedAt: admin.updatedAt,
      },
    });
  }

  /* =======================================================
      Update Profile
  ======================================================= */

  async updateProfile(adminId, payload) {
    const data = updateProfileSchema.parse(payload);

    const admin = await authRepository.findById(adminId);

    if (!admin) {
      throw new ApiError({
        statusCode: 404,
        message: "Administrator not found.",
      });
    }

    if (data.email && data.email !== admin.email) {
      const exists = await authRepository.existsByEmail(data.email);

      if (exists) {
        throw new ApiError({
          statusCode: 409,
          message: "Email already exists.",
        });
      }
    }

    if (data.username && data.username !== admin.username) {
      const exists = await authRepository.existsByUsername(data.username);

      if (exists) {
        throw new ApiError({
          statusCode: 409,
          message: "Username already exists.",
        });
      }
    }

    const updatedAdmin = await authRepository.update(adminId, data);

    return new ApiResponse({
      message: "Profile updated successfully.",
      data: {
        id: updatedAdmin.id,
        username: updatedAdmin.username,
        email: updatedAdmin.email,
        role: updatedAdmin.role,
      },
    });
  }

  /* =======================================================
      Change Password
  ======================================================= */

  async changePassword(adminId, payload) {
    const data = changePasswordSchema.parse(payload);

    const admin = await authRepository.findById(adminId);

    if (!admin) {
      throw new ApiError({
        statusCode: 404,
        message: "Administrator not found.",
      });
    }

    const isMatched = await bcrypt.compare(
      data.currentPassword,
      admin.password,
    );

    if (!isMatched) {
      throw new ApiError({
        statusCode: 401,
        message: "Current password is incorrect.",
      });
    }

    const hashedPassword = await bcrypt.hash(data.newPassword, 12);

    await authRepository.updatePassword(adminId, hashedPassword);

    return new ApiResponse({
      message: "Password changed successfully.",
    });
  }

  /* =======================================================
      Refresh Token
  ======================================================= */

  async refreshToken(token) {
    if (!token) {
      throw new ApiError({
        statusCode: 401,
        message: "Refresh token is required.",
      });
    }

    let decoded;

    try {
      decoded = jwt.verify(token, jwtConfig.secret);
    } catch {
      throw new ApiError({
        statusCode: 401,
        message: "Invalid refresh token.",
      });
    }

    const admin = await authRepository.findById(decoded.id);

    if (!admin) {
      throw new ApiError({
        statusCode: 404,
        message: "Administrator not found.",
      });
    }

    const accessToken = this.generateAccessToken(admin);
    const refreshToken = this.generateRefreshToken(admin);

    return new ApiResponse({
      message: "Token refreshed successfully.",
      data: {
        accessToken,
        refreshToken,
      },
    });
  }

  /* =======================================================
      Logout
  ======================================================= */

  async logout() {
    return new ApiResponse({
      message: "Logout successful.",
    });
  }

  /* =======================================================
      Generate Access Token
  ======================================================= */

  generateAccessToken(admin) {
    return jwt.sign(
      {
        id: admin.id,
        role: admin.role,
      },
      jwtConfig.secret,
      {
        expiresIn: jwtConfig.expiresIn,
        issuer: jwtConfig.issuer,
        audience: jwtConfig.audience,
      },
    );
  }

  /* =======================================================
      Generate Refresh Token
  ======================================================= */

  generateRefreshToken(admin) {
    return jwt.sign(
      {
        id: admin.id,
        role: admin.role,
      },
      jwtConfig.secret,
      {
        expiresIn: jwtConfig.refreshExpiresIn,
        issuer: jwtConfig.issuer,
        audience: jwtConfig.audience,
      },
    );
  }
}

export default new AuthService();
