const dataJSON = [
  {
    name: "Aceite de Coco Orgánico",
    size: "500ml",
    offer: false,
    discount: 15,
    price: 30000
  },
  {
    name: "Miel de Abeja Pura",
    size: "350g",
    offer: true,
    discount: 10,
    price: 30000
  },
  {
    name: "Aloe Vera Gel",
    size: "250ml",
    offer: false,
    discount: 0,
    price: 7500
  },
  {
    name: "Jabón de Lavanda Artesanal",
    size: "150g",
    offer: true,
    discount: 20,
    price: 1500
  },
  {
    name: "Té Verde Orgánico",
    size: "50 bolsitas",
    offer: false,
    discount: 0,
    price: 3000
  },
  {
    name: "Semillas de Chía",
    size: "200g",
    offer: false,
    discount: 0,
    price: 3600
  },
  {
    name: "Aceitunas Kalamata",
    size: "300g",
    offer: true,
    discount: 12,
    price: 9000
  },
  {
    name: "Harina de Almendra",
    size: "500g",
    offer: false,
    discount: 0,
    price: 7500
  },
  {
    name: "Vinagre de Sidra de Manzana",
    size: "750ml",
    offer: false,
    discount: 0,
    price: 3600
  },
  {
    name: "Barra de Granola con Frutas",
    size: "200g",
    offer: true,
    discount: 15,
    price: 2250
  },
  {
    name: "Mantequilla de Almendra",
    size: "300g",
    offer: false,
    discount: 0,
    price: 10500
  },
  {
    name: "Pasta de Dientes Natural",
    size: "100g",
    offer: true,
    discount: 25,
    price: 2250
  },
  {
    name: "Crema de Aguacate para la Piel",
    size: "50ml",
    offer: false,
    discount: 0,
    price: 4500
  },
  {
    name: "Infusión de Hierbas Relajantes",
    size: "30 bolsitas",
    offer: true,
    discount: 18,
    price: 2700
  },
  {
    name: "Mix de Frutos Secos",
    size: "400g",
    offer: false,
    discount: 0,
    price: 5850
  },
  {
    name: "Jugo de Acai Antioxidante",
    size: "1 litro",
    offer: false,
    discount: 0,
    price: 7425
  },
  {
    name: "Sal del Himalaya",
    size: "500g",
    offer: true,
    discount: 10,
    price: 3800
  },
  {
    name: "Velas de Cera de Abeja",
    size: "Pack de 3",
    offer: false,
    discount: 0,
    price: 4500
  },
  {
    name: "Cepillo de Bambú para Dientes",
    size: "1 unidad",
    offer: true,
    discount: 30,
    price: 1800
  },
  {
    name: "Champú Sólido de Coco",
    size: "100g",
    offer: false,
    discount: 0,
    price: 3150
  }
];

// Lista de imágenes
const listaImagenes = [
  "aguaje-peruano-capsulas.webp",
  "ajo-negro-capsulas.png",
  "alcachofa-capsulas.png",
  "algarrobo-aceite.jpg",
  "algas-verdes-pastillas.png",
  "almendras-aceite.png",
  "biocollagen-capsulas.png",
  "chucrut.png",
  "coco-aceite.png",
  "ginkgo-capsulas.png",
  "isoflavonas-capsulas.png",
  "jabon-cannabis-te.png",
  "jabon-carbon-activado-aminoacidos.png",
  "lima-aceite.png",
  "maca-molida-polvo.png",
  "manzana-aceite.png",
  "morango-polvo.png",
  "palma-manaca-polvo.png",
  "te-verde-polvo.png",
  "tranquilidade.png"
];

// Función para obtener una imagen aleatoria sin repetir
function obtenerImagenAleatoria() {
  const index = Math.floor(Math.random() * listaImagenes.length);
  const imagen = listaImagenes.splice(index, 1)[0];
  return imagen;
}

// Agregar el campo "image" a cada elemento del JSON
const dataJSONConImagenes = dataJSON.map(item => ({
  ...item,
  image: obtenerImagenAleatoria()
}));

// Imprimir el resultado
console.log(dataJSONConImagenes);