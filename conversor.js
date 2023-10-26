let temperatura;
let conversor = '';
let resultado;


function calcular(){
    conversor = document.querySelector("#conversor").value;

    if (conversor == 'Fahrenheit'){
        // resultado = temperatura * 1.8 + 32
        f();
    }

    if (conversor == 'Celsius'){
        c()
    }

}

function f(){
    temperatura = parseInt(document.querySelector('#temperatura').value);
    resultado = temperatura * 1.8 + 32
    // document.querySelector('#resultado').innerHTML = resultado;
    document.querySelector('#txtresultado').value = resultado;
}
function c(){
    temperatura = parseInt(document.querySelector('#temperatura').value);
    resultado = (temperatura - 32)/1.8
    // document.querySelector('#resultado').innerHTML = resultado;
    document.querySelector('#txtresultado').value = resultado;
}

function limpar(){
    document.querySelector('#temperatura').value = '';
    document.querySelector('#conversor').value = '';
}
