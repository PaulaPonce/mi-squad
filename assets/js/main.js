var miembros = []; //arreglo para guardar los miembros del squad

function MiembroSquad(nombre, apellido, edad, hobbies){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.hobbies = hobbies
}

function Comentario(id_miembro, comentario, likes){
	this.id_miembro = id_miembro;
	this.comentario = comentario;
	this.likes = likes
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

	llenarDiv('contenedor', miembros);
}

//crear div en <section id="contenedor"></section> del html
function llenarDiv(idDiv, arraySquad){ //idDiv-->id='contendor' //arraySquad-->miembros[]
	var div = document.getElementById(idDiv); //<section id="contenedor"></section>
	
	var divAux; //sección: <div>
	var cajaAux; //área de texto: <textarea>
	var botonAux; //botón: <button>
	var botonLike; //botón para dar like a comentarios: <button>

	arraySquad.forEach(function(elemento){
		divAux = document.createElement('div'); //crea nodo <div>
		cajaAux = document.createElement('textarea'); //crea área de texto <textarea>
		botonAux = document.createElement('button'); //crea botón <button>
		botonLike = document.createElement('input'); //crea input <input>, botón con imagen
		botonLike.src = "assets/img/red-heart.png";
		botonLike.type = "image";
		
		//contenido del <div>
		divAux.innerHTML += "<br><b>Nombre: </b>" + elemento.nombre + " " + elemento.apellido + "<br><b>Edad: </b>" + elemento.edad + "<br><b>Hobbies:</b><br>";
		var listaHobbie = "<ul>" + elemento.hobbies.forEach(function(h){
			return(divAux.innerHTML += "<li>" + h + "</li>");}) + "</ul>";
		
		div.appendChild(divAux); //enlaza <div> a <section>
		divAux.appendChild(cajaAux); //enlaza <textarea> a <div>
		divAux.appendChild(botonAux); //enlaza <button> a <div>
		//botonAux.setAttribute(name, value);
		botonAux.innerHTML = "Añadir Comentario"; //contenido del botón
		divAux.appendChild(botonLike); //enlaza <input> a <div>
		botonLike.setAttribute("width", "20");
		botonLike.setAttribute("heigth", "20");

	});
}
principal();
