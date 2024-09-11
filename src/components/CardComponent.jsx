export default function CardComponent({ children, title }) {
    return (
      <>
        <article style={{ border: '1px solid black', padding: 10 }}>
          {children}
          <h3>{title}</h3>
          
        </article>
      </>
    );
  }