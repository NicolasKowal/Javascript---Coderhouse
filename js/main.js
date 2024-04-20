const Users = [
	["nicolas", "1234"],
	["alfredo", "112255"],
	["ana", "7890"],
	["carlos", "5432"],
	["maria", "9876"],
	["javier", "6543"],
	["laura", "8765"],
	["pedro", "2109"],
	["sofia", "3344"],
	["diego", "4556"],
];

function BuscarUser(usuario) {
	for (let i = 0; i < Users.length; i++) {
		if (usuario == Users[i][0]) {
			return i;
		}
	}
	alert("Usuario Inexistente");
	return -1;
}

function ValidarPassword(valor, password) {
	if (Users[valor][1] == password) {
		alert("Bienvenido");
	} else {
		alert("Las contraseñas no coinciden");
	}
}

function CrearUser(user, pass) {
	Users.push([user, pass]);
}

function MostrarUsers() {
	for (i = 0; i < Users.length; i++) {
		console.log(Users[i][0], Users[i][1]);
	}
}

function ValidarUser(nombre) {
	for (i = 0; i < Users.length; i++) {
		if (nombre == Users[i][0]) {
			return 1;
		}
	}
}
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

alert("Por favor, elija una opción:\n1. Loguearse\n2. Crear Usuario");

let opcion = 0;
while (opcion != 1 && opcion != 2) {
	opcion = prompt("Ingrese el número de la opción elegida (1 o 2):");
	if (opcion == 1) {
		let UsuarioAIngresar = prompt("Ingrese usuario:");
		let indice = BuscarUser(UsuarioAIngresar);
		if (indice != -1) {
			let ContraseñaAIngresar = prompt("Ingrese contraseña:");
			ValidarPassword(indice, ContraseñaAIngresar);
		}
	} else if (opcion == 2) {
		let user = prompt("ingrese usuario");
		usua = ValidarUser(user);
		if (usua != 1) {
			let pass = prompt("ingrese contraseña");
			CrearUser(user, pass);
		} else {
			alert("usuario no disponible");
		}
	}
}
