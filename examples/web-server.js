// Load the http module
var http = require('http');

// The callback executes everytime the request came into the server
var s = http.createServer(function (req, res){
  res.writeHead(200, {'content-type': 'text/plain'});
  //end the response
  res.write('hello\n');

  setTimeout(function(){
    res.end('world\n')
  }, 2000)
});

s.listen(8000);
