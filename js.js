let monto = parseInt(prompt("Ingrese un monto:"));
let cuotas = parseInt(prompt("Ingrese una cuota de 3, 6 ,12 o 18:"));


function calculadora () {
    return monto / cuotas;
}

if (cuotas === 3){
    alert("El precio de " + "$" + calculadora() +" por cuota.")
}else if (cuotas === 6){
    alert("El precio de " + "$" + calculadora() +" por cuota.")
}else if (cuotas === 12){
    alert("El precio de " + "$" + calculadora() +" por cuota.")
}else if (cuotas === 18){
    alert("El precio de " + "$" + calculadora() +" por cuota.")
}else{
    while (cuotas < 3 || cuotas >18){
        alert("No ingresó un numero valido.")

        cuotas = parseInt(prompt("Ingrese una cuota de 3, 6 ,12 o 18:"));
    }
}
