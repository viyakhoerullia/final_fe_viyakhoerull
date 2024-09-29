import React from 'react';

const Overview = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-200"> {/* Mengubah latar belakang menjadi biru muda */}
      <div className="card bg-pink-200 w-full max-w-3xl mx-4 shadow-xl"> {/* Mengubah latar belakang kartu menjadi pink */}
        <div className="card-body p-6">
          <h2 className="card-title">OVERVIEW</h2>
          <p>
            HALO! Nama saya Viya Khoerul Lia sisiwi kelas 12 jurusan Rekayasa Perangkat Lunak (RPL) / Pengembangan Perangkat Lunak dan Gim (PPLG) di SMK Muhammadiyah 04 Sukorejo. 
            Saya memilih jurusan ini karena saya tertarik pada bagaimana teknologi dan perangkat lunak mampu mengubah dunia.
          </p>
          <p>
            Saya mengambil jurusan RPL bukan hanya karena minat pada komputer, tetapi juga karena saya ingin belajar bagaimana aplikasi dan website dibangun dari awal hingga siap digunakan. 
            Selain itu, saya juga menyukai tantangan yang diberikan oleh dunia pemrograman. Meskipun kadang menghadapi kesulitan, setiap tantangan yang berhasil diselesaikan memberikan rasa puas tersendiri.
          </p>
          <p>
            Selama belajar, saya sudah berkesempatan untuk mempelajari dasar-dasar pengembangan web seperti HTML dan CSS. 
            Meskipun masih dalam tahap pemula, saya telah menyelesaikan beberapa proyek kecil, termasuk:
          </p>
          <ul className="list-disc ml-5">
            <li>Portofolio Pribadi: yang dirancang menampilkan informasi dan keahlian saya.</li>
            <li>Website Toko Roti: untuk mendesain toko online sederhana.</li>
            <li>CV Multi Halaman: yang berisi detail tentang pengalaman dan kemampuan saya secara lebih terstruktur, dan masih ada lagi.</li>
          </ul>
          <p>
            Dengan memilih RPL, saya berharap dapat menguasai lebih banyak teknologi baru dan mengembangkan solusi yang bermanfaat bagi banyak orang. 
            Meski perjalanan belajar saya masih panjang, saya percaya bahwa setiap proyek yang saya selesaikan adalah langkah menuju pemahaman yang lebih dalam tentang dunia teknologi.
          </p>
          <p>
            Terima kasih telah mengunjungi profil saya, dan saya berharap dapat terhubung dengan Anda untuk berbagi kesempatan dan kolaborasi di masa mendatang!
          </p>
          <div className="card-actions justify-end">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
