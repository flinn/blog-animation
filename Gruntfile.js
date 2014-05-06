module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      scripts: {
        files: ['lib/**/*.js'],
        tasks: ['urequire'],
        options: {
          spawn: false,
        },
      },
    },
    urequire:{
      asAMD: {
        template: "AMD",
        path: "lib",
        dstPath: "bin"
      },
      _defaults: {
        debugLevel:90,
        verbose: true,
        scanAllow: true,
        allNodeRequires: true,
        noRootExports: false
      }
    }
  });

  grunt.loadNpmTasks('grunt-urequire');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['urequire', 'watch']);   

};