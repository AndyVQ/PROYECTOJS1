import { postData } from "../servicios/llamados.js";

const comentario = document.getElementById("comentario");
const buton = document.getElementById("buton");
const consultasguardadas=document.getElementById("consultasGuardadas")


const fechaActual = new Date();


buton.addEventListener("click", async function () {

  const consulta = {
    consultaUsuario: comentario.value,
    estado: false,
    nombreUsuario: localStorage.getItem("nombreUsuario"),
    horaConsulta: fechaActual.getHours() + ":" + fechaActual.getMinutes(),
    diaConsulta:
      fechaActual.getDate() +
      "/" +
      fechaActual.getMonth()+1 +
      "/" +
      fechaActual.getFullYear(),
  };

localStorage.setItem("lista_guardado",consulta.consultaUsuario)

  await postData(consulta, "consultas");

  let info=document.createElement("p")
  info.textContent=localStorage.getItem("lista_guardado"    )
  consultasguardadas.appendChild(info)
  

});
