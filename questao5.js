// Crie uma função que irá receber um número e retornar o fatorial dele.

function fatorial(num){
    let resultado = num
    if (num === 0 || num === 1)
        return 1
    while (num != 1){
        num -= 1
        resultado *= num
    }
    return resultado
}
console.log(fatorial(4))

