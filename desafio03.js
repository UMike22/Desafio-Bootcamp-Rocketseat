const AlunosTurma1 = [
{
   nome: 'Mikael',
   nota1 : 10,
   nota2: 5,
   nota3: 8,
   nota4:4,
   nota5:10
},
{
    nome:'Eduardo',
    nota1:5,
    nota2:10,
    nota3:9,
    nota4:1,
    nota5:0
}
]

const AlunosTurma2 = [
    {
        nome: 'Felipe',
        nota1 : 5,
        nota2: 5,
        nota3: 1,
        nota4:4,
        nota5:1
     },
     {
         nome:'Venancio',
         nota1:5,
         nota2:10,
         nota3:9,
         nota4:1,
         nota5:0
     }
]



function CalcMedia(Alunos){
  return   (Alunos.nota1 + Alunos.nota2 + Alunos.nota3 + Alunos.nota4 + Alunos.nota5)/5
}
 const media1 = CalcMedia(AlunosTurma1[0])
 const media2 = CalcMedia(AlunosTurma2[0])
 


 function SePassou(media,turma){
     if(media > 5){
         console.log(`A media da ${turma} foi de ${media} você passou de ano!`)
     }
     else {
         console.log(`A media da ${turma} foi de ${media} Você foi reprovado.`)
     }
 }

 SePassou(media2,'Turma 1')