let carrito = JSON.parse(localStorage.getItem('carrito'));
const productos = JSON.parse(localStorage.getItem('productos'));
window.onload = function() {
  productos.forEach(element => {
    if(element.categoria === 'Modulos proteicos') {
      let div = document.createElement('div');
      div.classList.add('card');
      div.classList.add('product-card');
      div.style = 'width: 18rem; margin: 10px; display: flex; flex-direction: column; justify-content: center; align-items: center;';
      const img = document.createElement('img');
      img.setAttribute('src',element.imagen);
      img.style.marginTop='20px';
      img.style.borderRadius='10px';
      img.setAttribute('width','200px');
      img.setAttribute('height','200px');
      img.setAttribute('id',element.id);
      // img.addEventListener('click',function(){presentar(this.id)});
      div.appendChild(img);
      let div2 = document.createElement('div');
      div2.className = 'card-body';
      let name = document.createElement('h5');
      name.className='card-title'
      name.innerText = element.nombre;
      let paragraph = document.createElement('p');
      paragraph.className = 'card-text';
      paragraph.innerText='Precio: '+element.precio;
      let paragraph2 = document.createElement('p');
      paragraph2.className = 'card-text';
      paragraph2.innerText='Stock: '+element.stock;
      let quantity = document.createElement('input');
      quantity.setAttribute('type','number');
      quantity.setAttribute('min',1);
      quantity.setAttribute('max',element.stock);
      quantity.setAttribute('value',1);
      quantity.setAttribute('id', 'quantity-' + element.id);
      div2.appendChild(name);
      div2.appendChild(paragraph);
      div2.appendChild(paragraph2);
      div2.appendChild(quantity);
      div.appendChild(img);
      div.appendChild(div2);
      
      const button = document.createElement('input');
      button.setAttribute('type','button');
      button.setAttribute('value','Agregar a carrito');
      button.setAttribute('id',element.id)
      button.setAttribute('class','btn btn-primary')
      button.style.width='60%';
      button.style.marginBottom='10px';
      button.addEventListener('click',function(){
        agregarCarrito(this.id);
      });
      div.appendChild(button);
      let contenedor = document.getElementById('productos');
      contenedor.style = 'display: flex; flex-wrap: wrap; justify-content: center;';
      contenedor.appendChild(div);
    } 
  });
}
function agregarCarrito(productoId){
  const quantityInput = document.getElementById('quantity-' + productoId);
  if (quantityInput) {
    const cantidad = parseInt(quantityInput.value);
    // Buscar el producto en la lista de productos
    const producto = productos.find(p => p.id === productoId);

    // Verificar si el producto ya está en el carrito
    const productoEnCarrito = carrito.find(p => p.id === productoId);

    if (productoEnCarrito) {
      // Si el producto ya está en el carrito, actualizar la cantidad
      productoEnCarrito.cantidad += cantidad;
    } else {
      // Si el producto no está en el carrito, agregarlo
      carrito.push({ productoId, cantidad });
    }

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    console.log(carrito); // Para verificar que el producto se ha agregado correctamente
    alert('Producto agregado al carrito');
  } else {
    console.error('No se encontró el campo de cantidad para el producto con ID:', productoId);
  }
}
function presentar(producto){

}