// Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array), por exemplo:

const usuarios = [
    {
        nome: 'Carlos',
        tecnologias: ['HTML', 'CSS']
    },
    {
        nome: 'Mikael',
        tecnologias: ['JAVA', 'JAVA.SWING']
    },
    {
        nome: 'Jesualdo',
        tecnologias: ['C++', 'PHP', 'PHOTOSHOP']
    },
    {
        nome: 'Bluezao',
        tecnologias: ['Bioshock', 'PHYTON', 'LINUX']
    }
]
//Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários:
for (i = 0; i < usuarios.length; i++) {
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

    if (usuarioTrabalhaComCSS) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
    }
}

// Soma de despesas e receitas


const UsuariosFinanceiro = [
    {
        nome: "Salvio",
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
    },
    {
        nome: "Marcio",
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },
    {
        nome: "Lucia",
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    }
];


function calculaSaldo(receitas, despesas) {
    let saldoReceita = somaNumeros(receitas)
    let saldoDespesa = somaNumeros(despesas)

    return saldoReceita - saldoDespesa
}

function somaNumeros(numeros) {
    
    let soma = 0
    
    for (let prop of numeros) {
        soma = soma + prop
    }
    return soma
}

for (let prop of UsuariosFinanceiro) {
    
    const saldo = calculaSaldo(prop.receitas, prop.despesas)
    
    if (saldo > 0) {
        console.log(`O saldo de ${prop.nome} é de ${saldo.toFixed(2)}`)
    }
    else {
        console.log(`O saldo de ${prop.nome} é de ${saldo.toFixed(2)}`)
    }

}