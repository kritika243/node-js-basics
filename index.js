console.log('hello world');
const http = require('http')

const server = http.createServer((req, res)=>{
  res.end('<h1>noiceee - returning html</h1>')
})

server.listen(8000, ()=>{
  console.log('server working on port 8000');
})

