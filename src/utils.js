/**
 * Utility functions for ShipRenderer
 */

export const utils = {
  /**
   * Process ship data
   * @param {Object} data - Raw ship data
   * @returns {Object} Processed ship data
   */
  processShipData(data) {
    return {
      ...data,
      processed: true,
      timestamp: Date.now()
    };
  },

  /**
   * Validate ship configuration
   * @param {Object} config - Ship configuration
   * @returns {boolean} Whether the config is valid
   */
  validateConfig(config) {
    return config && typeof config === 'object' && config.name;
  },

  /**
   * Deep clone an object
   * @param {Object} obj - Object to clone
   * @returns {Object} Cloned object
   */
  deepClone(obj) {
    return structuredClone(obj);
  }
};

export default utils;
