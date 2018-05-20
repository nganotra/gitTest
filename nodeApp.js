var http = require('http');
var module1 = require('./module1');
function onRequest(request, response){
    response.writeHead(200,{'Content-Type' : 'text/plain'});
    response.write('hello world!!!');
    response.write('Heyyyyy' + module1.getName('nitesh'));
    // response.write( module1.variable1);
    // response.write( module1.function1());
    response.end();
}

http.createServer(onRequest).listen(8000);