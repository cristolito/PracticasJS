// Saber tiene la edad suficiente para conducir
const form1 = document.getElementById("form1");
const edad = document.getElementById("conducir-input");
const conducirbtn = document.getElementById("conducir-btn");
const conducirDiv = document.getElementById("conducir-div");

// Formulario de calificaciones
const form2 = document.getElementById("form2");
const cal = document.getElementById("calificacion-input");
const calBtn = document.getElementById("calificacion-btn");
const calDiv = document.getElementById("calificacion-div");

// Para concatenar cadenas
const cadenasBtn = document.getElementById("cadenas-btn")
const cadenasDiv = document.getElementById("cadenas-div")

// Para crear DNi
const DNIBtn = document.getElementById("DNI-btn")
const DNIDiv = document.getElementById("DNI-div")

form1.addEventListener("submit", (e) => {
  e.preventDefault();
});

form2.addEventListener("submit", (e) => {
  e.preventDefault();
});

// Es mayor de edad
conducirbtn.addEventListener("click", () => {
  if (edad.value >= 18 && edad.value <= 130) {
    conducirDiv.innerHTML = "Tienes la edad suficiente para conducir";
  } else if (edad.value >= 5 && edad.value < 18) {
    conducirDiv.innerHTML = "No tienes la edad suficiente para conducir";
  } else {
    conducirDiv.innerHTML = "Se ha ingresado un valor sin sentido";
  }
});

// Desempeño de una calificación
calBtn.addEventListener("click", () => {
  if (cal.value < 0 || cal.value > 10 || cal.value === "") {
    calDiv.innerHTML = "Ingrese un valor númerico valido";
  } else {
    switch (Math.round(cal.value)) {
      case 0:
      case 1:
      case 2:
        calDiv.innerHTML = "Muy deficiente";
        break;
      case 3:
      case 4:
        calDiv.innerHTML = "Insuficiente";
        break;
      case 5:
        calDiv.innerHTML = "Suficiente";
        break;
      case 6:
        calDiv.innerHTML = "Bien";
        break;
      case 7:
      case 8:
        calDiv.innerHTML = "Notable";
        break;
      case 9:
      case 10:
        calDiv.innerHTML = "Sobresaliente";
        break;
    }
  }
});

// Concatenar cadenas con el metodo prompt
let cadenas = [];

cadenasBtn.addEventListener("click", () => {
    while (true) {
        let entrada = prompt("Ingrese una cadena de texto (o presione 'cancelar' para salir):");
      
        if (entrada === null) {
          break;
        }
      
        cadenas.push(entrada);
      }
      
      let resultado = cadenas.join("-");
      
      cadenasDiv.innerHTML = "Cadenas concatenadas: " + resultado;
})

// DNI
const calcularLetraDNI = () =>  {
    while (true) {
      let numero = prompt("Ingrese el número de DNI (0 - 99999999):");

      if (numero === null) {
        break;
      }

      if (isNaN(numero)) {
        alert("Debe ingresar un número válido. Inténtelo de nuevo.");
        continue;
      }

      numero = Number(numero);

      if (numero < 0 || numero > 99999999) {
        alert("El número de DNI debe estar entre 0 y 99999999. Inténtelo de nuevo.");
        continue;
      }

      let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
      let resto = numero % 23;
      let letraDNI = letras.charAt(resto);

      DNIDiv.innerHTML = "La letra del DNI " + numero + " es: " + letraDNI;
    }
  }

DNIBtn.addEventListener("click", calcularLetraDNI)

