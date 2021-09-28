mediaAlturaMulheres:function(){
  let contadorMulheres = 0;
  let somaDasMulheres = 0;
  // essoa altura1,80, sexo:f 
  for(let pessoa of this.pessoa){
    if (pessoa.sexo==='F'){
      contadorMulheres = contadorMulheres +1;
      somaDasAlturas = somaDasAlturas + pessoa.altura;
    }
  }
  const media = somaDasAlturas/contadorMulheres;
  return media;
//o  numro de homens
qtdHomens:function(){
    if (pessoa.sexo==='M'){
        contadorHomens = contadorHomens +1;
        somaDasAlturas = somaDasAlturas + pessoa.altura;
}
for(let pessoa of this.pessoas){
    if(pessoa.sexo ==='M'){
        contadorHomens = contadorHomens +1;
}    
    }
}
Function pessoa(altura_,sexo_,nome_,idade_,opinião_){
    this.altura = altura_
    this.sexo = sexo_
    this.nome = nome_
    this.idade = idade_
    this.opinião_ = opinião_
}
let array =[];
for(let i=1;i<=100;i++){
    let numRandom = Math.random ();
    let altura = numRandom + 1;
    let nome ='Pessoa' + i;
    let sexo ='F';
    if(numRandom > 0.5){
        sexo ='M';
    }
}
let opinião;
if(numRandom < 0.33){
    opinião 3;
} else if (numRandom >=0.33 && numRandom < 0.66){
    opinião = 2;
}
//exercicio
calcularMediaOtimo:function(){
    let contadorOtimo = 0;
    let somaDasIdades = 0;
    for(let pesssoa of this.pessoas){
        if(pessoa.opinião =='3'){
            contadorOtimo = contadorOtimo + 1;
            somaDasIdades += pessoa.idade;
        }
    }
    const media = somaDasIdades/contadorOtimo;
    return media;
}
//quantidade de pessoas
qtdPessoasRegular:function(){
    let contadorRegular = 0;
    for(let pessoa os this.pessoas){
        if(pessoa.opinião == '1'){
            contadorRegular++;
        }
    }
}
//a prcentagem dos que responderam entre todos s entrevistados
//
porcentagemDosBons: function(){
    let contadorBom
}
//revisão
let array = [];
for(let i = 1;i<=111;i++) {
  //Números aleatórios entre 0 e 1. 
  let numRandom = Math.random();
  let altura = numRandom + 1;
  let nome = 'Pessoa ' + i;
  let sexo = 'F';
  if(numRandom > 0.5){
    sexo = 'M';
  }
  let opiniao;
  if(numRandom < 0.33){
    opiniao = '3';
  } else if(numRandom >= 0.33 && numRandom < 0.66){
    opiniao = '2';
  } else {
    opiniao = '1';
  }
  let idade = Number((numRandom * 100 + 1).toFixed(0)); 


  //ótimo - 3, bom - 2, regular -1.

  array.push(new Pessoa(Number(altura.toFixed(2)),sexo,nome,idade,opiniao));

}


module.exports = {
  pessoas:array,
  //// a maior e a menor altura do grupo;
  maiorEMenorAltura:function(){

    let pessoasOrdenadas = this.pessoas.sort(function(primeiraPessoa,segundaPessoa){

      return primeiraPessoa.altura - segundaPessoa.altura;
    });

    // [1,2,3].length = 3 - 1 = 2;
    // 0,1,2

    let menor = pessoasOrdenadas[0];
    let maior = pessoasOrdenadas[pessoasOrdenadas.length - 1];

    console.log(menor);
    console.log(maior);

    // Pessoa { altura: 1.5, sexo: 'M', nome: 'Pessoa 1' },
    // Pessoa { altura: 1.72, sexo: 'M', nome: 'Pessoa 2' },
    // Pessoa { altura: 1.41, sexo: 'F', nome: 'Pessoa 3' },
    // Pessoa { altura: 1.7, sexo: 'M', nome: 'Pessoa 4' },
    // let maiorPessoa = this.pessoas[0];
    // let maiorAltura = maiorPessoa.altura;

    //   for(let i = 1 ; i<this.pessoas.length;i++){
    //     let pessoa = this.pessoas[i];
        
    //     if(pessoa.altura > maiorPessoa.altura){
    //       maiorPessoa = pessoa;
    //       maiorAltura = pessoa.altura;
    //     }

    //   }
  },
  //// a média de altura das mulheres;
  mediaAlturaMulheres:function(){
    
    let contadorMulheres = 0;
    let somaDasAlturas = 0;
    
//     Pessoa { altura: 1.3, sexo: 'F', nome: 'Pessoa 46' }
//      Pessoa { altura: 1.7, sexo: 'F', nome: 'Pessoa 70' }
    for(let pessoa of this.pessoas){
      if(pessoa.sexo === 'F'){
        contadorMulheres = contadorMulheres + 1;
        somaDasAlturas = somaDasAlturas + pessoa.altura;
      }
    }

    const media = somaDasAlturas/contadorMulheres;
    return media;

  },
  //o número de homens.
  qtdHomens:function(){
    let contadorHomens = 0;

    for(let pessoa of this.pessoas){

      if(pessoa.sexo === 'M'){
        contadorHomens = contadorHomens + 1;
      }

    }
    return contadorHomens;
  },

  //a média das idades das pessoas que responderam ótimo;

  calcularMediaOtimo:function(){
    let contadorOtimo = 0;
    let somaDasIdades = 0;

    for(let pessoa of this.pessoas){
      if(pessoa.opiniao == '3'){
        contadorOtimo = contadorOtimo + 1;
        somaDasIdades += pessoa.idade;
      }
    }

    const media = somaDasIdades/contadorOtimo;
    return media;

  },
// a quantidade de pessoas que responderam regular;
  qtdPessoasRegular:function(){
    let contadorRegular = 0;
    for(let pessoa of this.pessoas){
      if(pessoa.opiniao == '1'){
        contadorRegular++;
      }
    }
    return contadorRegular;
  },
// a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.
  porcentagemDosBons:function(){
    let contadorBom = 0;
    for(let pessoa of this.pessoas){
      if(pessoa.opiniao == '2'){
        contadorBom++;
      }
    }
    let porcentagem = (contadorBom/this.pessoas.length)*100;
    return porcentagem;
  }

}