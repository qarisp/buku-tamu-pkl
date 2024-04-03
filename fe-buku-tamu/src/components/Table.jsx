import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Table = () => {
  const [pengunjung, setPengunjung] = useState([]);

  useEffect(() => {
    loadTamu();
  }, []);

  const loadTamu = async () => {
    const result = await axios.get("http://localhost:8080/api/buku-tamu");
    setPengunjung(result.data);
  };

  const deleteTamu = async (id) => {
    await axios.delete(`http://localhost:8080/api/buku-tamu/${id}`);
    loadTamu();
  };

  return (
    <div className="container">
      <table className="table m-3 border shadow">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Nama</th>
            <th scope="col">Instansi</th>
            <th scope="col">Department</th>
            <th scope="col">Jabatan</th>
            <th scope="col">Tujuan Berkunjung</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {pengunjung.map((item, idx) => (
            <tr key={idx}>
              <th scope="row">{idx + 1}</th>
              <td>{item.nama}</td>
              <td>{item.instansi}</td>
              <td>{item.department}</td>
              <td>{item.jabatan}</td>
              <td>{item.tujuanKunjungan}</td>
              <td>
                <button
                  className="btn btn-primary dropdown-toggle my-4"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Action
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={`/lihat/${item.id}`}>
                      Lihat Detil
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={`/ubahtamu/${item.id}`}>
                      Ubah Informasi
                    </Link>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => deleteTamu(item.id)}
                      href="/"
                    >
                      Hapus Tamu
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
