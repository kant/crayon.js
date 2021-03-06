module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: ['src/core.js', 'src/**/*.js'],
				dest: '<%= pkg.alias %>.js'
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			dist: {
				files: {
					'<%= pkg.alias %>.min.js': ['<%= concat.dist.dest %>']
				}
			}
		},
		// qunit: {
		// 	files: ['test/**/*.html']
		// },
		jshint: {
			files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
			options: {
				// options here to override JSHint defaults
				globals: {
					jQuery: true,
					console: true,
					module: true,
					document: true
				}
			}
		},
		watch: {
			files: ['<%= jshint.files %>'],
			tasks: ['jshint', 'concat', 'uglify']
			// 'qunit'
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	// grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');

	// grunt.registerTask('test', ['jshint', 'qunit']);

	// grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);

	grunt.registerTask('default', ['jshint', 'concat', 'uglify']);

};