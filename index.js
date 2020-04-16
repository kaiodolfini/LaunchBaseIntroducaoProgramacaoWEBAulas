//Criar um programa que calcula a média
//das notas entre os alunos e envia
//mensagem do cálculo da média.

// podemos utilizar '', "" e `` para dizer que é uma string
// o `` cria uma template string, onde se pode passar uma variável
// const templateString = `João e ${aluno01} `
const aluno01 = 'Kaio'
const notaAluno01 = 9.8
const aluno02 = 'Pedro'
const notaAluno02 = 10
const aluno03 = 'Fulano'
const notaAluno03 = 2

//Calculo da média das notas
const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3

//Se a média for > 5, parabenize a classe
if(media > 5){
    console.log(`A média é ${media}. Parabéns!`)
} else {
    console.log('A média é menor que 5')
}