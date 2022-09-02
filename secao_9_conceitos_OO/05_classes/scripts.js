let cachorro = {
  patas: 4,
  raca: 'SRD',
  latir: function (){
    console.log('au au');
  }
}

let labrador = Object.create(cachorro);
labrador.latir();

labrador.raca = 'Labrador';

console.log(labrador.raca);
console.log(cachorro.raca);

let pastor = Object.create(cachorro);
pastor.raca = 'Pastor Alemão';

console.log(pastor.raca);

let pundle = Object.create(cachorro);
pundle.raca = 'Pundle';
pundle.latir();

console.log(pundle.raca);