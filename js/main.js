const users = [
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

const buscarUsuario = function (usuario) {
	for (let i = 0; i < users.length; i++) {
		if (usuario === users[i][0]) {
			return i;
		}
	}
	alert("Usuario Inexistente");
	return -1;
}

const validarContraseña = function(valor, contraseña) {
	if (users[valor][1] === contraseña) {
		alert("Logueo con éxito");
		return true;
	} else {
		alert("Las contraseñas no coinciden");
		return false;
	}
}

const validarUsuario = function(nombre) {
	for (let i = 0; i < users.length; i++) {
		if (nombre === users[i][0]) {
			return 1;
		}
	}
}

const crearUsuario = (usuario, contraseña) => users.push([usuario, contraseña]);

const mostrarUsuarios = () => {
	for (let i = 0; i < users.length; i++) {
		console.log(users[i][0], users[i][1]);
	}
}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

let usuarioLogueado = false;
	while(!usuarioLogueado)
	{
		let opcion = prompt("Por favor, elija una opción:\n1. Loguearse\n2. Crear Usuario");
		if (opcion === "1") {
			let usuarioAIngresar = prompt("Ingrese usuario:");
			let indice = buscarUsuario(usuarioAIngresar);
			if (indice !== -1) {
				let contraseñaAIngresar = prompt("Ingrese contraseña:");
				usuarioLogueado = validarContraseña(indice, contraseñaAIngresar);
			}
		} else if (opcion === "2") {
			let usuarioNuevo = prompt("Ingrese usuario");
			let usuarioDisponible = validarUsuario(usuarioNuevo);
			if (usuarioDisponible !== 1) {
				let contraseñaNueva = prompt("Ingrese contraseña");
				crearUsuario(usuarioNuevo, contraseñaNueva);
			} else {
				alert("Usuario no disponible");
			}
		}
	}