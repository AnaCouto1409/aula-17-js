//PESSOAS
//MAIOR E MENOR PESSOAS//O NUMERO DE HOMENS
//poderia criar trocentos dados porém o código fica poluído
function Pessoa(altura_,sexo_,nome_){
  this.altura = altura_
  this.sexo =sexo_
  this.nome = nome_
}
//let pessoa = {
  //altura:
  //sexo:
//}
for(let i = 1;i<=100;i++){
    let numRadom = Math.random();
    let altura = numRadom + 1;
    let nome = 'Pessoa' + i;
    let sexo ='F';
    if(numRadom> 0.5){
        sexo = 'M';
    }
}
let pessoa =new Pessoa(1.65,'F','Pessoa F 1');
let pessoa2 =new Pessoa(1.55,'M','Pessoa M 1');
let pessoa3 =new Pessoa(1.75,'M','Pessoa M 2');
let pessoa4 =new Pessoa(1.93,'F','Pessoa F 2');
let pessoa5 =new Pessoa(1.42,'F','Pessoa F 3');
let pessoas = [pessoa,pessoa2.pessoa3,pessoa4,pessoa5];
array.push(new pessoa(Number(altura.toFixed(2)),sexo,nome));
//module.exports={
    //pessoas:Array,
    //prop2:2,
    //myFunc:function(){
        
   // }
//}

//require

//let meubanco = require()
module.experts = {
    pessoas:Array,
    //a maior e menor altura do grupo
    maioEMenorAltura:function(){
        for(let i=0; i<this.pessoas;i++){
            let maiorPessoa = this.pessoas[0];
            let maiorAltura = maiorPessoa.altura;
            for(let i = 1; i<this.pessoas.length;i++){
                let pessoa = this.pessoas[i];
                if(pessoa.altura > maiorPessoa.altura){
                    maiorPessoa = pessoa;
                    maiorAltura = pessoa.Altura;
                }
            }
        }
    }
}
//parte 2 da aula e resumo
//bubble sort javascript - ordenação
//complexidade algoritmo


