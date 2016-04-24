
'use strict';

import Promise from 'bluebird';
import request from 'superagent';

export default class TodoService {

  constructor() {
    this._mockAjaxRequestTimeout = 500;
    this._nextId = 1;
    this._todos = [];
  }

  all() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this._todos);
      }, this._mockAjaxRequestTimeout);
    });
  }

  add(todo) {
    return new Promise((resolve, reject) => {
      this._todos.push({
        id: this._nextId++,
        text: todo.text
      });
      resolve(this._todos[this._todos.length-1]);
    });
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let todoDeleted = false;
        this._todos.forEach((todo, index) => {
          if (todo.id === id) {
            this._todos.splice(index, 1);
            todoDeleted = true;
          }
        });
        if (todoDeleted) resolve();
        else reject(new Error('No such todo exists with id: ' + id));
      }, this._mockAjaxRequestTimeout);
    });
  }

}
