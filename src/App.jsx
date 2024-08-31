import './App.css'
import NavBar from './components/NavBar';
import TituloComponente from './components/TituloComponente';
import ItemListContainer from './components/ItemListContainer';
import CardComponent from './components/CardComponent';
import ImagenPerfume from './components/ImagenPerfume';
function App() {
  return (
    <>
      <header className='contenedorHeader'>
        <h1 className='misEstilos'>Perfumes Top</h1>
        <NavBar/>
      </header>      
                 
      <ItemListContainer greeting='Esta es la tienda en la que vas a encontrar tu perfume perfecto para la ocación que necesites!🤩'/>
      <CardComponent title="JavaScript" />
      <ImagenPerfume />
    </>
  )
}

export default App