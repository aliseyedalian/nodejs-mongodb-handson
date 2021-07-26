var http = require('http');
var url = require('url');

function startserver(routeMessage, handle) {
    http.createServer(function(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request received on pathname = " + pathname)
        route(handle, pathname)
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write("Hello Mr.Seyedalian\nRandom:" + Math.round(Math.random() * 10));
        response.end();
    }).listen(8888);

    console.log("Server Started on localhost port 8888");
}

exports.startserver = startserver;