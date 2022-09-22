//Exercicio 1

// valores=[3,4,7,95,34]
// console.log(valores)

//Exercicio 2

// valores = [1, 2, 3, 5, 8, 13, 21, 23, 34, 55]
// soma = 0

// for (selecionado = 0; selecionado < valores.length; selecionado++){
//     soma += valores[selecionado]
// }

// media = soma / valores.length

// console.log(`Valores:`, valores);
// console.log(`Soma:`, soma);
// console.log(`Media dos`, valores.length,`valores do Array:` ,media)

//Exercicio 3

meuNome = "Lucas"
nomeComum = false

nomesComuns = ["Miguel", "Laura", "Lucas", "Beatriz", "Guilherme", "Maria", "Gabriel", "Ana", "Arthur", "Júlia", 
"Enzo", "Alice", "Rafael", "Mariana", "João", "Larissa", "Gustavo", "Maria Eduarda", "Pedro", "Sofia", 
"Bernardo", "Isabela", "Matheus", "Helena", "Davi", "Camila", "Heitor", "Lara", "Henrique", "Valentina", 
"Bruno", "Letícia", "Samuel", "Luana", "Felipe", "Amanda", "Lorenzo", "Yasmin", "Benjamin", "Sophia", 
"Vinícius", "Rebeca", "Rodrigo", "Juliana", "Eduardo", "Bruna", "Diego", "Cecília", "Antônio", "Fernanda", 
"Leonardo", "Isadora", "Noah", "Lorena", "Nícolas", "Lívia", "Daniel", "Manuela", "Thiago", "Vitória"]

for (i = 0; i < nomesComuns.length; i++){
    if (meuNome == nomesComuns[i]){
        nomeComum = true
    }
}

if (nomeComum=true){
    console.log(`É,`, meuNome,`eh um nome comum :P`)
}
    else {
        console.log(`Diferentão, hein? XD`)
    }

// aluno = [`Enzo`, `Valentina`, `Joana`, `Marcio`, `Jose`, `Gabriel`]

// notas = [[5.6, 7.2], [9.1, 8.4], [5.8, 4.6], [4.5, 8.5], [8.8, 7.2], [5.6, 2.3]]

// for(num = 0; num < aluno.length; num++){
// alunoSelecionado = num

// nomeAluno = aluno [alunoSelecionado]
// notasAluno = notas [alunoSelecionado]

// nota1 = notasAluno[0]
// nota2 = notasAluno[1]
// media = (nota1 + nota2) / 2

// console.log(nomeAluno)
// console.log(`A primeira nota foi:`, nota1)
// console.log(`A segunda nota foi:`, nota2)
// console.log(nomeAluno, `teve media`, media)
// console.log(``)
// }

// while(num <= 10){
//     console.log(num)
//     num++
// }