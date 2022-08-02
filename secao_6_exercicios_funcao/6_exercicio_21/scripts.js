function verifyNumber(numero){

       if(typeof(numero) === 'number'){

              console.log( 'Esse valor é do tipo number');

       }
}

verifyNumber(3);

function verifyBoolean(booleano){
       if(typeof(booleano) === 'boolean'){
            console.log( 'Esse valor é do tipo boolean');
       }
}

verifyBoolean(true);

function verifyString(string){
      if(typeof(string) === 'string'){
       console.log( 'Esse valor é do tipo string');
      }
}

verifyString('Olá');

function verifyTypeDado(dado) {
       if(typeof(dado) === 'number'){
              console.log(`Esse tipo de valor é: ${dado} é number`);
       }else if(typeof(dado) === 'string'){
              console.log(`Esse tipo de valor: ${dado} é string`);
       }else if(typeof(dado) === 'boolean'){
              console.log(`Esse tipo de valor: ${dado} é boolean`);
       }
}

verifyTypeDado(39);
verifyTypeDado('Olá');
verifyTypeDado(false);