const parfums = [
    {
      id: 1,
      nombre: "Acqua di Gio",
      precio: 185900,
      genero: "masculino",
      stock: 10,
      descripcion:"pendiente de descripción",
      imagen: "./src/assets/img/Acqua Di Gio (M).webp"
    },
    {
      id: 2,
      nombre: "Calvin Klein",
      precio: 112500,
      genero: "unisex",
      stock: 10,
      descripcion:"pendiente de descripción",
      imagen: "./src/assets/img/Calvin Klein (U).webp"
    },
    {
      id: 3,
      nombre: "Invictus",
      precio: 139500,
      genero: "masculino",
      stock: 10,
      descripcion:"pendiente de descripción",
      imagen: "./src/assets/img/Invictus (M).webp"
    },
    {
      id: 4,
      nombre: "Phantom",
      precio: 140900,
      genero: "masculino",
      stock: 10,
      descripcion:"pendiente de descripción",
      imagen: "./src/assets/img/Phantom (M).webp"
    },
    {
      id: 5,
      nombre: "One Million",
      precio: 139500,
      genero: "masculino",
      stock: 10,
      descripcion:"pendiente de descripción",
      imagen: "./src/assets/img/One Million (M).webp"
    },
    {id: 6,
      nombre: "Versace Eros",
      precio: 170000,
      genero: "masculino",
      stock: 10,
      descripcion:"pendiente de descripción",
      imagen: "./src/assets/img/Versace Eros (M).webp"
    },
    {
      id: 7,
      nombre: "Amber Oud Gold Edition",
      precio: 150900,
      genero: "unisex",
      stock: 10,
      descripcion:"pendiente de descripción",
      imagen: "./src/assets/img/Amber Oud Gold Edition (U).webp"
    },
    {
      id: 8,
      nombre: "Calvin Klein Be",
      precio: 196300,
      genero: "unisex",
      stock: 10,
      descripcion:"pendiente de descripción",
      imagen: "./src/assets/img/Calvin Klein Be (U).webp"
    },
    {
      id: 9,
      nombre: "Ombre Leather",
      precio: 254050,
      genero: "unisex",
      stock: 10,
      descripcion:"pendiente de descripción",
      imagen: "./src/assets/img/Ombre Leather (U).webp"
    },
    {
      id: 10,
      nombre: "Black Orchid",
      precio: 207900,
      genero: "unisex",
      stock: 10,
      descripcion:"pendiente de descripción",
      imagen: "./src/assets/img/Black Orchid (U).webp"
    },
    {
        id: 11,
        nombre: "Flower by Kenzo",
        precio: 204050,
        genero: "femenino",
        stock: 10,
        descripcion:"pendiente de descripción",
        imagen: "./src/assets/img/Flower by Kenzo (F).webp"
      },
      {
        id: 12,
        nombre: "Irresistible Very Floral",
        precio: 184700,
        genero: "femenino",
        stock: 10,
        descripcion:"pendiente de descripción",
        imagen: "./src/assets/img/Irresistible Very Floral (F).webp"
      },
      {
        id: 13,
        nombre: "212 VIP Rose",
        precio: 157850,
        genero: "femenino",
        stock: 10,
        descripcion:"pendiente de descripción",
        imagen: "./src/assets/img/212 VIP Rose (F).webp"
      },
      {
        id: 14,
        nombre: "Very Good Girl",
        precio: 195000,
        genero: "femenino",
        stock: 10,
        descripcion:"pendiente de descripción",
        imagen: "./src/assets/img/Very Good Girl (F).webp"
      },
      {
        id: 15,
        nombre: "My Way Intense Armani",
        precio: 214500,
        genero: "femenino",
        stock: 10,
        descripcion:"pendiente de descripción",
        imagen: "./src/assets/img/My Way Intense Armani (F).webp"
      }
  ]

  export const getParfums = new Promise((resolve) => {
    setTimeout(() => {
      resolve(parfums);
    }, 2000);
  });
  
  //busca un parfum por id
  export const getParfum = (id) => {
    return parfums.find((parf) => parf.id == id);
  };

  export const getGenero = (genero) => {
    return parfums.filter((parfum) => product.genero === genero);
  };