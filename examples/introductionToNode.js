/*
  global variable -> you are not associate to browser
  process is a global varialbe
  process.env -> enviroments

  NOde has a lot of good libraries  (web-server example)

  curl http://localhost:8000
  curl -i http://localhost:8000 (get the entire response)
  Response:
    HTTP/1.1 200 OK
    content-type: text/plain
    Date: Sun, 29 Jan 2017 13:41:20 GMT
    Connection: keep-alive
    Transfer-Encoding: chunked

    hello world

-20:00
    sudo apt install apache2-utils
    // Test server with 100 request at same time
    ab -n 100 -c 100 http://127.0.0.1:8000/

-25:00
    tcp-server.js
    telnet localhost 8000
    nc localhost 8000
    Javascript => Functions and add numbers, string, arrays, objects

-40:00
  Node can do a lot of things at once, because it's not blockng
  helloWorld-server.js

-1:00:00
  Node is a sigleThread sort of system (1 process, 1 thread in this process)
  Node ideia is asimple building block, to scale out they have to talk with anothers
  npm (NOde package manager) -> install popular libraries
  The popular web framework is express js
*/
