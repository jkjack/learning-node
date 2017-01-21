var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function (response){
  response.pipe(bl(function (err, info) {
      if (err)
          return console.error(err)
      info = info.toString()
      console.log(info.length)
      console.log(info)
  }))
})
