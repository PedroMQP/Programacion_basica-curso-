function remueveElementos(arreglo,elemento){
	var arregloNuevo =[];
	var indice = 0;
	for (var cont = 0; cont < arreglo.length;cont++){
		if(arreglo[cont] != elemento){
			arregloNuevo[indice] = arreglo[cont]; 
			indice++;
		}
	}
	return arregloNuevo;
}

console.log(remueveElementos([2, 5, 9, 6], 5));