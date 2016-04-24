
module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    shell: require('./config/grunt-shell'),
    webpack: require('./config/grunt-webpack'),
    karma: require('./config/grunt-karma')
  });

  grunt.registerTask('default', ['webpack:build', 'karma:single']);
  // Build distribution files with webpack.
  grunt.registerTask('build', ['webpack:build']);
  // Watch files for change and automatically run tests.
  grunt.registerTask('test', ['karma:continuous']);
  grunt.registerTask('test:single', ['karma:single']);
  // Manual testing: render component in a browser window.
  grunt.registerTask('test:manual', ['webpack:build', 'shell:testManual']);

};
