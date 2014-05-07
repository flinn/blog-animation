module.exports = {
    configPath: path.join(process.cwd(), 'tasks'), //path to task.js files, defaults to grunt dir
    init: true, //auto grunt.initConfig
    data: { //data passed into config.  Can use with <%= test %>
        test: false
    },
    loadGruntTasks: false
    // loadGruntTasks: { //can optionally pass options to load-grunt-tasks.  If you set to false, it will disable auto loading tasks.
    //     pattern: 'grunt-*',
    //     config: require('./package.json'),
    //     scope: 'devDependencies'
    // }
}