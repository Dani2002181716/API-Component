const express = require('express');
const cors = require('cors'); // Importa el módulo cors
const app = express();
const port = 3000;


app.use(express.json());


app.use(cors()); 


const products = [
  { id: 1, nombre: 'Hamburguesa Clásica', precio: 4, imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/NCI_Visuals_Food_Hamburger.jpg/1200px-NCI_Visuals_Food_Hamburger.jpg', stock: 30 },
  { id: 2, nombre: 'Papas Fritas', precio: 3, imagen: 'https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2022/01/12/un-plato-de-patatas-fritas-recien-hechas.jpeg', stock: 50 },
  { id: 3, nombre: 'Refresco Grande', precio: 2, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8x6hl__H8PF-BgCKi30ZIXTjr863xQB4V-w&s', stock: 40 },
  { id: 4, nombre: 'Pollo Frito', precio: 15, imagen: 'https://www.paulinacocina.net/wp-content/uploads/2023/05/receta-pollo-frito-crujiente.jpg', stock: 25 },
  { id: 5, nombre: 'Pizza Pepperoni', precio: 4, imagen: 'https://2trendies.com/hero/2023/04/pizzapepperoni.jpg?width=1200', stock: 15 },
  { id: 6, nombre: 'Hot Dog', precio: 2, imagen: 'https://tofuu.getjusto.com/orioneat-local/resized2/naLcPwWWqAp9JF5AB-500-700.webp', stock: 35 }
];


app.get('/products', (req, res) => {
  res.json(products);
});


app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
