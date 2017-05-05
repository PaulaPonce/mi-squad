var miembros = []; //arreglo para guardar los miembros del squad

function MiembroSquad(nombre, apellido, edad, hobbies){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.hobbies = hobbies
}


function principal(){
	//instancia para cada miembro
	var marcela = new MiembroSquad("Marcela", "Cabello", 31, ["Cantar", "Yoga", "Cocinar"]);
	var melissa = new MiembroSquad("Melissa", "Pacheco", 25, ["Dormir", "Comer", "Matilda"]);
	var paulina = new MiembroSquad("Paulina", "Aros", 28, ["Hacer libretas", "Acariciar gatos", "Manicure"]);
	var karla = new MiembroSquad("Karla", "Jeria", 35, ["Comer chocolates", "Viajar", "Ir al cine"]);
	var tanya = new MiembroSquad("Tanya", "Ramirez", 20, ["Gatos", "Viajar", "Tomar tecito a las 4"]);
	var amala = new MiembroSquad("Valentina Amala", "Kamala", 29, ["Bordar", "Tejer", "Dormir"]);
	var paula = new MiembroSquad("Paula", "Ponce", 28, ["Música", "Aves", "Heroes of the Storm"]);
	var mariela = new MiembroSquad("Mariela", "Cubillos", 36, ["Tejer", "Comer chocolate", "Cocinar"]);

	//llenar el arreglo miembros[]
	miembros.push(marcela);
	miembros.push(melissa);
	miembros.push(paulina);
	miembros.push(karla);
	miembros.push(tanya);
	miembros.push(amala);
	miembros.push(paula);
	miembros.push(mariela);

	console.log(miembros);

	llenarDiv("contenedor", miembros);
}

//crear div en html
function llenarDiv(idDiv, arraySquad){
	var div = document.getElementById(idDiv);
	var textAux;
	arraySquad.forEach(function(elemento){
		textAux = document.createElement("div");
		textAux.innerHTML += "<b>Nombre: </b>" + elemento.nombre + " " + elemento.apellido + "<br><b>Edad: </b>" + elemento.edad + "<br><b>Hobbies:</b><br>" + "<ul><li>" + elemento.hobbies[0] + "</li><li>" + elemento.hobbies[1] + "</li><li>" + elemento.hobbies[2] + "</li></ul>";
		div.appendChild(textAux);
	});
}
principal();