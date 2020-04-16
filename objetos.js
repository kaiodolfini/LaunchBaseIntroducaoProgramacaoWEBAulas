//Maneira de criar objetos no JS
const aluno01 = {
    nome: 'Kaio',
    nota: 9.8
}

const aluno02 = {
    nome: 'Pedro',
    nota: 10
}

const aluno03 = {
    nome: 'Fulano',
    nota: 2
}

//Calculo da média das notas
const media = (aluno01.nota + aluno02.nota + aluno03.nota) / 3

//Se a média for > 5, parabenize a classe
if(media > 5){
    console.log(`A média é ${media}. Parabéns!`)
} else {
    console.log('A média é menor que 5')
}