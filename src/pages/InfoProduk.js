import Image from "react-bootstrap/esm/Image";
import icon_back from "../assets/images/fi_arrow-left.png";
import Navbar from "./Navbar";
import uploadGambar from "../assets/images/Group 2.png";

export default function InfoProduk() {
  return (
    <>
      <Navbar />
      <div className="container mt-5" id="info-produk">
        <div className="row justify-content-center">
          <div className="col-1 back">
            <Image src={icon_back} />
          </div>
          <div className="col-11">
            <form>
              <div className="row mb-3">
                <label className="form-label">Nama Produk</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nama Produk"
                />
              </div>
              <div className="row mb-3">
                <label className="form-label">Harga Produk</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Rp 0,00"
                />
              </div>
              <div className="row mb-3">
                <label className="form-label">Kategori</label>
                <select className="form-select">
                  <option value="" disabled selected>
                    Pilih Kategori
                  </option>
                  <option value="0">Hobi</option>
                  <option value="1">Kendaraan</option>
                  <option value="2">Baju</option>
                  <option value="3">Elektronik</option>
                  <option value="4">Kesehatan</option>
                </select>
              </div>
              <div className="row mb-3">
                <label className="form-label">Deskripsi</label>
                <input
                  type="text"
                  className="form-control"
                  style={{ paddingBottom: "48px" }}
                  placeholder="Contoh: Jalan Ikan Hiu 33"
                />
              </div>
              <div className="row mb-3">
                <label className="form-label">Foto Produk</label>
                <Image src={uploadGambar} style={{ width: "10em" }} />
              </div>
              <div className="row mb-3">
                <div className="col-6 p-0 pe-1">
                  <button
                    className="btn btn-outline-primary btn-action "
                    type="button"
                    id="preview"
                  >
                    Preview
                  </button>
                </div>
                <div className="col-6 p-0 ps-1">
                  <button
                    className="btn btn-primary btn-action"
                    type="button"
                    id="terbitkan"
                  >
                    Terbitkan
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
