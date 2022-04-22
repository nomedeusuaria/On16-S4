// Utilize a estrutura de repetição for para imprimir no console conforme instruções:
// a) números de 1 a 50 - For

for (let contador = 1; contador <= 50; contador++) {
    console.log(contador)
}
console.log("Contei de 1 a 50 com for.")

// b) números de 1 a 50, quando chegar no número 25 interrompa a instrução e pare o loop

for (let contador = 1; contador <= 50; contador ++) {
    console.log(contador)

    if (contador === 25){
        break
    }
}
console.log("Parou no 25 por causa do break.")

// c) números de 1 a 50, quando chegar no número 10 pule a instrução

let contador = 0
while(contador < 50) {

    contador += 1;
    
    if(contador === 10) {
      console.log("Pule o 10");
      continue;
    }
    console.log(contador)
}