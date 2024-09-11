/*
const accionarAsincronia = (res) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if(res===true){
                resolve(product);
            }else{
                reject('Hubo un error en la acción.❌');
            }
        }, 3000);
    })
}

//{id:'', name:'', description:'', stock:}
const product = [
    {id:'1', 
    name:'Acqua Di Gio', 
    description:'Cítrico', 
    stock:5,}
]

accionarAsincronia(true)
.then(respuesta =>console.log(respuesta))
.catch(err =>console.log(err))
.finally(console.log("La promesa finalizó"))
*/
const parfums = [
    {
      id: 1,
      nombre: "Acqua di Gio",
      precio: 185900,
      genero: "Masculino",
      imagen: "./assests/img/Acqua Di Gio (M).webp"
    },
    {
      id: 2,
      nombre: "Calvin Klein",
      precio: 112500,
      genero: "Unisex",
      imagen: "./assests/img/Calvin Klein (U).webp"
    },
    {
      id: 3,
      nombre: "Invictus",
      precio: 139500,
      genero: "Masculino",
      imagen: "./assests/img/Invictus (M).webp"
    },
    {
      id: 4,
      nombre: "Phantom",
      precio: 140900,
      genero: "Masculino",
      imagen: "./assests/img/Phantom (M).webp"
    },
    {
      id: 5,
      nombre: "One Million",
      precio: 139500,
      genero: "Masculino",
      imagen: "./assests/img/One Million (M).webp"
    },
    {id: 6,
      nombre: "Versace Eros",
      precio: 170000,
      genero: "Masculino",
      imagen: "./assests/img/Versace Eros (M).webp"
    },
    {
      id: 7,
      nombre: "Sauvage",
      precio: 181800,
      genero: "Masculino",
      imagen: "./assests/img/Sauvage (M).webp"
    },
    {
      id: 8,
      nombre: "Versace",
      precio: 164000,
      genero: "Masculino",
      imagen: "./assests/img/Versace (M).webp"
    },
    {
      id: 9,
      nombre: "Dior Homme",
      precio: 181800,
      genero: "Masculino",
      imagen: "./assests/img/Dior Homme (M).webp"
    },
    {
      id: 10,
      nombre: "La Nuit de L'Homme",
      precio: 187900,
      genero: "Masculino",
      imagen: "./src/assets/img/La Nuit de L'Homme (M).webp"
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