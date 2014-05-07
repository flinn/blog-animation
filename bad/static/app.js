$(document).ready(function() {

    var terminalOptions = {
        user: "Vistors-MacBook-Pro:~ guest$ ",
        command: "WHOIS flinn",
        hesitate: 500,
        lastLogin: "Thu May 24 12:18:16 on ttys001",
        maxStrokeInterval: 200,
        outputInterval: 300,
        output: [
            "Registrant Name: Matthew Claiborne Flinn",
            "Registrant Organization: The Motley Fool",
            "Registrant Title: Software Developer",
            "Registrant City: Arlington, VA",
            "Last update of WHOIS database: 2014-05-06T01:00:00Z"
        ]
    };
    terminalify("terminal-window", terminalOptions);

});