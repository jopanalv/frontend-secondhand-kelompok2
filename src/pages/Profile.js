import { useDropzone } from "react-dropzone";
import { Image } from "react-bootstrap/";
import icon_back from "../assets/images/fi_arrow-left.png";
import upload from "../assets/images/Group 1.png";
import Navbar from "./Navbar";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "../redux/action/profileAction";
import axios from "axios";

function Profile() {
  const [formValue, setformValue] = React.useState({
    image: "",
    name: "",
    city: "",
    address: "",
    no_hp: "",
  });

  const userId = 2;

  const handleSubmit = async (event) => {
    event.preventDefault();
    // store the states in the form data
    const loginFormData = new FormData();
    loginFormData.append("image", formValue.image);
    loginFormData.append("name", formValue.name);
    loginFormData.append("city", formValue.city);
    loginFormData.append("address", formValue.address);
    loginFormData.append("no_hp", formValue.no_hp);

    try {
      // make axios post request
      const response = await axios({
        method: "post",
        url: "http://localhost:8000/api/v1/profile/update/" + userId,
        data: loginFormData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.image]: event.target.value,
      [event.target.name]: event.target.value,
      [event.target.city]: event.target.value,
      [event.target.address]: event.target.value,
      [event.target.no_hp]: event.target.value,
    });
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
                  <input {...getInputProps()} />
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
                  value={formValue.name}
                  onChange={handleChange}
                />
              </div>
              <div className="row mb-3">
                <label className="form-label">Kota*</label>
                <select
                  className="form-select"
                  name="city"
                  value={formValue.city}
                  onChange={handleChange}
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
                  value={formValue.address}
                  onChange={handleChange}
                />
              </div>
              <div className="row mb-3">
                <label className="form-label">No Handphone*</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Contoh: +628123456789"
                  name="no_hp"
                  value={formValue.no_hp}
                  onChange={handleChange}
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
