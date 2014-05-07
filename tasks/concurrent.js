module.exports = {
    watchserver: {
        tasks: ['browserify', 'connect', 'watch'],
        options: {
            logConcurrentOutput: true
        }
    }
}