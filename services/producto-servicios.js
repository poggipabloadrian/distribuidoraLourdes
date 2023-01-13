//GET

const listaProductos = () => fetch("http://localhost:3000/producto").then(respuesta => respuesta.json());



const detalleProducto = (id) => fetch(`http://localhost:3000/producto/${id}`).then(respuesta => respuesta.json());

//POST 

const crearProducto = (name,imageUrl, price) => {
 return  fetch("http://localhost:3000/producto", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify({name, imageUrl, price}),
      }).then((resposta) => {
        if (resposta.ok) {
          return resposta.body;
        }
        throw new Error("Não foi possível criar um produto");
      });
    };

// DELETE
const deleteProducto = async (id) => {
  return await fetch(`http://localhost:3000/producto/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// PUT/PATCH
const alteraProducto = async (id, name, price, description, imageUrl) => {
  return fetch(`http://localhost:3000/producto/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      price,
      description,
      imageUrl
    }),
  })
    .then((respuesta) => {
      return respuesta.json();
    })
    .catch((error) => console.log(error));
};


export const productoServices = {
  listaProductos,
  crearProducto,
  deleteProducto,
  alteraProducto,
  detalleProducto
}

