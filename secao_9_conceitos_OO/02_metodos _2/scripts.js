const dog = {
  raca: 'SRD',
  uivar: function(){
    console.log('Auuuuuuuuuuuuu');
  },
  rosnar: function(){
    console.log('Grrrrrrrrrrrrrrr');
  },
  setRaca: function(raca){
    this.raca = raca;
  },
  getRaca: function(){
    return "A raça é " + this.raca;
  }
}

console.log(dog.raca);

dog.setRaca('Pastor Alemão');
console.log(dog.raca);

console.log(dog.getRaca());