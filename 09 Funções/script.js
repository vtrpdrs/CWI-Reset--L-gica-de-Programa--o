// function imprimir(i){
//     console.log(i)
// }
// function multiplicar(a,b){
//     return a*b
// }
// resultado = multiplicar(3,5)

// imprimir(resultado)

function ex1 (nomeDoFulano)
{
    nomeDoBeltrano = `Bruno`;
    mesmoNome = nomeDoFulano == nomeDoBeltrano
    return mesmoNome
}

function ex2 (idade)
{
    return idade >= 18
}

function ex3 (valor, meses)
{
    valorComJuros = valor + (valor / 10 * meses)
        return valorComJuros
}

function imprimir(arg){
    console.log(arg)
}

resultado1 = ex1 (`Vitor`)
resultado2 = ex2 (24)
resultado3 = ex3 (2500, 3)

imprimir (resultado1)
imprimir (resultado2)
imprimir (resultado3)

imprimir("Valor com Juros")

imprimir (ex3(100, 1))   // 110
imprimir (ex3(984.5, 1)) // 1082.95

imprimir("Maior Idade")

imprimir(ex2(30)) // true
imprimir(ex2(18)) // true
imprimir(ex2(5))  // false
