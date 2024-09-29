import React from 'react';

const SkilldanPengalaman = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-200">
      <div className="bg-pink-100 p-8 rounded-lg shadow-lg w-3/4"> {/* Mengubah warna latar belakang card menjadi pink */}
        <h1 className="text-3xl font-bold text-center mb-8">SKILLS DAN PENGALAMAN</h1>
        <div className="flex justify-between">
          {/* Bagian Skill */}
          <div className="w-1/2 mr-8">
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <p className="mb-4">Skill yang saya kuasai saat ini adalah:</p>
            <ul className="space-y-4">
              <li>
                1. HTML
                <div className="bg-gray-300 rounded-full h-2.5 w-full mt-1">
                  <div className="bg-black h-2.5 rounded-full w-[80%]"></div>
                </div>
              </li>
              <li>
                2. CSS
                <div className="bg-gray-300 rounded-full h-2.5 w-full mt-1">
                  <div className="bg-black h-2.5 rounded-full w-[50%]"></div>
                </div>
              </li>
              <li>
                3. JavaScript
                <div className="bg-gray-300 rounded-full h-2.5 w-full mt-1">
                  <div className="bg-black h-2.5 rounded-full w-[30%]"></div>
                </div>
              </li>
            </ul>
          </div>

          {/* Bagian Pengalaman */}
          <div className="w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Pengalaman</h2>
            <p>Pengalaman saya:</p>
            <ul className="list-disc list-inside">
              <li>Magang di sekolah</li>
              <li>Freelance di Nusantech</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkilldanPengalaman;
