import ItemListContainer from "./ItemListContainer"
import '../App.css'
export default function Home() {
    return(
        <>
            <h3>Inicio</h3>
            <ItemListContainer className='tituloH1' greeting='Esta es la tienda en la que vas a encontrar tu perfume perfecto para la ocación que necesites!🤩'/>
        </>
    )
}