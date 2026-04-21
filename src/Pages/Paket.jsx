import { useEffect, useState } from "react";
import API from "../Services/api";

export default function Paket() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getPaket();
  }, []);

  const getPaket = async () => {
    try {
      const res = await API.get('/api/paket'); // 👉 DI SINI
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Daftar Paket</h1>

      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.nama_paket}</h2>
          <p>{item.kategori}</p>
        </div>
      ))}
    </div>
  );
}