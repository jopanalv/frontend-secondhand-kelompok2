import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css';
import InfoProduk from './pages/InfoProduk';
import Profile from './pages/Profile'
import InfoPenawaran from "./pages/InfoPenawaran";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="/info-profile" element={<Profile />} />
          <Route path="/info-produk" element={<InfoProduk />} />
          <Route path="/info-penawaran" element={<InfoPenawaran />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
