import React from "react";
import Layout from "./Layout";
import creditsImage from '../assets/kredit.png';
import Kredit_Investasi from '../assets/Kredit_Investasi.png';
import Kredit_Konsumtif from '../assets/Kredit_Konsumtif.png';
import Kredit_Modal_Kerja from '../assets/Kredit_Modal_Kerja.png';
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const data = [
  { id: 1, slug: 'kredit-investasi', image: Kredit_Investasi, title: 'Kredit Investasi', desc: 'Kredit Investasi adalah pinjaman yang diberikan untuk tujuan investasi, seperti membeli peralatan usaha, properti, atau memperluas bisnis. Kredit ini membantu Anda mendapatkan modal untuk investasi yang bisa meningkatkan keuntungan atau produktivitas di masa depan.' },
  { id: 2, slug: 'kredit-konsumtif', image: Kredit_Konsumtif, title: 'Kredit Konsumtif', desc: ' Kredit Konsumtif adalah pinjaman yang diberikan untuk kebutuhan konsumsi sehari-hari, seperti membeli barang-barang pribadi, liburan, atau keperluan konsumsi lainnya. Kredit ini membantu Anda memenuhi kebutuhan pribadi yang tidak terkait langsung dengan bisnis.' },
  { id: 3, slug: 'kredit-modal-kerja', image: Kredit_Modal_Kerja, title: 'Kredit Modal Kerja', desc: 'Kredit Modal Kerja adalah pinjaman yang diberikan untuk membantu perusahaan atau usaha dalam membiayai kebutuhan sehari-hari, seperti membeli bahan baku, membayar gaji karyawan, atau menutupi biaya operasional lainnya.' },
];

const Credits = () => {
  return (
    <Layout>
      {/* Hero Section */}
        <img src={creditsImage} alt="credits" className="w-full h-full object-cover mt-20" />
       

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
                <Link to={`/credits/${item.slug}`} className="self-start">
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

export default Credits;