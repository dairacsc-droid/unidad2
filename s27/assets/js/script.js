console.log("Vamos a empezar la sesión N°27");

let nombre = "Daira"; 

if (nombre.length>7) {
    console.log(`Su nombre es demasiado largo`);
}
else {
    console.log(`Su nombre ${nombre} es pequeño`);
}

let nun1=20;
let nun2=20;

if (nun1>nun2) {
    console.log(`El numero ${nun1} es mayor`);
}else if (nun1<nun2) {
    console.log("El segundo numero es mayor ");
}
else {
    console.log("los numeros son iguales");
}

let semana=8;

switch (semana){
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Lunes");
        break;
    case 3:
        console.log("Martes");
        break;
    case 4:
        console.log("Miércoles");
        break;
    case 5:
        console.log("Jueves");
        break;
    case 6:
        console.log("Viernes");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Valor inválido");
}

let a= Number(prompt("Ingrese un núumero: "));
let b= Number(prompt("Ingrese un núumero: "));

function suma(a,b){
    let resultado=a+b;
    return resultado;
}
resultado= suma(a,b);
console.log("El resultado de la suma es: ", resultado);
