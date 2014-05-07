(function(window, undefined) {
    "use strict";

    var defaults = {
        user: "Flinn-MacBook-Pro:~ mflinn$ ",
        command: "ping fool.com",
        hesitate: 500,
        lastLogin: "Thu May 24 12:18:16 on ttys001",
        maxStrokeInterval: 200,
        outputInterval: 300,
        output: [
            "Reply from 199.83.128.4: bytes=32 time=17ms TTL=250",
            "Reply from 199.83.128.4: bytes=32 time=15ms TTL=250",
            "Reply from 199.83.128.4: bytes=32 time=12ms TTL=250"
        ]
    },
        terminalify,
        cursor,
        lastInput,
        lastLogin;

    terminalify = function(selector, options) {
        return new terminalify.fn.init(selector, options);
    };

    terminalify.fn = terminalify.prototype = {
        constructor: terminalify,
        init: function(selector, options) {
            if (!options)
                options = defaults;

            startTerminal(selector, options);

            setTimeout(function() {
                appendEachLetterOfCommand(options);
            }, options.hesitate);
        }
    };

    terminalify.fn.init.prototype = terminalify.fn;

    function startTerminal(selector, options) {
        if (!selector) {
            throw 'You must have a selector!';
        }
        cursor = $('.' + selector).find('.cursor')[0];

        lastInput = $('#last-input');

        lastLogin = $('.' + selector).find('.terminalify-lastlogin')[0];
        $(lastLogin).text(options.lastLogin);

        var user = $('.' + selector).find('.user')[0];
        $(user).text(options.user);
    }

    function writeOutput(options) {
        $(cursor).css('visibility', 'hidden');
        var i = 0,
            outputIntervalId;
        outputIntervalId = window.setInterval(function() {
            var textOutput = '<p><span class="user">' + String(options.user) + '</span>  <span class="input">' + String(options.output[i++]) + '</span></p>';
            $(lastInput).before(textOutput);
            if (i >= options.output.length) {
                window.clearInterval(outputIntervalId);
                var lastInputHtml = '<span class="user">' + String(options.user) + '</span>';
                $(lastInput).append(lastInputHtml);
                $(cursor).appendTo(lastInput);
                $(cursor).css('visibility', 'visible');
            }
        }, options.outputInterval);
    }

    function appendEachLetterOfCommand(options) {
        var i = 0,
            intervalId, writtenChars = "";
        intervalId = window.setInterval(function() {
            writtenChars += String(options.command).charAt(i++);
            $("#terminalify-command").text(writtenChars);
            if (i > options.command.length) {
                window.clearInterval(intervalId);
                writeOutput(options);
            }
        }, options.maxStrokeInterval);
    }

    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = terminalify;
    } else {
        if (typeof define === "function" && define.amd) {
            define("terminalify", [], function() {
                return terminalify;
            });
        }
    }
    if (typeof window === "object" && typeof window.document === "object") {
        window.terminalify = terminalify;
    }
})(window);