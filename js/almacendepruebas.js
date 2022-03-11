function comparacionDeCarta (mesaDeJuego, mesaDeJuegoPc) {
    
    if (mesaDeJuego.length == 1) {
        if (mesaDeJuego[0].peso < mesaDeJuegoPc[0].peso) {
            alert("Perdiste la ronda!");
            return "R1LOST";
        } else if (mesaDeJuego[0].peso > mesaDeJuegoPc[0].peso) {
            alert("Ganaste la ronda!");
            return "R1WIN";
        } else if (mesaDeJuego[0].peso == mesaDeJuegoPc[0].peso) {
            alert("Empate, segunda ronda parda!");
            return "R1TIE";
        }
    }
    else if (mesaDeJuego.length == 2) {
        if (mesaDeJuego[0].peso < mesaDeJuegoPc[0].peso) {
            alert("Perdiste la ronda!");
            return "R1LOST";
        } else if (mesaDeJuego[0].peso > mesaDeJuegoPc[0].peso) {
            alert("Ganaste la ronda!");
            return "R1WIN";
        } else if (mesaDeJuego[0].peso == mesaDeJuegoPc[0].peso) {
            alert("Empate, segunda ronda parda!");
            return "R1TIE";
        }
    }
    else if (mesaDeJuego.length == 3) {
        if (mesaDeJuego[0].peso < mesaDeJuegoPc[0].peso) {
            alert("Perdiste la ronda!");
            return "R1LOST";
        } else if (mesaDeJuego[0].peso > mesaDeJuegoPc[0].peso) {
            alert("Ganaste la ronda!");
            return "R1WIN";
        } else if (mesaDeJuego[0].peso == mesaDeJuegoPc[0].peso) {
            alert("Empate, segunda ronda parda!");
            return "R1TIE";
        }
    } 
}

mesaDeJuego, mesaDeJuegoPc) {
    
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



function cantidadDeCartas (mesaDeJuego) {
    if ( cantidad == 1) {
        console.log(mesaDeJuego.length);
    }
}


function comparacionDeCarta1 (mesaDeJuego, mesaDeJuegoPc) {
        if (mesaDeJuego[0].peso < mesaDeJuegoPc[0].peso) {
            alert("Perdiste la ronda!");
            return "R1LOST";
        } else if (mesaDeJuego[0].peso > mesaDeJuegoPc[0].peso) {
            alert("Ganaste la ronda!");
            return "R1WIN";
        } else if (mesaDeJuego[0].peso == mesaDeJuegoPc[0].peso) {
            alert("Empate, segunda ronda parda!");
            return "R1TIE";
        }
};
    /*
    else if (mesaDeJuego.length == 2) {
        if (mesaDeJuego[0].peso < mesaDeJuegoPc[0].peso) {
            alert("Perdiste la ronda!");
            return "R1LOST";
        } else if (mesaDeJuego[0].peso > mesaDeJuegoPc[0].peso) {
            alert("Ganaste la ronda!");
            return "R1WIN";
        } else if (mesaDeJuego[0].peso == mesaDeJuegoPc[0].peso) {
            alert("Empate, segunda ronda parda!");
            return "R1TIE";
        }
    }
    else if (mesaDeJuego.length == 3) {
        if (mesaDeJuego[0].peso < mesaDeJuegoPc[0].peso) {
            alert("Perdiste la ronda!");
            return "R1LOST";
        } else if (mesaDeJuego[0].peso > mesaDeJuegoPc[0].peso) {
            alert("Ganaste la ronda!");
            return "R1WIN";
        } else if (mesaDeJuego[0].peso == mesaDeJuegoPc[0].peso) {
            alert("Empate, segunda ronda parda!");
            return "R1TIE";
        }
    } 
}
*/