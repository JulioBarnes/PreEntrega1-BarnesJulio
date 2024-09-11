import { useEffect, useState } from 'react';
import CardParfum from './CardParfum.jsx';
import { getParfums } from '../asincronia.js';
import './ParfumList.css';
export default function ParfumList() {

  const [parfums, setParfums] = useState([]);

  useEffect(() => {
    getParfums.then((datosRecibidos) => setParfums(datosRecibidos));
  }, []);

  return (
    <>
      <section className='listStyle'>
        {parfums.map((parf) => (
          <CardParfum key={parf.id} parfum={parf} />
        ))}
      </section>
    </>
  );
}