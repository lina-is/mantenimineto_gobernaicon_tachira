function validar(){

	var mensaje = document.getElementById("mensaje"),
  	nombre_p = document.getElementById("nombre_p").value,
 	apellido_p = document.getElementById("apellido_p").value,
  	tt = document.getElementById("tt").value,
  	usuario = document.getElementById("usuario").value,
  	pass = document.getElementById("pass").value;
  	const boton1 = document.getElementById("btn-submit");

  	var validarTamano = function(){
  		if (nombre_p.length > 30 & apellido_p.length > 30) {
			
			return false;
		}
  	}

	boton1.addEventListener('click', function(a){
		if (!validarTamano()) {
			mensaje.classList.add('alert', 'alert-danger');
			mensaje.innerHTML ='El nombre y apellido no pueden tener mas de 30 caracteres';
			a.preventDefault();
		}
	});
}