peso = 80
altura = 1.71
imc = peso / (altura * altura)

if (imc < 18.50){
    cassi = `Magreza`
    grau = 0
}
else if (imc < 24.99){
    classi = `Normal`
    grau = 0
}
else if (imc < 29.99){
    classi = `Sobrepeso`
    grau = 1
}
else if (imc < 39.99){
    classi = `Obesidade`
    grau = 2
}
else if (imc >= 40.00){
    classi = `Obesidade Grave`
    grau = 3
}
console.log(`Seu IMC é`, imc)
console.log(`Você se enquadra na classificação`, classi)

switch (classi){
    case `Magreza`:
        console.log(`Seu peso está abaixo do recomendado, cuidado!`)
        break;
    case `Normal`:
        console.log(`Você está bem!`)
        break;
    case `Sobrepeso`:
        console.log(`Seu peso está um pouco acima do recomendado.`)
        break;
    case `Obesidade`:
        console.log(`Seu peso está acima do recomendado, cuidado.`)
        break;
    case `Obesidade Grave`:
        console.log(`Cuidado! Você está acima do peso recomendado pela OMS!`)
        break;
}

if (grau >= 1){
    console.log(`É importante procurar um médico para avaliar sua saúde.`);
}