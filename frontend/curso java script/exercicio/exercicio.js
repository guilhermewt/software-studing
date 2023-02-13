/*let a = 'vermelho';
let b = 'azul';
console.log(a);
console.log(b);

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);

let i = 5;
while(i >= 1){
    if(i % 2 !== 0){
        console.log(i);
    }
    i--;
}
*/

//escreva uma funcao que usa 2 numeros e retorna o maior entre eles

/*
function bigElement(number1,number2){
    if(number1 > number2)
        return (number1);
      return(number2);
    
}

console.log('big element: ', bigElement(21,8));
*/

/*
const resultado = fizzBuzz(22)
console.log(resultado);

function fizzBuzz(entrada){
    if(typeof entrada !== 'number')
        return '!nao é um numero';
    
    if(entrada % 3 === 0 && entrada % 5 === 0)
        return 'FizzBuzz';  

    if(entrada % 3 === 0)
        return 'Fizz';
    
    if(entrada % 5 === 0)
        return 'Buzz';

    if(entrada % 3 !== 0 || entrada % 5 !== 0 )
        return entrada;      
}
*/


//(medidor de velocidade)

// requisitos: a cada 5km acima do limite voce ganha 1 ponto, Math.floor(), caso pontos maior que 12 -> "carteira suspensa"
/*

function medidor(velocidadeAtual){
   const velocidadeMaxima = 70;
   let pontosKm;
   
   if(velocidadeAtual < 70 || velocidadeAtual <= (velocidadeMaxima + 4)){
      return 'ok';
   }
   else{
      pontosKm = Math.floor((velocidadeAtual - velocidadeMaxima) / 5);
      
      if(pontosKm >= 12){
         return 'carteira suspensa';
      }
      return pontosKm;
   }

}

console.log('velocidade: ' + Velocidade(81));
*/

/*
//desafio par impar

console.log('par impar')
for(let i = 0; i < 10; i++){
    if(i % 2 === 0){
        console.log(i, "par");
    }
    else{
        console.log(i, "impar");
    }
}

*/


//(desafio exibir apenas string de um objeto)
/*
const filme = {
    titulo : 'vingadores',
    ano : 2018,
    diretor : 'robin',
    personagem : 'thor'
}
exibirPropriedades(filme);
function exibirPropriedades(obj){
    for(prop in obj){
        if(typeof obj[prop] === 'string'){
            console.log(prop,obj[prop]);
        }
    }
}
*/

//(exibir apenas a string de um objeto)
/*
const carro = {
    nome: 'celta',
    cor: 'blue',
    automatico: true,
}

caracteristicasDoCarro(carro);
function caracteristicasDoCarro(obj){
    for(prop in obj)
        if(typeof obj[prop] === 'boolean')
            console.log(prop,obj[prop])
}

*/

//(criar funcao soma que retorna a soma de todos multiplos de 3 e 5)
/*
somar(10);

function somar(limite){
    
    let multiplosDeTres = 0;
    let multiplosDeCinco = 0;

    for(let i = 1; i <= limite; i++){
        if(i % 3 === 0)
            multiplosDeTres += i;
        
        if(i % 5 === 0)
            multiplosDeCinco += i;
    }
    console.log(multiplosDeTres + multiplosDeCinco);
}
*/

//exercicio nota escolar obter media a partir de um array
//0-59:f
// 60-69:d
//70-79:c
//80-89:b
//90-1000:a
/*
const array = [70,70,80];
console.log(mediaDoAluno(array));

function mediaDoAluno(notas){

    const media = calcularMedia(notas);

    if(media < 59) return 'f';
    if(media < 69) return 'd';
    if(media < 79) return 'c';
    if(media < 89) return 'b';
    return 'a';
}

function calcularMedia(array){
    let soma = 0;
    for(let valor of array){
        soma += valor;
    }
    return soma/(array.length);
}
*/

//criar uma funcao que exibe a quantidade de * que aquela linha possui
/*
asteriscos(10);
function asteriscos(limite){
    
    for(let linha = 1; linha <= limite; linha++){
        let padrao = '';
        for(let i = 0; i < linha; i++){
            padrao += '*';
        }
        console.log(padrao);
    }
    
}

*/
//exibir numeros primos
/*
exibirNumerosPrimos(15);
function exibirNumerosPrimos(limite){
    for(let numero = 2; numero <= limite; numero++) {
       if(numeroPrimo(numero))//3
           console.log(numero);
    }
}

function numeroPrimo(numero){//3
    for(let divisor = 2; divisor < numero; divisor++) {
        if(numero % divisor === 0){
            return false
        }
    }
    return true
}

*/

//(objeto endereco)

//criar um objeto endereco que conte.:
//rua,cidade,CEP,exibirEndereco(endereco)
/*
let endereco = {
    rua:'a',
    cidade:'b',
    cep:'c'
};

function exibirEndereco(endereco){
    for(let chave in endereco)
        console.log(chave,endereco[chave]);
}
exibirEndereco(endereco);
*/


//(igualdade de objetos) uma funcao para ver se tem suas propriedades iguais e outra para ver se tem as mesma referencias na memoria crie um objeto para testa
/*
function Endereco(rua,cidade,cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep;
}

const endereco1 = new Endereco('a','b','c');
const endereco2 = new Endereco('a','b','c');
const endereco3 = endereco1;

function saoIguais(endereco1,endereco2){
   return endereco1.rua === endereco2.rua && endereco1.cidade === endereco2.cidade && endereco1.cep === endereco2.cep;
}

function temEnderecoDeMemoriaIguais(endereco1,endereco2){
    return endereco1 === endereco2;
}

console.log(saoIguais(endereco1,endereco2));
console.log(temEnderecoDeMemoriaIguais(endereco1,endereco2));
*/

//(criar um post com as props titulo,mensagem,autor,visualizacoes,comentario:autor e mensagem),esta ao vivo?sim ou nao
/*
let post = {
    titulo : 'ciber',
    mensagem : 'security',
    visualizacoes : 3,
    comentarios : [
        {autor: 'a',mensagem: 'b'},
        {autor: 'a',mensagem: 'b'}
    ],
    estarAoVivo : false
}

console.log(post);

*/

//(criar um post com as props titulo,mensagem,autor,visualizacoes,comentario:autor e mensagem),esta ao vivo?sim ou nao 'com function construtor'
/*
function Postagem(titulo,mensagem,visualizacoes,comentarios,estarAoVivo){
    this.tituto = titulo,
    this.mensagem = mensagem,
    this.visualizacoes = visualizacoes,
    this.comentarios = comentarios,
    estarAoVivo = estarAoVivo
}

let comentario = [{autor:'gui',mensagem:'muito bom'},
{autor:'marcos',mensagem: 'legal'}]

const minhaPostagem = new Postagem('a','b',3,comentario,true);
console.log(minhaPostagem)
*/

//(crie um array de objetos de faixa de preco para que ela possa ser usada em um site igual o mercado livre)

//primeira opcao
/*
let faixas = [
    {tooltip:'ate R$700', minimo: 0, maximo: 700},
    {tooltip:'de R$700 a R$1000', minimo: 700, maximo: 1000},
    {tooltip:'de R$1000', minimo: 1000, maximo: 999999}
]

//segunda opcao (factory function)
function criarFaixaPreco(tooltip,minimo,maximo){
    return{
        tooltip,
        minimo,
        maximo
    }
}

let faixa2 = [
    criarFaixaPreco('a',1,100),
    criarFaixaPreco('b',100,1000),
    criarFaixaPreco('c',1000,10000),
]

//terceira opcao
function FaixaPreco(tooltip,minimo,maximo){
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

faixa3 = [
    new FaixaPreco('d',10,20),
    new FaixaPreco('e',20,30),
    new FaixaPreco('f',30,40)
]

console.log(faixas);
console.log(faixa2);
console.log(faixa3);

*/



//(igualdade de objetos) uma funcao para ver se tem suas propriedades iguais e outra para ver se tem as mesma referencias na memoria crie um objeto para testa
