/**
 * EXVSCShipRenderer - Main Entry Point
 * This is the starting file for the JavaScript library
 */

// Example module imports (can be expanded as needed)
import { utils } from './utils.js';

/**
 * Main Ship Renderer class
 */
class ShipRenderer {
  constructor(options = {}) {
    this.canvas = options.canvas || null;
    this.width = options.width || 800;
    this.height = options.height || 600;
  }

  /**
   * Initialize the renderer
   */
  init() {
    console.log('ShipRenderer initialized');
    return this;
  }

  /**
   * Render a ship
   * @param {Object} shipData - Ship data to render
   */
  render(shipData) {
    if (!shipData) {
      console.warn('No ship data provided');
      return;
    }
    console.log('Rendering ship:', shipData.name);
    return utils.processShipData(shipData);
  }
}

// Export for module usage
export { ShipRenderer };
export default ShipRenderer;
