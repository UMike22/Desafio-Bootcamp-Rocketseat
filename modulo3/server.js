const express = require('express')
const nunjucks = require('nunjucks')
const server = express()
const videos = require('./data')

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})
server.get("/", function (req, res) {
    const about = {
        name: 'Mikael Vieira',
        avatar: "https://media-exp1.licdn.com/dms/image/C4D03AQGIv2bPG0KKQA/profile-displayphoto-shrink_400_400/0?e=1610582400&v=beta&t=SwQVr9Fbs9ZHro_fuiUfMnSBuq0iJYH9ta8X_FvGyMk",
        description: 'Estudante dedicado com 2 anos de estudos nas tecnologias web, disposto a somar. Faço faculdade de Análise e Desenvolvimento de Sistemas. Estudo pra ser um full-stack dando relevância tanto para o front-end como para o back-end.',
        links: [
            {
                name: 'linkedin', class: 'linkedin', url: 'https://www.linkedin.com/in/mikael-vieira/'
            },
            {
                name: 'instagram', class: 'instagram', url: 'https://www.instagram.com/mikaelvsouza/'
            },
            {
                name: 'gmail', class: 'gmail', url: 'mailto://kaelvieira@gmail.com'
            }
        ]
    }
    return res.render("about", { about })
})
server.get("/portfolio", function (req, res) {
    return res.render("portfolio", { items: videos })
})


server.get("/video", function(req,res){
    
    const id = req.query.id
    const video = videos.find(function(video){
        if(video.id == id){
            return true
        }
    })
    if(!video){
        return res.send("Video not found")
    }
    return res.render("video", { item : video} )
})
server.use(function (req, res) {
    res.status(404).render("not-found");
});
server.listen(8080, function () {
    console.log('server is running')
})
