// 12 - Fazer um simulador de rolagem de dados, que receba como input N dados e N lados e quantidade de tentativas e mostre as rolagens individuais e a soma dos valores?

// Entradas:

// Quantidade de dados: 3
// Quantidade de lados: 9
// Quantidade de tentativas: 3
// Quebrar ele em funções

function simulador(qtdDados, qtdLados) {
    const tentativas = 3;
    let rolagensIndividuais = [];
    let count = 1;

    while (count <= tentativas){
    let totalDados = 0;
    console.log(`Tentativa ${count}`);
    console.log("******Rolagens Individuais: ******");

    for( let i = 1; i <= qtdDados; i++) {
        let dado = Math.floor(Math.random() * qtdLados) + 1;
        rolagensIndividuais.push(dado);
        totalDados += dado;
        console.log(`Dado ${i} : ${dado}`);
    }
    count++;
    return (totalDados);
    }
}

let resultado = simulador(2,6);
console.log (resultado);


//////////////////////////////////////////////////////////////Desafio 01 a 03/////////////////////////////////////////////////
//01 - Crie uma função que recebe dois números e um operador (+, -, *, /) como parâmetros e retorna o resultado da operação.

function soma(numero1, numero2){
    return numero1 + numero2;
}

function subtracao(numero1, numero2){
    return numero1 - numero2;
}
  
function multiplicacao(numero1, numero2) {
    return numero1 * numero2;
}
  
function divisao(numero1, numero2) {
    return numero1 / numero2;
}
  
function calculadora(numero1, numero2, operador){

    if ( operador === '+'){
        return soma(numero1, numero2)
    }
    if ( operador === '-'){
        return subtracao(numero1, numero2)
    }
    if ( operador === '*'){
        return multiplicacao(numero1, numero2)
    }
    if ( operador === '/'){
        return divisao(numero1, numero2)
    }
}
  console.log(calculadora(20, 2, "+"))
  console.log(calculadora(20, 2, "-"))
  console.log(calculadora(20, 2, "*"))
  console.log(calculadora(20, 2, "/"))



// 02- Crie uma aplicação que simula operações bancárias simples, como depósito, saque e consulta de saldo. Utilize funções para realizar essas operações e um loop para permitir que o usuário execute várias transações.

let saldo = 6000;
let stop = false;

function depositar() {
    const valorDeposito = Number(prompt('Digite o valor do deposito: '));
    saldo += valorDeposito;
    alert (`O valor R$ ${valorDeposito.toFixed(2).replace(".",",")} foi depositado com sucesso!`);
}

function sacar() {
    const valorSaque = Number(prompt("Digite o valor do saque: "));
    if(valorSaque > saldo) {
        alert("Seu saldo é insuficiente! Operação não realizada.");
    } else {
        saldo -= valorSaque
        alert(`Saque de R$ ${valorSaque.toFixed(2).replace(".",",")} efetuado com sucesso!`);
    }
}

function consultarSaldo() {
    alert(`O seu saldo atual é de R$ ${saldo}!`);
}

while (stop == false) {
    let opcao = Number(
        prompt(`Escolha a opção desejada:
      1 - Deposito
      2 - Saque
      3 - Saldo
      4 - Sair`)
    );

    switch (opcao) {
        case 1:
            depositar();
            break;
        case 2:
            sacar();
            break;
        case 3:
            consultarSaldo();
            break;
        case 4:
            alert('Você saiu do sistema! Obrigado(a)');
            stop = true;
            break;
        default:
            alert('Opção inválida! Digite uma opção válida');
            break;
    }
}


// 03- Jogo da Velha: implemente o clássico jogo da velha em JavaScript. Permita que dois jogadores se alternem para fazer suas jogadas e determine o vencedor.

function mostraTabuleiro(valor) {
	let valorStr = '';
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			valorStr += valor[i][j] + '   ';
		}
		valorStr += '\n';
	}
	alert(valorStr);
}

function verificaVencedor(valor, jogador) {
	for (let i = 0; i < 3; i++) {
		if (
			(valor[i][0] === jogador && valor[i][1] === jogador && valor[i][2] === jogador) || // linha
			(valor[0][i] === jogador && valor[1][i] === jogador && valor[2][i] === jogador) // coluna
		) {
			return true;
		}
	}

	if (
		(valor[0][0] === jogador && valor[1][1] === jogador && valor[2][2] === jogador) ||
		(valor[0][2] === jogador && valor[1][1] === jogador && valor[2][0] === jogador)
	) {
		return true;
	}

	return false;
}

function jogar() {
	const valor = [
		['1', '2', '3'],
		['4', '5', '6'],
		['7', '8', '9'],
	];

	let jogadorAtual = 'X';

	while (true) {
		mostraTabuleiro(valor);

		const escolha = prompt(`Jogador ${jogadorAtual}, informe um número de 1 a 9: `);

		if (isNaN(escolha) || escolha < 1 || escolha > 9) {
			alert('Escolha inválida. Tente novamente.');
			continue;
		}

		let linha = Math.floor((escolha - 1) / 3);
		let coluna = (escolha - 1) % 3;

		if (valor[linha][coluna] === 'X' || valor[linha][coluna] === 'O') {
			alert('Posição ocupada. Tente novamente.');
			continue;
		}

		valor[linha][coluna] = jogadorAtual;

		if (verificaVencedor(valor, jogadorAtual)) {
			mostraTabuleiro(valor);
			alert(`Parabéns! O jogador ${jogadorAtual} venceu.`);
			break;
		}
		jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
	}
}

jogar();

        


//alert inves de mostrar tab no console log, jogar no alert

///////////////////////////////////////////////////////////LÓGICA 01 E 02//////////////////////////////////////////////////////
// 01 - Dados cinco números inteiros positivos, encontre os valores mínimo e máximo que podem ser calculados somando exatamente quatro dos cinco números inteiros. Em seguida, imprima os respectivos valores mínimo e máximo como uma única linha de dois inteiros longos separados por espaço.

// Exemplo: 

// arr - [1,3,5,6,9]

// a soma minima é: 1 + 3 + 5 + 7 = 16
// a soma maxima é: 3 + 5 + 7 + 9 = 24

// Saida: [16,24]


// Teste: 

// arr = [5,1,6,3,9] => Saida => [15, 23]
// arr = [9,3,3,5,8] => Saida => [19, 25]

const lista = [ 5, 1, 6, 3, 9]
const lista2 = [9, 3, 3, 5, 8]

function somaArrayMinMax(array) {
  array.sort((a, b) => a - b)
  const minSoma = array.slice(0, array.length - 1).reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)
  const maxSoma = array.slice(1).reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)
  return [minSoma, maxSoma]
}

console.log(somaArrayMinMax(lista))



//02 - Detalhe da escada: Esta é uma escada de tamanho n=4
// sua base e altura são iguais a n. É desenhado usando # símbolos e espaços. A última linha não é precedida por nenhum espaço. Escreva um programa que imprima uma escada do tamanho.


function desenharEscada(n) {
    for (let count = 1; count <= n; count++) {
        let espacos = '';
        let degraus = '';

        for (let espaco = 1; espaco <= n - count; espaco++) {
            espacos += ' ';
        }

        for (let degrau = 1; degrau <= count; degrau++) {
            degraus += '#';
        }
        console.log(espacos + degraus);
    }
}
desenharEscada(5);



//****************************************************EXERCÍCIOS COM TRY CATCH************************************************************************/

//FUNÇÃO DOS OPERADORES MATEMÁTICOS 
function soma(numero1, numero2){
    return numero1 + numero2;
}

function subtracao(numero1, numero2){
    return numero1 - numero2;
}

function multiplicacao(numero1, numero2) {
    return numero1 * numero2;
}

function divisao(numero1, numero2) {
    return numero1 / numero2;
}

    function calculadora(numero1, numero2, operador){
    try {
    if ( operador === '+'){
        return soma(numero1, numero2)
    }
    if ( operador === '-'){
        return subtracao(numero1, numero2)
    }
    if ( operador === '*'){
        return multiplicacao(numero1, numero2)
    }
    if ( operador === '/'){
        return divisao(numero1, numero2)
    }
    } catch (error) {
    console.log('nao foi possivel realizar', error)
    }
}
  console.log(calculadora(20, 2, "+"))
  console.log(calculadora(20, 2, "-"))
  console.log(calculadora(20, 2, ""))
  console.log(calculadora(20, 2, "/"))
  

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //FUNÇÃO DAS TRANSAÇÕES BANCÁRIAS 

let saldo = 10;

function deposito(valor) {
    if(valor > 0 && typeof(valor) === 'number') {
        saldo += valor;
        console.log(`deposito de R$${valor} realizado`);
    } else {
        throw new Error('Não é possivel realizar um deposito. Tente novamente!')
    }
}

function saque(valor) {
  if (valor <= saldo) {
    saldo -= valor;
    console.log(`saque de R$${valor} realizado`);
  } else {
    throw new Error('Saldo insuficiente, operação nao realizada')
  }
}

function consultarSaldo() {
  console.log(`seu saldo atual é de R$${saldo}`);
}

let pare = true

while (pare) {
  let operacao = prompt('escolha a operação desejada: 1 - depósito 2 - saque 3 - consultar Saldo 4 - sair');
  

  try {
      switch (operacao) {
        case '1':
          let valorDeposito = parseFloat(prompt('digite o valor do deposito:'));
          deposito(valorDeposito);
          break;

        case '2':
          let valorSaque = parseFloat(prompt('digite o valor do saque:'));
          saque(valorSaque);
          break;

        case '3':
          consultarSaldo();
          break;

        case '4':
          break;

        default:
          console.log('selecione uma opção valida');
          break;
      }
  } catch (error) {
    console.log(error)
  } finally {
    operacao = null
    pare = false
  }

  if (operacao === '4') {
    break;
  }
}
