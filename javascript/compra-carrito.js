function compra(div) {
    var juegoLista = div.id;
    document.getElementById('nombre-compra').innerHTML = juegos[juegoLista].nombre;
    document.getElementById('precio-compra').innerHTML = juegos[juegoLista].precio;
    document.getElementById('descuento-compra').innerHTML = juegos[juegoLista].descuento;
    if (juegos[juegoLista].descuento > 0) {
      document.getElementById("ventana-descuento").style.display = "block";
    } else {document.getElementById("ventana-descuento").style.display = "none";}

    if (document.getElementById("caja-compra").style.display = "none") {
           document.getElementById("caja-compra").style.display = "block";
    }
}

function cerrarVentana() {
  if (document.getElementById("caja-compra").style.display = "block") {
    document.getElementById("caja-compra").style.display = "none";
  }
}
