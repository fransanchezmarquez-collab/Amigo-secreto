// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// -----------------------------
// Juego del Amigo Secreto 🎁
// -----------------------------

let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
  let input = document.getElementById("amigo");
  let nombre = input.value.trim();

  if (nombre === "") {
    alert("⚠️ Por favor, ingresa un nombre válido.");
    return;
  }

  amigos.push(nombre);
  mostrarLista();
  input.value = ""; // limpiar el campo después de añadir
}

// Función para mostrar la lista en pantalla
function mostrarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // limpiar antes de volver a pintar

  amigos.forEach(amigo => {
    let li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

// Función para sortear un amigo
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("⚠️ La lista está vacía. Agrega nombres antes de sortear.");
    return;
  }

  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoSecreto = amigos[indiceAleatorio];

  let resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // limpiar resultados anteriores

  let li = document.createElement("li");
  li.textContent = `🎉 El amigo secreto es: ${amigoSecreto}`;
  resultado.appendChild(li);
}

