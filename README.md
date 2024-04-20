Este código permite que un usuario inicie sesión con su nombre de usuario y contraseña, o que pueda crear una cuenta nueva. 
Si el usuario ingresa la contraseña incorrecta, no podrá acceder; además, si el usuario no existe, se mostrará una alerta indicando que no existe. 
Si se intenta crear un usuario que ya existe, se mostrará una alerta informando que ese usuario no está disponible.

Para lograr esto, se utilizan cuatro funciones. 
La primera busca al usuario y devuelve su posición, o devuelve -1 si el usuario no existe. 
Luego, la función "validarContraseña" verifica la contraseña en la posición indicada. 
La función "validarUsuario" compara si el usuario que se intenta crear ya existe. 
Por último, la función "crearUsuario" (una función flecha) agrega un nuevo usuario al array.


Inicialmente quise usar un diccionario clave-valor, pero al no haber visto objetos, se optó por utilizar un array que contiene dos valores en cada posición.
