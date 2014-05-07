module.exports = {
    app: {
        files: {
            'good/static/bundle.js': ['good/src/app.js'],
        },
        options: {
            bundleOptions: {
                debug: true
            }
        }
    }
}