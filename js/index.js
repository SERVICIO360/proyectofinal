let productos = [
  { 
    id:1,
    nombre: 'Bi pro lite y burner stack', precio: 289000, categoria: 'Control de peso', stock: 5, imagen: 'assets/img/controlPeso/bioprolite.png'},
  {
    id:2,
    nombre: 'Burner Stack Display',precio: 119900, categoria: 'Control de peso', stock: 5, imagen: 'assets/img/controlPeso/burnerstackdisplay.png'
  },
  { 
    id:3,
    nombre: 'Burner Stack Lata', precio: 189600, categoria: 'Control de peso', stock: 5, imagen: 'assets/img/controlPeso/burnerstacklata.png'
  },
  {
    id:4,
    nombre: 'Burner Stack', precio: 139900, categoria: 'Control de peso', stock: 5, imagen: 'assets/img/controlPeso/burnerstack.png'
  },
  {
    id:5,
    nombre: 'Bipro classic 3lb capuccino & crema de whisky', precio:209990, categoria: 'Modulos proteicos', stock: 5, imagen: 'assets/img/modulosProteicos/biproclassic3lbcapuccino&cremadewhisky.png'
  },
  {
    id:6,
    nombre: 'Bipro complex vainilla 2.1 lb', precio:149990, categoria: 'Modulos proteicos', stock: 5, imagen: 'assets/img/modulosProteicos/biprocomplexvainilla2.1lb.png'
  },
  {
    id:7,
    nombre: 'Bipro classic display', precio:79900, categoria: 'Modulos proteicos', stock: 5, imagen: 'assets/img/modulosProteicos/biproclassicdisplay.png' 
  },
  {
    id:8,
    nombre:'Bipro classic 3lb piña colada', precio: 209990, categoria: 'Modulos proteicos', stock: 5, imagen: 'assets/img/modulosProteicos/biproclassic3lbpiñacolada.png'
  },
  {
    id:9,
    nombre: 'Collagen stack', precio: 99990, categoria: 'Nutrición general', stock: 5, imagen: 'assets/img/nutricionGeneral/collagenstack.png'
  },
  {
    id:10,
    nombre: 'Nutra-c', precio:64990, categoria: 'Nutrición general', stock: 5, imagen: 'assets/img/nutricionGeneral/nutrac.png'
  },
  {
    id:11,
    nombre: 'Nut-rx', precio: 34990, categoria: 'Nutrición general', stock: 5, imagen: 'assets/img/nutricionGeneral/nutrx.png'
  },
  {
    id:12,
    nombre: 'Zolé', precio: 29990, categoria: 'Nutrición general', stock: 5, imagen: 'assets/img/nutricionGeneral/zole.png'
  }
];
window.onload = function() {
  // Guardar datos en localStorage
  localStorage.setItem('productos', JSON.stringify(productos));
} 

