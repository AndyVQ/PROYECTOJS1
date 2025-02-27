import { postData } from "../servicios/llamados.js";
const btn = document.getElementById("btnRegistro");
const Usuario = document.getElementById("Usuario");
const Contrasenia = document.getElementById("Contrasenia");

btn.addEventListener("click", async function () {
  if (Usuario === "" || Contrasenia === "") {
    alert("Llene todos los campos.");
  } else {
    Swal.fire("Su cuenta tiene pene !");
  }
  let user = {
    Usuario: Usuario.value,
    Contrasenia: Contrasenia.value,
    tipo: "Estudiante",
  };
  await postData(user, "usuarios");
});
