
const alunosDaTurmaA = [
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

const alunosDaTurmaB = [
    {
        nome: 'Leo',
        nota: 9.8
    },
    {
        nome: 'Alex',
        nota: 3
    },
    {
        nome: 'Max',
        nota: 2
    }
]

function calculaMedia(alunos) {
    return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

function enviaMensagem(media, turma){
    if(media > 5){
        console.log(`A média da turma ${turma} é ${media}. Parabéns!`)
    } else {
        console.log(`A média da turma ${turma} é menor que 5`)
    }
}

enviaMensagem(media1, 'turmaA')
enviaMensagem(media2, 'turmaB')