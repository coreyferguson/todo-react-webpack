
'use strict';

import TodoService from '../../src/todo/service/todo-service';

describe('unit test todo-service', () => {

  let todoService;

  beforeEach(() => {
    todoService = new TodoService();
    todoService._mockAjaxRequestTimeout = 0;
  });

  /////////
  // all //
  /////////

  describe('all', () => {

    it('return empty list by default', () => {
      return expect(todoService.all()).to.eventually.eql([]);
    });

  });

  /////////
  // add //
  /////////

  describe('add', () => {

    it('add one todo', () => {
      return expect(todoService.add({
        text: 'text'
      })).to.eventually.eql({
        id: 1,
        text: 'text'
      });
    });

    it('fetch all todos previously added', () => {
      return todoService.add({
        text: 'first item'
      }).then(() => {
        return todoService.add({
          text: 'second item'
        });
      }).then(() => {
        return todoService.all();
      }).then(todos => {
        return expect(todos).to.eql([{
          id: 1,
          text: 'first item'
        },{
          id: 2,
          text: 'second item'
        }]);
      });
    });

  });

  ////////////
  // delete //
  ////////////

  describe('delete', () => {

    it('throw error when deleting non-existant id', () => {
      return expect(todoService.delete(1)).to.eventually.rejectedWith(/id/);
    });

    it('delete existing todo', () => {
      return todoService.add({ text: 'first item' }).then(() => {
        return todoService.add({ text: 'second item' });
      }).then(() => {
        return todoService.delete(1);
      }).then(() => {
        return todoService.all();
      }).then(todos => {
        return expect(todos).to.eql([{id: 2, text: 'second item'}]);
      })
    })

  });

});
