import { getData } from "./servicios/llamados.js";
const Usuario = document.getElementById("Usuario");
const Contrasenia = document.getElementById("Contrasenia");
const Boton = document.getElementById("btnRegistro");

Boton.addEventListener("click", async function () {
  const datos = await getData("usuarios");
  datos.forEach((dato) => {
    if (
      dato.Usuario === Usuario.value &&
      dato.Contrasenia === Contrasenia.value
    ) {
      console.log("Correcto");
      localStorage.setItem("nombreUsuario", dato.Usuario);
      window.location.href = "/pags/paginaPrin.html";
      return;
    } else {
      console.log("Incorrecto");
      return;
    }

  });
});

