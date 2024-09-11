
import { Link } from "react-router-dom";
import './NavBar.css';
export default function CardParfum({parfum}) {

    const cardStyle = {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      width: '200px',
      textAlign: 'center',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
    };
  
    const imageStyle = {
      width: '100%',
      height: 'auto',
      borderRadius: '8px'
    };
  
    const buttonStyle = {
      marginTop: '12px',
      padding: '8px 16px',
      backgroundColor: '#007BFF',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    };
  
    return (
      <div style={cardStyle}>
        <img src={parfum.imagen} alt={parfum.nombre} style={imageStyle} />
        <h4>{parfum.id} - {parfum.nombre}</h4>
        <p>Género: {parfum.genero}</p>
        <p>Precio: ${parfum.precio}</p>
        <button style={buttonStyle}>
          <Link className="link" to={`/parfum/${parfum.id}`}>
            Ver detalles
          </Link> 
        </button>
      </div>
    );
  };