import { useEffect, useState } from 'react';
import BookCard from './BookCard.jsx';
import { getBooks } from '../asyncMock.js';

export default function BooksList() {
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    getBooks().then((datosRecibidos) => setLibros(datosRecibidos));
  }, []);

  return (
    <>
      <section>
        {libros.map((libro) => (
          <BookCard libro={libro} />
        ))}
      </section>
    </>
  );
}