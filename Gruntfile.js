module.exports = function(grunt) {
    'use strict';

    var config = require('./cheatz/grunt-config.js');
    /*
        An NPM module that will load all of your grunt task configurations 
        from a specified directory and pass them to initConfig() for you.
    */
    require('load-grunt-config')(grunt, config);

    /*
        An NPM module that finds all NPM modules named 'grunt-*' listed as dependencies 
        in your package.json file and then loads them up. Awesome.
    */
    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['browserify', 'concurrent:watchserver']);

};