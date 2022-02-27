// ---------------------------------- variables ---------------------------     



// cartas 

function Carta(numero, simbolo, peso, img) {
    this.numero = numero; 
    this.simbolo = simbolo; 
    this.peso = peso; 
}

const macho = new Carta(1,"espada",13);
const hembra = new Carta(1,"basto",12);
const sieteFuerteE = new Carta(7,"espada",11);
const sieteFuerteO = new Carta(7,"oro",10);
const tresE = new Carta(3,"espada",9);
const tresB = new Carta(3,"basto",9);
const tresO = new Carta(3,"oro",9);
const tresC = new Carta(3,"copa",9);
const dosE = new Carta(2,"espada",8);
const dosB = new Carta(2,"basto",8);
const dosO = new Carta(2,"oro",8);
const dosC = new Carta(2,"copa",8);
const falsoO = new Carta(1,"oro",7);
const falsoC = new Carta(1,"copa",7);
const doceE = new Carta(12,"espada",6);
const doceB = new Carta(12,"basto",6);
const doceO = new Carta(12,"oro",6);
const doceC = new Carta(12,"copa",6);
const onceE = new Carta(11,"espada",5);
const onceB = new Carta(11,"basto",5);
const onceO = new Carta(11,"oro",5);
const onceC = new Carta(11,"copa",5);
const sieteFalsoB = new Carta(7,"basto",4);
const sieteFalsoC = new Carta(7,"copa",4);
const seisE = new Carta(6,"espada",3);
const seisB = new Carta(6,"basto",3);
const seisO = new Carta(6,"oro",3);
const seisC = new Carta(6,"copa",3);
const cincoE = new Carta(5,"espada",2);
const cincoB = new Carta(5,"basto",2);
const cincoO = new Carta(5,"oro",2);
const cincoC = new Carta(5,"copa",2);
const cuatroE = new Carta(4,"espada",1);
const cuatroB = new Carta(4,"basto",1);
const cuatroO = new Carta(4,"oro",1);
const cuatroC = new Carta(4,"copa",1);

let allCards = [macho,hembra,sieteFuerteE,sieteFuerteO,tresE,tresB,tresO,tresC,dosE,dosB,dosO,dosC,falsoO,falsoC,doceE,doceB,doceO,doceC,onceE,onceB,onceO,onceC,sieteFalsoB,sieteFalsoC,seisE,
    seisB,seisO,seisC,cincoE,cincoB,cincoO,cincoC,cuatroE,cuatroB,cuatroO,cuatroC];




   






// ---------------------------------------    eventos --------------------------------


// ------------------------------------------- funciones --------------------------------  

function mezclarCartas(arrayDeCartas) {
   
    let elegirCarta1 = arrayDeCartas[Math.floor(Math.random() * arrayDeCartas.length)];
    let elegirCarta2 = arrayDeCartas[Math.floor(Math.random() * arrayDeCartas.length)];
    let elegirCarta3 = arrayDeCartas[Math.floor(Math.random() * arrayDeCartas.length)];
    document.querySelector(".b1").innerHTML = elegirCarta1.simbolo;
    document.querySelector(".c1").innerHTML =  elegirCarta1.numero;
    document.querySelector(".b2").innerHTML = elegirCarta2.simbolo;
    document.querySelector(".c2").innerHTML =  elegirCarta2.numero;
    document.querySelector(".b3").innerHTML = elegirCarta3.simbolo;
    document.querySelector(".c3").innerHTML =  elegirCarta3.numero;
    }

function comparacionDeCarta (carta1, carta2) {
    if (carta1.peso > carta2.peso) {
        return "el jugador " + jugador1 + "gana";
    }
    if (carta1.peso < carta2.peso) {
        return "el jugador" + jugador2 + "gana";
    }
    if (carta1.peso == carta2.peso) {
        return "ronda empatada";
    }
}





// cantos de truco 
let jugadorCanta = 0;
function cantoTruco (respuesta) {
    if (respuesta === "Quiero") {
        return true;
    } else {
        "Termina la ronda, gana" + jugadorCanta;
    }
}
function cantoReTruco (jugadorCanta, respuesta) {
    if (respuesta === "Quiero") {
        return true;
    } else {
        "Termina la ronda, gana" + jugadorCanta;
    }
}
function cantoVale4 (jugadorCanta, respuesta) {
    if (respuesta === "Quiero") {
        return true;
    } else {
        "Termina la ronda, gana" + jugadorCanta;
    }
}

// nivel de canto de truco 


let nivelTruco = 0; 

if (cantoTruco() === true) {
    let nivelTruco = 1;
}
if (cantoReTruco() === true) {
    let nivelTruco = 2;
}
if (cantoVale4() === true) {
    let nivelTruco = 3;
} 







// console.log({
//     numero: elegirCarta.numero,
//     simbolo: elegirCarta.simbolo
//   })
  
 

