module.exports = function(grunt) {

    /* 
	    You can add a generic task_name to .gitignore allowing team
	    members to have their own, personalized workflows...

	    For example: 1 person might want SASS watchers while another
	    wants JS watchers. 
   	*/
    grunt.registerTask('go', require('./go'));

}