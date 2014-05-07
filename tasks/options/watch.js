module.exports = {
    scripts: {
        files: ['good/src/**/*.js'],
        tasks: ['browserify'],
        options: {
            spawn: false,
        },
    },
};