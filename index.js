var http = require('http');

console.log("startuje serwer...");

http.createServer(function (request, response){
    //tu jest funkcja cS
    //request (wyslane z przegladarki), response(odpowiedz do przegladarki)
    response.writeHead(418, {'Content-Type': 'text/html'});
    response.write("JeStEm ImbryCzkiem!");
    response.end();

}).listen(8080);