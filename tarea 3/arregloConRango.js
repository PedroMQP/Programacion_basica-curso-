function crearArregloConRango(rango1,rango2){
	const arreglo = [];
	var auxRango1 = rango1;
	if (rango1 < rango2) {
		if (rango1<0) {
			auxRango1 = rango1*-1;
		}
		for (cont = 0;cont<=rango2+auxRango1;cont++){
			arreglo[cont] = rango1+cont; 
		}
	}else{
		console.log("El rango no es valido");
	}
	return arreglo;
}

console.log(crearArregloConRango(1,5));
console.log(crearArregloConRango(-4,9));