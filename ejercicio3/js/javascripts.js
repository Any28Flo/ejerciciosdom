function myFunction() {
  var nombre = document.getElementById("name");
  var email = document.getElementById("email");
  document.getElementById("mostrarNombre").innerHTML = "Nombre:"+nombre.value;
  document.getElementById("mostrarMail").innerHTML = "Email: "+email.value;
}

myFunction();
