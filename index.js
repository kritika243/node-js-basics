console.log('hello world');
import { createServer } from 'http';
import {randomPercentGenerator} from './randomGenerator.js';
import fs from 'fs'

const home = fs.readFileSync('./index.html')


const server = createServer((req, res)=>{
  if(req.url === "/"){
 res.end(home)
  }

  else if(req.url === "/about")
  res.end(`<h1>Your lucky number is ${randomPercentGenerator()}</h1>`)

 else if(req.url === "/contact")
  res.end('<h1>Contact page</h1>')

  else{
  res.end('<h1>Page not found</h1>')
    
  }

})

server.listen(8000, ()=>{
  console.log('server working on port 8000');
})

