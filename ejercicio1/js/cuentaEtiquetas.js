function cuentaEtiquetas (){
  var x = document.getElementsByTagName("a").length;
  //return x;
  document.getElementById("num_enlaces").innerHTML = "Elementos: "+x;
    console.log(x);
}
cuentaEtiquetas();
