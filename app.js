const http = require('http')
const port = 3000

const server = http.createServer(function (req, res) {
    res.write('hello world! This is a demo Node server')
    res.end()
})

server.listen(port, function (error) {
    if (error) {
        console.log('Something went wrong ', error)
    } else {
        console.log('server is listening to the port ' + port)
    }
})