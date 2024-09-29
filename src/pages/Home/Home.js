import React from 'react';

const Home = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#ADD8E6]"> {/* Mengubah background menjadi biru muda */} 
      <div className="card lg:card-side bg-pink-200 shadow-xl"> {/* Warna card tetap pink */}
        <figure>
          <img
            src="photo/viastudio.JPG"
            alt="Profile"
            className="w-40 h-60 object-cover" // Mengatur ukuran gambar
          />
        </figure>
        <div className="card-body text-black-900"> {/* Mengubah warna teks */}
          <h2 className="card-title">HALLO, SAYA VIYA KHOERUL LIA</h2>
          <p>
            Perkenalkan saya siswi SMK MUHAMMADIYAH 04 SUKOREJO KELAS XII PPLG 1
          </p>
          <p>
            Saya sedikit memahami tentang HTML dan CSS, dengan dasar pengetahuan JavaScript.
          </p>
          <p>Saya memilih jurusan ini karena saya tertarik untuk mencoba hal yang baru.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Berikutnya</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
