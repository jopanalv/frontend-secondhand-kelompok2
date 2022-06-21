import { Image} from 'react-bootstrap/';
import icon_back from '../assets/images/fi_arrow-left.png'
import upload from '../assets/images/Group 1.png'

function Profile() {
  return (
    <div className="container mt-5" id="profile">
        <div className="row ">
            <div className="col-4">
              <Image src={icon_back} />
            </div>
            <div className="col-8" id="formUpload">
              <Image src={upload} />
            </div>
        </div>
      <form>
        <div className="row mb-3">
            <label className="form-label">Nama*</label>
            <input type="text" className="form-control" placeholder="Nama" />
        </div>
        <div className="row mb-3">
            <label className="form-label">Kota*</label>
            <select className="form-select">
                <option value="" disabled selected>Pilih Kota</option>
                <option value="0">Jakarta</option>
                <option value="1">Bandung</option>
                <option value="2">Bogor</option>
            </select>
        </div>
        <div className="row mb-3">
            <label className="form-label">Alamat*</label>
            <input type="text" className="form-control" style={{paddingBottom: "48px"}} placeholder="Contoh: Jalan Ikan Hiu 33" />
        </div>
        <div className="row mb-3">
            <label className="form-label">No Handphone*</label>
            <input type="text" className="form-control" placeholder="Contoh: +628123456789" />
        </div>
        <div className="row mb-3 d-grid gap-2">
            <button className="btn btn-primary" type="button" id="save">Simpan</button>
        </div>
      </form>
    </div>
  );
}

export default Profile;