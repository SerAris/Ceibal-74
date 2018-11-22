function compra(div) {
    var juegoLista = div.id;
    document.getElementById('nombre-compra').innerHTML = juegos[juegoLista].nombre;
    document.getElementById('precio-compra').innerHTML = juegos[juegoLista].precio;
    document.getElementById('descuento-compra').innerHTML = juegos[juegoLista].descuento;
    if (juegos[juegoLista].descuento > 0) {
      document.getElementById("ventana-descuento").style.display = "block";
    } else {document.getElementById("ventana-descuento").style.display = "none";}

    if (juegos[juegoLista].descuento > 0) {
      document.getElementById("descuentoFinal").style.display = "block";
    } else {document.getElementById("descuentoFinal").style.display = "none";}

    if (juegos[juegoLista].descuento > 0) {
      document.getElementById("precioFinalCuenta").style.display = "none";
    } else {document.getElementById("precioFinalCuenta").style.display = "inline";}


    var IVA = 1.22;
    var input = document.querySelector('.cantidadAComprar');
    var num = input.value;
    var precioInicial = document.getElementById('precioJuego').innerHTML = juegos[juegoLista].precio;
    var precioConIVA = document.getElementById('precioIVA').innerHTML = Math.round((precioInicial * IVA) * 10) / 10;
    var precioConDesc = document.getElementById('precioDesc').innerHTML = Math.round((precioConIVA - ((precioConIVA * juegos[juegoLista].descuento)/100)) * num);

    if (document.getElementById("caja-compra").style.display = "none") {
           document.getElementById("caja-compra").style.display = "block";
    }
}

function cerrarVentana() {
  if (document.getElementById("caja-compra").style.display = "block") {
    document.getElementById("caja-compra").style.display = "none";
  }
}
