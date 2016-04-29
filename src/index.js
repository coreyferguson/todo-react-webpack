
/**
 * Converting ES6 import to CommonJS `module.exports` for webpack bundling.
 * If TodoController is specified as the webpack entry directly, it needs to be constructed
 * with `new TodoController.default()`.
 */

'use strict';
import TodoController from './todo-controller';
module.exports = TodoController;
