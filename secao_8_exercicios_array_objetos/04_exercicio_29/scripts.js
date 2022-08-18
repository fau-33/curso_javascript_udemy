const bus = {
  rodas: 8,
  limitePassageiros: 40,
  portas: 2
}

delete bus.rodas;

console.log(bus);

bus.janelas = 20;
console.log(bus);
console.log(bus.janelas);

