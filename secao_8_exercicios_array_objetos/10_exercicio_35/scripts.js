const calculadora = {
  somar: function (a,b){return a + b},
  subtracao: function (a,b){return a - b},
  multiplicacao: function (a, b){return a * b},
  divisao: function(a, b){return a / b},
}

console.log(calculadora.somar(3,4));
console.log(calculadora.subtracao(10,9));
console.log(calculadora.multiplicacao(10, 1000));
console.log(calculadora.divisao(5 , 2));