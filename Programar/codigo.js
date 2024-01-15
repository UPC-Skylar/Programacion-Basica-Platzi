/* NOTA: 1 es piedra, 2 es papel y 3 es tijera*/
// 1. Declaramos la función eleccion que nos servirá para implementar la NOTA anterior
function eleccion(jugada) {
  let resultado = "";
  if (jugada == 1) {
    resultado = "Piedra 🪨";
  } else if (jugada == 2) {
    resultado = "Papel 🧻";
  } else if (jugada == 3) {
    resultado = "Tijera ✂️";
  } else {
    resultado =
      "una opción incorrecta, vuelve a ingresar un número entre 1 a 3";
  }
  return resultado;
}

//2. Creamos una función para combate y reducir el código en el while
function combate(pc, jugador) {
  if (pc == jugador) {
    alert("Empate 🙌🏻");
  } else if (
    (jugador == 1 && pc == 3) ||
    (jugador == 2 && pc == 1) ||
    (jugador == 3 && pc == 2)
  ) {
    alert("Ganaste 🏆");
    return true;
  } else {
    alert("Perdiste 😭");
    return false;
  }
}

//Inicializamos las variables con 0
let jugador = 0;
let triunfos = 0;
let perdidas = 0;

//Usaremos un bucle while para repetir el proceso del juego hasta tener 3 victorias o derrotas
while (triunfos < 3 && perdidas < 3) {
  let pc = Math.floor(Math.random() * 2 + 1);
  jugador = prompt("Elige: \n1.Piedra\n2.Papel\n3.Tijera");
  alert("Elegiste " + eleccion(jugador));
  alert("PC elige " + eleccion(pc));
  combate(pc, jugador) ? triunfos++ : perdidas++;
  alert(`Registro Actual:\nGanadas: ${triunfos}\nPerdidas: ${perdidas} `);
}

//Por último creamos una alerta para el usuario indicandole si gano o perdio el juego
if (triunfos === 3) alert("Felicidades!! Ganaste el juego 🎖️");
if (perdidas === 3) alert("Perdiste el juego 🫵🏼😂");
