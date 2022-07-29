let idade = 16;
let cnh = false;

if(idade >= 18 && cnh == false){
  console.log("Não pode dirigir, mas pode fazer a CNH!");
}else if(idade >= 18 && cnh == true){
  console.log("Sim, pode dirigir!");
}else{
  console.log("Não pode dirigir!");
}