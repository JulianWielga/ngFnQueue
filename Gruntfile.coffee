module.exports = (grunt) ->
	grunt.loadNpmTasks 'grunt-contrib-coffee'

	grunt.initConfig
		coffee:
			compile:
				files:
					'dist/index.js': 'src/*.coffee'


	grunt.registerTask 'default', ['coffee']
