import Image from "react-bootstrap/esm/Image";
import "../assets/style.css";
import icon_back from "../assets/images/fi_arrow-left.png";
import Navbar from "../component/Navbar2";
import uploadGambar from "../assets/images/Group 2.png";
import { useDropzone } from "react-dropzone";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/action/addProduct";
import {useNavigate} from "react-router-dom";

export default function InfoProduk() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productInfo = useSelector(state => state.addProduct)

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [desc, setDesc] = useState("")
  const [image, setImage] = useState([])

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
    formData.append('name', name)
    formData.append('price', price)
    formData.append('category', category)
    formData.append('description', desc)
    formData.append('image', image[0])
    dispatch(addProduct(formData))

  console.log(productInfo)

    // setName("")
    // setPrice("")
    // setCategory("")
    // setDesc("")
    // setImage([])
  }

  const gambar = image[0]

  const productDetail = {
    name, price, category, desc, gambar
  }

  const handlePreview = () => {
    navigate('/seller/preview', { state: {productDetail} })
  }

  return (
    <>
      <Navbar judul="Info Produk" />
      <div className="container mt-5" id="info-produk">
        <div className="row justify-content-center">
          <div className="col-lg-1 col-sm-12 mb-1">
            <Image src={icon_back} />
          </div>
          <div className="col-lg-11 col-sm-12">
            <form encType="multipart/form-data" onSubmit={handleSubmit}>
              <div className="row mb-3">
                <label className="form-label">Nama Produk</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nama Produk"
                  name="name"
                  value={name} onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="row mb-3">
                <label className="form-label">Harga Produk</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Rp 0,00"
                  name="price"
                  value={price} onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="row mb-3">
                <label className="form-label">Kategori</label>
                <select className="form-select" name="category"
                  value={category} onChange={(e) => setCategory(e.target.value)}>
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
                  name="description"
                  value={desc} onChange={(e) => setDesc(e.target.value)}
                />
              </div>
              <div className="row mb-3">
                <label className="form-label">Foto Produk</label>
                {image.length === 0 ? (
                  <div {...getRootProps()}>
                    <input type="file" {...getInputProps()} filename="image" />
                    <Image src={uploadGambar} style={{ width: "8em" }} />
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
              <div className="row mb-3">
                <div className="col-6 p-0 pe-1">
                    <button
                      className="btn btn-outline-primary btn-action "
                      type="button"
                      id="preview"
                      onClick={() => handlePreview()}
                    >
                      Preview
                    </button>
                </div>
                <div className="col-6 p-0 ps-1">
                    <button
                      className="btn btn-primary btn-action"
                      type="submit"
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
