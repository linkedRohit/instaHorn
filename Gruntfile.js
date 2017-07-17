module.exports = function(grunt) {
    grunt.initConfig({
        processhtml: {
            dist: {
                files: {
                    'assets/layout.html': 'views/layout.html'
                }
            }
        },
        exec: {
            fakeserver: {
                command: 'nodemon server.js',
                stdout: true,
                stderr: true
            },
	    importsql: {
		command: 'mysql -uroot -proot debate < migrate-db.sql',
		stdout: true,
		stderr: true
	   }
        }
    });

    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('develop', ['exec:fakeserver']);
    grunt.registerTask('import', ['exec:importsql']);
}
