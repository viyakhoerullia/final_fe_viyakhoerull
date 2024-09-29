import React from 'react';

const AboutMe = () => {
  return (
    <div className="flex justify-center gap-8 items-center min-h-screen bg-blue-200 px-8">
      {/* Card Kiri */}
      <div className="card bg-pink-200 w-100 shadow-xl">
        <div className="card-body border-b-2 border-gray-200">
          <h2 className="card-title">BIODATA</h2>
          <table className="table-auto w-full">
            <tbody>
              <tr>
                <td><strong>Nama:</strong></td>
                <td>Viya Khoerul Lia</td>
              </tr>
              <tr>
                <td><strong>Tanggal Lahir: </strong></td>
                <td>28 Januari 2007</td>
              </tr>
              <tr>
                <td><strong>Alamat:</strong></td>
                <td>Bangunsari, Pageruyung</td>
              </tr>
              <tr>
                <td><strong>Email:</strong></td>
                <td>viaviaa677@gmail.com</td>
              </tr>
              <tr>
                <td><strong>No. HP:</strong></td>
                <td>083xxxxxxxxx</td>
              </tr>
              <tr>
                <td><strong>Hobi:</strong></td>
                <td>Mendengarkan Musik & Menonton</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Card Kanan */}
      <div className="card bg-pink-200 w-96 shadow-xl">
        <div className="card-body border-b-2 border-gray-200">
          <h2 className="card-title">RIWAYAT PENDIDIKAN</h2>
          <table className="table-auto w-full">
            <tbody>
              <tr>
                <td><strong>TK:</strong></td>
                <td>TK ABA 1 Bangunsari</td>
              </tr>
              <tr>
                <td><strong>SD/MI:</strong></td>
                <td>MIM Bangunsari</td>
              </tr>
              <tr>
                <td><strong>SMP:</strong></td>
                <td>SMP Muhammadiyah 04 Sukorejo</td>
              </tr>
              <tr>
                <td><strong>SMK:</strong></td>
                <td>SMK Muhammadiyah 04 Sukorejo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
