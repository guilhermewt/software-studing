

/*tests*/

var rabbitsTotal = 0
var frogTotal = 0
var mouseTotal = 0

let testNumber = prompt('Quantos casos de teste serao digitados?')

for(var i = 1; i<=testNumber; i++){
    var quantityGuiniaPig = prompt('Quantidade de cobaias: ')
    var typeGuiniaPig = prompt('Tipo de cobaia: ')
    quantityGuiniaPig = parseInt(quantityGuiniaPig)    

    if(typeGuiniaPig == 'c'){
        
        rabbitsTotal += quantityGuiniaPig
    }
    else if(typeGuiniaPig == 'r'){
         mouseTotal += quantityGuiniaPig   
    }
    else{
        frogTotal += quantityGuiniaPig
    }

}




var total = rabbitsTotal + frogTotal + mouseTotal;

var rabbitsPercent = rabbitsTotal / total * 100
var frogPercent = frogTotal / total * 100
var mousePercent = mouseTotal / total * 100

rabbitsPercent = +(rabbitsPercent.toFixed(2))
frogPercent = +(frogPercent.toFixed(2))
mousePercent = +(mousePercent.toFixed(2))

console.log('rabbits: ' + rabbitsPercent)
console.log('mouse: ' + mousePercent)
console.log('frog: ' + frogPercent)

//experiencias coelhos / total * 100

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
