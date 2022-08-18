let names = ["Rosa", "Claudia", "Laura", "Flávio", "Viviane", "Valéria"];

let cars = ["BMW", "Fusca", "Gol", "Chevette"];


function verifyNumberElements(array){
  if(array.length >= 5){
    console.log("Muitos elementos");
  }else {
    console.log("Poucos elementos")
  }  
}

verifyNumberElements(names);
verifyNumberElements(cars);



