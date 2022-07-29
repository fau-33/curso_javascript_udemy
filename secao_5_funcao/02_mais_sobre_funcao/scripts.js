function multiplicarTresNumeros(x, y, z){
  return x * y * z;
}

console.log(multiplicarTresNumeros(2, 3, 4));
const mult = multiplicarTresNumeros(5, 6, 7);
console.log("O valor de mult " + mult);

function podeDirigir(idade, cnh) {
  if(idade >= 18 && cnh == true){
    console.log("Pode dirigir");
  }else {
    console.log("Não pode dirigir")
  }
}

console.log(podeDirigir(19, true));
console.log(podeDirigir(25, true));
console.log(podeDirigir(44, 0));
console.log(podeDirigir(19, 1));
console.log(podeDirigir(17, false));
