
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

function marcarComoReprovado(aluno) {
    aluno.reprovado = false

    if (aluno.nota < 5) {
        aluno.reprovado = true
    }
}

function enviarMensagemReprovado(aluno) {
    if (aluno.reprovado) {
        console.log(`o Aluno ${aluno.nome} está reprovado`)
    }
}

function alunosReprovado(alunos) {
    for (let aluno of alunos) {
        marcarComoReprovado(aluno)
        enviarMensagemReprovado(aluno)

    }
}

alunosReprovado(alunosDaTurmaA)
alunosReprovado(alunosDaTurmaB)