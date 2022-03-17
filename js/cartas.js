// cartas, 36 cartas oficiales de truco argentino.

function Carta(numero, simbolo, peso, random) {
    this.numero = numero; 
    this.simbolo = simbolo; 
    this.peso = peso; 
    this.random = random;
}

const macho = new Carta(1,"espada",13,false);
const hembra = new Carta(1,"basto",12,false);
const sieteFuerteE = new Carta(7,"espada",11,false);
const sieteFuerteO = new Carta(7,"oro",10,false);
const tresE = new Carta(3,"espada",9,false);
const tresB = new Carta(3,"basto",9,false);
const tresO = new Carta(3,"oro",9,false);
const tresC = new Carta(3,"copa",9,false);
const dosE = new Carta(2,"espada",8,false);
const dosB = new Carta(2,"basto",8,false);
const dosO = new Carta(2,"oro",8,false);
const dosC = new Carta(2,"copa",8,false);
const falsoO = new Carta(1,"oro",7,false);
const falsoC = new Carta(1,"copa",7,false);
const doceE = new Carta(12,"espada",6,false);
const doceB = new Carta(12,"basto",6,false);
const doceO = new Carta(12,"oro",6,false);
const doceC = new Carta(12,"copa",6,false);
const onceE = new Carta(11,"espada",5,false);
const onceB = new Carta(11,"basto",5,false);
const onceO = new Carta(11,"oro",5,false);
const onceC = new Carta(11,"copa",5,false);
const sieteFalsoB = new Carta(7,"basto",4,false);
const sieteFalsoC = new Carta(7,"copa",4,false);
const seisE = new Carta(6,"espada",3,false);
const seisB = new Carta(6,"basto",3,false);
const seisO = new Carta(6,"oro",3,false);
const seisC = new Carta(6,"copa",3,false);
const cincoE = new Carta(5,"espada",2,false);
const cincoB = new Carta(5,"basto",2,false);
const cincoO = new Carta(5,"oro",2,false);
const cincoC = new Carta(5,"copa",2,false);
const cuatroE = new Carta(4,"espada",1,false);
const cuatroB = new Carta(4,"basto",1,false);
const cuatroO = new Carta(4,"oro",1,false);
const cuatroC = new Carta(4,"copa",1,false);

let allCards = [macho,hembra,sieteFuerteE,sieteFuerteO,tresE,tresB,tresO,tresC,dosE,dosB,dosO,dosC,falsoO,falsoC,doceE,doceB,doceO,doceC,onceE,onceB,onceO,onceC,sieteFalsoB,sieteFalsoC,seisE,
    seisB,seisO,seisC,cincoE,cincoB,cincoO,cincoC,cuatroE,cuatroB,cuatroO,cuatroC];


let allCardsJSON = JSON.stringify(allCards);