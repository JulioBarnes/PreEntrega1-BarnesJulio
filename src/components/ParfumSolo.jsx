import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getParfum } from '../asincronia.js';
import CounterComponent from './CounterComponent';
export default function ParfumSolo() {
  const [parfum, setParfum] = useState({});
  const { parfId } = useParams();

  useEffect(() => {
    setParfum(getParfum(parfId));
  }, [parfId]);

  return (
    <>
      <article style={{ border: '1px solid green', padding: 10 }}>
        <h4>
          {parfum.id} - {parfum.nombre}
        </h4>
        <img src={parfum.imagen} alt={parfum.nombre} />
        <p>${parfum.precio}</p>
        <p>{parfum.descripcion}</p>
        <p>{parfum.genero}</p>
        <CounterComponent/>
      </article>
    </>
  );
}