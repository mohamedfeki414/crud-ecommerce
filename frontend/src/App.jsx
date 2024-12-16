
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Listarticles from "./components/articles/Listarticles";
import Menu from "./components/Menu";
import Listcategories from "./components/categories/Listcategories";
import Listscategories from "./components/scategories/Listscategories";
import Insertcategorie from "./components/categories/Insertcategorie";
import Insertarticle from "./components/articles/Insertarticle";
import Editarticle from "./components/articles/Editarticle";
import Insertscategorie from "./components/scategories/Insertscategorie";
import Editcategorie from "./components/categories/Editcategorie";
import Editscategorie from "./components/scategories/Editscategorie";
import Listarticlecard from "./components/client/Listarticlecard";


import { CartProvider } from "use-shopping-cart";
import Cart from "./components/client/cart";
import Listarticlestable from "./components/articles/Listarticlestable";

function App() {
  return (
    <CartProvider>
      <Router>
        <Menu />
        <Routes>
          <Route path="/articles" element={<Listarticles />} />
          <Route path="/articles/add" element={<Insertarticle />} />
          <Route path="/articles/edit/:id" element={<Editarticle />} />

          <Route path="/categories" element={<Listcategories />} />
          <Route path="/categories/edit/:id" element={<Editcategorie />} />
          <Route path="/categories/add" element={<Insertcategorie />} />

          <Route path="/scategories" element={<Listscategories />} />
          <Route path="/scategories/add" element={<Insertscategorie />} />
          <Route path="/scategories/edit/:id" element={<Editscategorie />} />
          <Route path="/client" element={<Listarticlecard />} />
          <Route path="/Cart" element={< Cart/>}></Route>
          <Route path="/listart" element={<Listarticlestable />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
