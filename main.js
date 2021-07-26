var server = require('./server.js');
var router = require('./router.js');
var handler = require('./handler.js');


handle = {}
handle["/"] = handler.home
handle["/home"] = handler.home
handle["/review"] = handler.review
    //console.log(handle)  -> { '/home': [Function: home], '/review': [Function: review] }
server.startserver(router.route, handle);