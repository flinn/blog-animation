module.exports = function(grunt) {
    'use strict';

    /* 
        Grunt's initConfig method takes an object that
        allows you to specify options [like target file type(s)/directories]
        for each of your tasks
    */
    grunt.initConfig({
        /*
            Once you've configured a grunt task's options here and
            added the appropriate loadNpmTasks call, you can call 
            your task from the command line by name -- It's registered.
        */
        watch: {
            scripts: {
                files: ['good/src/**/*.js'],
                tasks: ['browserify']
            },
        },
        browserify: {
            app: {
                files: {
                    'good/static/bundle.js': ['good/src/app.js'],
                },
                options: {
                    debugInfo: true
                }
            }
        }
    });

    /*
        Grunt tasks are (typically) NPM modules that
        require some initial load/configuration.
        Those won't work unless their NPM package name is passed
        to the loadNpmTasks method. 
    */
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    /* 
        You can create custom task combinations and register them here 
        yourself for easy use using whatever name you'd like.

        The 'default' task is what runs when you just type 'grunt' without 
        providing a task name...Just a shortcut.

        Tasks can also be configured using multiple syntaxes.
    */
    grunt.registerTask('default', ['browserify', 'watch']);

    grunt.registerTask('dostuff', function() {
        grunt.task.run('browserify');
        grunt.task.run('watch');
    });

};