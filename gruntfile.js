module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Task configuration.
    concat: {
      js_files: {
        src: ['js/*.js'],
        dest: 'dist/<%= pkg.name %>.js',

        options: {
          separator: ';'
        }
      },
      css: {
        options: {
          separator: '\n\r'
        },
        src: ['css/*.css'],
        dest: 'dist/<%= pkg.name %>.css'
      }  
    },  
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'scss',
          src: ['*.scss'],
          dest: 'css',
          ext: '.css'
        }]
      }
    },
    watch: {
      sass: {
        // We watch and compile sass files as normal but don't live reload here
        files: ['scss/*.scss'],
        tasks: ['sass'],
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');


  

  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', ['sass', 'concat' ]);

};