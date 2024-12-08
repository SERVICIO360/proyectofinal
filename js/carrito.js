let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let productos = JSON.parse(localStorage.getItem('productos')) || [];
let total = 0;
let totalItems = 0;


function obtenerProductoPorId(id){
  return productos.find(p => p.id == id);
}

function eliminarDelCarrito(productoId){
  console.log('Eliminando producto con id: ' + productoId);
  let index = carrito.findIndex(element => element.productoId === productoId);
  if(index !== -1){
    carrito.splice(index,1);
    localStorage.setItem('carrito',JSON.stringify(carrito));
    location.reload();
  }
}


window.onload = onload(carrito);
function onload(carrito) {
  carrito.forEach(element => {
    const producto = obtenerProductoPorId(element.productoId);
    total += producto.precio * element.cantidad;
    totalItems += element.cantidad;
    
    let div = document.createElement('div');
    div.classList.add('card');
    div.classList.add('product-card');
    div.style = 'width: 18rem; margin: 10px; display: flex; justify-content: center; align-items: center;';
    
    const img = document.createElement('img');
    img.setAttribute('src', producto.imagen);
    img.style.marginTop = '20px';
    img.style.width = '200px';
    img.style.height = '200px';
    img.setAttribute('id', producto.id);
    div.appendChild(img);

    const name = document.createElement('h5');
    name.innerText = producto.nombre;
    div.appendChild(name);

    const quantity	= document.createElement('h5');
    quantity.innerText = 'Cantidad: ' + element.cantidad;
    div.appendChild(quantity);


    const button = document.createElement('input');
    button.setAttribute('type', 'button');
    button.setAttribute('value', 'Eliminar del carrito');
    button.setAttribute('id', producto.id);
    button.setAttribute('class', 'btn btn-danger');
    button.style.width = '60%';
    button.style.marginBottom = '10px';
    button.addEventListener('click', function() {
      eliminarDelCarrito(this.id);
    });

    div.appendChild(button);
    let contenedor = document.getElementById('carrito');
    if (contenedor) {
      contenedor.style = 'display: flex; flex-wrap: wrap; justify-content: center;';
      contenedor.appendChild(div);
    } else {
      console.error('No se encontró el contenedor de productos');
    }
  });
  let totalElement = document.createElement('h3');
  totalElement.innerText = 'Total: $' + total;
  let totalItemsElement = document.createElement('h3');
  totalItemsElement.innerText = 'Total de items: ' + totalItems;
  let contenedor = document.createElement('div');
  contenedor.appendChild(totalElement);
  contenedor.appendChild(totalItemsElement);
  let carrito2 = document.getElementById('carrito');
  carrito2.appendChild(contenedor);
}

let comprarButton = document.getElementById('comprar');
comprarButton.addEventListener('click', comprar);

function comprar(){
  if(carrito.length > 0){
    alert('Compra realizada con éxito');
    localStorage.removeItem('carrito');
    localStorage.setItem('carrito',JSON.stringify([]));
    location.reload();
  }
  else{
    alert('No hay productos en el carrito');
  }
}



