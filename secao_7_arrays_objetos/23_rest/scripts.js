let num = 1;
let num1 = 2;
let num2 = 3;
let num3 = 4;

function imprimirNumeros(...args) {
  for(let i = 0; i < num.length; i++) {
    console.log(args[i]);
  }
}

imprimirNumeros(num, num1, num2);
console.log('pausa');
imprimirNumeros(num3, num1, num2);
console.log('pausa');
imprimirNumeros(1,2,3,4,5,6,7,8,9,10,11,12);