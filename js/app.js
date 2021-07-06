//aparecer valor na tela
// operadores
// realizar o calculo
// calculo decimal
// limpar tela
// prioridade de expressão

let valor1 = '', valor2 = '', operador = '';


function escTela(valor) {
	document.getElementById('tela').innerHTML = valor;

}

function digNum(valor){
	if (!operador) {
		if(valor == '.' && verVir(valor1)){
			valor1 += valor	
		}else if (valor != '.'){
			console.log(valor);
			valor1 += valor
		}
	}
	else{
		if(valor == '.' && verVir(valor2)){
			valor2 += valor	
		}else if (valor != '.'){
			valor2 += valor
		}
	}

	let str = `${valor1} ${operador} ${valor2}`;

		console.log(str)

	escTela(str);
}

function digOp(op){
	operador = op;

	let str = `${valor1} ${operador} ${valor2}`;	

	escTela(str);

}

function resul(){
	if (!valor1 && !valor2 ) return;
	let res
	if (operador == '+'){
		res = parseFloat(valor1) + parseFloat(valor2)

	}else if (operador == '-'){
		res = parseFloat(valor1) - parseFloat(valor2)

	}else if (operador == '*'){
		res = parseFloat(valor1) * parseFloat(valor2)

	}else if (operador == '/'){
		res = parseFloat(valor1) / parseFloat(valor2)
	}


	limpaTela(res)



}

	function verVir (valor){
		if (valor.indexOf('.') != -1){
			return false;
		}else{
			return true;
		}
	}
	
	function limpaTela(valor){

	valor1 = ""

	valor2 = ""

	operador = ""

	escTela(valor);
	}