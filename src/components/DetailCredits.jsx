import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import promoImage from '../assets/Banner3.png'; 
import Kredit_Investasi from '../assets/Kredit_Investasi.png';
import Kredit_Konsumtif from '../assets/Kredit_Konsumtif.png';
import Kredit_Modal_Kerja from '../assets/Kredit_Modal_Kerja.png';
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const data = [
  {
    id: 1,
    slug: 'kredit-investasi',
    image: Kredit_Investasi,
    description: 'Kredit Investasi adalah pinjaman yang diberikan untuk tujuan investasi, seperti membeli peralatan usaha, properti, atau memperluas bisnis. Kredit ini membantu Anda mendapatkan modal untuk investasi yang bisa meningkatkan keuntungan atau produktivitas di masa depan.',
    desc: [
      { id: 1, title: 'Keunggulan', lists: [
        'Proses cepat',
        'Bunga murah',
        'Plafon hingga Rp. 2 miliar',
        'Jangka waktu hingga 10 tahun',
        'Persyaratan mudah',
        'Perlindungan asuransi',
        'Aman dan terpercaya'
      ]},
      { id: 2, title: 'Ketentuan Pengajuan', lists: [
        'Mengisi Aplikasi Permohonan Kredit',
        'Fotocopy KTP',
        'Fotocopy KTP Pasangan (untuk yang sudah menikah)',
        'Fotocopy Kartu Keluarga',
        'Fotocopy Akta Nikah/Perceraian (jika calon debitur bercerai)',
        'Fotocopy NPWP (untuk pengajuan di atas Rp. 100 juta)',
        'Slip Gaji 3 Bulan Terakhir (pegawai)',
        'Rekening Koran 3 Bulan Terakhir (wirausaha)',
        'Dokumen Jaminan (sertifikat/BPKB)'
      ]}
    ]
  },
  {
    id: 2,
    slug: 'kredit-konsumtif',
    image: Kredit_Konsumtif,
    description: 'Kredit Konsumtif adalah pinjaman yang diberikan untuk kebutuhan konsumsi sehari-hari, seperti membeli barang-barang pribadi, liburan, atau keperluan konsumsi lainnya. Kredit ini membantu Anda memenuhi kebutuhan pribadi yang tidak terkait langsung dengan investasi atau bisnis.',
    desc: [
      { id: 1, title: 'Keunggulan', lists: [
        'Proses cepat',
        'Bunga murah',
        'Plafon hingga Rp. 2 miliar',
        'Jangka waktu hingga 10 tahun',
        'Persyaratan mudah',
        'Perlindungan asuransi',
        'Aman dan terpercaya'
      ]},
      { id: 2, title: 'Ketentuan Pengajuan', lists: [
        'Mengisi Aplikasi Permohonan Kredit',
        'Fotocopy KTP',
        'Fotocopy KTP Pasangan (untuk yang sudah menikah)',
        'Fotocopy Kartu Keluarga',
        'Fotocopy Akta Nikah/Perceraian (jika calon debitur bercerai)',
        'Fotocopy NPWP (untuk pengajuan di atas Rp. 100 juta)',
        'Slip Gaji 3 Bulan Terakhir (pegawai)',
        'Rekening Koran 3 Bulan Terakhir (wirausaha)',
        'Dokumen Jaminan (sertifikat/BPKB)'
      ]}
    ]
  },
  {
    id: 3,
    slug: 'kredit-modal-kerja',
    image: Kredit_Modal_Kerja,
    description: 'Kredit Modal Kerja adalah pinjaman yang diberikan untuk membantu perusahaan atau usaha dalam membiayai kebutuhan sehari-hari, seperti membeli bahan baku, membayar gaji karyawan, atau menutupi biaya operasional lainnya. Kredit ini bertujuan untuk memastikan perusahaan memiliki dana yang cukup untuk menjalankan aktivitas usahanya dengan lancar. ',
    desc: [
      { id: 1, title: 'Keunggulan', lists: [
        'Proses cepat',
        'Bunga murah',
        'Plafon hingga Rp. 2 miliar',
        'Persyaratan mudah',
        'Perlindungan asuransi',
        'Aman dan terpercaya'
      ]},
      { id: 2, title: 'Ketentuan Pengajuan', lists: [
        'Mengisi Aplikasi Permohonan Kredit',
        'Fotocopy KTP',
        'Fotocopy KTP Pasangan (untuk yang sudah menikah)',
        'Fotocopy Kartu Keluarga',
        'Fotocopy Akta Nikah/Perceraian (jika calon debitur bercerai)',
        'Fotocopy NPWP (untuk pengajuan di atas Rp. 100 juta)',
        'Slip Gaji 3 Bulan Terakhir (pegawai)',
        'Rekening Koran 3 Bulan Terakhir (wirausaha)',
        'Dokumen Jaminan (sertifikat/BPKB)'
      ]}
    ]
  }
];

const DetailCredits = () => {
  const [credits, setCredits] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const result = data.find(item => item.slug === slug);
    if (result) {
      setCredits(result);
    }
  }, [slug]);

  if (!credits) return null;

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-16 pb-12 bg-gray-50"
      >
        {/* Hero Section */}
        <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] mb-12 overflow-hidden">
          <img src={credits.image} alt={credits.slug} className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-700 mb-10 leading-relaxed bg-white p-6 rounded-lg shadow-sm">
                {credits.description}
              </motion.p>
 
              {/* Features */}
              {credits.desc.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-10 bg-white rounded-xl overflow-hidden shadow-md"
                >
                  <h2 className="text-xl sm:text-2xl font-bold text-white bg-emerald-600 py-4 px-6">{item.title}</h2>
                  <ul className="p-6 space-y-4">
                    {item.lists.map((list, idx) => (
                      <li key={idx} className="flex items-start">
                        <FaCheckCircle className="text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-base sm:text-lg text-gray-700">{list}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Promo Image (Sticky) */}
            <div className="lg:w-1/3 lg:mt-0">
              <div className="sticky top-24">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <img src={promoImage} alt="Promo" className="w-full" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-emerald-600 mb-2">Promo Spesial!</h3>
                    <p className="text-gray-600 mb-4">Dapatkan penawaran terbaik untuk produk tabungan kami. Berlaku sampai 31 Desember 2024.</p>
                    <a href="https://wa.me/628123625534" target="_blank" rel="noopener noreferrer">
                    <button className="bg-emerald-600 text-white py-2 px-4 rounded hover:bg-emerald-500 transition duration-300">
                      Hubungi Kami
                    </button>
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}

export default DetailCredits;