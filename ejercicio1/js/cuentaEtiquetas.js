function cuentaEtiquetas (){
  var x = document.getElementsByTagName("a").length;
  //return x;
  num_enlaces.innerHTML ="Enlaces: "+x;
   console.log(x);
}
cuentaEtiquetas();
