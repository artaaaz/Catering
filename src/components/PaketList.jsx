import { useEffect, useState } from "react";
import axios from "axios";

export default function PaketList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get('http://127.0.0.1:8000/api/paket')
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {data.map((item) => (
        <div key={item.id} className="p-4 shadow rounded-xl">
          <h2 className="font-bold">{item.nama_paket}</h2>
          <p>{item.kategori}</p>
          <p>Rp {item.harga_paket}</p>
        </div>
      ))}
    </div>
  );
}