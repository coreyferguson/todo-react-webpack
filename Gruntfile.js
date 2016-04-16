
module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    shell: {
      testManual: {
        command: 'node test/manual/server'
      }
    }
  });

  grunt.registerTask('default', []);
  grunt.registerTask('test:manual', ['shell:testManual']);

};
