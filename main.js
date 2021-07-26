var server = require('./server.js');
var router = require('./router.js');
var handler = require('./handler.js');


handle = {} //key-value pair
handle["/"] = handler.home
handle["/home"] = handler.home
handle["/review"] = handler.review
    //console.log(handle) //- > {'/': [Function: home],'/home': [Function: home],'/review': [Function: review]}

server.startserver(router.route, handle);