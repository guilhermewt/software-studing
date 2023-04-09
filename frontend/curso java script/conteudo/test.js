

/*tests*/


/**
 * definir os objetos
 * criar uma lambda para pecorrer calculando e gravando nas variaveis
 * pegar valor total de compra e venda
 * subtrar venda por compra
 */


let a = [
    {nome:'feijao',p_compra: 10.00, p_venda:11.00},
    {nome:'arroz',p_compra: 12.00, p_venda:12.80},
    {nome:'oleo',p_compra: 5.00, p_venda:5.70},
    {nome:'sal',p_compra: 3.00, p_venda:4.00},
    
]

let abaixoDez = 0;
let entreDeze20 = 0;
let acimade20 = 0;

a.forEach(function(x){
  
    calculo = ((x.p_venda - x.p_compra) * 100) / x.p_compra
  
    if(calculo < 10){
        abaixoDez++
    }
    else if(calculo >= 10 && calculo <= 20){
        entreDeze20++
    }
    else{
        acimade20++
    }
})

var total_compra = a.map(x => x.p_compra).reduce((x,y) => x + y)
var total_venda = a.map(x => x.p_venda).reduce((x,y) => x + y)
var lucro_total = total_venda - total_compra

console.log("abaixo de 10: " + abaixoDez)
console.log("entre dez e 20: " + entreDeze20)
console.log("acima de 20: " + acimade20)

console.log("total valor da compra: " + total_compra)
console.log("total valor da compra: " + total_venda.toFixed(2))
console.log("lucro_total: " + lucro_total.toFixed(2))



/*
var firstValue = 6.5
var lastValue = 4.3
var threeValue = 6.2

firstValue = firstValue * 2;
lastValue = lastValue * 3;
threeValue = threeValue * 5;

var media =(firstValue + lastValue + threeValue) / 10
 media = Math.floor(media,-1)
const mostrar = +(media.toFixed(1))
console.log('media = ' + mostrar)
*/

/*

(array)
for(var i = 0; i < A.length; i++) {C[i] = A[i] + B[i];} //acessar pelo indice
C.forEach(x => console.log(x)) //imprimir cada linha

(porcentagem)

(reduce)
executa para cada objeto do array uma funcao "ele é um agregador"
var soma = vetor.reduce((x,y) => x + y)
var soma = vetor.map(x => x.altura).reduce((x,y) => x + y)

(arredondar numero)
const x = 1.3823
const xRounded = +(x.toFixed(2)) //o mais significa converter para numero
console.log(xRounded) // 1.38
console.log(typeof xRounded) // number

(parseFloat(medidaA))
373
(input -> promp(...)),
(combinando array com join/split), =>  list.join('.'), frase.split(' ');
(combinando o array com 'concat:junta e slice:dividir'), => list.concat(otherList);, combinado.slice(1,3);/apartir de 1 e ate 3 corta o ultimo
 

366
(combinando com operador spread) => let combinando = [...array1,'#',...array2]
(iterando um Array) -> listNumbers.forEach((listNumbers,indice) => console.log(listNumbers,indice));
(Arrow Functions -> marcas.find((marcas) => marcas.nome === 'a'))

315 +++__
(Encontrando Elementos do Tipo Referência -> carro.find(function(carro) return carro.id = 2)
(Encontrando Elementos do Tipo Primitivos -> indexof,lastIndexOf'ultimo indice com o number 0',includes)
(Esvaziando um Array -> numeros.lenght = 0,)

312
(Removendo elementos de um Array -> pop=ultimo,shift=primeiro,splice=meio(2,1))
(array - Add Elementos a um Array unshift(0), splice(1,0,'a'),push(4))
(date - date2.toISOString(), const date2 = new Date('March 06 2019 09:30');)

'262'
(templete literal -> ${preco} ``) pode colar contas, variaveis
(typeof mensagem.lenght, mensagem.includes('primeira'), mensagem.replace('minha', 'sua'))
(clonar objetos: 1 - const novoObjecto = Object.assign({}, computador);, 2 - const objeto2 = {...computador};)

'218'
(javascript tem natureza dinamica, posso alterar ou inserir qualquer coisa a qualquer momento)
(Constructor Functions) - |function computador(marcaComputador,...)|  this.computador = marcar,...
(o outro tipo de construtor - function computador(...,...,...) { return{....,....,})

"194"
(for of - for(let cor of colors){ conso...(cor)}) atribui todo o array a variavel cor 'combina com arrays'
(for in - for(let chave in tools ){ console.log(chave,": ", tools[chave]);} é usado mais com objetos chave valor
(1.for 2.while 3.do..while 4,For..In 5.for..of)


*/
