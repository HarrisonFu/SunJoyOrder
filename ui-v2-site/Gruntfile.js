module.exports = function(grunt) {

    grunt.initConfig({
        pkg: '<json:package.json>',

        clean : {
            "dist" : "dist/"
        },
        
        less: {
          development: {
            options: {
              paths: ["css"]
            },
            files: {
              "css/font-awesome.css": "css/font-awesome/font-awesome.less",
              "css/bootstrap.css": "css/bootstrap/bootstrap.less",
              "css/main.css": "css/main.less"
            }
          },
          production: {
            options: {
              paths: ["css"]
            },
            files: {
              "dist/css/font-awesome.css": "css/font-awesome/font-awesome.less",
              "dist/css/bootstrap.css": "css/bootstrap/bootstrap.less",
              "dist/css/main.css": "css/main.less"
            }
          },
        },

        concat: {
          options: {
            separator: ';'
          },
          dist: {
            src: [
            'js/bootstrap.js',
            'js/icheck.js',
            'js/main.js'
            ],
            dest: 'js/site.js'
          }
        },

        uglify: {
          options: {
            banner: '/*! <%= grunt.template.today("dd-mm-yyyy") %> */\n'
          },
          dist: {
            files: {
              'js/site.min.js': ['<%= concat.dist.dest %>']
            }
          }
        },

        copy: {
          main: {
            files: [
              {expand: true, flatten: false, src: ['en/**'], dest: 'dist/'},
              {expand: true, flatten: false, src: ['cn/**'], dest: 'dist/'},
              {expand: true, flatten: false, src: ['img/**'], dest: 'dist/'},
              {expand: true, flatten: false, src: ['images/**'], dest: 'dist/'},
              {expand: true, flatten: false, src: ['fonts/**'], dest: 'dist/'},
              {expand: true, flatten: false, src: ['js/**'], dest: 'dist/'},
              {expand: true, flatten: false, src: ['mock/**'], dest: 'dist/'},
              {expand: true, flatten: true, src: ['*.html'], dest: 'dist/'}
            ]
          }
        }
    });

  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-concat");

  //grunt.registerTask('default', ['less', 'concat', 'uglify']);
  grunt.registerTask('default', ['clean', 'less', 'concat', 'uglify', 'copy']);

};
