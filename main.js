var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/optimized'){
      url = '/defer-css-optimized-my-work.html';
    }
    if(request.url == '/unoptimized'){
      url = '/defer-css-unoptimized.html';
    }    
    if(request.url == '/favicon.ico'){
      response.writeHead(404);
      response.end();
      return;
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));
 
});
app.listen(3000);