
import './App.css'
import NavBar from './components/NavBar';
import SearchComponent from './components/SearchComponent';
import Home from './components/Home';
import Parfums from './components/Parfums';
import Femenino from './components/Femenino';
import ParfumSolo from './components/ParfumSolo';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ParfumGenero from './components/ParfumGenero';
function App() {

  return (
    <>
      <BrowserRouter>
        
        <header className='contenedorHeader'>
          <h1 className='tituloH1'>Perfumes Top</h1>
          <NavBar/>
          <SearchComponent/>
        </header>     
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/parfums' element={<Parfums/>}/>
            <Route path='/femenino' element={<Femenino/>}/>
            <Route path='/parfum/:parfId' element={<ParfumSolo/>}/>
            <Route path='/genero/:parfGenero' element={<ParfumGenero/>}/>
        </Routes>          
        
      </BrowserRouter>
    </>
  )
}

export default App