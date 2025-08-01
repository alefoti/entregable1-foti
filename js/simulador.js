// ---------------------------
// Simulador de Presupuesto de Viaje
// ---------------------------

// 1. BIENVENIDA
alert("¡Bienvenido/a al simulador de presupuesto de viaje!");

// 2. INGRESO DE DATOS DEL USUARIO
const nombre = prompt("Ingresá tu nombre:");
const email = prompt("Ingresá tu correo electrónico:");

let cantidadPersonas = parseInt(prompt("¿Cuántas personas van a viajar?"));
while (isNaN(cantidadPersonas) || cantidadPersonas <= 0) {
  cantidadPersonas = parseInt(
    prompt("Por favor, ingresá un número válido de personas:")
  );
}

// 3. INGRESAR EDADES DE CADA PERSONA
const edades = [];

for (let i = 1; i <= cantidadPersonas; i++) {
  let edad = parseInt(prompt(`Ingresá la edad del pasajero ${i}:`));
  while (isNaN(edad) || edad <= 0) {
    edad = parseInt(
      prompt(`Edad no válida. Reingresá la edad del pasajero ${i}:`)
    );
  }
  edades.push(edad);
}

console.log("👥 Edades de los pasajeros:", edades);

// 4. SELECCIÓN DE PRESUPUESTO
let estilo = prompt(
  "Seleccioná el tipo de presupuesto:\n- mochilero\n- estandar\n- lujo"
).toLowerCase();

while (estilo !== "mochilero" && estilo !== "estandar" && estilo !== "lujo") {
  estilo = prompt(
    "Estilo no válido. Elegí entre: mochilero, estandar o lujo"
  ).toLowerCase();
}

// 5. SELECCIÓN DE DÍAS DE VIAJE
const diasDisponibles = [4, 8, 11, 14, 15, 18, 22, 26];
let dias = parseInt(
  prompt(
    `¿Cuántos días van a viajar? Elegí una opción válida: ${diasDisponibles.join(
      ", "
    )}`
  )
);

while (!diasDisponibles.includes(dias)) {
  dias = parseInt(
    prompt(`Día no válido. Elegí uno de estos: ${diasDisponibles.join(", ")}`)
  );
}

// 6. RESUMEN DE ENTRADA
alert(
  `Resumen del viaje:\n` +
    `Nombre: ${nombre}\n` +
    `Email: ${email}\n` +
    `Personas: ${cantidadPersonas} (${edades.join(", ")})\n` +
    `Estilo: ${estilo}\n` +
    `Días: ${dias}`
);

console.log("✅ Datos del viaje cargados:");
console.log({ nombre, email, cantidadPersonas, edades, estilo, dias });

const opcionesViaje = {
  mochilero: {
    alojamiento: [
      { nombre: "Hostel básico", precio: 30 },
      { nombre: "Hostel con desayuno", precio: 38 },
      { nombre: "Habitación compartida", precio: 25 },
    ],
    transporte: [{ nombre: "Bus local", precio: 50 }],
    excursiones: [
      { nombre: "Walking tour", precio: 15 },
      { nombre: "Entrada museo", precio: 12 },
      { nombre: "Tour comida callejera", precio: 18 },
    ],
    seguro: [
      { nombre: "Seguro básico", precio: 20 },
      { nombre: "Seguro mochilero", precio: 25 },
      { nombre: "Seguro internacional económico", precio: 30 },
    ],
  },
  estandar: {
    alojamiento: [
      { nombre: "Hotel 3 estrellas", precio: 90 },
      { nombre: "Airbnb privado", precio: 100 },
      { nombre: "Hotel con desayuno", precio: 110 },
    ],
    transporte: [{ nombre: "Tren regional", precio: 80 }],
    excursiones: [
      { nombre: "Tour guiado", precio: 35 },
      { nombre: "Entrada a monumentos", precio: 40 },
      { nombre: "Excursión de medio día", precio: 45 },
    ],
    seguro: [
      { nombre: "Seguro estándar", precio: 40 },
      { nombre: "Seguro multiviaje", precio: 50 },
      { nombre: "Seguro con asistencia médica", precio: 55 },
    ],
  },
  lujo: {
    alojamiento: [
      { nombre: "Hotel 5 estrellas", precio: 200 },
      { nombre: "Resort all inclusive", precio: 250 },
      { nombre: "Suite boutique", precio: 280 },
    ],
    transporte: [{ nombre: "Tren alta velocidad + traslados", precio: 160 }],
    excursiones: [
      { nombre: "Tour privado con guía", precio: 90 },
      { nombre: "Cena show exclusiva", precio: 120 },
      { nombre: "Excursión premium", precio: 140 },
    ],
    seguro: [
      { nombre: "Seguro premium", precio: 100 },
      { nombre: "Seguro con cancelación", precio: 120 },
      { nombre: "Seguro VIP", precio: 150 },
    ],
  },
};

const categoria = opcionesViaje[estilo];

function elegirOpcion(nombreCategoria, opciones) {
  console.log(`📦 Estas son las opciones para ${nombreCategoria}:`, opciones);

  let mensaje = `Elegí una opción para ${nombreCategoria}:\n`;
  for (let i = 0; i < opciones.length; i++) {
    mensaje += `${i + 1}. ${opciones[i].nombre} ($${opciones[i].precio})\n`;
  }

  let seleccion = parseInt(prompt(mensaje));
  while (isNaN(seleccion) || seleccion < 1 || seleccion > opciones.length) {
    seleccion = parseInt(prompt("Opción inválida. Reintentá:\n" + mensaje));
  }

  return opciones[seleccion - 1];
}

const alojamientoElegido = elegirOpcion("alojamiento", categoria.alojamiento);
const transporteElegido = elegirOpcion("transporte", categoria.transporte);
const excursionElegida = elegirOpcion("excursiones", categoria.excursiones);
const seguroElegido = elegirOpcion("seguro", categoria.seguro);

function calcularTotal(
  alojamiento,
  transporte,
  excursion,
  seguro,
  dias,
  personas
) {
  return (
    (alojamiento.precio * dias +
      transporte.precio +
      excursion.precio +
      seguro.precio) *
    personas
  );
}

const presupuestoTotal = calcularTotal(
  alojamientoElegido,
  transporteElegido,
  excursionElegida,
  seguroElegido,
  dias,
  cantidadPersonas
);

function mostrarResumen() {
  alert(
    `Presupuesto final:\n` +
      `Alojamiento: ${alojamientoElegido.nombre} x ${dias} días → $${
        alojamientoElegido.precio * dias
      }\n` +
      `Transporte: ${transporteElegido.nombre} → $${transporteElegido.precio}\n` +
      `Excursión: ${excursionElegida.nombre} → $${excursionElegida.precio}\n` +
      `Seguro: ${seguroElegido.nombre} → $${seguroElegido.precio}\n\n` +
      `Total por ${cantidadPersonas} personas: $${presupuestoTotal}`
  );

  console.log("💸 Presupuesto total:", presupuestoTotal);
}

mostrarResumen();
