function soma(a, b) {
  if(a === undefined || b === undefined){
    console.log("Está função precisa de dois argumentos.");
  }else {
    return a + b;
  }
}

console.log(soma(1));
console.log(soma(1, 2));

function nomeComIdade(nome, idade){
  if(idade === undefined){
    console.log("Olá " + nome);
  }else {
    console.log("Olá " + nome + " você tem " + idade + " anos.")
  }
}

console.log(nomeComIdade('João'));
console.log(nomeComIdade('Hélio', 20));