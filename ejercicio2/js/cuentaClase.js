function cuentaClase(){

  var contador = document.getElementsByClassName('mensaje').length;
  console.log(contador);
  if(contador === 1){
    document.getElementById("cuenta").innerHTML="Es muy poco";
    console.log("Es muy poco")
  }else if(contador >= 4){
    document.getElementById("cuenta").innerHTML = "Son muchos !!! x.x";
    console.log("Son muchos !!! x.x");
  }else if (contador > 3 && contador < 4) {
    document.getElementById("cuenta").innerHTML = "No esta mal";
    console.log(" No esta mal");
  }
}
cuentaClase();
