var http = require('http');
var url = require('url');

function startserver(route, handle) {
    http.createServer(function(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request received on pathname = " + pathname)
        route(handle, pathname, response)
    }).listen(8888);

    console.log("Server Started on localhost port 8888");
}

exports.startserver = startserver;