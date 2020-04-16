//Maneira de criar vetores no JS
const alunos = [
    {
        nome: 'Kaio',
        nota: 9.8
    },
    {
        nome: 'Pedro',
        nota: 10
    },
    {
        nome: 'Fulano',
        nota: 2
    }
]

//Calculo da média das notas
const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3

//Se a média for > 5, parabenize a classe
if(media > 5){
    console.log(`A média é ${media}. Parabéns!`)
} else {
    console.log('A média é menor que 5')
}