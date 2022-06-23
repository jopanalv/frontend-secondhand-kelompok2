import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {NotifikasiMobile} from './pages/NotifikasiMobile';
import {DafJual} from './pages/DafJual'
import {DafJualDiminati} from './pages/DafJual-diminati'; 


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="seller/daftar-jual" element={<DafJual/>} />
          <Route path="seller/daftar-jual/diminati" element={<DafJualDiminati />} />
          <Route path="seller/notifikasi" element={<NotifikasiMobile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
