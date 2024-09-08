import Layout from "./Layout";
import Tabungan_berjangka from '../assets/Tabungan_berjangka.png';
import Tabungan_CBP from '../assets/Tabungan_CBP.png';
import Tabungan_Sibulan from '../assets/Tabungan_Sibulan.png';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaPiggyBank, FaListUl, FaUserPlus, FaCheckCircle, FaStar } from "react-icons/fa";

// Data tabungan
const data = [
  {
    id: 1,
    slug: 'tabungan-CBP',
    image: Tabungan_CBP,
    description: 'Tabungan CBP adalah produk tabungan yang menawarkan keamanan dan kenyamanan transaksi tanpa biaya tambahan. Dengan fasilitas bebas biaya RTGS dan administrasi bulanan, tabungan ini cocok untuk Anda yang menginginkan bunga kompetitif tanpa biaya tambahan. Tidak memerlukan setoran awal dan memiliki saldo minimum yang terjangkau.',
    desc: [
      { 
        id: 1, 
        title: 'Keunggulan', 
        lists: [
          'Transaksi aman dan nyaman',
          'Bebas biaya RTGS',
          'Bunga kompetitif',
          'Bebas biaya administrasi bulanan'
        ] 
      },
      { 
        id: 2, 
        title: 'Ketentuan', 
        lists: [
          'Menyerahkan bukti identitas diri yang masih berlaku, yaitu:',
          'Perorangan: KTP (WNI), NPWP atau Passport, KITAP/S, TIN/NPWP (WNA)',
          'Badan Usaha: SIUP, TDP, NPWP',
          'Mengisi dan menandatangani formulir permohonan pembukaan rekening Jumbo',
          'Tanpa setoran awal',
          'Saldo minimum Rp. 100.000,-',
          'Rekening akan ditutup ketika tidak melakukan setoran selama 7 hari sejak pembukaan rekening'
        ] 
      },
      { 
        id: 3, 
        title: 'Prosedur', 
        lists: [
          'Siapkan dokumen identitas yang diperlukan',
          'Isi dan tandatangani formulir pembukaan rekening',
          'Proses pembukaan rekening tanpa setoran awal'
        ] 
      }
    ]
  },
  {
    id: 2,
    slug: 'tabungan-sibulan',
    image: Tabungan_Sibulan,
    description: 'Tabungan Sibulan adalah jenis tabungan yang dirancang untuk memberikan bunga tinggi dengan biaya penutupan rekening yang ringan. Tabungan ini memungkinkan Anda untuk melakukan top-up setoran bulanan sesuai kebutuhan, dengan bunga yang bersaing dibandingkan dengan produk tabungan berjangka lainnya.',
    desc: [
      { 
        id: 1, 
        title: 'Keunggulan', 
        lists: [
          'Berbunga tinggi (LPS Bank Umum) dibandingkan tabungan berjangka lainnya',
          'Biaya tutup rekening yang ringan',
          'Transaksi mudah dan aman',
          'Top-up setoran bulanan dapat dilakukan sewaktu-waktu'
        ] 
      },
      { 
        id: 2, 
        title: 'Ketentuan', 
        lists: [
          'Setoran awal minimal Rp. 100.000',
          'Setoran bulanan mulai dari Rp. 100.000',
          'Jangka waktu mulai dari 1 - 10 tahun',
          'Tanpa biaya administrasi',
          'Penutupan rekening sebelum jatuh tempo Rp. 50.000'
        ] 
      },
      { 
        id: 3, 
        title: 'Prosedur', 
        lists: [
          'Siapkan dokumen identitas yang diperlukan',
          'Isi dan tandatangani formulir pembukaan rekening',
          'Lakukan setoran awal sesuai ketentuan'
        ] 
      }
    ]
  },
  {
    id: 3,
    slug: 'tabungan-berjangka',
    image: Tabungan_berjangka,
    description: 'Tabungan Berjangka adalah produk simpanan yang menawarkan bunga tinggi hingga 5% per tahun dengan setoran awal minimal yang terjangkau. Tabungan ini cocok untuk Anda yang ingin mengelola keuangan dengan bunga yang kompetitif dan fasilitas autodebet dari rekening tabungan. Dengan jangka waktu yang dapat disesuaikan dan dijamin oleh LPS, tabungan ini memberikan keamanan tambahan untuk dana Anda.',
    desc: [
      { 
        id: 1, 
        title: 'Keunggulan', 
        lists: [
          'Bunga tinggi 5% p.a',
          'Setoran awal minimal Rp. 100.000',
          'Bisa autodebet dari rekening Tabungan',
          'Aman dijamin LPS'
        ] 
      },
      { 
        id: 2, 
        title: 'Ketentuan', 
        lists: [
          'Membawa bukti identitas diri yang masih berlaku, yaitu:',
          'Perorangan: KTP (WNI) KITAS/Passport (WNA)',
          'Badan Usaha: SIUP, TDP, NPWP',
          'Mengisi dan menandatangani formulir pembukaan rekening Tabungan CBP',
          'Mengisi dan menandatangani formulir pembukaan rekening Tabungan Berjangka',
          'Mengisi dan menandatangani formulir kuasa autodebet'
        ] 
      },
      { 
        id: 3, 
        title: 'Prosedur', 
        lists: [
          'Siapkan dokumen identitas yang diperlukan',
          'Isi dan tandatangani formulir pembukaan rekening',
          'Proses pembukaan rekening dengan autodebet jika diperlukan'
        ] 
      }
    ]
  }
];




const DetailSavings = () => {
  const [savings, setSavings] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const result = data.find(item => item.slug === slug);
    if (result) {
      setSavings(result);
    }
  }, [slug]);

  if (!savings) return null;

  const getIcon = (title) => {
    switch (title.toLowerCase()) {
      case 'keunggulan':
        return <FaStar className="text-teal-600 text-2xl" />;
      case 'ketentuan':
        return <FaListUl className="text-teal-600 text-2xl" />;
      case 'Prosedur':
        return <FaUserPlus className="text-teal-600 text-2xl" />;
      default:
        return <FaPiggyBank className="text-teal-600 text-2xl" />;
    }
  };

  return (
    <Layout>
      <div className="bg-gradient-to-b from-teal-50 to-white min-h-screen">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="pt-16 pb-12"
        >
           {/* Hero Section */}
        <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] mb-12 overflow-hidden">
        <img src={savings.image} alt={savings.slug} className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
          </div>
        </div>
          
        </motion.div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-gray-700 mb-5 leading-relaxed bg-white p-6 "
          >
             {savings.description}
          </motion.p>

          {/* Features */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {savings.desc.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-2xl"
              >
                <div className="bg-gradient-to-r from-teal-700 to-teal-600 p-4 flex items-center">
                  <div className="bg-white p-3 rounded-full mr-4">
                    {getIcon(item.title)}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white uppercase">{item.title}</h2>
                </div>
                <ul className="p-6 space-y-4">
                  {item.lists.map((list, idx) => (
                    <li key={idx} className="flex items-start">
                      <FaCheckCircle className="text-teal-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base">{list}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-16 bg-gradient-to-r from-teal-600 to-teal-700 rounded-xl p-8 text-center text-white shadow-xl"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Mulai Menabung untuk Masa Depan Anda!</h3>
            <p className="text-lg sm:text-xl mb-8">Amankan finansial Anda dengan Tabungan kami. Hubungi kami sekarang untuk informasi lebih lanjut.</p>
            <a href="https://wa.me/628123625534" target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-teal-700 px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-teal-100 transition duration-300 shadow-md">
              Buka Rekening Sekarang
            </button>
            </a>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}

export default DetailSavings;