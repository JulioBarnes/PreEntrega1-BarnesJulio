import ButtonComponent from "./ButtonComponent"
import './NavBar.css'
import CartWidget from "./CartWidget"
import colonia from "../img/colonia.png"
export default function NavBar(){
    const misEstilos = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        padding: '10px',
        height: '60px',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
    }
    return (
        <>
        <section style={misEstilos} >
            <div className="contener">
                <img src={colonia} alt="" className="contener" />
            </div>
          
            <nav style={misEstilos} className="barra">
                <ButtonComponent nombre='Masculinos' color='gray'/>
                <ButtonComponent nombre='Femeninos' color='gray'/>
                <ButtonComponent nombre='Unisex' color='gray'/>
            </nav>
            
            <CartWidget />
        </section>

        </>
    )
} 