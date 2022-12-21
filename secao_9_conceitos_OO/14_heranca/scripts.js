class Mamifero {
  constructor(patas) {
    this.patas = patas;
  }
}

let coiote = new Mamifero(4);
console.log(coiote.patas);

class Cachorro extends Mamifero {
  constructor(patas, raca) {
    super(patas, raca);
    this.raca = raca;
  }

  latir() {
    console.log('Au au');
  }
}

let pug = new Cachorro(4, 'pug');
console.log(pug.patas);

console.log(new Cachorro instanceof Mamifero);
console.log(coiote instanceof Mamifero);
