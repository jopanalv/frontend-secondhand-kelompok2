import Image from "react-bootstrap/esm/Image";
import "../assets/style.css";
import icon_back from "../assets/images/fi_arrow-left.png";
import Navbar from "../component/Navbar2";
import uploadGambar from "../assets/images/Group 2.png";
import { useDropzone } from "react-dropzone";
import React, { useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProduct, deleteProduct } from "../redux/action/editProduct";
import { getAllDaftarjual } from "../redux/action/daftarjualActions";
import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";
import product from "../redux/reducer/EditProduct";
import { addSearch } from "../slice/searchingSlice";
import { useParams } from 'react-router-dom';

function EditProduk() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [desc, setDesc] = useState("")
  const [image, setImage] = useState([])

  const [searching, setSearching] = useState("");

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

//   useEffect(() => {
//     dispatch(getAllDaftarjual(id));
// }, []);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', price)
    formData.append('category', category)
    formData.append('description', desc)
    formData.append('image', image[0])
    dispatch(editProduct(formData, id))


    setName("")
    setPrice("")
    setCategory("")
    setDesc("")
    setImage([])

    navigate('/seller/daftar-jual')
  }

  const handleDelete = (id) => {
    if (window.confirm("Are you sure You want to delete?"));
    dispatch(deleteProduct(id));
    navigate('/seller/daftar-jual')
}

const handleSearch = () => {
  dispatch(
    addSearch(searching)
  )
}

useEffect(() => {
  handleSearch();
  //panggil action
  console.log("1. use effect component did mount");
  dispatch(editProduct(id));
}, [dispatch, id]);

  return (
    <>
      <Navbar judul="Edit Produk" />
      <div className="container mt-5" id="edit-produk">
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
                      className="btn btn-outline-danger btn-action "
                      type="button"
                      id="delete"
                      onClick={() => handleDelete(id)}
                    >
                      Delete
                    </button>
                </div>
                <div className="col-6 p-0 ps-1">
                {/* <Link to={`/seller/daftar-jual`}> */}
                    <button
                      className="btn btn-primary btn-action"
                      type="submit"
                      id="save"
                    >
                      Simpan
                    </button>
                  {/* </Link>   */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProduk;