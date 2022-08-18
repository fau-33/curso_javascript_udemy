let pessoa = {
  "name": "Flávio",
  "age": 39,
  "profissão": "Programador",
  "hobbies": ["video game", "leitura", "correr"]
}

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);

let pessoaJSON = JSON.parse(pessoaTexto);

console.log(pessoaJSON);
console.log(pessoaJSON.hobbies[1]);
