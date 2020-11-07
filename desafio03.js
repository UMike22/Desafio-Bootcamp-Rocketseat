const AlunosTurma1 = [
{
   nome: 'Mikael',
   nota : 10
},
{
    nome:'Eduardo',
    nota:5
},
{
    nome:'Didico',
    nota:1
}
]


const AlunosTurma2 = [
    {
        nome: 'Felipe',
        nota : 5
    
     },
     {
         nome:'Venancio',
         nota:5
     },
     {
         nome:'Vagner',
         nota: 10
     }
]



function CalcMedia(Alunos){
  let soma = 0
  for(let i=0;i<Alunos.length;i++){
    soma = soma + Alunos[i].nota
}
    const media = soma/Alunos.length
    return media
}
 const media1 = CalcMedia(AlunosTurma1)
 const media2 = CalcMedia(AlunosTurma2)
 


 function SePassou(media,turma){
     if(media > 5){
         console.log(`A media da ${turma} foi de ${media} você passou de ano!`)
     }
     else {
       //  console.log(`A media da ${turma} foi de ${media} Você foi reprovado.`)
     }
 }

 SePassou(media1,'Turma 1')
 SePassou(media2,'Turma 2')