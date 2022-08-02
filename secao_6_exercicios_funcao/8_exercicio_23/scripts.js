const readString = function (string){
       if(string.length > 10){
              console.log('Texto muito longo');
       }else {
              console.log('Texto dentro do limite');
       }
       console.log(string.length)
}

readString('Olá tudo bem?');
readString('Olá!');