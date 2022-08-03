let pessoa = {
  nome: "Flávio",
  idade: 39,
  profissão: "Programador"
}

console.log(pessoa.nome);
delete pessoa.nome;
console.log(pessoa.nome);
console.log(pessoa);
pessoa.casado = false;
console.log(pessoa.casado);
console.log(pessoa);