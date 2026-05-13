// /src/App.jsx 
import './App.css';
import Layout from './components/layout/Layout';
import { ProductListContainer } from './components/productos/ProductListContainer/ProductListContainer';
import FormularioContainer from './components/FormularioProducto/FormularioContainer';
import { Routes, Route } from 'react-router-dom';
import Directorio from './components/equipo/Directorio';
import Carrito from './components/carrito/Carrito';

function App() {
  return (
    <Routes>{/*envuelve a las demás para mostrar Header y Footer siempre */}
      <Route element={<Layout />}>
        <Route path="/" element={<ProductListContainer Mensaje={"Novedades"}  limit={3}/>}/>
        <Route path="/productos" element={<ProductListContainer Mensaje={"Catálogo completo"} />} />
        <Route path="/alta" element={<FormularioContainer />} />
        <Route path="/nosotros" element={<Directorio />} />
        <Route path="/carrito" element={<Carrito />} />
      </Route>
    </Routes>);
}

export default App;