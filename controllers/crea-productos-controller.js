const db = firebase.firestore();


const form = document.querySelector("[data-form]");


const saveTask = (nombre, url, precio) =>
   db.collection("producto").doc().set({
    nombre,
    url,
    precio
  });


  
form.addEventListener("submit", async (evento) => {
  evento.preventDefault();

  const nombre = document.querySelector("[data-nombre]").value;
  const url = document.querySelector("[data-url]").value;
  const precio = document.querySelector("[data-precio]").value;

  await saveTask(nombre, url, precio);

})