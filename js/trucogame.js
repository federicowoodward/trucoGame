// ---------------------------------- variables ---------------------------     


let boton = document.getElementById("btnEvento"); 

let botonC1 = document.getElementById("btnCarta1");
let botonC2 = document.getElementById("btnCarta2");
let botonC3 = document.getElementById("btnCarta3");

let pcCards = [];

let playerCards = [];

let mesaDeJuego = [];

let mesaDeJuegoPc = [];      /* temporal hasta crear IA*/ function temporal() {pcCards.length == 3 && mesaDeJuegoPc.push(pcCards[0],pcCards[1],pcCards[2]); mesaDeJuegoPc.sort(function () {return Math.random() - 0.5}); }

let nameTagTab = document.getElementById("nameTagTab");
let bienvenidoName = document.getElementById("bienvenidoName");

let puntosJuego = 0;

let puntosJuegoPc = 0;

let t = document.getElementById("t");
let rt = document.getElementById("rt");
let vc = document.getElementById("vc");
let e = document.getElementById("e");
let de = document.getElementById("de");
let re = document.getElementById("re");
let fe = document.getElementById("fe");

let cantosPc = [true,false,true,false,true,false]; cantosPc.sort(function() {return Math.random() - 0.5});

let puntosEnvidoPlayer = 0; 

let puntosEnvidoPc = 0;
// ---------------------------------------    eventos --------------------------------
boton.addEventListener("click", startGame);

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
                bienvenidoName.innerHTML = `"Bienvenido " +  ${localStorage.getItem("nameTag")} +  "!!"`;
            }
        }
    }
    )
} else {
    nameTagTab.innerHTML = localStorage.getItem("nameTag");
    bienvenidoName.innerHTML = `"Bienvenido " +  ${localStorage.getItem("nameTag")} +  "!!"`;
};
}

document.addEventListener("DOMContentLoaded", init);

// ------------------------------------------- funciones --------------------------------  

function startGame () {
    mezclarCartas(allCards);
    mostrar();
}

mostrar = () => {
    let cartasUsuario = document.getElementById("cartasUsuario");
    let cantos = document.getElementById("cantos");
    let bienvenida = document.getElementById ("guia");
    let bienvenidaN = document.getElementById("bienvenidoName");
    cartasUsuario.style = "display: flex; flex-direction: row; justify-content: space-between;";
    cantos.style.display = "inline";
    bienvenida.style = "display: none;";
    bienvenidaN.style = "display: none;";
}
   

function mezclarCartas(array) {
    if (playerCards.length <3) {
    let carta1 = array[Math.floor(Math.random() * array.length)];   //me da una carta random.
    if (carta1.random === true) {                                   //comprueba q la carta no haya sido ya elegida.                
        mezclarCartas(allCards);                                   //si ya se elijio reejecuta.
    } else if (carta1.random === false) {                           //comprueba q la carta no haya sido ya elegida. 
        carta1.random = true;                                       //avisa q la carta fue elegida.                           
        document.querySelector(".b1").innerHTML = carta1.simbolo;   // muestra carta.
        document.querySelector(".c1").innerHTML = carta1.numero;    // muestra carta.
        playerCards.push(carta1);                                   // añade la nueva carta al array del jugador.
    }  

    // repetir para dos cartas mas. 

    let carta2 = array[Math.floor(Math.random() * array.length)];
    if (carta2.random === true) {
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
    }
    // ahora vamos a darle cartas a la pc.
    if (pcCards.length <3) {

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
    }
    console.log(pcCards);
    console.log(playerCards);
    temporal();
    if (playerCards.length == 3 ) {mostrarBotones123();} else {ocultarBotones123()}
}   

    const mostrarBotones123 = () => {
        document.getElementById("botones123").style.cssText = "display: flex;";
        document.getElementById("btnCarta1").style.display = "flex";
        document.getElementById("btnCarta2").style.display = "flex";
        document.getElementById("btnCarta3").style.display = "flex";
    }
    const ocultarBotones123 = () => {
        document.getElementById("botones123").style.cssText = "display: none;";
    }

    const jugada1 = () => { 
        document.getElementById("btnCarta1").style.display = "none";
        comparacionDeCarta(playerCards[0],mesaDeJuegoPc[0]);
    }
    const jugada2 = () => { 
        document.getElementById("btnCarta2").style.display = "none";
        comparacionDeCarta(playerCards[1],mesaDeJuegoPc[1]);
    }
    const jugada3 = () => { 
        document.getElementById("btnCarta3").style.display = "none";
        comparacionDeCarta(playerCards[2],mesaDeJuegoPc[2]);
    }
    botonC1.addEventListener("click",jugada1);
    botonC2.addEventListener("click",jugada2);
    botonC3.addEventListener("click",jugada3);

let ronda = [];

 function comparacionDeCarta(playerCard, pcCard) { 
    if (playerCard.peso == pcCard.peso) {
         Swal.fire("Parda","Ganador de la proxima jugada gana la ronda");
         ronda.push("p")
        } else if (playerCard.peso > pcCard.peso) {
            ronda.push(true);
            
            } else if (playerCard.peso < pcCard.peso) {
                ronda.push(false);
                } 
    if (ronda.length == 3) {comparacionDeRonda()};
 }   
 const comparacionDeRonda = () => {3
        ronda[0] && ronda[1] && true ? finRondaGanando() : 
        ronda[0] && ronda[2] && true ? finRondaGanando() :
        !ronda[0] && ronda[1]  && ronda[2] ? finRondaGanando() :
        !ronda[0] && !ronda[1] && true ? finRondaPerdiendo() : 
        !ronda[0] && !ronda[2] && true ? finRondaPerdiendo() : 
        ronda[0] && !ronda[1] && !ronda[2] ? finRondaPerdiendo() :
        ronda[0] == "p" && ronda[1] && true ? finRondaGanando() : 
        ronda[0] == "p" && !ronda[1] && true ? finRondaPerdiendo() :
        ronda[0] && ronda[1] == "p" && true ? finRondaGanando() :
        !ronda[0] && ronda[1] == "p" && true ? finRondaPerdiendo() :
        ronda[0] == "p" && ronda[0] == "p" && ronda[2] ? finRondaGanando() :
        ronda[0] == "p" && ronda[0] == "p" && !ronda[2] ? finRondaPerdiendo() :
        ronda[0] == "p" && ronda[0] == "p" && ronda[0] == "p" ? tripleEmpate(): null;
 }


const finRondaGanando = () => {
    mezclarCartas(allCards);
    Swal.fire('Ganaste! siguiente ronda!','success',);
    sumarTablaPlayer();
} 
const finRondaPerdiendo = () => {
    mezclarCartas(allCards);
    Swal.fire('Perdiste! siguiente ronda!','success',);
    sumarTablaPc();
} 
const tripleEmpate  = () => {
    mezclarCartas(allCards);
    Swal.fire("Las tres rondas se empataron, vuelve a empezar y nadie gana puntos");
}


//  truco 
let truco = false;
let reTruco = false;
let vale4 = false;
// ocultacion de botones a medida q se van usamdo, NO TOCAR ANDA PERFECTO
document.getElementById("rt").style.display = "none";
document.getElementById("vc").style.display = "none";

const trucoPorPc = () => {
    cantoTruco(true);
    document.getElementById("t").style.display = "none";
    document.getElementById("rt").style.display = "inline";
    truco = true;
}
const reTrucoPorPc = () => {
    cantoReTruco(true);
    document.getElementById("rt").style.display = "none";
    document.getElementById("vc").style.display = "inline";
    reTruco = true;
}
const vale4PorPc = () => {
    cantoVale4(true);
    document.getElementById("vc").style.display = "none";
    vale4 = true;
}

let trucoLevel = 1;

    function cantoTruco (respuestaPc) {
    if (respuestaPc == true) { Swal.fire("Truco cantado!"); trucoLevel = 2;
        } else { Swal.fire("Termina la ronda");
    finRondaGanando()};
    }
    function cantoReTruco (respuestaPc) {
        if (respuestaPc == true) { Swal.fire("Retruco cantado"); trucoLevel = 3;
            } else { Swal.fire("Termina la ronda");
            finRondaGanando();};
        }
    function cantoVale4 (respuestaPc) {
        if (respuestaPc == true) { Swal.fire("Vale cuatro cantado"); trucoLevel = 4;
            } else { Swal.fire("Termina la ronda");
            finRondaGanando()};
        }

 t.addEventListener("click", trucoPorPc);
 rt.addEventListener("click", reTrucoPorPc);
 vc.addEventListener("click", vale4PorPc);

// envido, botones funcionando

document.getElementById("de").style.display = "none";
document.getElementById("re").style.display = "none";
document.getElementById("fe").style.display = "none";

const envidoPc = () => {
    document.getElementById("e").style.display = "none";
    document.getElementById("de").style.display = "inline";
    calcularEnvido(1);
}
const dobleEnvidoPc = () => {
    document.getElementById("de").style.display = "none";
    document.getElementById("re").style.display = "inline";
    calcularEnvido(2);
}
const realEnvido = () => {
    document.getElementById("re").style.display = "none";
    document.getElementById("fe").style.display = "inline";
    calcularEnvido(3);
}
const  faltaEnvido = () => {
    document.getElementById("fe").style.display = "none";
    calcularEnvido(4);
}
    
let envidoLevel = 0;

const calcularEnvido = (envidoCantado) => {
    
    playerCards[0].simbolo == playerCards[1].simbolo ? puntosEnvidoPlayer = playerCards[0].envido + playerCards[1].envido + 20:
    playerCards[0].simbolo == playerCards[2].simbolo ? puntosEnvidoPlayer = playerCards[0].envido + playerCards[2].envido + 20:
    playerCards[1].simbolo == playerCards[2].simbolo ? puntosEnvidoPlayer = playerCards[1].envido + playerCards[2].envido + 20:
    playerCards[0].envido > playerCards[1].envido ? puntosEnvidoPlayer = playerCards[0].envido:
    playerCards[1].envido > playerCards[2].envido ? puntosEnvidoPlayer = playerCards[1].envido:
    puntosEnvidoPlayer = playerCards[2].envido;

    
    pcCards[0].simbolo == pcCards[1].simbolo ? puntosEnvidoPc = pcCards[0].envido + pcCards[1].envido + 20:
    pcCards[0].simbolo == pcCards[2].simbolo ? puntosEnvidoPc = pcCards[0].envido + pcCards[2].envido + 20:
    pcCards[1].simbolo == pcCards[2].simbolo ? puntosEnvidoPc = pcCards[1].envido + pcCards[2].envido + 20:
    pcCards[0].envido > pcCards[1].envido ? puntosEnvidoPc = pcCards[0].envido:
    pcCards[1].envido > pcCards[2].envido ? puntosEnvidoPc = pcCards[1].envido:
    puntosEnvidoPlayer = pcCards[2].envido;
    envido(envidoCantado);
}

const envido = (arr) => {
    switch (arr) {
        case 1: 
        if (puntosEnvidoPlayer > puntosEnvidoPc) {
            puntosJuego = puntosJuego + 2;
            actualizacionPuntosPLayer();
            avisoEnvidoPlayer(puntosJuego);
        } else if (puntosEnvidoPlayer < puntosEnvidoPc) {
            puntosJuegoPc = puntosJuegoPc + 2;
            actualizacionPuntosPc();
            avisoEnvidoPc(puntosJuegoPc);
        } else { 
            Swal.fire("Empate de envido!");
        }
        break;
        case 2: 
        if (puntosEnvidoPlayer > puntosEnvidoPc) {
            puntosJuego = puntosJuego + 4;
            actualizacionPuntosPLayer();
            avisoEnvidoPlayer(puntosJuego);
        } else if (puntosEnvidoPlayer < puntosEnvidoPc) {
            puntosJuegoPc = puntosJuegoPc + 4;
            actualizacionPuntosPc();
            avisoEnvidoPc(puntosJuegoPc);
        } else { 
            Swal.fire("Empate de envido!");
        }   
        break;
        case 3: 
        if (puntosEnvidoPlayer > puntosEnvidoPc) {
            puntosJuego = puntosJuego + 7;
            actualizacionPuntosPLayer();
            avisoEnvidoPlayer(puntosJuego);
        } else if (puntosEnvidoPlayer < puntosEnvidoPc) {
            puntosJuegoPc = puntosJuegoPc + 7;
            actualizacionPuntosPc();
            avisoEnvidoPc(puntosJuegoPc);
        } else { 
            Swal.fire("Empate de envido!");
        }
        break;
        case 4: 
        if (puntosEnvidoPlayer > puntosEnvidoPc) {
            puntosJuego = puntosJuego + 30;
            actualizacionPuntosPLayer();
            avisoEnvidoPlayer(puntosJuego);
        } else if (puntosEnvidoPlayer < puntosEnvidoPc) {
            puntosJuegoPc = puntosJuegoPc + 30;
            actualizacionPuntosPc();
            avisoEnvidoPc(puntosJuegoPc);
        } else { 
            Swal.fire("Empate de envido!");
        }
        break;
        default: console.log("algo fallo en envido"); break;
    }
}

e.addEventListener("click", envidoPc);
de.addEventListener("click", dobleEnvidoPc);
re.addEventListener("click", realEnvido);
fe.addEventListener("click", faltaEnvido);

const avisoEnvidoPlayer = (num) => {
    Swal.fire(`"Envido ganado!, + " ${num} " + puntos sumados al marcador"` )
}
const avisoEnvidoPc = (num) => {
    Swal.fire(`"Envido perdido!, + " ${num} " + puntos sumados al marcador rival"` )
}
 //tabla



const sumarTablaPlayer = () => { 
    
    switch (trucoLevel) {
        case 1: puntosJuego++; actualizacionPuntosPLayer(); break;
        case 2: puntosJuego  += puntosJuego + 2; actualizacionPuntosPLayer(); break;
        case 3: puntosJuego = puntosJuego + 3; actualizacionPuntosPLayer(); break;
        case 4: puntosJuego = puntosJuego + 4; actualizacionPuntosPLayer(); break;
        default: puntos.innerHTML = 0;
    }
    
 }

 const sumarTablaPc = () => { 
    
    switch (trucoLevel) {
        case 1: puntosJuegoPc++; actualizacionPuntosPc(); break;
        case 2: puntosJuegoPc = puntosJuegoPc + 2; actualizacionPuntosPc(); break;
        case 3: puntosJuegoPc = puntosJuegoPc + 3; actualizacionPuntosPc(); break;
        case 4: puntosJuegoPc = puntosJuegoPc + 4; actualizacionPuntosPc(); break;
        default: puntos.innerHTML = 0;
    }
    
 }

const reload = () => {
    location.reload();
}

const actualizacionPuntosPLayer = () => {
        let puntos = document.getElementById("puntosPlayer");
        puntos.innerHTML = puntosJuego;
        revisarPuntos = () => {
            if (puntosJuego == 15) {
                Swal.fire(`"El juego va en 15 puntos, Va ganando " + ${localStorage.getItem("nameTag")}`);
            }
            if (puntosJuego == 30 || puntosJuego > 30) {
                Swal.fire("Ganaste el juego!!");
                setInterval ("reload()", 5000);
            } 
        };
      revisarPuntos();  
    }


    const actualizacionPuntosPc = () => {
        let puntos = document.getElementById("puntosPc");
        puntos.innerHTML = puntosJuegoPc;
        revisarPuntos = () => {
            if (puntosJuego == 15) {
                Swal.fire("El juego va en 15 puntos, Va ganando la PC ");
            }
            if (puntosJuegoPc == 30 || puntosJuegoPc > 30) {
                Swal.fire("Perdiste el juego!!");
                setInterval ("reload()", 5000);
            } 
        };
        revisarPuntos();
    }





