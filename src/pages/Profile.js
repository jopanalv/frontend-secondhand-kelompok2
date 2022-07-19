import { useDropzone } from "react-dropzone";
import { Image } from "react-bootstrap/";
import { getCity, updateProfile } from "../redux/action/profileAction";
import icon_back from "../assets/images/fi_arrow-left.png";
import upload from "../assets/images/Group 1.png";
import Navbar from "../component/Navbar2";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../assets/style.css";
import { useEffect } from "react";

function Profile() {
  const dispatch = useDispatch();

  const serializedData = localStorage.getItem("user");
  let user = JSON.parse(serializedData);

  const [name, setName] = useState(`${user.data.Profile.name}`);
  const [city, setCity] = useState(`${user.data.Profile.city ?? ''}`);
  const [address, setAddress] = useState(`${user.data.Profile.address ?? ''}`);
  const [no_hp, setNo_hp] = useState(`${user.data.Profile.no_hp ?? ''}`);
  const previewImage = user.data.Profile.image !== null ? 'http://localhost:5000/upload/images/' + user.data.Profile.image : null;
  const [image, setImage] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    setImage(acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const selected_images = image?.map((file) => (
    <div key={file.lastModified}>
      <img src={file.preview} alt="foto profile" style={{ width: "8em", height: "8em" }} />
    </div>
  ));

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('image', image[0])
    formData.append('name', name)
    formData.append('city', city)
    formData.append('address', address)
    formData.append('no_hp', no_hp)
    dispatch(updateProfile(formData))
  }

  useEffect(() => {
    dispatch(getCity())
  }, [])

  const { cityResult } = useSelector(state => state.profile)

  return (
    <>
      <Navbar judul="Lengkapi Info Akun" />
      <div className="container mt-5" id="profile">
        <div className="row justify-content-center">
          <div className="col-lg-1 col-sm-12 mb-1">
            <Image src={icon_back} />
          </div>
          <div className="col-lg-11 col-sm-12 ">
            <form encType="multipart/form-data" onSubmit={handleSubmit}>
              <div className="text-center">
                {image.length === 0 ? (
                  <div {...getRootProps()}>
                    <input type="file" {...getInputProps()} filename="image" />
                    <Image src={previewImage ?? upload} style={{ width: "8em" }} />
                  </div>
                ) : (
                  <div>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <label className="border ms-3 mt-3">{selected_images}</label>
                    </div>
                  </div>
                )}
              </div>
              {/* <input filename="image" type="file" onChange={(e) => onPosterUpload(e)} required /> */}
              <div className="row mb-3">
                <label className="form-label">Nama*</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nama"
                  name="name"
                  value={name} onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="row mb-3">
                <label className="form-label">Kota*</label>
                <select
                  className="form-control"
                  name="city"
                  value={city} onChange={(e) => setCity(e.target.value)}
                >
                  <option disabled selected>
                    Pilih Kota
                  </option>
                  {cityResult && cityResult?.data.map(city => (
                    <option key={city.id} value={`${city.nama}`}>{city.nama}</option>
                  ))}
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
                  value={address} onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="row mb-3">
                <label className="form-label">No Handphone*</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Contoh: +628123456789"
                  name="no_hp"
                  value={no_hp} onChange={(e) => setNo_hp(e.target.value)}
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