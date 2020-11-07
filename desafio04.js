// Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array), por exemplo:

const usuarios = [
    {
        nome:'Carlos',
        tecnologias: ['HTML','CSS']
    },
    {
        nome:'Mikael',
        tecnologias: ['JAVA','JAVA.SWING']
    },
    {
        nome:'Jesualdo',
        tecnologias:['C++','PHP','PHOTOSHOP']
    },
    {
        nome:'Bluezao',
        tecnologias:['Bioshock','PHYTON','LINUX']
    }
]
//Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários:
for(i=0;i < usuarios.length;i++){
    console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`)
}



// Busca por tecnologia
function checaSeUsuarioUsaCSS(usuario) {
    for (let tecnologia of usuario.tecnologias) {
        if (tecnologia == 'CSS') return true
    }

    return false
    
}
    

for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i])

    if(usuarioTrabalhaComCSS) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
    }
}