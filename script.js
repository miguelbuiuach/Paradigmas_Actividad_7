function Operation(number1, number2) {
    return number1 + number2;
}

console.log(Operation(2,3));

const operacionFlechita = () => {
    value1 = document.getElementById('value1').value;
    value2 = document.getElementById('value2').value;
    operacion = document.getElementById('operacion').value;
    
    var resultado2 = 0;
    if(operacion == 1){
        resultado2 = parseInt(value1) + parseInt(value2);
    }
    if(operacion == 2){
        resultado2 = value1 - value2;
    }
    if(operacion == 3){
        resultado2 = value1 * value2;
    }
    console.log(resultado2);
    document.getElementById('resultado').innerHTML = resultado2;

}

//console.log(operacionFlechita(2, 8));