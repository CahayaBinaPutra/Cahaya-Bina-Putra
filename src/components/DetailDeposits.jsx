import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import carousel1 from '../assets/Carousel3.png';
import Depositobisnis from '../assets/Deposito_Bisnis.png';
import DepositoCBP from '../assets/Deposito_CBP.png';
import DepositoBerhadiah from '../assets/Deposito_Berhadiah.png';
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const data = [
  {
    id: 1,
    slug: 'deposito-berhadiah-langsung',
    image: DepositoBerhadiah,
    description: 'Deposito Berhadiah Langsung adalah produk simpanan berjangka di mana nasabah menyimpan uang untuk jangka waktu tertentu dan berkesempatan memenangkan hadiah menarik. Produk ini menawarkan bunga yang kompetitif dan fleksibilitas dalam jangka waktu simpanan, mulai dari minimal 1 tahun. Dana yang disimpan juga dijamin aman oleh LPS.',
    desc: [
      { id: 1, title: 'Keunggulan', lists: [
        'Terbuka untuk Semua Nasabah.',
        'Bunga Kompetitif.',
        'Hadiah Langsung untuk Setoran Mulai Rp. 25.000.000.',
        'Hadiah Bertambah dengan Setoran Lebih Besar.',
        'Jangka Waktu Deposito Fleksibel (minimal 1 tahun).',
        'Aman dijamin LPS.'
      ]},
      { id: 2, title: 'Kententuan Pembukaan', lists: [
        'Deposito berhadiah langsung berlaku untuk semua nasabah PT. BPR Cahaya Bina Putra.',
        'Suku bunga deposito berhadiah langsung sebesar (4 point -1,75 point) di bawah ketentuan LPS.',
        'Setoran deposito diberikan hadiah langsung mulai dari nominal Rp. 25.000.000,- ke atas dengan kelipatan Rp. 50.000.000.',
        'Jangka waktu deposito minimal 1 tahun.',
        'Membawa bukti identitas diri yang masih berlaku, yaitu: Perorangan: KTP (WNI) KITAS/Passport (WNA) dan melampirkan fotocopy ahli waris (KTP/KK); Badan Usaha: SIUP, TDP, NPWP.',
        'Mengisi dan menandatangani formulir aplikasi data pengajuan deposito.',
        'Mengisi dan menandatangani formulir pembukaan rekening Tabungan CBP.'
      ]}
    ]
  },
  {
    id: 2,
    slug: 'deposito-bisnis',
    image: Depositobisnis,
    description: 'Deposito Bisnis adalah produk simpanan berjangka yang dirancang untuk kebutuhan bisnis dengan bunga tinggi dan fleksibilitas dalam pencairan dana. Deposito ini menawarkan bunga yang tinggi hingga 5% per tahun dan bebas biaya transaksi, dengan pilihan untuk memperpanjang deposito secara otomatis.',
    desc: [
      { id: 1, title: 'Keunggulan', lists: [
        'Bunga deposito tinggi hingga 5% per tahun (maksimal penempatan 3 bulan).',
        'Bebas pencairan sewaktu-waktu tanpa penalti.',
        'Transaksi bebas biaya.',
        'Bunga dapat ditempatkan kembali ke pokok deposito atau ditransfer ke rekening Tabungan Jumbo Anda yang dapat ditarik kapanpun.',
        'Bebas memperpanjang deposito secara otomatis.',
        'Personalized services dari Personal Banking Officer yang akan melayani Anda dengan sepenuh hati.'
      ]},
      { id: 2, title: 'Kententuan Pembukaan', lists: [
        'Jangka waktu simpanan 1, 3, 6, dan 12 bulan.',
        'Bunga dikenakan pajak sesuai ketentuan yang berlaku.',
        'Penempatan minimal Rp. 8.000.000,- hingga Rp. 250.000.000,-.'
      ]}
    ]
  },
  {
    id: 3,
    slug: 'deposito-CBP',
    image: DepositoCBP,
    description: 'Deposito CBP adalah produk simpanan berjangka dengan jangka waktu fleksibel mulai dari 1 hingga 12 bulan. Deposito ini menawarkan bunga yang dihitung berdasarkan jumlah hari sebenarnya dan berbagai fasilitas tambahan, dengan keuntungan dan keamanan yang terjamin.',
    desc: [
      { id: 1, title: 'Keunggulan', lists: [
        'Jangka waktu mulai dari 1 hingga 12 bulan.',
        'Bebas memperpanjang deposito secara otomatis.',
        'Bunga dapat ditempatkan kembali ke pokok deposito atau ditransfer ke rekening Tabungan Urban dan dapat ditarik kapan pun.',
        'Bunga dihitung berdasarkan jumlah hari sebenarnya (1 tahun dihitung 365 hari).',
        'Lebih menguntungkan.',
        'Berbagai macam fasilitas.',
        'Bebas penalti.',
        'Aman dijamin LPS.'
      ]},
      { id: 2, title: 'Kententuan Pembukaan', lists: [
        'Membawa bukti identitas diri yang masih berlaku, yaitu: Perorangan: KTP (WNI) KITAS/Passport (WNA) dan melampirkan fotocopy ahli waris (KTP/KK); Badan Usaha: SIUP, TDP, NPWP.',
        'Mengisi dan menandatangani formulir aplikasi data pengajuan deposito.',
        'Mengisi dan menandatangani formulir pembukaan rekening Tabungan CBP.',
        'Penempatan minimal Rp. 1.000.000,-.'
      ]}
    ]
  }
];


const DetailDeposits = () => {
  const [deposit, setDeposit] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const result = data.find(item => item.slug === slug);
    if (result) {
      setDeposit(result);
    }
  }, [slug]);

  if (!deposit) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-16 pb-12"
      >
        {/* Hero Section */}
        <div className="relative h-[40vh] sm:h-[50vh] mb-8">
          <img src={deposit.image} alt={deposit.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center px-4">{deposit.title}</h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="text-lg text-gray-700 mb-10 leading-relaxed bg-white p-6 rounded-lg shadow-sm">
          {deposit.description}
          </p>

          {/* Features */}
          {deposit.desc.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: item.id * 0.1 }}
              className="mb-12 bg-gray-50 rounded-lg p-6 shadow-md"
            >
              <h2 className="text-2xl font-bold text-green-800 mb-6 uppercase border-b-2 border-green-300 pb-2">{item.title}</h2>
              <ul className="space-y-4">
                {item.lists.map((list, index) => (
                  <li key={index} className="flex items-start">
                    <FaStar className="text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{list}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* CTA Section */}
          <div className="mt-12 bg-gradient-to-r from-teal-600 to-teal-700 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Tertarik dengan Produk Deposito Kami?</h3>
            <p className="text-white mb-6">Hubungi kami sekarang untuk informasi lebih lanjut atau untuk membuka deposito Anda.</p>
            <a href="https://wa.me/6287862109106" target="_blank" rel="noopener noreferrer">
            <button className="bg-green-400 text-white px-8 py-3 rounded-full hover:bg-green-700 transition duration-300">
              Hubungi Kami
            </button>
            </a>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}

export default DetailDeposits;