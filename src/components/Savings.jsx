import React from "react";
import Layout from "./Layout";
import savingsImage from '../assets/tabungan.png';
import Tabungan_berjangka from '../assets/Tabungan_berjangka.png';
import Tabungan_CBP from '../assets/Tabungan_CBP.png';
import Tabungan_Sibulan from '../assets/Tabungan_Sibulan.png';
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const data = [
  { id: 1, slug: 'tabungan-CBP', image: Tabungan_CBP, title: 'Tabungan CBP', desc: 'Tabungan CBP adalah produk tabungan yang menawarkan keamanan dan kenyamanan transaksi tanpa biaya tambahan. Dengan fasilitas bebas biaya RTGS dan administrasi bulanan, tabungan ini cocok untuk Anda yang menginginkan bunga kompetitif tanpa biaya tambahan.' },
  { id: 2, slug: 'tabungan-sibulan', image: Tabungan_Sibulan, title: 'Tabungan Sibulan', desc: 'Tabungan Sibulan adalah jenis tabungan yang dirancang untuk memberikan bunga tinggi dengan biaya penutupan rekening yang ringan. Tabungan ini memungkinkan Anda untuk melakukan top-up setoran bulanan sesuai kebutuhan, dengan bunga yang bersaing.' },
  { id: 3, slug: 'tabungan-berjangka', image: Tabungan_berjangka, title: 'Tabungan Berjangka', desc: ' Tabungan Berjangka adalah produk simpanan yang menawarkan bunga tinggi hingga 5% per tahun dengan setoran awal minimal yang terjangkau. Tabungan ini cocok untuk Anda yang ingin mengelola keuangan dengan fasilitas autodebet dari rekening tabungan.' },
];

const Savings = () => {
  return (
    <Layout>
      {/* Hero Section */}
      
        <img src={savingsImage} alt="savings" className="w-full h-full object-cover mt-20" />
      
      {/* Products Section */}
      <div className="py-16 px-4 sm:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-12">
          {data.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col lg:flex-row gap-8 bg-white rounded-xl overflow-hidden shadow-sm sm:shadow-none"
            >
              <div className="lg:w-1/3 h-64 lg:h-auto relative overflow-hidden group">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                />
              </div>
              <div className="lg:w-2/3 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-teal-800 mb-4">{item.title}</h2>
                  <p className="text-gray-600 mb-6">{item.desc}</p>
                </div>
                <Link to={`/savings/${item.slug}`} className="self-start">
                  <button className="flex items-center gap-2 text-teal-600 hover:text-teal-800 transition-colors duration-300">
                    <span>Baca Selengkapnya</span>
                    <GoArrowRight size={20} />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Savings;