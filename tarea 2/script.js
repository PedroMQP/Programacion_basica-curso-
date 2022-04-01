var flag = 0;
function crearTabla() {
    if(flag ==0)  {
        var filas = Number(document.getElementById('filas').value);
        var columnas = Number(document.getElementById('columnas').value);
        var tabla = document.createElement("table");
        tabla.id = 'dinamicTable';
        tabla.border=1;
        document.body.appendChild(tabla);
        var fila;
        var celda;
        for(var cont = 0;cont < filas;cont++){
          fila = document.createElement("tr");
          for (var cont2 = 0; cont2 < columnas; cont2++) {
            celda = document.createElement("td");
            celda.textContent = "Filas:"+ cont +" Columna "+cont2;
            fila.appendChild(celda);
          }
          tabla.appendChild(fila);
        }
        flag =1;
    }


}
function quitarTabla() {
    if(flag==1){
      document.body.removeChild(document.getElementById('dinamicTable'));
      flag = 0;
    }
}