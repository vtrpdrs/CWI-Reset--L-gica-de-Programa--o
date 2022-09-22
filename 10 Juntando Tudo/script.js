colaboradores    = ['Rhoger', 'Cléverson', 'Gleysberto', 'Nádio', 'Rosiméri', 'Regislane', 'Agripino', 'Wellison']
idades           = [      69,          66,           58,      61,         60,          64,         59,         55]
temposDeTrabalho = [      31,          29,           30,      26,         25,          24,         26,         29]

// FUNCOES -----------------------------------------------------------

function verificarAposentadoria(nome){
    colaborador = false
    idade = 0
    tempoTrabalho = 0

    for (index = 0; index < colaboradores.length; index++){

        if (nome == colaboradores[index]){
            colaborador = true
            idade = idades[index]
            tempoTrabalho = temposDeTrabalho[index]
        }
    }
    if (colaborador){
        porIdade = (idade >= 65)
        porTempoDeTrabalho = (tempoTrabalho >= 30)
        porIdadeComTempoDeTrabalho = (idade >= 60 && tempoTrabalho >=25)

        if (porIdade || porTempoDeTrabalho || porIdadeComTempoDeTrabalho){
            console.log(`Parabéns, já pode sair de férias eternas :)`)
        }
        else {
            console.log(`Infelizmente, ainda falta um tempo :(`)
        }
    }
    else {
        console.log(`Colaborador inválido :|`)
    }
}

// EXECUCAO ----------------------------------------------------------

verificarAposentadoria('Rosiméri')    // true (regra 3)
verificarAposentadoria('Agripino')    // false (falta 1 ano de idade para regra 3)
verificarAposentadoria('Rhoger')      // true (todas)
verificarAposentadoria('Hudnélson')   // false (colaborador inexistente)
verificarAposentadoria('Gleysberto')  // true (regra 2)
verificarAposentadoria('Regislane')   // false (falta 1 ano de idade para regra 1 e 1 de trabalho para regra 3)
verificarAposentadoria('Cléverson')   // true (regras 1 e 3)
verificarAposentadoria('Nádio')       // true (regra 3)
verificarAposentadoria('Wellison')    // false (falta 1 ano de trabalho para regra 2)
verificarAposentadoria('Florisberto') // false (colaborador inexistente)



// console.log(`Nome:`,colaborador)
// console.log(`Idade:`,idade)
// console.log(`Anos de Trabalho:`,trabalho)
// console.log(``)
// console.log(``)








// if (colaboradores.includes(nome)){
//     return true
// }

// function idadeMinima (idade){
//     if (idade >= 65){
//         return true
//     }
//     else {
//         return false
//     }
// }

// function tempoMinimo (trabalho){
//     if (trabalho >= 30){
//         return true
//     }
//     else {
//         return false
//     }
// }

// for (indice=0; indice<colaboradores.length; indice++){
//     console.log(colaboradores[indice])
//     console.log(idades[indice])
//     console.log(temposDeTrabalho[indice])
//     console.log(``)
// }