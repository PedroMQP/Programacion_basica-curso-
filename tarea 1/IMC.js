function imc() {
  var peso = Number(document.getElementById('peso').value);

  var altura = Number(document.getElementById('estatura').value);
  var calculo = peso/(altura**2);
  document.getElementById('peso').value = "";
  document.getElementById('estatura').value = "";
  document.getElementById("imc").value = calculo;
  console.log(calculo)
  console.log(typeof calculo)

}
