export default function BookCard({ libro }) {
    return (
      <>
        <article
          style={{
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid white',
            borderRadius: '5px',
            margin: '8px',
            padding: '4px',
          }}
        >
          <img
            style={{ width: 250, margin: '0 auto' }}
            src={libro.image}
            alt={libro.title}
          />
          <h3>{libro.title}</h3>
          <p>Precio $ {libro.price}</p>
        </article>
      </>
    );
  }