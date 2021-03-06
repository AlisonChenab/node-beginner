var http = require("http");
var url = require("url");

function start(route, handle) {
    function onRequest(request, response) {
        var postData = ''
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        // request.setEncoding('utf8')
        // request.on('data', (postDataChunk) => {
        //     postData += postDataChunk;
        //     console.log("Received POST data chunk '"+postDataChunk + "'.");
        // })
        // request.on('end', () => {
        //     route(handle, pathname, response, request);
        // })
        route(handle, pathname, response, request);
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;
