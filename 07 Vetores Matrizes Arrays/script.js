aluno = [`Enzo`, `Valentina`, `Joana`, `Marcio`]

notas = [[5.6, 7.2], [9.1, 8.4], [5.8, 4.6], [4.5, 8.5]]

alunoSelecionado = 3

nomeAluno = aluno [alunoSelecionado]
notasAluno = notas [alunoSelecionado]

nota1 = notasAluno[0]
nota2 = notasAluno[1]

console.log(nomeAluno)
console.log(`A primeira nota foi:`, nota1)
console.log(`A segunda nota foi:`, nota2)
console.log(nomeAluno, `teve media`, (nota1+nota2)/2)