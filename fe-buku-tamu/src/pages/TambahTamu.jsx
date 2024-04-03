import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const TambahTamu = () => {
  let navigate = useNavigate();

  const [tamu, setTamu] = useState({
    nama: "",
    instansi: "",
    department: "",
    jabatan: "",
    tujuanKunjungan: "",
  });

  const { nama, instansi, department, jabatan, tujuanKunjungan } = tamu;

  const onInputChange = (e) => {
    setTamu({ ...tamu, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/buku-tamu/tambah", tamu);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Tambah Tamu</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="nama" className="form-label">
                Nama
              </label>
              <input
                type="text"
                className="form-control"
                name="nama"
                value={nama}
                onChange={(e) => onInputChange(e)}
                placeholder="Masukkan nama anda"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="instansi" className="form-label">
                Instansi
              </label>
              <input
                type="text"
                className="form-control"
                name="instansi"
                value={instansi}
                onChange={(e) => onInputChange(e)}
                placeholder="Masukkan asal instansi"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="department" className="form-label">
                Department
              </label>
              <input
                type="text"
                className="form-control"
                name="department"
                value={department}
                onChange={(e) => onInputChange(e)}
                placeholder="Masukkan nama department pada instansi"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="jabatan" className="form-label">
                Jabatan
              </label>
              <input
                type="text"
                className="form-control"
                name="jabatan"
                value={jabatan}
                onChange={(e) => onInputChange(e)}
                placeholder="Masukkan jabatan anda"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="tujuanKunjungan" className="form-label">
                Tujuan Berkunjung
              </label>
              <textarea
                name="tujuanKunjungan"
                value={tujuanKunjungan}
                onChange={(e) => onInputChange(e)}
                cols="30"
                rows="3"
                className="form-control"
                placeholder="Masukkan tujuan anda berkunjung"
              ></textarea>
            </div>
            <div className="my-3 d-flex justify-content-end">
              <Link to="/" className="btn btn-danger mx-2">
                Cancel
              </Link>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TambahTamu;
