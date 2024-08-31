import ButtonComponent from "./ButtonComponent"
import './NavBar.css'
import CartWidget from "./CartWidget"
import colonia from "../assets/img/colonia.png"
export default function NavBar(){
    return (
        <>
        <section className="misEstilos">
            <div className="contener">
                <img src={colonia} alt="frascos de perfumes" className="contener" />
            </div>
          
            <nav className="barra misEstilos">
                <ButtonComponent nombre='Masculinos' color='gray'/>
                <ButtonComponent nombre='Femeninos' color='gray'/>
                <ButtonComponent nombre='Unisex' color='gray'/>
            </nav>
            
            <CartWidget />
        </section>

        </>
    )
} 