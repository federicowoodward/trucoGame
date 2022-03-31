// cartas, 36 cartas oficiales de truco argentino.

function Carta(numero, simbolo, peso, random, envido) {
    this.numero = numero; 
    this.simbolo = simbolo; 
    this.peso = peso; 
    this.random = random;
    this.envido = envido;
}

const macho = new Carta(1,"espada",13,false,1);
const hembra = new Carta(1,"basto",12,false,1);
const sieteFuerteE = new Carta(7,"espada",11,false,7);
const sieteFuerteO = new Carta(7,"oro",10,false,7);
const tresE = new Carta(3,"espada",9,false,3);
const tresB = new Carta(3,"basto",9,false,3);
const tresO = new Carta(3,"oro",9,false,3);
const tresC = new Carta(3,"copa",9,false,3);
const dosE = new Carta(2,"espada",8,false,2);
const dosB = new Carta(2,"basto",8,false,2);
const dosO = new Carta(2,"oro",8,false,2);
const dosC = new Carta(2,"copa",8,false,2);
const falsoO = new Carta(1,"oro",7,false,1);
const falsoC = new Carta(1,"copa",7,false,1);
const doceE = new Carta(12,"espada",6,false,0);
const doceB = new Carta(12,"basto",6,false,0);
const doceO = new Carta(12,"oro",6,false,0);
const doceC = new Carta(12,"copa",6,false,0);
const onceE = new Carta(11,"espada",5,false,0);
const onceB = new Carta(11,"basto",5,false,0);
const onceO = new Carta(11,"oro",5,false,0);
const onceC = new Carta(11,"copa",5,false,0);
const sieteFalsoB = new Carta(7,"basto",4,false,7);
const sieteFalsoC = new Carta(7,"copa",4,false,7);
const seisE = new Carta(6,"espada",3,false,6);
const seisB = new Carta(6,"basto",3,false,6);
const seisO = new Carta(6,"oro",3,false,6);
const seisC = new Carta(6,"copa",3,false,6);
const cincoE = new Carta(5,"espada",2,false,5);
const cincoB = new Carta(5,"basto",2,false,5);
const cincoO = new Carta(5,"oro",2,false,5);
const cincoC = new Carta(5,"copa",2,false,5);
const cuatroE = new Carta(4,"espada",1,false,4);
const cuatroB = new Carta(4,"basto",1,false,4);
const cuatroO = new Carta(4,"oro",1,false,4);
const cuatroC = new Carta(4,"copa",1,false,4);

let allCards = [macho,hembra,sieteFuerteE,sieteFuerteO,tresE,tresB,tresO,tresC,dosE,dosB,dosO,dosC,falsoO,falsoC,doceE,doceB,doceO,doceC,onceE,onceB,onceO,onceC,sieteFalsoB,sieteFalsoC,seisE,
    seisB,seisO,seisC,cincoE,cincoB,cincoO,cincoC,cuatroE,cuatroB,cuatroO,cuatroC];


let allCardsJSON = JSON.stringify(allCards);