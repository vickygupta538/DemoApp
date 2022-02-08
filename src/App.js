import Catalog from './components/Catalog/Catalog';
import Header from './common/Header/Header';
import Search from './components/Search/Search';
import Detail from './components/Detail/Detail';
import Cart from './components/Cart/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Catalog />} />
        <Route exact path="/search/:searchTerm" element={<Search />} />
        <Route exact path="/detail/*" element={<Detail />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
