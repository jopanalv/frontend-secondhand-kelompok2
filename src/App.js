import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import DetailProduk_buyer from './pages/DetailProduk_buyer';
import DetailProduk_seller from './pages/DetailProduk_seller';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Homepage />} />
          <Route path="/buyer/detail-produk/" element={<DetailProduk_buyer />} />
          <Route path="/seller/detail-produk/" element={<DetailProduk_seller />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;