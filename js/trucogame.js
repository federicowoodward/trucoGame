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



let t = document.getElementById("t");
let rt = document.getElementById("rt");
let vc = document.getElementById("vc");
let rtn = document.getElementById("rt");
let vcn = document.getElementById("vc");

let cantosPc = [true,false,true,false,true,false]; cantosPc.sort(function() {return Math.random() - 0.5});




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
                bienvenidoName.innerHTML = "Bienvenido " + localStorage.getItem("nameTag") + "!!";
            }
        }
    }
    )
} else {
    nameTagTab.innerHTML = localStorage.getItem("nameTag");
    bienvenidoName.innerHTML = "Bienvenido " + localStorage.getItem("nameTag") + "!!";
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
    document.getElementById("botones123").style.display = "flex";
}

    const jugada1 = () => { 
        document.getElementById("btnCarta1").style.display = "none";
        comparacionDeCarta(playerCards[0],pcCards[0]);
    }
    const jugada2 = () => { 
        document.getElementById("btnCarta2").style.display = "none";
        comparacionDeCarta(playerCards[1],pcCards[1]);
    }
    const jugada3 = () => { 
        document.getElementById("btnCarta3").style.display = "none";
        comparacionDeCarta(playerCards[2],pcCards[2]);
    }
    botonC1.addEventListener("click",jugada1);
    botonC2.addEventListener("click",jugada2);
    botonC3.addEventListener("click",jugada3);

    

 

 function comparacionDeCarta(playerCard, pcCard) { 
    if (playerCard.peso == pcCard.peso) {
         alert("Empate");
        } else if (playerCard.peso > pcCard.peso) {
             alert("ganaste");
             sumarTablaPlayer();
            } else if (playerCard.peso < pcCard.peso) {
                 alert("perdiste");
                }
 }   
 

 //tabla 



//  truco 
let truco = false;
let reTruco = false;
let vale4 = false;
// ocultacion de botones a medida q se van usamdo, NO TOCAR ANDA PERFECTO
document.getElementById("rt").style.display = "none";
document.getElementById("vc").style.display = "none";

const trucoPorPc = () => {
    cantoTruco(cantosPc[2]);
    document.getElementById("t").style.display = "none";
    document.getElementById("rt").style.display = "inline";
    truco = true;
}
const reTrucoPorPc = () => {
    cantoReTruco(cantosPc[5]);
    document.getElementById("rt").style.display = "none";
    document.getElementById("vc").style.display = "inline";
    reTruco = true;
}
const vale4PorPc = () => {
    cantoVale4(cantosPc[0]);
    document.getElementById("vc").style.display = "none";
    vale4 = true;
}


//
let trucoLevel = 1;

    function cantoTruco (respuestaPc) {
    if (respuestaPc == true) { alert("Continua la ronda, truco cantado"); trucoLevel = 2;
        } else { alert("termina la ronda")};
    }
    function cantoReTruco (respuestaPc) {
        if (respuestaPc == true) { alert("Continua la ronda, truco cantado"); trucoLevel = 3;
            } else { alert("termina la ronda")};
        }
    function cantoVale4 (respuestaPc) {
        if (respuestaPc == true) { alert("Continua la ronda, truco cantado"); trucoLevel = 4;
            } else { alert("termina la ronda")};
        }

 t.addEventListener("click", trucoPorPc);
 rt.addEventListener("click", reTrucoPorPc);
 vc.addEventListener("click", vale4PorPc);


let puntosPc = document.getElementById("puntosPc");
let puntosJuego = 0;

const sumarTablaPlayer = () => { 
    
    switch (trucoLevel) {
        case 1: puntosJuego++; actualizacionPuntosPLayer(); break;
        case 2: puntosJuego =  puntosJuego + 2; actualizacionPuntosPLayer(); break;
        case 3: puntosJuego =  puntosJuego + 3; actualizacionPuntosPLayer(); break;
        case 4: puntosJuego =  puntosJuego + 4; actualizacionPuntosPLayer(); break;
        default: puntos.innerHTML = 0;
    }
    
 }

const actualizacionPuntosPLayer = () => {
        let puntos = document.getElementById("puntosPlayer");
        puntos.innerHTML = puntosJuego;
    }

function showCards({numero,simbolo}) {
    const contenido = document.getElementById("contenido")

    contenido.innerHTML = `
        <p> Numero: ${numero} </p>
        <p> Simbolo: ${simbolo} </p>
    `
}


const obtenerDatosTXT = () => {
    
    fetch("js/cartas.js")
        .then(function (data) {
            return data.text();
        })
        .then((datos) => {
            console.log(datos);
            showCards(datos);
            
        })
        .catch((err) => {
            console.log(err);
        })

}


const btnTxt = document.getElementById("btnTxt");
btnTxt.addEventListener("click",obtenerDatosTXT);   

