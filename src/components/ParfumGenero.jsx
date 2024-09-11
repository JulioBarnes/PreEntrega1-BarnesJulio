import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getGenero } from '../asincronia.js';
import './ParfumList.css';
import CardParfum from './CardParfum.jsx';

export default function ParfumGenero() {
  const [parfums, setParfum] = useState({});
  const { parfGenero } = useParams();

  useEffect(() => {
    setParfum(getGenero(parfGenero));
  }, [parfGenero]);

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