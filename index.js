console.log('hello world');
const http = require('http')

const server = http.createServer((req, res)=>{
  if(req.url === "/")
  res.end("<h1>Home page</h1>")

  else if(req.url === "/about")
  res.end('<h1>About page</h1>')

 else  if(req.url === "/contact")
  res.end('<h1>Contact page</h1>')

  else{
  res.end('<h1>Page not found</h1>')
    
  }

})

server.listen(8000, ()=>{
  console.log('server working on port 8000');
})

