<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {NotifikasiMobile} from './pages/NotifikasiMobile';
import {DafJual} from './pages/DafJual'
import {DafJualDiminati} from './pages/DafJual-diminati'; 

=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css';
import InfoProduk from './pages/InfoProduk';
import Profile from './pages/Profile'
import InfoPenawaran from "./pages/InfoPenawaran";
>>>>>>> 58ecc63c7818a97dd0d6a1fdd8a48569fe0befd3

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
<<<<<<< HEAD
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="seller/daftar-jual" element={<DafJual/>} />
          <Route path="seller/daftar-jual/diminati" element={<DafJualDiminati />} />
          <Route path="seller/notifikasi" element={<NotifikasiMobile />} />
=======
          <Route path="/info-profile" element={<Profile />} />
          <Route path="/info-produk" element={<InfoProduk />} />
          <Route path="/info-penawaran" element={<InfoPenawaran />} />
>>>>>>> 58ecc63c7818a97dd0d6a1fdd8a48569fe0befd3
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
