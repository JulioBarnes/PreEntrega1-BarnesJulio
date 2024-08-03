import './App.css'
import NavBar from './assets/components/NavBar';
import TituloComponente from './assets/components/TituloComponente';
import ItemListContainer from './assets/components/ItemListContainer';
function App() {
  const misEstilos = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding: '20px',
    backgroundColor: '#f1f1f1',
    color:'#55555',
    fontFamily:'inherit'
  };

  return (
    <>      
      <h1 style={misEstilos}>Perfumes Top</h1>
      <NavBar/>           
      <ItemListContainer greeting='Esta es la tienda en la que vas a encontrar tu perfume perfecto para la ocación que necesites!🤩'/>
    </>
  )
}

export default App
