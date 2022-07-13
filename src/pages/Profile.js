import { useDropzone } from "react-dropzone";
import { Image } from "react-bootstrap/";
import icon_back from "../assets/images/fi_arrow-left.png";
import upload from "../assets/images/Group 1.png";
import Navbar from "../component/Navbar2";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "../redux/action/profileAction";
import "../assets/style.css"

function Profile() {
  const [id, setId] = useState("2");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [no_hp, setNoHp] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      updateProfile({
        id: id,
        image: image,
        name: name,
        city: city,
        address: address,
        no_hp: no_hp,
      })
    );
  };

  const [selectedImages, setSelectedImages] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setSelectedImages(
      acceptedFiles.map((file) =>
        Object.assign(file, { preview: URL.createObjectURL(file) })
      )
    );
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const seleted_images = selectedImages?.map((file) => (
    <div>
      <img src={file.preview} style={{ width: "8em", height: "8em" }} />
    </div>
  ));

  console.log("gambar : ", selectedImages);

  return (
    <>
      <Navbar judul="Lengkapi Info Akun" />
      <div className="container mt-5" id="profile">
        <div className="row justify-content-center">
          <div className="col-lg-1 col-sm-12 mb-1">
            <Image src={icon_back} />
          </div>
          <div className="col-lg-11 col-sm-12 ">
            <div className="text-center">
              {selectedImages.length === 0 ? (
                <div {...getRootProps()}>
                  <input
                    {...getInputProps()}
                    name="image"
                    value={image}
                    onChange={(event) => setImage(event.target.value)}
                  />
                  <Image src={upload} style={{ width: "8em" }} />
                </div>
              ) : (
                <div>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <label className="border ms-3 mt-3">{seleted_images}</label>
                  </div>
                </div>
              )}
            </div>
            <form onSubmit={(event) => handleSubmit(event)}>
              <div className="row mb-3">
                <label className="form-label">Nama*</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nama"
                  name="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="row mb-3">
                <label className="form-label">Kota*</label>
                <select
                  className="form-select"
                  name="city"
                  value={city}
                  onChange={(event) => setCity(event.target.value)}
                >
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
                  name="address"
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                />
              </div>
              <div className="row mb-3">
                <label className="form-label">No Handphone*</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Contoh: +628123456789"
                  name="no_hp"
                  value={no_hp}
                  onChange={(event) => setNoHp(event.target.value)}
                />
              </div>
              <div className="row mb-3 d-grid gap-2">
                <button
                  className="btn btn-primary text-white"
                  type="submit"
                  id="save"
                >
                  Simpan
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
