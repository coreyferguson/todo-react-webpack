
module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    shell: require('./config/shell'),
    webpack: require('./config/webpack')
  });

  grunt.registerTask('default', ['webpack:build']);
  grunt.registerTask('test:manual', ['webpack:build', 'shell:testManual']);

};
