
require.config({
  paths: {
    'react': 'https://cdnjs.cloudflare.com/ajax/libs/react/15.0.1/react',
    'react-dom': 'https://cdnjs.cloudflare.com/ajax/libs/react/15.0.1/react-dom',
    'bluebird': 'https://cdnjs.cloudflare.com/ajax/libs/bluebird/3.3.5/bluebird',
    'superagent': 'https://cdnjs.cloudflare.com/ajax/libs/superagent/1.2.0/superagent'
  }
});

require(['todo'], function(TodoController) {
  new TodoController( document.getElementById('todo-component') );
});
