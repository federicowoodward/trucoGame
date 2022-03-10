// ---------------------------------- variables ---------------------------     


let boton = document.getElementById("btnEvento"); 

let botonC1 = document.getElementById("btnCarta1");
let botonC2 = document.getElementById("btnCarta2");
let botonC3 = document.getElementById("btnCarta3");

let pcCards = [];

let playerCards = [];

let mesaDeJuego = [];

let mesaDeJuegoPc = [];      /* temporal hasta crear IA*/ function temporal() {pcCards.length == 3 && mesaDeJuegoPc.push(pcCards[0],pcCards[1],pcCards[2]); }

let nameTagTab = document.getElementById("nameTagTab");
let bienvenidoName = document.getElementById("bienvenidoName");

let puntosPlayer = document.getElementById("puntosPlayer");
let puntosPc = document.getElementById("puntosPc");




// ---------------------------------------    eventos --------------------------------
boton.addEventListener("click", startGame);

botonC1.addEventListener("click",jugada1);
botonC2.addEventListener("click",jugada2);
botonC3.addEventListener("click",jugada3);



boton.addEventListener("click",() => { document.getElementById("btnEvento").style.display = "none";})


//  ------------------------- pedir nombre ------------------

const init = ()=> { 
    if (localStorage.getItem("nameTag") == null) {
    Swal.fire({
        title: 'Bienvenido!',
        text: 'Cual es tu nombre?',
        input: 'text',
        inputPlaceholder: "Nombre",
        confirmButtonText: 'Confirmar',
        showLoaderOnConfirm: true,
        
        inputValidator: (value) => {
            if (!value) {
              return 'Necesitamos tu nombre!'
            } else if (value) {
                localStorage.setItem("nameTag", value);
                nameTagTab.innerHTML = localStorage.getItem("nameTag");
                bienvenidoName.innerHTML = "Bienvenido " + localStorage.getItem("nameTag") + "!!";
            }
        }
    }
    )
} else {
    console.log("nombre ya ingresado");
};
}

document.addEventListener("DOMContentLoaded", init);

// ------------------------------------------- funciones --------------------------------  

function startGame () {
    mezclarCartas(allCards);
}

function mezclarCartas(array) {
    
    let carta1 = array[Math.floor(Math.random() * array.length)];   //me da una carta random.
    if (carta1.random === true) {                                   //comprueba q la carta no haya sido ya elegida.                
        mezclarCartas(allCards);                                    //si ya se elijio reejecuta.
    } else if (carta1.random === false) {                           //comprueba q la carta no haya sido ya elegida. 
        carta1.random = true;                                       //avisa q la carta fue elegida.                           
        document.querySelector(".b1").innerHTML = carta1.simbolo;   // muestra carta.
        document.querySelector(".c1").innerHTML = carta1.numero;    // muestra carta.
        playerCards.push(carta1);                                   // añade la nueva carta al array del jugador.
    }  

    // repetir para dos cartas mas. 

    let carta2 = array[Math.floor(Math.random() * array.length)];
    if (carta2.random === true) {
        mezclarCartas(allCards);
    } else if (carta2.random === false) {
        carta2.random = true;
        document.querySelector(".b2").innerHTML = carta2.simbolo;
        document.querySelector(".c2").innerHTML = carta2.numero;
        playerCards.push(carta2);  
    }

    let carta3 = array[Math.floor(Math.random() * array.length)];
    if (carta3.random === true) {
        mezclarCartas(allCards);
    } else if (carta3.random === false) {
        carta3.random = true;
        document.querySelector(".b3").innerHTML = carta3.simbolo;
        document.querySelector(".c3").innerHTML = carta3.numero;
        playerCards.push(carta3);  
    }
    
    // ahora vamos a darle cartas a la pc.

    let cartaPc1 = array[Math.floor(Math.random() * array.length)];
    if (cartaPc1.random === true) {
        mezclarCartas(allCards);
    } else if (cartaPc1.random === false) {
        cartaPc1.random = true;
        pcCards.push(cartaPc1);
    }

    let cartaPc2 = array[Math.floor(Math.random() * array.length)];
    if (cartaPc2.random === true) {
        mezclarCartas(allCards);
    } else if (cartaPc2.random === false) {
        cartaPc2.random = true;
        pcCards.push(cartaPc2);
    }

    let cartaPc3 = array[Math.floor(Math.random() * array.length)];
    if (cartaPc3.random === true) {
        mezclarCartas(allCards);
    } else if (cartaPc3.random === false) {
        cartaPc3.random = true;
        pcCards.push(cartaPc3);
    }

    console.log(pcCards);
    temporal();
    
}
    const jugada1 = () => { 
        mesaDeJuego.push(playerCards[0]);
        endGame();
    }
    const jugada2 = () => { 
        mesaDeJuego.push(playerCards[1]);
        endGame();
    }
    const jugada3 = () => { 
        mesaDeJuego.push(playerCards[2]);
        endGame();
    }
    
    function endGame() {
        mesaDeJuego.length === 3 ? document.getElementById("botones123").style.display = "none" : null ;

    }

 let cantidad = mesaDeJuego.length;

 function comparacionDeCarta(mesaDeJuego, mesaDeJuegoPc) {
    
    if (cantidad == 1) {
        if (mesaDeJuego[0].peso > mesaDeJuegoPc[0].peso) {
            let ganadorR1 = "player";
            console.log(ganadorR1);
        } else if (mesaDeJuego[0].peso < mesaDeJuegoPc[0].peso) {
            let ganadorR1 = "Pc";
            console.log("1113")
        } else if (mesaDeJuego[0].peso == mesaDeJuegoPc[0].peso) {
            let ganadorR1 = "empate";
            console.log("1112")
        }   
    }
}
    //tabla 








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
  
 
/*
function mezclarCartas(arrayDeCartas) {
   
    let elegirCarta1 = arrayDeCartas[Math.floor(Math.random() * arrayDeCartas.length)];
    let elegirCarta2 = arrayDeCartas[Math.floor(Math.random() * arrayDeCartas.length)];
    let elegirCarta3 = arrayDeCartas[Math.floor(Math.random() * arrayDeCartas.length)];
    document.querySelector(".b1").innerHTML = elegirCarta1.simbolo;
    document.querySelector(".c1").innerHTML = elegirCarta1.numero;
    document.querySelector(".b2").innerHTML = elegirCarta2.simbolo;
    document.querySelector(".c2").innerHTML = elegirCarta2.numero;
    document.querySelector(".b3").innerHTML = elegirCarta3.simbolo;
    document.querySelector(".c3").innerHTML = elegirCarta3.numero;
    }
*/

