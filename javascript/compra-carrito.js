function compra(div) {
    var juegoLista = div.id;
    document.getElementById('nombre-compra').innerHTML = juegos[juegoLista].nombre;
    document.getElementById('precio-compra').innerHTML = juegos[juegoLista].precio;

    var x = document.getElementById("caja-compra");
       if (x.style.display === "none") {
           x.style.display = "block";
       } else {
           x.style.display = "none";
       }
}
