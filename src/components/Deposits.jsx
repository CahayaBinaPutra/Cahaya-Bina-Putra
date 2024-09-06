import React from "react";
import Layout from "./Layout";
import depositsImage from '../assets/deposito.png';
import Depositobisnis from '../assets/Deposito_Bisnis.png';
import DepositoCBP from '../assets/Deposito_CBP.png';
import DepositoBerhadiah from '../assets/Deposito_Berhadiah.png';
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const data = [
  { id: 1, slug: 'deposito-berhadiah-langsung', image: DepositoBerhadiah, title: 'Deposito Berhadiah Langsung', desc: 'Deposito Berhadiah Langsung adalah produk simpanan berjangka di mana nasabah menyimpan uang untuk jangka waktu tertentu dan berkesempatan memenangkan hadiah menarik. Produk ini menawarkan bunga yang fleksibilitas dalam jangka waktu simpanan.' },
  { id: 2, slug: 'deposito-bisnis', image:  Depositobisnis, title: 'Deposito Bisnis', desc: 'Deposito Bisnis adalah produk simpanan berjangka yang dirancang untuk kebutuhan bisnis dengan bunga tinggi dan fleksibilitas dalam pencairan dana. Deposito ini menawarkan bunga yang tinggi hingga 5% per tahun dan bebas biaya transaksi.' },
  { id: 3, slug: 'deposito-CBP', image: DepositoCBP, title: 'Deposito CBP', desc: 'Deposito CBP adalah produk simpanan berjangka dengan jangka waktu fleksibel mulai dari 1 hingga 12 bulan. Deposito ini menawarkan bunga yang dihitung berdasarkan jumlah hari sebenarnya dan berbagai fasilitas tambahan, dengan keuntungan dan keamanan yang terjamin.' },
];

const Deposits = () => {
  return (
    <Layout>
      {/* Hero Section */}
  
        <img src={depositsImage} alt="Deposits" className="w-full h-full object-cover mt-20" />
    

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
                <Link to={`/deposits/${item.slug}`} className="self-start">
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
}

export default Deposits;