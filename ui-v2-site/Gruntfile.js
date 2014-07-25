module.exports = function(grunt) {

    grunt.initConfig({
        pkg: '<json:package.json>',

        less: {
          development: {
            options: {
              compress: false
            },
            files: {
              "src/css/main.uncompressed.css": "src/css/main.less"
            }
          },
          production: {
            options: {
              compress: true,
              optimization: 2,
              cleancss: true
            },
            files: {
              "src/css/main.uncompressed.css": "src/css/main.less"
            }
          }
        },

        watch: {
          styles: {
            files: ['src/css/*.less'],
            tasks: ['less'],
            options: {
              nospawn: true
            }
          }
        }
        
    });

  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less', 'watch']);

};
