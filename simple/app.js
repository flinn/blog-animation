try {

    var greet = require('./greet');
    alert(greet('Welcome to browserify!'));

} catch (ex) {

    alert('JavaScript Error: ' + ex);

}
// This is the code we want to run in the Browser... With a CommonJS 'require'!? How!?