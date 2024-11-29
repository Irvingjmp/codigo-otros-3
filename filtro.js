// Lista de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
];

//Seleccion de productos e input
const listaProductos = document.getElementById("lista-de-productos") //cambio de nombre y name por Id
const $i = document.querySelector('.input');

// sustituimos for
// for (let i = 0; i < productos.length; i++) {
//   var d = document.createElement("div")
//   d.classList.add("producto")

//   var ti = document.createElement("p")
//   ti.classList.add("titulo")
//   ti.textContent = productos[i].nombre
  
//   var imagen = document.createElement("img");
//   imagen.setAttribute('src', productos[i].img);

//   d.appendChild(ti)
//   d.appendChild(imagen)

//   listaProductos.appendChild(d)
// }

function displayProductos(productos){
  listaProductos.innerHTML = '';

  productos.forEach(producto =>{
    const divProducto = document.createElement("div");
    divProducto.classList.add("producto");

    const titulo = document.createElement("p");
    titulo.classList.add("titulo");
    titulo.textContent = producto.nombre;

    const imagen = document.createElement("img");
    imagen.setAttribute('src', producto.img);

    divProducto.appendChild(titulo);
    divProducto.appendChild(imagen);

    listaProductos.appendChild(divProducto);

  });

};

displayProductos(productos)
const botonDeFiltro = document.querySelector("button");
botonDeFiltro.onclick = function() {

  // while (listaProductos.firstChild) {
  //   listaProductos.removeChild(listaProductos.firstChild);
  // }

  const texto = $i.value.toLowerCase(); //Convertimos a minusculas
  console.log(texto);

  //Filtramos productos
  const productosFiltrados = filtrado(productos, texto );

  displayProductos(productosFiltrados)
  // Se sustituye con la funcion
  // for (let i = 0; i < productosFiltrados.length; i++) {
  //   var d = document.createElement("div")
  //   d.classList.add("producto")
  
  //   var ti = document.createElement("p")
  //   ti.classList.add("titulo")
  //   ti.textContent = productosFiltrados[i].nombre
    
  //   var imagen = document.createElement("img");
  //   imagen.setAttribute('src', productosFiltrados[i].img);
  
  //   d.appendChild(ti)
  //   d.appendChild(imagen)
  
  //   listaProductos.appendChild(d)
  // }
}

  const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  