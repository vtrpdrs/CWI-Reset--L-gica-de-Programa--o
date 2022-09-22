niveis = [`Muito Abaixo do Peso`,
        `Abaixo do Peso`,
        `Peso Normal`,
        `Acima do Peso`,
        `Obesidade Grau I`,
        `Obesidade Grau II`,
        `Obesidade Grau III`]

// massa = 60
// altura = 1.70

pessoas = [`Igor`, `Marcia`, `Jose`]
massas = [100, 68, 79]
alturas = [1.81, 1.71, 1.68]

// Funcoes -------------------------------------

function calcularIMC (massa, altura){
    imc = massa / (altura ** 2)
    return imc
}

function verificarNivel(imc){
    nivel = 0
    if (imc < 17){
        nivel = 0
    }
        else if (imc < 18.5){
            nivel = 1
        }
        else if (imc < 25){
            nivel = 2
        }
        else if (imc < 30){
            nivel = 3
        }
        else if (imc < 35){
            nivel = 4
        }
        else if (imc < 40){
            nivel = 5
        }
        else {
            nivel = 6
        }

        return nivel
}

// EXECUCAO CODIGO --------------------------

for (indice=0; indice<pessoas.length; indice++){

pessoa = pessoas[indice]
massa = massas[indice]
altura = alturas[indice]

imc = calcularIMC(massa, altura)
nivel = verificarNivel (imc)

console.log(`Nome:`,pessoa)
console.log(`Peso:`,massa)
console.log(`Altura:`,altura)
console.log(`IMC:`,imc)
console.log(`Estado:`,niveis[nivel])
console.log(``)
}