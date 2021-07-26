var http = require('http');
var url = require('url');

function startserver(route, handle) {
    http.createServer(function(request, response) {
        var reviewData = "";
        var pathname = url.parse(request.url).pathname;
        console.log("Request received on pathname = " + pathname);
        request.setEncoding("utf8");
        request.addListener("data", function(chunk) {
            reviewData += chunk;
        });
        request.addListener("end", function() {
            route(handle, pathname, response, reviewData);
        });

    }).listen(8888);

    console.log("Server Started on localhost port 8888");
}

exports.startserver = startserver;