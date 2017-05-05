function MiembroSquad(nombre, apellido, edad, hobbies){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.hobbies = hobbies
}

var marcela = new MiembroSquad("Marcela", "Cabello", 31, ["Cantar", "Yoga", "Cocinar"]);
var melissa = new MiembroSquad("Melissa", "Pacheco", 25, ["Dormir", "Comer", "Matilda"]);
var paulina = new MiembroSquad("Paulina", "Aros", 28, ["Hacer libretas", "Acariciar gatos", "Manicure"]);
var karla = new MiembroSquad("Karla", "Jeria", 35, ["Comer chocolates", "Viajar", "Ir al cine"]);
var tanya = new MiembroSquad("Tanya", "Ramirez", 20, ["Gatos", "Viajar", "Tomar tecito a las 4"]);
var amala = new MiembroSquad("Valentina Amala", "Kamala", 29, ["Bordar", "Tejer", "Dormir"]);
var paula = new MiembroSquad("Paula", "Ponce", 28, ["Música", "Aves", "Heroes of the Storm"]);
var mariela = new MiembroSquad("Mariela", "Cubillos", 36, ["Tejer", "Comer chocolate", "Cocinar"]);

var miembros = 
document.getElementById('cont-7').innerHTML = paula.nombre;
//hobbie1, hobbie2, hobbie3