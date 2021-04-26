var http = require('http')
var fs = require('fs')
// var data = fs.readFileSync('data.txt', 'utf-8')

fs.readFile('data.txt', function(err, data) {
    if (err) throw err // Fail if the file can't be read.
    http.createServer(function(req, res) {
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.end(data) // Send the file data to the browser.
    }).listen(3000, '127.0.0.1')
})
console.log("Server running at port 3000")