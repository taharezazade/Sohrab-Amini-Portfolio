/** @format */

const logger = {
  info(message) {
    console.log(`ℹ️  ${message}`);
  },

  success(message) {
    console.log(`✅ ${message}`);
  },

  warn(message) {
    console.warn(`⚠️  ${message}`);
  },

  error(message) {
    console.error(`❌ ${message}`);
  },
};

export default logger;
