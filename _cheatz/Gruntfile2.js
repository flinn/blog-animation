module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        watch: require('./tasks/options/watch'),
        browserify: require('./tasks/options/browserify')
    });

    /*
        An NPM module that finds all NPM modules named 'grunt-*' listed as dependencies 
        in your package.json file and then loads them up. Awesome.

        NOTE: There is also now an NPM module called "grunt-load-configs" that will load all 
        configs from a specified directory, so the initConfig above can be 1 line of code.
    */
    require('load-grunt-tasks')(grunt);

    /*
        You can just register a task as normal, but use 
        require('task_name') instead of defining the function.

        NOTE: You've got to register the default task in the 
        Gruntfile.js file or it will throw errors.
    */
    grunt.registerTask('default', require('./tasks/default')(grunt));

    require('./tasks/_tasks.js')(grunt);
};