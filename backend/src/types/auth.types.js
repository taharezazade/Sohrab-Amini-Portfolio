/** @format */

/**
 * @typedef {Object} User
 *
 * @property {string} id
 * @property {string} name
 * @property {string} email
 * @property {string} role
 */

/**
 * @typedef {Object} LoginPayload
 *
 * @property {string} email
 * @property {string} password
 */

/**
 * @typedef {Object} RegisterPayload
 *
 * @property {string} name
 * @property {string} email
 * @property {string} password
 */

/**
 * @typedef {Object} AuthResponse
 *
 * @property {User} user
 * @property {string} accessToken
 * @property {string} refreshToken
 */
