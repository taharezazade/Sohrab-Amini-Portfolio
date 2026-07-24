/** @format */

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import authRepository from "../repositories/auth.repository.js";

import {
  loginSchema,
  registerSchema,
  updateProfileSchema,
  changePasswordSchema,
} from "../validations/auth.validation.js";

import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

import env from "../config/env.js";

class AuthService {
  /* =======================================================
      Register Admin
  ======================================================= */

  async register(payload) {
    const data = registerSchema.parse(payload);

    const emailExists = await authRepository.existsByEmail(data.email);

    if (emailExists) {
      throw new ApiError(409, "Email already exists.");
    }

    const usernameExists = await authRepository.existsByUsername(data.username);

    if (usernameExists) {
      throw new ApiError(409, "Username already exists.");
    }

    const hashedPassword = await bcrypt.hash(data.password, 12);

    const admin = await authRepository.create({
      username: data.username,
      email: data.email,
      password: hashedPassword,
    });

    return new ApiResponse(
      201,
      {
        id: admin.id,
        username: admin.username,
        email: admin.email,
        role: admin.role,
      },
      "Admin account created successfully.",
    );
  }

  /* =======================================================
      Login
  ======================================================= */

  async login(payload) {
    const data = loginSchema.parse(payload);

    const admin = await authRepository.findByEmail(data.email);

    if (!admin) {
      throw new ApiError(401, "Invalid email or password.");
    }

    const isPasswordValid = await bcrypt.compare(data.password, admin.password);

    if (!isPasswordValid) {
      throw new ApiError(401, "Invalid email or password.");
    }

    const token = this.generateAccessToken(admin);

    return new ApiResponse(
      200,
      {
        token,

        admin: {
          id: admin.id,
          username: admin.username,
          email: admin.email,
          role: admin.role,
        },
      },
      "Login successful.",
    );
  }

  /* =======================================================
      Generate JWT
  ======================================================= */

  generateAccessToken(admin) {
    return jwt.sign(
      {
        id: admin.id,
        role: admin.role,
      },
      env.JWT.SECRET,
      {
        expiresIn: env.JWT.EXPIRES_IN,
      },
    );
  }

  /* =======================================================
      Get Profile
  ======================================================= */

  async getProfile(adminId) {
    const admin = await authRepository.findById(adminId);

    if (!admin) {
      throw new ApiError(404, "Administrator not found.");
    }

    return new ApiResponse(
      200,
      {
        id: admin.id,
        username: admin.username,
        email: admin.email,
        role: admin.role,
        createdAt: admin.createdAt,
        updatedAt: admin.updatedAt,
      },
      "Profile fetched successfully.",
    );
  }

  /* =======================================================
      Update Profile
  ======================================================= */

  async updateProfile(adminId, payload) {
    const data = updateProfileSchema.parse(payload);

    const admin = await authRepository.findById(adminId);

    if (!admin) {
      throw new ApiError(404, "Administrator not found.");
    }

    if (data.email !== admin.email) {
      const exists = await authRepository.existsByEmail(data.email);

      if (exists) {
        throw new ApiError(409, "Email already exists.");
      }
    }

    if (data.username !== admin.username) {
      const exists = await authRepository.existsByUsername(data.username);

      if (exists) {
        throw new ApiError(409, "Username already exists.");
      }
    }

    const updatedAdmin = await authRepository.update(adminId, {
      username: data.username,
      email: data.email,
    });

    return new ApiResponse(
      200,
      {
        id: updatedAdmin.id,
        username: updatedAdmin.username,
        email: updatedAdmin.email,
        role: updatedAdmin.role,
      },
      "Profile updated successfully.",
    );
  }

  /* =======================================================
      Change Password
  ======================================================= */

  async changePassword(adminId, payload) {
    const data = changePasswordSchema.parse(payload);

    const admin = await authRepository.findById(adminId);

    if (!admin) {
      throw new ApiError(404, "Administrator not found.");
    }

    const isCurrentPasswordCorrect = await this.comparePassword(
      data.currentPassword,
      admin.password,
    );

    if (!isCurrentPasswordCorrect) {
      throw new ApiError(401, "Current password is incorrect.");
    }

    const hashedPassword = await this.hashPassword(data.newPassword);

    await authRepository.updatePassword(adminId, hashedPassword);

    return new ApiResponse(200, null, "Password changed successfully.");
  }

  /* =======================================================
      Logout
  ======================================================= */

  async logout() {
    return new ApiResponse(200, null, "Logout successful.");
  }

  /* =======================================================
      Hash Password
  ======================================================= */

  async hashPassword(password) {
    return await bcrypt.hash(password, 12);
  }

  /* =======================================================
      Compare Password
  ======================================================= */

  async comparePassword(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
  }

  /* =======================================================
      Verify Password
  ======================================================= */

  async verifyPassword(adminId, password) {
    const admin = await authRepository.findById(adminId);

    if (!admin) {
      throw new ApiError(404, "Administrator not found.");
    }

    return await this.comparePassword(password, admin.password);
  }

  /* =======================================================
      Generate Refresh Token (Future Ready)
  ======================================================= */

  generateRefreshToken(admin) {
    return jwt.sign(
      {
        id: admin.id,
        role: admin.role,
      },
      env.JWT.SECRET,
      {
        expiresIn: "30d",
      },
    );
  }
}

export default new AuthService();
