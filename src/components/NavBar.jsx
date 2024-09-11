
import './NavBar.css'
import CartWidget from "./CartWidget"
import colonia from "../assets/img/colonia.png"
import {Link} from 'react-router-dom'
export default function NavBar(){
    return (
        <>
        <section className="misEstilos">
            <div className="contener">
                <Link className='link' to={`/`}>
                    <img src={colonia} alt="frascos de perfumes" className="contener" />
                </Link>
            </div>
          
            <nav className="barra misEstilos">
                <button className="estilosBoton">
                    <Link className='link' to={`/`}>Home</Link>
                </button>
                <button className="estilosBoton">
                    <Link className='link' to={`/Parfums`}>Masculinos</Link>
                </button>
                <button className="estilosBoton">
                    <Link className='link' to={`/Femenino`}>Femeninos</Link>
                </button>
                <button className="estilosBoton">
                    <Link className='link' to={`/Unisex`}>Unisex</Link>
                </button>
            </nav>
            
            <CartWidget />
        </section>

        </>
    )
} 