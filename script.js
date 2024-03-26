// Convertor de monedas
document.getElementById("conversionForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe

  var userName = document.getElementById("userName").value;
  userName = userName.charAt(0).toUpperCase() + userName.slice(1);

  var monedaOrigen = document.getElementById("monedaOrigen").value;

  var cantidad = parseFloat(document.getElementById("cantidad").value);

  var monedaDestino = document.getElementById("monedaDestino").value;

  var resultado;

switch (parseInt(monedaOrigen)) {
  case 1: // Dólares
    switch (parseInt(monedaDestino)) {
      case 1: // Dólares
        resultado = cantidad;
        break;
      case 2: // Soles
        resultado = cantidad * 3.7; // Tipo de cambio de dólares a sol peruano
        break;
      case 3: // Euros
        resultado = cantidad * 0.92; // Tipo de cambio de dólares a euros
        break;
      case 4: // Pesos Argentinos
        resultado = cantidad * 856.25; // Tipo de cambio de dólares a pesos argentinos
        break;
      case 5: // Pesos Colombianos
        resultado = cantidad * 3887.0; // Tipo de cambio de dólares a pesos colombianos
        break;
      case 6: // Pesos Chilenos
        resultado = cantidad * 978.38; // Tipo de cambio de dólares a pesos chilenos
        break;
      default:
        alert("Moneda de destino no válida.");
        break;
    }
    break;
  case 2: // Soles
    switch (parseInt(monedaDestino)) {
      case 1: // Dólares
        resultado = cantidad * 0.27; // Tipo de cambio de sol peruano a dólares
        break;
      case 2: // Soles
        resultado = cantidad;
        break;
      case 3: // Euros
        resultado = cantidad * 0.25; // Tipo de cambio de soles a euros
        break;
      case 4: // Pesos Argentinos
        resultado = cantidad * 231.42; // Tipo de cambio de soles a pesos argentinos
        break;
      case 5: // Pesos Colombianos
        resultado = cantidad * 1050.57; // Tipo de cambio de soles a pesos colombianos
        break;
      case 6: // Pesos Chilenos
        resultado = cantidad * 264.43; // Tipo de cambio de soles a pesos chilenos
        break;
      default:
        alert("Moneda de destino no válida.");
        break;
    }
    break;
  case 3: // Euros
    switch (parseInt(monedaDestino)) {
      case 1: // Dólares
        resultado = cantidad * 1.08; // Tipo de cambio de euros a dólares
        break;
      case 2: // Soles
        resultado = cantidad * 4.01; // Tipo de cambio de euros a sol peruano
        break;
      case 3: // Euros
        resultado = cantidad;
        break;
      case 4: // Pesos Argentinos
        resultado = cantidad * 928.13; // Tipo de cambio de euros a pesos argentinos
        break;
      case 5: // Pesos Colombianos
        resultado = cantidad * 4212.71; // Tipo de cambio de euros a pesos colombianos
        break;
      case 6: // Pesos Chilenos
        resultado = cantidad * 1060.36; // Tipo de cambio de euros a pesos chilenos
        break;
      default:
        alert("Moneda de destino no válida.");
        break;
    }
    break;
  case 4: // Pesos Argentinos
    switch (parseInt(monedaDestino)) {
      case 1: // Dólares
        resultado = cantidad * 0.0012; // Tipo de cambio de pesos argentinos a dólares
        break;
      case 2: // Soles
        resultado = cantidad * 0.0043; // Tipo de cambio de pesos argentinos a sol peruano
        break;
      case 3: // Euros
        resultado = cantidad * 0.0011; // Tipo de cambio de pesos argentinos a euros
        break;
      case 4: // Pesos Argentinos
        resultado = cantidad;
        break;
      case 5: // Pesos Colombianos
        resultado = cantidad * 4.54; // Tipo de cambio de pesos argentinos a pesos colombianos
        break;
      case 6: // Pesos Chilenos
        resultado = cantidad * 1.14; // Tipo de cambio de pesos argentinos a pesos chilenos
        break;
      default:
        alert("Moneda de destino no válida.");
        break;
    }
    break;
  case 5: // Pesos Colombianos
    switch (parseInt(monedaDestino)) {
      case 1: // Dólares
        resultado = cantidad * 0.00026; // Tipo de cambio de pesos colombianos a dólares
        break;
      case 2: // Soles
        resultado = cantidad * 0.00095; // Tipo de cambio de pesos colombianos a sol peruano
        break;
      case 3: // Euros
        resultado = cantidad * 0.00024; // Tipo de cambio de pesos colombianos a euros
        break;
      case 4: // Pesos Argentinos
        resultado = cantidad * 0.22; // Tipo de cambio de pesos colombianos a pesos argentinos
        break;
      case 5: // Pesos Colombianos
        resultado = cantidad;
        break;
      case 6: // Pesos Chilenos
        resultado = cantidad * 0.25; // Tipo de cambio de pesos colombianos a pesos chilenos
        break;
      default:
        alert("Moneda de destino no válida.");
        break;
    }
    break;
  case 6: // Pesos Chilenos
    switch (parseInt(monedaDestino)) {
      case 1: // Dólares
        resultado = cantidad * 0.001; // Tipo de cambio de pesos chilenos a dólares
        break;
      case 2: // Soles
        resultado = cantidad * 0.0038; // Tipo de cambio de pesos chilenos a soles
        break;
      case 3: // Euros
        resultado = cantidad * 0.00094; // Tipo de cambio de pesos chilenos a euros
        break;
      case 4: // Pesos Argentinos
        resultado = cantidad * 0.88; // Tipo de cambio de pesos chilenos a pesos argentinos
        break;
      case 5: // Pesos Colombianos
        resultado = cantidad * 3.97; // Tipo de cambio de pesos chilenos a pesos colombianos
        break;
      case 6: // Pesos Chilenos
        resultado = cantidad;
        break;
      default:
        alert("Moneda de destino no válida.");
        break;
    }
    break;
  default:
    alert("Moneda de origen no válida.");
    break;
}

if (resultado !== undefined) {
    document.getElementById("resultadoConversion").innerText = "Hola " + userName + "! El resultado de convertir " +
      cantidad +
      " " +
      obtenerNombreMoneda(monedaOrigen) +
      " a " +
      obtenerNombreMoneda(monedaDestino) +
      " es: " +
      resultado.toFixed(2);
  }
});

function obtenerNombreMoneda(codigoMoneda) {
  switch (parseInt(codigoMoneda)) {
    case 1:
      return "Dólares";
    case 2:
      return "Soles";
    case 3:
      return "Euros";
    case 4:
      return "Pesos Argentinos";
    case 5:
      return "Pesos Colombianos";
    case 6:
      return "Pesos Chilenos";
    default:
      return "Moneda no válida";
  }
}