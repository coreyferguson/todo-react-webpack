
'use strict';

import Promise from 'bluebird';
import request from 'superagent';

export default class TodoService {

  all() {
    return new Promise((resolve, reject) => {
      setTimeout(() => { // mock 1 second ajax request
        resolve([
          { text: "todo-1" },
          { text: "todo-2" }
        ]);
      }, 1000);
    });
  }

}
