var iva = 22;

document.getElementById('tituloj1').innerHTML = juegos[0].nombre;
document.getElementById('categj1').innerHTML = juegos[0].categorias.join(", ");
document.getElementById('descuj1').innerHTML = juegos[0].descuento;
document.getElementById('precioj1').innerHTML = Math.round(((juegos[0].precio + ((juegos[0].precio * iva) / 100)) - (((juegos[0].precio + ((juegos[0].precio * iva) / 100)) * juegos[0].descuento) / 100)) * 10) / 10;

document.getElementById('tituloj2').innerHTML = juegos[1].nombre;
document.getElementById('categj2').innerHTML = juegos[1].categorias.join(", ");
document.getElementById('descuj2').innerHTML = juegos[1].descuento;
document.getElementById('precioj2').innerHTML = Math.round(((juegos[1].precio + ((juegos[1].precio * iva) / 100)) - (((juegos[1].precio + ((juegos[1].precio * iva) / 100)) * juegos[1].descuento) / 100)) * 10) / 10;

document.getElementById('tituloj3').innerHTML = juegos[2].nombre;
document.getElementById('categj3').innerHTML = juegos[2].categorias.join(", ");
document.getElementById('descuj3').innerHTML = juegos[2].descuento;
document.getElementById('precioj3').innerHTML = Math.round(((juegos[2].precio + ((juegos[2].precio * iva) / 100)) - (((juegos[2].precio + ((juegos[2].precio * iva) / 100)) * juegos[2].descuento) / 100)) * 10) / 10;

document.getElementById('tituloj4').innerHTML = juegos[3].nombre;
document.getElementById('categj4').innerHTML = juegos[3].categorias.join(", ");
document.getElementById('descuj4').innerHTML = juegos[3].descuento;
document.getElementById('precioj4').innerHTML = Math.round(((juegos[3].precio + ((juegos[3].precio * iva) / 100)) - (((juegos[3].precio + ((juegos[3].precio * iva) / 100)) * juegos[3].descuento) / 100)) * 10) / 10;

document.getElementById('tituloj5').innerHTML = juegos[4].nombre;
document.getElementById('categj5').innerHTML = juegos[4].categorias.join(", ");
document.getElementById('descuj5').innerHTML = juegos[4].descuento;
document.getElementById('precioj5').innerHTML = Math.round(((juegos[4].precio + ((juegos[4].precio * iva) / 100)) - (((juegos[4].precio + ((juegos[4].precio * iva) / 100)) * juegos[4].descuento) / 100)) * 10) / 10;

document.getElementById('tituloj6').innerHTML = juegos[5].nombre;
document.getElementById('categj6').innerHTML = juegos[5].categorias.join(", ");
document.getElementById('descuj6').innerHTML = juegos[5].descuento;
document.getElementById('precioj6').innerHTML = Math.round(((juegos[5].precio + ((juegos[5].precio * iva) / 100)) - (((juegos[5].precio + ((juegos[5].precio * iva) / 100)) * juegos[5].descuento) / 100)) * 10) / 10;

document.getElementById('tituloj7').innerHTML = juegos[6].nombre;
document.getElementById('categj7').innerHTML = juegos[6].categorias.join(", ");
document.getElementById('descuj7').innerHTML = juegos[6].descuento;
document.getElementById('precioj7').innerHTML = Math.round(((juegos[6].precio + ((juegos[6].precio * iva) / 100)) - (((juegos[6].precio + ((juegos[6].precio * iva) / 100)) * juegos[6].descuento) / 100)) * 10) / 10;

document.getElementById('tituloj8').innerHTML = juegos[7].nombre;
document.getElementById('categj8').innerHTML = juegos[7].categorias.join(", ");
document.getElementById('descuj8').innerHTML = juegos[7].descuento;
document.getElementById('precioj8').innerHTML = Math.round(((juegos[7].precio + ((juegos[7].precio * iva) / 100)) - (((juegos[7].precio + ((juegos[7].precio * iva) / 100)) * juegos[7].descuento) / 100)) * 10) / 10;

document.getElementById('tituloj9').innerHTML = juegos[8].nombre;
document.getElementById('categj9').innerHTML = juegos[8].categorias.join(", ");
document.getElementById('descuj9').innerHTML = juegos[8].descuento;
document.getElementById('precioj9').innerHTML = Math.round(((juegos[8].precio + ((juegos[8].precio * iva) / 100)) - (((juegos[8].precio + ((juegos[8].precio * iva) / 100)) * juegos[8].descuento) / 100)) * 10) / 10;

for (var i = 0; i < juegos.length - 1; i++) {
  if (juegos[i].descuento == 0) {
    document.getElementById('bot-desc' + i).style.visibility = "hidden";
  }
}
