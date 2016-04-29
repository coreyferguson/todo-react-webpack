
require.config({
  paths: {
    'react': 'https://cdnjs.cloudflare.com/ajax/libs/react/15.0.1/react.min',
    'react-dom': 'https://cdnjs.cloudflare.com/ajax/libs/react/15.0.1/react-dom.min',
    'bluebird': 'https://cdnjs.cloudflare.com/ajax/libs/bluebird/3.3.5/bluebird.min',
    'superagent': 'https://cdnjs.cloudflare.com/ajax/libs/superagent/1.2.0/superagent'
  }
});

require(['todo'], function(TodoController) {
  new TodoController( document.getElementById('todo-component') );
});
