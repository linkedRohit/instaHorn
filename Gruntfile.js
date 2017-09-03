module.exports = function(grunt) {
    
    grunt.initConfig({
        processhtml: {
            production: {
                files: {
                    'build/html/index.html': ['views/index.html']
                }
            }
        },
        clean: {
            production: [
                'build/assets/css',
                'build/assets/img',
                'build/assets/js',
                'build/assets/fonts',
                'build/assets/font',
                'build/assets/html',
                'build/assets/html/components'
            ]
        },
        copy: {
            production: {
                files: [
                    {
                        expand: true,
                        cwd: 'view/components/',
                        src: '*',
                        dest: 'build/html/components/'
                    },
                    {
                        expand: true,
                        cwd: 'assets/img/',
                        src: '*',
                        dest: 'build/assets/img/'
                    },
                    {
                        expand: true,
                        cwd: 'node_modules/font-awesome/fonts/',
                        src: '*',
                        dest: 'build/assets/fonts/'
                    },
                    {
                        expand: true,
                        cwd: 'node_modules/bootstrap/dist/fonts/',
                        src: '*',
                        dest: 'build/assets/fonts/'
                    }
                ]
            }  
        },
        cssmin: {
            target: {
                files: {
                    'build/assets/css/app.min.css': ['build/assets/css/app.css']
                }
            }
        },
        uglify: {
            target: {
                options: {
                    compress: true
                },
                files: {
                    'build/assets/js/app.min.js': ['build/assets/js/app.js']
                }
            }
        },
        concat: {
            production_css: {
                src: [
                    'node_modules/bootstrap/dist/css/bootstrap.min.css',
                    'node_modules/font-awesome/css/font-awesome.min.css',
                    'assets/css/app.js',
                    'assets/css/feed.js',
                    'node_modules/nprogress/nprogress.css'
                ],
                dest: 'build/assets/css/app.css'
            },
            production_js: {
                src: [
                    'node_modules/nprogress/nprogress.js',
                    'node_modules/jquery/dist/jquery.min.js',
                    'node_modules/bootstrap/dist/js/bootstrap.min.js',
                    'node_modules/moment/min/moment.min.js',
                    'node_modules/angular/angular.min.js',
                    'node_modules/angular-resource/angular-resource.min.js',
                    'node_modules/angular-route/angular-route.min.js',
                    'node_modules/angular-moment/angular-moment.min.js',
                    'node_modules/ng-infinite-scroll/build/ng-infinite-scroll.min.js',
                    
                    'app.js',
                    
                    'services/socket.js',
                    'services/facebook.js',
                    'services/page.js',
                    'services/user.js',
                    
                    'directives/app-login.js',
                    'directives/app-profile.js',
                    'directives/app-navigation.js',
                    'directives/app-debate-page.js',
                    'directives/app-debate-feed.js',
                    'directives/app-start-debate.js',
                    'directives/app-comment-dialog.js',
                    
                    'controllers/route.js',
                    'controllers/app.js',
                    'controllers/login.js',
                    'controllers/navigation.js',
                    'controllers/feed.js',
                    'controllers/topic.js',
                    'controllers/comment.js'
                ],
                dest: 'build/assets/js/app.js'
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    grunt.registerTask('build', [
       'clean:production',
       'concat:production_css',
       'concat:production_js',
       'copy:production',
       'processhtml:production',
       'cssmin',
       'uglify'
    ]);
    
    
}
