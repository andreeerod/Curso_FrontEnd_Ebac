module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // 1) Compilação do LESS
        less: {
            desenvolvimento: {
                files: {
                    'dist/css/styles.css': 'src/less/main.less',
                },
            },
            producao: {
                options: {
                    compress: true,
                },
                files: {
                    'dist/css/styles.min.css': 'src/less/main.less',
                },
            },
        },

        // 2) Compressão do JavaScript
        uglify: {
            options: {
                mangle: true,
                compress: true,
            },
            scripts: {
                files: {
                    'dist/js/main.min.js': ['src/js/main.js'],
                },
            },
        },

        // Recompila ao salvar
        watch: {
            less: {
                files: ['src/less/**/*.less'],
                tasks: ['less'],
            },
            js: {
                files: ['src/js/**/*.js'],
                tasks: ['uglify'],
            },
        },
    })

    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.loadNpmTasks('grunt-contrib-watch')

    grunt.registerTask('build', ['less', 'uglify'])
    grunt.registerTask('default', ['build', 'watch'])
}
