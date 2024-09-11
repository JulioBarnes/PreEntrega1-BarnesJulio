export const getBooks = async () => {
    const respuesta = await fetch('https://api.itbook.store/1.0/new');
    const data = await respuesta.json();
    return data.books;
  };