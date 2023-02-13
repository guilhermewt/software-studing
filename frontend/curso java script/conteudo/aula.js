

do{
   var xWeb = prompt()
   var yWeb = prompt()
   var x = parseInt(xWeb)
   var y = parseInt(yWeb)

   if(x == y){
    alert('thanks')
   }
   else if(x < y){
      alert('crescente')
   }
   else{
      alert('decrescente')
   }
}while(x != y)

// let nome = 'rafael';
// let idade = 25;
// let estaAprovado = true;
// let sobrenome = undefined;


// //tipos primitivos: string number boolean,null,undefined
// //o javascript tem tipagem dinamica, ele proprio descobre qual o tipo nao precisa colocar 'String nome', e sim (let nome = 'rafael'), o javascript pode ser mudado a qualquer momento de String para number por exemplo


// //nos vimos tipos valores agora é tipos referencias:
// //objetos,arrays,function

// //objetos sao conjuntos de informacoes colocados em um lugar so
// let pessoa =  {
//     nome: 'rafael',
//     idade: 25,
//     estaAprovado: true,
//     sobrenome: 'de souza'
// };

// console.log(pessoa);

// //arrays: conjunto de dados que podem ser acessados por indice

// let familia = [true,45,'jhonatan', 17];
// console.log('posicao tres do array familia: ' + familia[2]);

// let nomeDoColega = ['moises',40,'Gama-DF'];

// //function: funcao que executa algo, pode receber parametros, ou simplesmente executar outra funcao


// let corSite = "blue";
// function resetaCor(){
//     corSite = null;
// }
// console.log('cor do site: ' + corSite);
// resetaCor();
// console.log('nova cor do site: ' + corSite);

// /*-------------------------*/

// let newCor = "amarelo";
// function colocarOutraCor(cor){
//     newCor = cor;
// }
// console.log('cor do site: ' + newCor);
// colocarOutraCor("vermelho");
// console.log('nova cor do site: ' + newCor);

// /*-------------- */

// let corzita = "preto";
// function concatenarCores(cor,tonalidade){
//     corzita = cor + ' ' + tonalidade;
// }

// console.log('cor do site: ' + corzita);
// concatenarCores("verde", "claro");
// console.log('nova cor do site concatenada: ' + corzita);

// //funcao realizar um tarefa, nao devolve nada
// function dizerNome(){
//     console.log('guilherme');
// }

// //funcao faz calculo e retorna algo

// function multiplarPosDois(valor){
//     return valor * 2;
// }

// console.log(multiplarPosDois(5));

// //aritmeticos

// //+,-,/,*, **exponencial,atribuicao -= +=
// //++ -- incremento
// let old = 18;
// //console.log(++old) = 19
// //console.log(--old) = 17

// //(operadores de igualdade)  
// //(igualdade estrita) -> console.log(1 === 1); = esta comparando o tipo tbm por isso tem tres 'iguais'

// //igualdade solta -> console.log(1 == 1); , console.log('1' == 1); converte e compara, mas nao é recomendavel 

// //***(ternario)**
// //tem um cliente, 100 premium, comum
// let pontos = 200;
// let tipo = pontos > 100 ? 'premium' : 'comum';
// console.log(tipo);

// //***(operadores logicos)***//
// //operador e (&&) retornar TRUE se os dois forem true
// //operador ou (||) retornar TRUE se um dos operadores for true
// // oparador NOT (!)
// console.log(true && false);
// let maiorDeIdade = false;
// let possuiCarteiraDeTrabalho = true;
// let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;
// console.log('pode aplicar = ' + podeAplicar);

// let candidatoRecusado = !podeAplicar;
// console.log('candidato Recusado', candidatoRecusado);

// //(valores nao boolean)

// //falsy: undefined,null,0,false,'',NaN - not a number
// //truthy
// // entre o falsy e truthy ele vai retorna falsy ate que encontre um valor truthy
// let corPersonalizada = '';//se colocar um
// let corPadrao = 'azul';
// let corPerfil = corPersonalizada || corPadrao;

// console.log(corPerfil);

// //(exercicio trocar a de variaveis a para b e b para a)

// //(if/else)

// let hora = 14;
// if(hora >= 6 && hora <= 12){
//     console.log('bom dia');
// }
// else if(hora <= 18){
//     console.log('boa tarde');
// }
// else{
//     console.log('boa noite');
// }

// //(switch case)
// let permissao;// comum,gerente,diretor

// switch(permissao){
//     case 'comum':
//         console.log('usuario comum');
//         break;
//     case 'gerente':
//         console.log('usuario gerente');
//         break;
//     case 'diretor':
//         console.log('usuario diretor');
//         break;
        
//     default:
//         console.log('usuario nao reconhecido');
// }

// //(for 1.for 2.while 3.do..while 4,For..In 5.for..of)

// for(let i = 1; i <= 5; i++){
//   console.log('estou aprendendo', i);
// }

// //while loop
// let i = 5;
// while(i >= 1){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
//     i--;
// }

// //do..while
// console.log('do while')
// let j = 0;
// do {
//     console.log('digitando!',j)
//     j++;
// }while(j < 10)

// //for-in
// console.log('for-in')
// const person = {
//     nome: 'jhonatan',
//     idade: 25
// };

// for(let chave in person){
//     console.log(chave,person['nome']);
// }

// const cores = ['vermelho','Azul','verde'];

// for(let indice in cores){
//     console.log(indice,cores[indice])
// }

// //for-of
// console.log('for-of')
// const colors = ['blue', 'yellow', 'red']
// for(let cor of colors){
//     console.log(cor);
// }

// // FACTORY Functions:praticamente serve como o construtores do java
// function criarCelular(marcaCelular, TamanhoTela, capacidadeBateria){
//     return { 
//            marcaCelular,
//            TamanhoTela,
//            capacidadeBateria,
//            ligar(){
//                console.log("fazendo ligacao...")
//            }
//     }
// }

// console.log('factory functions')
// const celular1 = criarCelular('asus',18,7000);
// console.log(celular1);

// // Constructor Functions

// function Computador(marcaComputador,corComputador,voltsComputador){
//     this.marcaComputador = marcaComputador,
//     this.corComputador = corComputador,
//     this.voltsComputador = voltsComputador,
//     this.ligar = function(){
//         console.log('fazendo ligacao');
//     }
// }

// const computador = new Computador('philco','black',120);
// console.log(computador);

// //natureza dinamica de objetos,a diferenca entre o javascript das outras linguagem é que ele é totalmente dinamico, eu posso alterar ou adicionar ou deletar a qualquer momento como vemos a seguir:
// const mouse = {
//     cor: 'red',
//     marcar: 'dazz'
// }

// mouse.velocidade = 5000;
// mouse.trocarDPI = function(){
//     console.log('mudando DPI')
// }
// delete mouse.velocidade;
// delete mouse.trocarDPI;
// console.log(mouse);

// //clonar objetos

// console.log('clonar objetos')
// const novoObjecto = Object.assign({}, computador);
// //dentro das chaves eu posso colocar novos atributos
// console.log(novoObjecto);

// console.log('outra forma de clonar')
// const objeto2 = {...computador};
// console.log(objeto2)

// //(math) search: javascript math'mozila'

// //string search tambem
 
// /*(no console): 
// typeof mensagem.lenght, mensagem.includes('primeira'), mensagem.replace('minha', 'sua') */

// //(templete literal) search escape

// const frase = 'oi isso é minha mensagem'
// //se quiser colocar algo entre aspas ou colocar maior escado entre entre as linhas voce teria que usar + e concatenar, mas com templete litaral = `` e tambem pode operacoes matematicas ${4+4}, isso fica mais facil

// const emailSemLiteral = 'ola fulan obrigado por se inscrever no canal'; 
// const maluco = 'gabriel';
// const emailComLiteral = `ola fulano ${4+4} ${maluco} obrigado por se 'inscrever' no canal`; //aqui posso usar '' 

// //date
// //date2.toISOString(); forma em que é instanciada no banco
// const date1 = new Date();
// const date2 = new Date('March 06 2019 09:30');
// const date3 = new Date(2019,06,9,30);
// date3.setFullYear(2030);


// //(arrays)

// //Add Elementos a um Array
// const numeros = [1,2,3];
// console.log('Add Elementos a um Array');
// //inicio
// numeros.unshift(0);
// console.log(numeros);
// //meio
// numeros.splice(1,0,'a');//lugar,se vai alterar,o que vai colocar
// console.log(numeros);
// //fim
// numeros.push(4);
// console.log(numeros);

// //Removendo elementos de um Array
// console.log('Removendo elementos de um Array');
// //pop=ultimo,shift=primeiro,splice=meio

// //final
// const mynumbers = [1,2,3,4,5,6];
// const ultimo = mynumbers.pop();
// console.log('remove ultimo:', ultimo);
// console.log(mynumbers);

// //inicio
// const primeiro = mynumbers.shift();
// console.log('remove primeiro',primeiro);
// console.log(mynumbers);

// //meio
// const meio = mynumbers.splice(2,1);//indice 2,quantos remove? 1
// console.log('remove meio', meio);
// console.log(mynumbers);

// //Esvaziando um Array
// console.log('Esvaziando um Array');

// let numeros3 = [1,2,3,4,5,6,];
// let numeros4 = numeros;

// //solucao 1
// // numeros = []
// // console.log(outros)
// // ** ele nao apaga as referencias

// //solucao 2
// //numeros.lenght = 0;
// //console.log(numeros);
// //console.log(outros);
// // ** aqui apagar tudo é um dos jeitos mais recomendavel

// //solucao 3
// //numeros.plice(0,numeros.lenght);
// //console.log(numeros);
// //console.log(outros);
// //**apaga todos tbm */

// //soluco 4
// //while(numeros.lenght > 0)
// //    numeros.pop();
// //console.log(numeros);
// //console.log(outros);
// // *usa muito processamento

// //Encontrando Elementos do Tipo Primitivos
// const numbers = [8,3,9,1];
// console.log('Encontrando Elementos do Tipo Primitivos');
// console.log(numbers.indexOf(1));
// console.log(numbers.lastIndexOf(9));
// console.log(numbers.includes(3)); // vai return true ou false

// //Encontrando Elementos do Tipo Referência search: find array javascript
// console.log('Encontrando Elementos do Tipo Referência');

// const marcas = [
//     {id:1, nome: 'a'},
//     {id:2, nome: 'b'}
// ];

// const findMarca = marcas.find(function(marcas) {
//     return marcas.nome === 'a';
// });

// console.log(findMarca);

// //Arrow Functions
// console.log('Arrow Functions');

// console.log(marcas.find((marcas) => marcas.nome === 'a')); // sem o function se apenas houver um parametro,se apenas uma busca, pode se ate com o parentes vazio se houver parametro



// //(combinando o array)
// console.log('combinando array');

// const first = [1,2,3];
// const last = [4,5,6];
// //combinar
// let combinado = first.concat(last);
// console.log(combinado);
// //dividir
// const cortado = combinado.slice(1,3);
// console.log(cortado);

// //(operador spread)
// console.log('operador spread');

// //let combindo = first.concat(last);
// combinado = [...first,'#',...last];
// console.log(combinado);
// const clonando = [...combinado];
// console.log(clonando);

// //(iterando um Array)
// console.log('iterando um array');
// let listNumbers = [1,2,3,4,5];
// //forEach
// listNumbers.forEach((listNumbers,indice) => console.log(listNumbers,indice));

// //(combinando array com join/split)
// console.log('combinando array com join/split');
// listNumbers = [1,2,3,4,5];
// let numberscombinado = listNumbers.join('.');//junta e adiciona entre os arrays
// console.log(numberscombinado);

// let myfrase = "ola bem vindo ao curso";
// const resultado = myfrase.split(' ');//a cada espaco colocar dentro de um array
// console.log(resultado);
// console.log(resultado.join('-'));

// //(input)
// console.log('input')

// let suadade = prompt('qual sua idade');
// if(suadade < 18)
//    alert('de menor');
// else{
//     alert('ok');
// }   

// //(Dom)
// /*
// * FORMAS DE PEGAR ELEMENTOS E ALTERAR NA PAGINA

// - document.getElementById('comment').innerText= 'very good man';

// - document.getElementById('comment').innerHTML= 'very good man';

// -document.getElementsByClassName('m9osqain a5q79mjw gy2v8mqq jm1wdb64 k4urcfbm qv66sw1b').innerHTML = 'javascript'

// - document.getElementsByClassName('telegram')[0].innerText = 'javascript';

// - document.getElementsByName('author')[0].value = 'gui';



// */
// //stop in 1:46 min project
// //variaveis, constantes, tipos primitivos, tipagem dinamica, objetos, arrays,function simples e que retorna algo,
// //operadores(aritmeticos, atribuicao, comparacao, logicos, bitwise)
