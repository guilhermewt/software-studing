

/*tests*/


let a = [
    {altura:1.70,genero:'f'},
    {altura:1.83,genero:'m'},
    {altura:1.54,genero:'m'},
    {altura:1.61,genero:'f'},
    {altura:1.75,genero:'f'},
]


var ordernar = a.sort(function(x,y){
    return x.altura - y.altura
})


var mulhersomaAltura = a.filter(x => x.genero = 'f')
                            .map(x => x.altura)
                            .reduce((x,y) => x + y);

var mulherqtd = a.filter(x => x.genero = 'f').length;      

var mediaMulherAltura = mulhersomaAltura / mulherqtd

console.log('menor altura = ' + ordernar.shift().altura)
console.log('maior altura = ' + ordernar.pop().altura)
console.log('numero de homens = ' + a.filter(x => x.genero = 'm').length)
console.log('media altura das mulheres = ' + mediaMulherAltura.toFixed(2))


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
