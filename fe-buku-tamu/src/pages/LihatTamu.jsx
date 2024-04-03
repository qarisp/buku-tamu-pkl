import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const LihatTamu = () => {
  const { id } = useParams();
  const [tamu, setTamu] = useState({
    nama: "",
    instansi: "",
    department: "",
    jabatan: "",
    tujuanKunjungan: "",
  });

  useEffect(() => {
    loadTamu();
  }, []);
  const loadTamu = async () => {
    const result = await axios(`http://localhost:8080/api/buku-tamu/${id}`);
    setTamu(result.data);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Informasi Tamu</h2>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title d-flex justify-content-center">
                {tamu.nama}
              </h5>
              <h6 className="card-subtitle d-flex justify-content-center">
                {tamu.instansi} | {tamu.department} | {tamu.jabatan}
              </h6>
              <p className="card-text my-3">{tamu.tujuanKunjungan}</p>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <button className="btn btn-danger mt-3 mb-0">Hapus</button>
            <Link className="btn btn-outline-primary mt-3 mb-0 mx-1" to="/">
              Kembali
            </Link>
            <Link className="btn btn-success mt-3 mb-0" to={`/ubahtamu/${tamu.id}`}>Ubah</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LihatTamu;
