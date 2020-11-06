//         Construção e impressão de objetos


// Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa. Os dados a serem armazenados são:

const empresa = {
    Nome : 'Rocketseat',
    Cor : 'Roxo',
    Foco : 'Programacao',
    Endereco : 'Rua Guilherme Gembala',
    Numero : 260

}
console.log(`A empresa está localizada na ${empresa.Endereco} no número ${empresa.Numero}`)



// Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.

const programador = {
    nome : 'Mikael',
    idade : 25,
    tecnologia : [
        {nome: "Java", especialidade: 'Desktop'},
        {nome:'Javascript', especialidade: 'Web/Mobile'},
        {nome:'React' , especialidade: 'Framework'}
    ]
}
console.log(`O usuário ${programador.nome} tem ${programador.idade} e usa a tecnologia ${programador.tecnologia[0].nome} com especialidade em ${programador.tecnologia[1].especialidade}`)