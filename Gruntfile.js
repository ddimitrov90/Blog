module.exports = function (grunt) {
 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'), 
        clean: ["dist", '.tmp'], 
        copy: {
            main: {
                expand: true,
                cwd: 'app/',
                src: ['**', '!js/**', '!**/*.css'],
                dest: 'dist/'
            }
        }, 
        useminPrepare: {
            html: 'app/index.html'
        }, 
        usemin: {
            html: ['dist/index.html']
        },
		ngtemplates:  {
		  	blogApp: {
		  		cwd: 'app/',
		    	src: 'js/**/**.html',
		    	dest: 'app/templates.js'
		  	}
		},
        uglify: {
            options: {
                report: 'min',
                mangle: false
            }
        },
		watch: {
            options: {
                spawn: false
            },
            js: {
                files: ['app/**/*.js','app/**/*.html'],
                tasks: ['default']
            }
        }
    });
 
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-usemin');
	grunt.loadNpmTasks('grunt-contrib-watch');
 
    // Tell Grunt what to do when we type "grunt" into the terminal
    grunt.registerTask('default', [
         'ngtemplates', 'copy', 'useminPrepare', 'concat', 'cssmin', 'uglify', 'usemin'
    ]);

	grunt.registerTask('watching', [
        'clean', 'default', 'watch:js'
    ]);
};