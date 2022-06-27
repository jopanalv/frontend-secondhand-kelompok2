import { Image } from "react-bootstrap/";
import icon_back from "../assets/images/fi_arrow-left.png";
import upload from "../assets/images/Group 1.png";
import Navbar from "./Navbar";

function Profile() {
  return (
    <>
      <Navbar judul="Lengkapi Info Akun" />
      <div className="container mt-5" id="profile">
        <div className="row justify-content-center">
          <div className="col-lg-1 col-sm-12 mb-1">
            <Image src={icon_back} />
          </div>
          <div className="col-lg-11 col-sm-12">
            <div class="text-center">
              <Image src={upload} className="rounded" onClick={upload} />
            </div>
            <form>
              <div className="row mb-3">
                <label className="form-label">Nama*</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nama"
                />
              </div>
              <div className="row mb-3">
                <label className="form-label">Kota*</label>
                <select className="form-select">
                  <option value="" disabled selected>
                    Pilih Kota
                  </option>
                  <option value="0">Jakarta</option>
                  <option value="1">Bandung</option>
                  <option value="2">Bogor</option>
                </select>
              </div>
              <div className="row mb-3">
                <label className="form-label">Alamat*</label>
                <input
                  type="text"
                  className="form-control"
                  style={{ paddingBottom: "48px" }}
                  placeholder="Contoh: Jalan Ikan Hiu 33"
                />
              </div>
              <div className="row mb-3">
                <label className="form-label">No Handphone*</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Contoh: +628123456789"
                />
              </div>
              <div className="row mb-3 d-grid gap-2">
                <button className="btn btn-primary text-white" type="button" id="save">
                <a href="/seller/daftar-jual">
                  Simpan
                </a>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
