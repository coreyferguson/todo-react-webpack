
/**
 * Converting ES6 import to CommonJS `module.exports` for webpack bundling.
 * If TodoApp is specified as the webpack entry directly, it needs to be constructed
 * with `new TodoApp.default()`.
 */

'use strict';
import TodoApp from './todo-app';
module.exports = TodoApp;
