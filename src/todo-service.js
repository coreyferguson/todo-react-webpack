
'use strict';

import Promise from 'bluebird';
import request from 'superagent';

export default class TodoService {

  constructor() {
    this._mockAjaxRequestTimeout = 500;
    this._nextId = 0;
    this._todos = [
      { id: this._nextId++, text: "todo-1" },
      { id: this._nextId++, text: "todo-2" }
    ]
  }

  all() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this._todos);
      }, this._mockAjaxRequestTimeout);
    });
  }

  add() {
    return new Promise((resolve, reject) => {
      let todo = { id: this._nextId++, text: '' };
      this._todos.push(todo);
      resolve(todo);
    });
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this._todos.forEach((todo, index) => {
          if (todo.id === id) {
            this._todos.splice(index, 1);
          }
        });
        resolve();
      }, this._mockAjaxRequestTimeout);
    });
  }

}
