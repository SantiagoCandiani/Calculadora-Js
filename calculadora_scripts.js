function agregarNumero(numero) {
  calc.box.value += numero;
}

function agregarOperador(operador) {
  var act = calc.box.value;
  var ultimoCaracter = act.charAt(act.length - 1);
  if (
    ultimoCaracter == "+" ||
    ultimoCaracter == "-" ||
    ultimoCaracter == "/" ||
    ultimoCaracter == "*"
  ) {
    calc.box.value = act.substring(0, act.length - 1);
  }
  calc.box.value += operador;
}

function calcularResultado() {
  try {
    calc.box.value = eval(calc.box.value);
  } catch (error) {
    alert("Operación no válida");
    calc.box.value = "";
  }
}
