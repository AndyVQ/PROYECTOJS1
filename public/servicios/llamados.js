async function postData(obj, endpoint) {
  try {
    const peticion = await fetch(`http://localhost:1212/${endpoint}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    const datos = await peticion.json();
    console.log(datos);
    return datos;
  } catch (error) {
    console.error(error);
  }
}
