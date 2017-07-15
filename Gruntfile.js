module.exports = function(grunt) {
    grunt.initConfig({
        processhtml: {
            dist: {
                files: {
                    'assets/layout.html': 'views/layout.html'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-processhtml');
}
