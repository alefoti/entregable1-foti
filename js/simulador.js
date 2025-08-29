// ---------------------------
// Simulador de Presupuesto de Viaje
// ---------------------------

// 1. BIENVENIDA
//alert("¡Bienvenido/a al simulador de presupuesto de viaje!");

// 2. INGRESO DE DATOS DEL USUARIO
//const nombre = prompt("Ingresá tu nombre:");
//const email = prompt("Ingresá tu correo electrónico:");

//let cantidadPersonas = parseInt(prompt("¿Cuántas personas van a viajar?"));
//while (isNaN(cantidadPersonas) || cantidadPersonas <= 0) {
 // cantidadPersonas = parseInt(
   // prompt("Por favor, ingresá un número válido de personas:")
//  );
//}

// 3. INGRESAR EDADES DE CADA PERSONA
//const edades = [];

//for (let i = 1; i <= cantidadPersonas; i++) {
  //let edad = parseInt(prompt(`Ingresá la edad del pasajero ${i}:`));
 // while (isNaN(edad) || edad <= 0) {
   // edad = parseInt(
     // prompt(`Edad no válida. Reingresá la edad del pasajero ${i}:`)
    //);
  //}
  //edades.push(edad);
//}

//console.log("👥 Edades de los pasajeros:", edades);

// 4. SELECCIÓN DE PRESUPUESTO
//let estilo = prompt(
//  "Seleccioná el tipo de presupuesto:\n- mochilero\n- estandar\n- lujo"
//).toLowerCase();

//while (estilo !== "mochilero" && estilo !== "estandar" && estilo !== "lujo") {
  //estilo = prompt(
    //"Estilo no válido. Elegí entre: mochilero, estandar o lujo"
  //).toLowerCase();
//}

// 5. SELECCIÓN DE DÍAS DE VIAJE
//const diasDisponibles = [4, 8, 11, 14, 15, 18, 22, 26];
//let dias = parseInt(
 // prompt(
   // `¿Cuántos días van a viajar? Elegí una opción válida: ${diasDisponibles.join(
    //  ", "
    //)}`
 // )
// );

//while (!diasDisponibles.includes(dias)) {
  //dias = parseInt(
   // prompt(`Día no válido. Elegí uno de estos: ${diasDisponibles.join(", ")}`)
//  );
// }

// 6. RESUMEN DE ENTRADA
//alert(
//  `Resumen del viaje:\n` +
//    `Nombre: ${nombre}\n` +
//    `Email: ${email}\n` +
//    `Personas: ${cantidadPersonas} (${edades.join(", ")})\n` +
//    `Estilo: ${estilo}\n` +
//    `Días: ${dias}`
// );

//console.log("✅ Datos del viaje cargados:");
//console.log({ nombre, email, cantidadPersonas, edades, estilo, dias });

//const opcionesViaje = {
//  mochilero: {
//    alojamiento: [
//      { nombre: "Hostel básico", precio: 30 },
//      { nombre: "Hostel con desayuno", precio: 38 },
//      { nombre: "Habitación compartida", precio: 25 },
//    ],
//    transporte: [{ nombre: "Bus local", precio: 50 }],
//    excursiones: [
//      { nombre: "Walking tour", precio: 15 },
//      { nombre: "Entrada museo", precio: 12 },
//      { nombre: "Tour comida callejera", precio: 18 },
//    ],
//    seguro: [
//      { nombre: "Seguro básico", precio: 20 },
//      { nombre: "Seguro mochilero", precio: 25 },
//      { nombre: "Seguro internacional económico", precio: 30 },
//    ],
//  },
//  estandar: {
//    alojamiento: [
//      { nombre: "Hotel 3 estrellas", precio: 90 },
//      { nombre: "Airbnb privado", precio: 100 },
//      { nombre: "Hotel con desayuno", precio: 110 },
//    ],
//    transporte: [{ nombre: "Tren regional", precio: 80 }],
//    excursiones: [
//      { nombre: "Tour guiado", precio: 35 },
//      { nombre: "Entrada a monumentos", precio: 40 },
//      { nombre: "Excursión de medio día", precio: 45 },
//    ],
//    seguro: [
//      { nombre: "Seguro estándar", precio: 40 },
//      { nombre: "Seguro multiviaje", precio: 50 },
//      { nombre: "Seguro con asistencia médica", precio: 55 },
//    ],
//  },
//  lujo: {
//    alojamiento: [
//      { nombre: "Hotel 5 estrellas", precio: 200 },
//      { nombre: "Resort all inclusive", precio: 250 },
//      { nombre: "Suite boutique", precio: 280 },
//    ],
//    transporte: [{ nombre: "Tren alta velocidad + traslados", precio: 160 }],
//    excursiones: [
//      { nombre: "Tour privado con guía", precio: 90 },
//      { nombre: "Cena show exclusiva", precio: 120 },
//      { nombre: "Excursión premium", precio: 140 },
//    ],
//    seguro: [
//      { nombre: "Seguro premium", precio: 100 },
//      { nombre: "Seguro con cancelación", precio: 120 },
//      { nombre: "Seguro VIP", precio: 150 },
//    ],
//  },
// };

//const categoria = opcionesViaje[estilo];

// function elegirOpcion(nombreCategoria, opciones) {
//  console.log(`📦 Estas son las opciones para ${nombreCategoria}:`, opciones);

//  let mensaje = `Elegí una opción para ${nombreCategoria}:\n`;
//  for (let i = 0; i < opciones.length; i++) {
//    mensaje += `${i + 1}. ${opciones[i].nombre} ($${opciones[i].precio})\n`;
//  }

//  let seleccion = parseInt(prompt(mensaje));
//  while (isNaN(seleccion) || seleccion < 1 || seleccion > opciones.length) {
//    seleccion = parseInt(prompt("Opción inválida. Reintentá:\n" + mensaje));
//  }

//  return opciones[seleccion - 1];
//}

//const alojamientoElegido = elegirOpcion("alojamiento", categoria.alojamiento);
//const transporteElegido = elegirOpcion("transporte", categoria.transporte);
//const excursionElegida = elegirOpcion("excursiones", categoria.excursiones);
//const seguroElegido = elegirOpcion("seguro", categoria.seguro);

//function calcularTotal(
//  alojamiento,
//  transporte,
//  excursion,
//  seguro,
//  dias,
//  personas
// ) {
//  return (
//    (alojamiento.precio * dias +
//      transporte.precio +
//      excursion.precio +
//      seguro.precio) *
//    personas
//  );
// }

//const presupuestoTotal = calcularTotal(
//  alojamientoElegido,
//  transporteElegido,
//  excursionElegida,
//  seguroElegido,
//  dias,
//  cantidadPersonas
// );

//function mostrarResumen() {
//  alert(
//    `Presupuesto final:\n` +
//      `Alojamiento: ${alojamientoElegido.nombre} x ${dias} días → $${
//        alojamientoElegido.precio * dias
//      }\n` +
//      `Transporte: ${transporteElegido.nombre} → $${transporteElegido.precio}\n` +
//      `Excursión: ${excursionElegida.nombre} → $${excursionElegida.precio}\n` +
//      `Seguro: ${seguroElegido.nombre} → $${seguroElegido.precio}\n\n` +
//      `Total por ${cantidadPersonas} personas: $${presupuestoTotal}`
//  );

//  console.log("💸 Presupuesto total:", presupuestoTotal);
// }


// mostrarResumen();

// -------------------------
// -------------------------
// 1. Datos base por estilo
// -------------------------
const opcionesViaje = {
  mochilero: {
    alojamiento: [
      { nombre: "Hostel básico", precio: 30 },
      { nombre: "Hostel con desayuno", precio: 38 },
      { nombre: "Habitación compartida", precio: 25 }
    ],
    transporte: [
      { nombre: "Bus local", precio: 10 },
      { nombre: "Tren regional", precio: 20 }
    ],
    excursiones: [
      { nombre: "Walking tour", precio: 0 },
      { nombre: "Excursión económica", precio: 15 },
      { nombre: "Excursión clásica", precio: 25 }
    ],
    seguro: [
      { nombre: "Básico", precio: 5 },
      { nombre: "Cobertura media", precio: 10 }
    ]
  },
  estandar: {
    alojamiento: [
      { nombre: "Hotel 3 estrellas", precio: 90 },
      { nombre: "Apartamento turístico", precio: 80 },
      { nombre: "Hotel boutique", precio: 110 }
    ],
    transporte: [
      { nombre: "Tren alta velocidad", precio: 50 },
      { nombre: "Alquiler auto básico", precio: 60 }
    ],
    excursiones: [
      { nombre: "City tour completo", precio: 35 },
      { nombre: "Excursión gastronómica", precio: 40 },
      { nombre: "Tour histórico", precio: 30 }
    ],
    seguro: [
      { nombre: "Cobertura media", precio: 20 },
      { nombre: "Cobertura completa", precio: 30 }
    ]
  },
  lujo: {
    alojamiento: [
      { nombre: "Hotel 5 estrellas", precio: 200 },
      { nombre: "Resort con spa", precio: 250 },
      { nombre: "Suite de lujo", precio: 300 }
    ],
    transporte: [
      { nombre: "Alquiler de coche premium", precio: 150 },
      { nombre: "Tren primera clase", precio: 100 }
    ],
    excursiones: [
      { nombre: "Tour privado", precio: 100 },
      { nombre: "Experiencia gourmet", precio: 120 },
      { nombre: "Paseo en yate", precio: 150 }
    ],
    seguro: [
      { nombre: "Premium internacional", precio: 50 },
      { nombre: "VIP total", precio: 70 }
    ]
  }
};

// ------------------------------
// 2. Esperar a que cargue el DOM
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formularioViaje");

  formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";

    // ----------------------------
    // 3. Capturar valores del form
    // ----------------------------
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const personas = parseInt(document.getElementById("personas").value);
    const edad = parseInt(document.getElementById("edad").value);
    const estilo = document.getElementById("estilo").value;
    const dias = parseInt(document.getElementById("dias").value);

    // ----------------------------
    // 4. Mostrar mensaje inicial
    // ----------------------------
    resultadoDiv.innerHTML = `
      <div class="alert alert-info">
        <strong>¡Hola ${nombre}!</strong> Calculando presupuesto para ${personas} persona(s) por ${dias} días en modo <strong>${estilo}</strong>...
      </div>
    `;

    // -------------------------------------
    // 5. Mostrar selects según el estilo
    // -------------------------------------
    const categoria = opcionesViaje[estilo];

    for (let tipo in categoria) {
      const label = document.createElement("label");
      label.textContent = `🧾 ${tipo.charAt(0).toUpperCase() + tipo.slice(1)}`;
      label.className = "form-label mt-3";

      const select = document.createElement("select");
      select.className = "form-select mb-3";
      select.id = tipo;

      categoria[tipo].forEach((opcion, index) => {
        const opt = document.createElement("option");
        opt.value = index;
        opt.textContent = `${opcion.nombre} - $${opcion.precio}`;
        select.appendChild(opt);
      });

      resultadoDiv.appendChild(label);
      resultadoDiv.appendChild(select);
    }

    // -------------------------------
    // 6. Agregar botón de calcular total
    // -------------------------------
    const botonCalcular = document.createElement("button");
    botonCalcular.textContent = "Calcular presupuesto total";
    botonCalcular.className = "btn btn-primary mt-3";
    botonCalcular.id = "btnCalcular";
    resultadoDiv.appendChild(botonCalcular);

    // -------------------------------
    // 7. Escuchar el click del botón
    // -------------------------------
    botonCalcular.addEventListener("click", () => {
      let total = 0;

      for (let tipo in categoria) {
        const select = document.getElementById(tipo);
        const indice = parseInt(select.value);
        const precio = categoria[tipo][indice].precio;
        total += precio * dias * personas;
      }

      const resultadoFinal = document.createElement("div");
      resultadoFinal.className = "alert alert-success mt-4";
      resultadoFinal.innerHTML = `
        <strong>Presupuesto total estimado:</strong><br>
        💰 <span style="font-size: 1.5rem;">$${total}</span> USD
      `;

      resultadoDiv.appendChild(resultadoFinal);

      const resumenViaje = {
        nombre,
        email,
        personas,
        edad,
        estilo,
        dias,
        total
      };
      localStorage.setItem("presupuestoViaje", JSON.stringify(resumenViaje));
    });
  });
});
