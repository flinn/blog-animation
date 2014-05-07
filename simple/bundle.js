(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
try {

    var greet = require('./greet');
    alert(greet('Welcome to browserify!'));

} catch (ex) {

    alert('JavaScript Error: ' + ex);

}
// This is the code we want to run in the Browser... With a CommonJS 'require'!? How!?
},{"./greet":2}],2:[function(require,module,exports){
module.exports = function(msg) {
    return 'Hello! ' + msg + '';
}
//This is our CommonJS Module.
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL2ZsaW5uL1Byb2plY3RzL1RlY2hUYWxrL3Rlcm1pbmFsaWZ5L3NpbXBsZS9hcHAuanMiLCIvVXNlcnMvZmxpbm4vUHJvamVjdHMvVGVjaFRhbGsvdGVybWluYWxpZnkvc2ltcGxlL2dyZWV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidHJ5IHtcblxuICAgIHZhciBncmVldCA9IHJlcXVpcmUoJy4vZ3JlZXQnKTtcbiAgICBhbGVydChncmVldCgnV2VsY29tZSB0byBicm93c2VyaWZ5IScpKTtcblxufSBjYXRjaCAoZXgpIHtcblxuICAgIGFsZXJ0KCdKYXZhU2NyaXB0IEVycm9yOiAnICsgZXgpO1xuXG59XG4vLyBUaGlzIGlzIHRoZSBjb2RlIHdlIHdhbnQgdG8gcnVuIGluIHRoZSBCcm93c2VyLi4uIFdpdGggYSBDb21tb25KUyAncmVxdWlyZSchPyBIb3chPyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obXNnKSB7XG4gICAgcmV0dXJuICdIZWxsbyEgJyArIG1zZyArICcnO1xufVxuLy9UaGlzIGlzIG91ciBDb21tb25KUyBNb2R1bGUuIl19
