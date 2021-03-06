var http = require('http')
var bl = require('bl')

for(var i=2;i<5;i++){
  http.get(process.argv[i], function (response){
    response.pipe(bl(function (err, info) {
      if (err)
      return console.error(err)
      info = info.toString()
      console.log(info)
    }))
  })
}

/* OFFICIAL RESULT
var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
  for (var i = 0; i < 3; i++) {
    console.log(results[i])
  }
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }

      results[index] = data.toString()
      count++

      if (count === 3) {
        printResults()
      }
    }))
  })
}

for (var i = 0; i < 3; i++) {
  httpGet(i)
}
*/
