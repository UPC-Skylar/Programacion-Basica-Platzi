function iniciarJuego() {}

function seleccionarMascota() {
  let seleccion = "";
  switch (true) {
    case document.getElementById("Charmander").checked:
      seleccion = "Charmander 🔥";
      break;
    case document.getElementById("Bulbasaur").checked:
      seleccion = "Bulbasaur 🌿";
      break;
    case document.getElementById("Squirtle").checked:
      seleccion = "Squirtle 💧";
      break;
    case document.getElementById("Volcanion").checked:
      seleccion = "Volcanion 🔥💧";
      break;
    case document.getElementById("Lotad").checked:
      seleccion = "Lotad 💧🌿";
      break;
    case document.getElementById("Scovillain").checked:
      seleccion = "Scovillain 🔥🌿";
      break;
    default:
      seleccion = "ningún pokemon, por favor elige una de las opciones";
  }
  alert("Has seleccionado " + seleccion);
}

let botonMascota = document.getElementById("boton-pokemon");
botonMascota.addEventListener("click", seleccionarMascota);
