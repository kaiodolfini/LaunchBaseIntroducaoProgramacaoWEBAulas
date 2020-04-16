
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
    },
    {
        nome: 'Mais um aluno',
        nota: 3
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
    },
    {
        nome: 'Mais um aluno',
        nota: 5
    }
]


function calculaMedia(alunos) {
    let soma = 0;
    for(let i = 0; i < alunos.length; i++){
        soma = soma + alunos[i].nota
    }
    const media = soma / alunos.length
    return media
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