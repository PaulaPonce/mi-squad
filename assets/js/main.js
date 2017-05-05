function MiembroSquad(nombre, apellido, edad, hobbies){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.hobbies = hobbies
}

function mostrarMiembros(){
	var miembros = []; //arreglo para guardar los miembros del squad

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
	
	//mostrar miembros del squad en <div>
	var contenedor = document.getElementById('contenedor');

	var mostrar = miembros.forEach(function(element){
		contenedor.innerHTML += "<b>Nombre: </b>" + element.nombre + " " + element.apellido + "<br><b>Edad: </b>" + element.edad + "<br><b>Hobbies:</b><br>" + "<ul><li>" + element.hobbies[0] + "</li><li>" + element.hobbies[1] + "</li><li>" + element.hobbies[2] + "</li></ul>";
	})
	
	/*
	miembros.forEach(function(element){
		contenedor.innerHTML += "<b>Nombre: </b>" + element.nombre + " " + element.apellido + "<br><b>Edad: </b>" + element.edad + "<br><b>Hobbies:</b><br>";
		var lista = "<ul>" + element.hobbies.forEach(function(h){
			contenedor.innerHTML += "<li>" + h + "</li>"}) + "</ul>";
	}
	*/
}
mostrarMiembros();

function Comentario(id, comentario, likes){
	this.id = id;
	this.comentario = comentario;
	this.likes = likes
}