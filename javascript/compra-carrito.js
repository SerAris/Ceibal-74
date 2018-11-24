function abrirVentana() {
  if (document.getElementById('caja-compra').style.display = "none") {
    document.getElementById('caja-compra').style.display = "block"
  }
}

function cerrarVentana() {
  if (document.getElementById('caja-compra').style.display = "block") {
    document.getElementById('caja-compra').style.display = "none"
    document.getElementById('formularioDeCompra').reset();
  }
}

$(document).ready(function() {
	$("#formato-digital").click(function() {
  	$("#metodoEnvio").attr("disabled", true);
    $("#cantidadCompra").attr("disabled", true);
    $("#direccionEnvio").attr("disabled", true);
    $("#cantidadCompra").val(1);
    $("#metodoEnvio").prop('selectedIndex', 0);
    $("#selectMetodo").attr("value", "1");
    $("#optionsCompra").hide();
  });
});

$(document).ready(function() {
  $("#formato-fisico").click(function() {
    $("#metodoEnvio").attr("disabled", false);
    $("#cantidadCompra").attr("disabled", false);
    $("#direccionEnvio").attr("disabled", false);
    $("#selectMetodo").attr("value", "");
    $("#optionsCompra").show();
  });
})

function compraExito() {
  alert("¡Éxito! Tu compra se ha realizado satisfactoriamente.\n\nTe hemos enviado un correo electrónico con la constancia y factura de compra y los datos que nos proporcionaste.\n\n¡Muchas gracias!")
}

function compraJuego1() {
  document.getElementById('formato-digital').setAttribute('onchange','compraJuego1();');
  document.getElementById('formato-fisico').setAttribute('onchange','compraJuego1();');
  document.getElementById('cantidadCompra').setAttribute('onchange','compraJuego1();');
  document.getElementById('metodoEnvio').setAttribute('onchange','compraJuego1();');
  document.getElementById("nombre-compra").innerHTML = juegos[0].nombre;
  document.getElementById("DescPorcentaje").innerHTML = juegos[0].descuento;
  var precioBase = juegos[0].precio;
  var precioIVA = ((precioBase * iva)/100);
  var precioDesc = ((precioBase + precioIVA) * juegos[0].descuento)/100;
  var cantidadItem = document.getElementById("cantidadCompra").value;
  var precioEnvio = document.getElementById("metodoEnvio").value;
  var precioFinal = (precioBase + precioIVA - precioDesc) * cantidadItem * precioEnvio;
  document.getElementById('precioBase').innerHTML = precioBase.toFixed(2);
  document.getElementById('IVAdeJuego').innerHTML = precioIVA.toFixed(2);
  document.getElementById('descuentoJuego').innerHTML = precioDesc.toFixed(2);
  document.getElementById('precioFinal').innerHTML = precioFinal.toFixed(2);
}

function compraJuego2() {
  document.getElementById('formato-digital').setAttribute('onchange','compraJuego2();');
  document.getElementById('formato-fisico').setAttribute('onchange','compraJuego2();');
  document.getElementById('cantidadCompra').setAttribute('onchange','compraJuego2();');
  document.getElementById('metodoEnvio').setAttribute('onchange','compraJuego2();');
  document.getElementById("nombre-compra").innerHTML = juegos[1].nombre;
  document.getElementById("DescPorcentaje").innerHTML = juegos[1].descuento;
  var precioBase = juegos[1].precio;
  var precioIVA = ((precioBase * iva)/100);
  var precioDesc = ((precioBase + precioIVA) * juegos[1].descuento)/100;
  var cantidadItem = document.getElementById("cantidadCompra").value;
  var precioEnvio = document.getElementById("metodoEnvio").value;
  var precioFinal = (precioBase + precioIVA - precioDesc) * cantidadItem * precioEnvio;
  document.getElementById('precioBase').innerHTML = precioBase.toFixed(2);
  document.getElementById('IVAdeJuego').innerHTML = precioIVA.toFixed(2);
  document.getElementById('descuentoJuego').innerHTML = precioDesc.toFixed(2);
  document.getElementById('precioFinal').innerHTML = precioFinal.toFixed(2);
}

function compraJuego3() {
  document.getElementById('formato-digital').setAttribute('onchange','compraJuego3();');
  document.getElementById('formato-fisico').setAttribute('onchange','compraJuego3();');
  document.getElementById('cantidadCompra').setAttribute('onchange','compraJuego3();');
  document.getElementById('metodoEnvio').setAttribute('onchange','compraJuego3();');
  document.getElementById("nombre-compra").innerHTML = juegos[2].nombre;
  document.getElementById("DescPorcentaje").innerHTML = juegos[2].descuento;
  var precioBase = juegos[2].precio;
  var precioIVA = ((precioBase * iva)/100);
  var precioDesc = ((precioBase + precioIVA) * juegos[2].descuento)/100;
  var cantidadItem = document.getElementById("cantidadCompra").value;
  var precioEnvio = document.getElementById("metodoEnvio").value;
  var precioFinal = (precioBase + precioIVA - precioDesc) * cantidadItem * precioEnvio;
  document.getElementById('precioBase').innerHTML = precioBase.toFixed(2);
  document.getElementById('IVAdeJuego').innerHTML = precioIVA.toFixed(2);
  document.getElementById('descuentoJuego').innerHTML = precioDesc.toFixed(2);
  document.getElementById('precioFinal').innerHTML = precioFinal.toFixed(2);
}

function compraJuego4() {
  document.getElementById('formato-digital').setAttribute('onchange','compraJuego4();');
  document.getElementById('formato-fisico').setAttribute('onchange','compraJuego4();');
  document.getElementById('cantidadCompra').setAttribute('onchange','compraJuego4();');
  document.getElementById('metodoEnvio').setAttribute('onchange','compraJuego4();');
  document.getElementById("nombre-compra").innerHTML = juegos[3].nombre;
  document.getElementById("DescPorcentaje").innerHTML = juegos[3].descuento;
  var precioBase = juegos[3].precio;
  var precioIVA = ((precioBase * iva)/100);
  var precioDesc = ((precioBase + precioIVA) * juegos[3].descuento)/100;
  var cantidadItem = document.getElementById("cantidadCompra").value;
  var precioEnvio = document.getElementById("metodoEnvio").value;
  var precioFinal = (precioBase + precioIVA - precioDesc) * cantidadItem * precioEnvio;
  document.getElementById('precioBase').innerHTML = precioBase.toFixed(2);
  document.getElementById('IVAdeJuego').innerHTML = precioIVA.toFixed(2);
  document.getElementById('descuentoJuego').innerHTML = precioDesc.toFixed(2);
  document.getElementById('precioFinal').innerHTML = precioFinal.toFixed(2);
}

function compraJuego5() {
  document.getElementById('formato-digital').setAttribute('onchange','compraJuego5();');
  document.getElementById('formato-fisico').setAttribute('onchange','compraJuego5();');
  document.getElementById('cantidadCompra').setAttribute('onchange','compraJuego5();');
  document.getElementById('metodoEnvio').setAttribute('onchange','compraJuego5();');
  document.getElementById("nombre-compra").innerHTML = juegos[4].nombre;
  document.getElementById("DescPorcentaje").innerHTML = juegos[4].descuento;
  var precioBase = juegos[4].precio;
  var precioIVA = ((precioBase * iva)/100);
  var precioDesc = ((precioBase + precioIVA) * juegos[4].descuento)/100;
  var cantidadItem = document.getElementById("cantidadCompra").value;
  var precioEnvio = document.getElementById("metodoEnvio").value;
  var precioFinal = (precioBase + precioIVA - precioDesc) * cantidadItem * precioEnvio;
  document.getElementById('precioBase').innerHTML = precioBase.toFixed(2);
  document.getElementById('IVAdeJuego').innerHTML = precioIVA.toFixed(2);
  document.getElementById('descuentoJuego').innerHTML = precioDesc.toFixed(2);
  document.getElementById('precioFinal').innerHTML = precioFinal.toFixed(2);
}

function compraJuego6() {
  document.getElementById('formato-digital').setAttribute('onchange','compraJuego6();');
  document.getElementById('formato-fisico').setAttribute('onchange','compraJuego6();');
  document.getElementById('cantidadCompra').setAttribute('onchange','compraJuego6();');
  document.getElementById('metodoEnvio').setAttribute('onchange','compraJuego6();');
  document.getElementById("nombre-compra").innerHTML = juegos[5].nombre;
  document.getElementById("DescPorcentaje").innerHTML = juegos[5].descuento;
  var precioBase = juegos[5].precio;
  var precioIVA = ((precioBase * iva)/100);
  var precioDesc = ((precioBase + precioIVA) * juegos[5].descuento)/100;
  var cantidadItem = document.getElementById("cantidadCompra").value;
  var precioEnvio = document.getElementById("metodoEnvio").value;
  var precioFinal = (precioBase + precioIVA - precioDesc) * cantidadItem * precioEnvio;
  document.getElementById('precioBase').innerHTML = precioBase.toFixed(2);
  document.getElementById('IVAdeJuego').innerHTML = precioIVA.toFixed(2);
  document.getElementById('descuentoJuego').innerHTML = precioDesc.toFixed(2);
  document.getElementById('precioFinal').innerHTML = precioFinal.toFixed(2);
}

function compraJuego7() {
  document.getElementById('formato-digital').setAttribute('onchange','compraJuego7();');
  document.getElementById('formato-fisico').setAttribute('onchange','compraJuego7();');
  document.getElementById('cantidadCompra').setAttribute('onchange','compraJuego7();');
  document.getElementById('metodoEnvio').setAttribute('onchange','compraJuego7();');
  document.getElementById("nombre-compra").innerHTML = juegos[6].nombre;
  document.getElementById("DescPorcentaje").innerHTML = juegos[6].descuento;
  var precioBase = juegos[6].precio;
  var precioIVA = ((precioBase * iva)/100);
  var precioDesc = ((precioBase + precioIVA) * juegos[6].descuento)/100;
  var cantidadItem = document.getElementById("cantidadCompra").value;
  var precioEnvio = document.getElementById("metodoEnvio").value;
  var precioFinal = (precioBase + precioIVA - precioDesc) * cantidadItem * precioEnvio;
  document.getElementById('precioBase').innerHTML = precioBase.toFixed(2);
  document.getElementById('IVAdeJuego').innerHTML = precioIVA.toFixed(2);
  document.getElementById('descuentoJuego').innerHTML = precioDesc.toFixed(2);
  document.getElementById('precioFinal').innerHTML = precioFinal.toFixed(2);
}

function compraJuego8() {
  document.getElementById('formato-digital').setAttribute('onchange','compraJuego8();');
  document.getElementById('formato-fisico').setAttribute('onchange','compraJuego8();');
  document.getElementById('cantidadCompra').setAttribute('onchange','compraJuego8();');
  document.getElementById('metodoEnvio').setAttribute('onchange','compraJuego8();');
  document.getElementById("nombre-compra").innerHTML = juegos[7].nombre;
  document.getElementById("DescPorcentaje").innerHTML = juegos[7].descuento;
  var precioBase = juegos[7].precio;
  var precioIVA = ((precioBase * iva)/100);
  var precioDesc = ((precioBase + precioIVA) * juegos[7].descuento)/100;
  var cantidadItem = document.getElementById("cantidadCompra").value;
  var precioEnvio = document.getElementById("metodoEnvio").value;
  var precioFinal = (precioBase + precioIVA - precioDesc) * cantidadItem * precioEnvio;
  document.getElementById('precioBase').innerHTML = precioBase.toFixed(2);
  document.getElementById('IVAdeJuego').innerHTML = precioIVA.toFixed(2);
  document.getElementById('descuentoJuego').innerHTML = precioDesc.toFixed(2);
  document.getElementById('precioFinal').innerHTML = precioFinal.toFixed(2);
}

function compraJuego9() {
  document.getElementById('formato-digital').setAttribute('onchange','compraJuego9();');
  document.getElementById('formato-fisico').setAttribute('onchange','compraJuego9();');
  document.getElementById('cantidadCompra').setAttribute('onchange','compraJuego9();');
  document.getElementById('metodoEnvio').setAttribute('onchange','compraJuego9();');
  document.getElementById("nombre-compra").innerHTML = juegos[8].nombre;
  document.getElementById("DescPorcentaje").innerHTML = juegos[8].descuento;
  var precioBase = juegos[8].precio;
  var precioIVA = ((precioBase * iva)/100);
  var precioDesc = ((precioBase + precioIVA) * juegos[8].descuento)/100;
  var cantidadItem = document.getElementById("cantidadCompra").value;
  var precioEnvio = document.getElementById("metodoEnvio").value;
  var precioFinal = (precioBase + precioIVA - precioDesc) * cantidadItem * precioEnvio;
  document.getElementById('precioBase').innerHTML = precioBase.toFixed(2);
  document.getElementById('IVAdeJuego').innerHTML = precioIVA.toFixed(2);
  document.getElementById('descuentoJuego').innerHTML = precioDesc.toFixed(2);
  document.getElementById('precioFinal').innerHTML = precioFinal.toFixed(2);
}
