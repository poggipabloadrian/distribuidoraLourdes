import { productoServices } from "../services/producto-servicios.js";

const getURL = new URL(window.location);
const id = getURL.searchParams.get("id");

const inputImageUrl = document.querySelector("[data-imageUrl]");
const inputNombre = document.querySelector("[data-nombre]");
const inputPrecio = document.querySelector("[data-precio]");
const inputDescripcion = document.querySelector("[data-descripcion]");

productoServices.detalleProducto(id).then((producto)=>{

  inputNombre.value = producto.name
  inputPrecio.value = producto.price
  inputDescripcion.value = producto.description
  inputImageUrl.value = producto.imageUrl
  console.log(producto.inputNombre)
}); 


const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  productoServices
    .alteraProducto(
      id,
      inputNombre.value,
      inputPrecio.value,
      inputDescripcion.value,
      inputImageUrl.value
    )
    .then(() => {
      window.location.href = "../screens/producto.html";
    });
});
