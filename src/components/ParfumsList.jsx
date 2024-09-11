import { useEffect } from 'react';

export default function ParfumsList({ listado }) {
  useEffect(() => {
    console.log(listado);
  }, []);

  return (
    <>
      <h2>Lista de Perfumes</h2>
      <ul>
        {listado.map((perfume) => (
          <li key={perfume.id}>
            {perfume.id} - {perfume.name}
          </li>
        ))}
      </ul>
    </>
  );
}