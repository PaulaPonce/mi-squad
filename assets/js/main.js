var miembros = []; //arreglo para guardar los miembros del squad
var comentarios = []; //arreglo para guardar comentarios

function MiembroSquad(nombre, apellido, edad, hobbies, id){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.hobbies = hobbies;
	this.id = id
}

function Comentario(id_miembro, comentario, likes){
	this.id_miembro = id_miembro;
	this.comentario = comentario;
	this.likes = likes
}

function principal(){
	//instancia para cada miembro
	var marcela = new MiembroSquad("Marcela", "Cabello", 31, ["Cantar", "Yoga", "Cocinar"], 1);
	var melissa = new MiembroSquad("Melissa", "Pacheco", 25, ["Dormir", "Comer", "Matilda"], 2);
	var paulina = new MiembroSquad("Paulina", "Aros", 28, ["Hacer libretas", "Acariciar gatos", "Manicure"], 3);
	var karla = new MiembroSquad("Karla", "Jeria", 35, ["Comer chocolates", "Viajar", "Ir al cine"], 4);
	var tanya = new MiembroSquad("Tanya", "Ramirez", 20, ["Gatos", "Viajar", "Tomar tecito a las 4"], 5);
	var amala = new MiembroSquad("Valentina Amala", "Kamala", 29, ["Bordar", "Tejer", "Dormir"], 6);
	var paula = new MiembroSquad("Paula", "Ponce", 28, ["Música", "Aves", "Heroes of the Storm"], 7);
	var mariela = new MiembroSquad("Mariela", "Cubillos", 36, ["Tejer", "Comer chocolate", "Cocinar"], 8);

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
	
	var divAux, divAux2, divTxt; //sección: <div>
	var imgAux; //imagen: <img>
	var cajaAux; //área de texto: <textarea>
	var botonAux; //botón: <button>
	var botonLike; //botón para dar like a comentarios: <input>
	

	arraySquad.forEach(function(elemento){
		divAux = document.createElement('div'); //crea nodo <div>
		div.appendChild(divAux); //enlaza <div> a <section>

		imgAux = document.createElement('img'); //crea imagen <img>
		imgAux.src = 'assets/img/' + elemento.apellido + '.jpg';
		imgAux.setAttribute('width', '150');
		imgAux.setAttribute('heigth', '150');
		divAux.appendChild(imgAux); //enlaza <img> a <div>


		divAux2 = document.createElement('div'); //crea nodo <div>
		//contenido del <div>
		divAux2.innerHTML += "<br><b>Nombre: </b>" + elemento.nombre + " " + elemento.apellido + "<br><b>Edad: </b>" + elemento.edad + "<br><b>Hobbies:</b><br>";
		var listaHobbie = "<ul>" + elemento.hobbies.forEach(function(h){
			return(divAux2.innerHTML += "<li>" + h + "</li>");}) + "</ul>";
		divAux.appendChild(divAux2); //enlaza <div> a <section>

		cajaAux = document.createElement('textarea'); //crea área de texto <textarea>
		divAux2.appendChild(cajaAux); //enlaza <textarea> a <div>
		cajaAux.setAttribute('id', elemento.id); //<textarea id=elemento.id>
		cajaAux.setAttribute('class', 'caja-com');
		cajaAux.setAttribute('type', 'text');

		botonAux = document.createElement('button'); //crea botón <button>
		divAux.appendChild(botonAux); //enlaza <button> a <div>
		botonAux.setAttribute('onclick', 'anadirComentario(this.cajaAux, this,' + elemento.id + ', this.divTxt)'); //función del botón
		botonAux.innerHTML = "Añadir Comentario"; //contenido del botón		

		divTxt = document.createElement('div'); //crea nodo <div> para comentarios
		divTxt.setAttribute('id', elemento.id);
		divTxt.setAttribute('class', 'comentarios');
		divAux2.appendChild(divTxt);

		botonLike = document.createElement('input'); //crea input <input>, botón con imagen
		botonLike.src = "assets/img/red-heart.png";
		botonLike.type = "image";
		divAux.appendChild(botonLike); //enlaza <input> a <div>
		botonLike.setAttribute('id', comentarios.length + 1);
		botonLike.setAttribute('onClick', 'contadorLikes("' + elNum + '")');
		botonLike.setAttribute('width', '20');
		botonLike.setAttribute('heigth', '20');

		var cajaLike = document.createElement('div');
		cajaLike.setAttribute('id', comentarios.length + 1);
	});
}

//función para añadir comentarios con el botón
function anadirComentario(cajaAux, botonAux, elId, divTxt){
	cajaAux = document.getElementById(elId).value;
	divTxt = document.getElementsByClassName('comentarios');

	var filtro = miembros.filter(function(f){
		return f.id == elId;
	})

	var com = document.createElement('div');
	com.setAttribute('id', elId);
	com.innerHTML = document.getElementById(elId).value;

	if(filtro[0].id == elId && cajaAux != ""){
		comentarios.push(com);
		divTxt[filtro[0].id - 1].appendChild(com);
		document.getElementById(elId).value = "";
	}
}

var elNum = 0; //contador de likes

//esto no funcionó
function contadorLikes(elNum, elId){
	var contador = document.createElement('a');
	contador.innerHTML += " ";

	var numEdit = document.createTextNode(elNum);
	contador.appendChild(numEdit);
	contador.setAttribute('type', 'number');
	contador.setAttribute('class', 'contador');
	contador.setAttribute('id', 'num');

	var cajaLike = document.createElement('div');
	cajaLike.setAttribute('class', 'cont-like');
	cajaLike.setAttribute('id', comentarios.length + 1);
}
principal();

