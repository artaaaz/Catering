import { useEffect, useState } from "react";
import API from "../Services/api";
import { motion } from "framer-motion";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getPaket();
  }, []);

  const getPaket = async () => {
    try {
      const res = await API.get("/api/paket");
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-pink-500">

      {/* 🔥 NAVBAR */}
      <div className="flex justify-between items-center px-8 py-4 bg-white/10 backdrop-blur-md">
        <h1 className="text-xl font-bold text-white">Catering</h1>

        <button className="bg-white text-blue-500 px-4 py-2 rounded-lg hover:scale-105 transition">
          Login
        </button>
      </div>

      {/* 🔥 HERO */}
      <div className="text-center py-20 text-white">
        <h1 className="text-5xl font-bold mb-4">
          Do It YourSelf
        </h1>

        <p className="mb-6">
          Solusi catering terbaik untuk semua acara kamu
        </p>

        <button
          onClick={() =>
            window.scrollTo({ top: 600, behavior: "smooth" })
          }
          className="bg-white text-blue-500 px-6 py-3 rounded-xl hover:scale-110 transition"
        >
          Lihat Paket
        </button>
      </div>

      {/* 🔥 LIST PAKET */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-white">
          Paket Catering
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              {/* FOTO */}
              <img
                src={`http://127.0.0.1:8000/storage/${item.foto}`}
                alt={item.nama_paket}
                className="w-full h-48 object-cover"
              />

              {/* CONTENT */}
              <div className="p-4">
                <h3 className="text-xl font-bold text-blue-500">
                  {item.nama_paket}
                </h3>

                <p className="text-gray-600">
                  {item.kategori}
                </p>

                <p className="text-pink-500 font-bold mt-2">
                  Rp {item.harga_paket}
                </p>

                <button className="mt-4 w-full bg-gradient-to-r from-blue-500 to-pink-500 text-white py-2 rounded-xl hover:scale-105 transition">
                  Pesan Sekarang
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}