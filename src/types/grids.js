import { Vector3 } from "three";

/**
 * @typedef MaterialInterpolationParameters
 * @type {Object}
 * @property {number} [size]
 * @property {number} [offsetX]
 * @property {number} [offsetY]
 * @property {number} [offsetZ]
 */

/**
 * @description An Object that contains the rendering parameters for the grid
 * @typedef Grid
 * @type {Object}
 * @property {string} name
 * @property {Vector3} offset
 * @property {boolean} centerX
 * @property {number} sizeX
 * @property {number} sizeY
 * @property {number} sizeZ
 */

/**
 * @description An Object for grouping grids, created to enable position offsets based on the group position for repeating complex grids (i.e. caterpillar).
 * @typedef GridGroup
 * @type {Object}
 * @property {string} name
 * @property {Vector3} position
 * @property {Grid[]} grids
 * @property {MaterialInterpolationParameters} boxParams
 */
