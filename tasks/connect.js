module.exports = {
    server: {
        options: {
            port: 3808,
            base: 'good',
            keepalive: true,
            livereload: true,
            open: {
                target: 'http://localhost:3808/good.html',
                appName: 'Google Chrome',
                callback: function() {}
            }
        }
    }
}