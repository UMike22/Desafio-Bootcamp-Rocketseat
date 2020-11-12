const express = require('express')
const nunjucks = require('nunjucks')
const server = express()
const videos = require('./data.js')

server.use(express.static('public'))

server.set("view engine","njk")

nunjucks.configure("views", {
    express: server
})
server.get("/", function(req,res){
    return  res.render("about")
})
server.get("/portfolio", function(req,res){
    return  res.render("portfolio" , {items : videos})
})
server.use(function(req, res) {
    res.status(404).render("not-found");
  });
server.listen(8080, function(){
    console.log('server is running')
})
