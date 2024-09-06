import Layout from "./Layout"
import { Link } from "react-router-dom";
import tabungan1Image from '../assets/Tabungan 1.png'
import tabungan2Image from '../assets/Tabungan 2.png'
import tabungan3Image from '../assets/Tabungan 3.png'
import carousel1 from '../assets/Carousel1.png'
import carousel2 from '../assets/Carousel2.png'
import carousel3 from '../assets/Carousel3.png'
import  recommendationImg1 from '../assets/Banner1.png'
import  recommendationImg2 from '../assets/Banner3.png'
import  recommendationImg3 from '../assets/Banner2.png'
import avatarImage from '../assets/avatar.png'
import bg2Image from '../assets/bg 2.png'
import ChatBot from './ChatBot';  // Pastikan path ini benar
import { GoDotFill } from "react-icons/go";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';
import { FaCheckCircle } from 'react-icons/fa';


const carouselItems = [
  { id: 1, img: carousel1},
  { id: 2, img: carousel2 },
  { id: 3, img: carousel3}
];

const recommendationImages = [
  recommendationImg1,
  recommendationImg2,
  recommendationImg3
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [indexRecommend, setIndexRecommend] = useState(0);
  const [animationClass, setAnimationClass] = useState('opacity-100');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const prevRecommend = () => {
    setAnimationClass('opacity-50');
    setTimeout(() => {
      setIndexRecommend((prevIndex) => (prevIndex - 1 + recommendationImages.length) % recommendationImages.length);
      setAnimationClass('opacity-100');
    }, 200);
  };

  const nextRecommend = () => {
    setAnimationClass('opacity-50');
    setTimeout(() => {
      setIndexRecommend((prevIndex) => (prevIndex + 1) % recommendationImages.length);
      setAnimationClass('opacity-100');
    }, 200);
  };
  const carouselItems = [
    { 
      id: 1, 
      img: carousel1,
      details: [
        "Saldo minimum Rp 100.000",
        "Pilihan jangka waktu fleksibel: 1, 3, 6, atau 12 bulan",
        "Akses ke program reward eksklusif"
      ]
    },
    { 
      id: 2, 
      img: carousel2,
      details: [
        "Suku bunga mulai 1.10% per bulan",
        "Proses persetujuan cepat dalam 3 hari kerja",
        "Pilihan kredit: Modal Kerja, Konsumtif, dan Investasi"
      ]
    },
    { 
      id: 3, 
      img: carousel3,
      details: [
        "Bunga kompetitif hingga 5% per tahun",
        "Pilihan jangka waktu fleksibel: 1, 3, 6, atau 12 bulan",
        "Setoran minimal mulai dari Rp 1.000.000"
      ]
    }
  ];

  return (
    <Layout>
             {/* Hero Section */}
      <div className="relative w-full overflow-hidden mt-20 sm:mt-20 lg:mt-18">
        <div className="w-full" style={{ paddingTop: 'calc(701 / 1512 * 100%)' }}>
          {carouselItems.map((item, index) => (
            <div
              key={item.id}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={item.img}
                alt={`Carousel item ${index + 1}`}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
            </div>
          ))}
        </div>
        
        <button
          className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 transition-colors p-2 sm:p-3 rounded-full"
          onClick={goToPrevious}
        >
          <FaArrowLeftLong className="text-white w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
        </button>
        <button
          className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 transition-colors p-2 sm:p-3 rounded-full"
          onClick={goToNext}
        >
          <FaArrowRightLong className="text-white w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
        </button>
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-10">
          {carouselItems.map((_, index) => (
            <GoDotFill
              key={index}
              className={`transition-colors duration-300 ${
                index === currentIndex ? 'text-white' : 'text-white/50'
              }`}
              size={8}
            />
          ))}
        </div>
      </div>




      {/* Products Section */}
      <div className="px-4 sm:px-6 lg:px-8 xl:px-16 py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 text-center font-serif">Produk Unggulan Kami</h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 text-center mb-8 sm:mb-12 max-w-3xl mx-auto font-light">
          Pilihan terbaik untuk pertumbuhan dana Anda. Keamanan dan keuntungan dalam satu paket eksklusif.
        </p>
        <div className="flex flex-wrap gap-6 sm:gap-8 justify-center mt-6 sm:mt-8">
          <ProductCard
            image={tabungan2Image}
            title="Tabungan"
            description="Simpanan eksklusif dengan bunga kompetitif dan layanan prioritas"
            link="/savings"
          />
          <ProductCard
            image={tabungan1Image}
            title="Kredit"
            description="Solusi pembiayaan yang disesuaikan dengan kebutuhan Anda"
            link="/credits"
          />
          <ProductCard
            image={tabungan3Image}
            title="Deposito"
            description="Investasi jangka panjang dengan imbal hasil maksimal"
            link="/deposits"
          />
        </div>
      </div>

{/* ChatBot Component */}
<ChatBot />

       {/* Recommendations Section */}
       <div className="px-4 sm:px-6 lg:px-8 xl:px-16 py-12 sm:py-16 lg:py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 text-center font-serif">Rekomendasi Eksklusif</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 text-center mb-8 sm:mb-12 max-w-3xl mx-auto font-light">
            Penawaran terbaik untuk memaksimalkan potensi keuangan Anda. Promosi terbatas hingga akhir tahun 2024.
          </p>
          <div className="hidden lg:flex gap-6 sm:gap-8 justify-center mt-6 sm:mt-8 animate-fadeIn">
            <RecommendationCard 
              image={recommendationImages[indexRecommend]}
              details={carouselItems[indexRecommend].details}
            />
            <RecommendationCard 
              image={recommendationImages[(indexRecommend + 1) % recommendationImages.length]}
              details={carouselItems[(indexRecommend + 1) % carouselItems.length].details}
            />
          </div>
          <div className="block lg:hidden mt-6 sm:mt-8 animate-fadeIn">
            <RecommendationCard 
              image={recommendationImages[indexRecommend]}
              details={carouselItems[indexRecommend].details}
            />
          </div>
          <div className="flex justify-between mt-8 sm:mt-10 items-center">
            <div className="flex gap-2 sm:gap-3">
              {recommendationImages.map((_, index) => (
                <GoDotFill key={index} className={`${index === indexRecommend ? 'text-teal-800' : 'text-gray-300'}`} size={12} />
              ))}
            </div>
            <div className="flex gap-3 sm:gap-4">
              <button onClick={prevRecommend} className="p-2 bg-teal-800 text-white rounded-full transition-all duration-300 hover:bg-teal-700 hover:scale-110">
                <MdNavigateBefore className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button onClick={nextRecommend} className="p-2 bg-teal-800 text-white rounded-full transition-all duration-300 hover:bg-teal-700 hover:scale-110">
                <MdNavigateNext className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
 
 
      {/* Why Choose Us Section */}
      <div className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={bg2Image} 
            alt="background" 
            className="absolute w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
          <h2 className="font-serif font-bold text-center text-white text-2xl sm:text-3xl lg:text-4xl mb-8 sm:mb-12">Mengapa Memilih Kami?</h2>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 sm:gap-12">
            <div className="hidden md:block bg-flower h-64 w-64 sm:h-80 sm:w-80 bg-cover bg-center bg-no-repeat p-4 rounded-lg shadow-2xl">
              <div className="w-full h-full border border-white flex justify-center items-center">
              </div>
            </div>
            
            <div className="flex flex-col gap-6 sm:gap-8 max-w-xl">
              <FeatureCard
                title="Transaksi Aman & Terpercaya"
                description="Keamanan data dan transaksi Anda adalah prioritas utama kami, didukung oleh teknologi enkripsi terkini."
              />
              <FeatureCard
                title="Keuntungan Maksimal"
                description="Nikmati imbal hasil yang kompetitif untuk produk simpanan dan suku bunga yang menarik untuk pinjaman."
              />
              <FeatureCard
                title="Layanan Eksklusif"
                description="Dapatkan akses ke layanan perbankan premium dan konsultasi keuangan personal dari para ahli kami."
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-teal-600 to-teal-800 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-6 sm:p-8 lg:p-12">
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
              <img src={avatarImage} alt="Konsultan" className="w-24 sm:w-32 lg:w-40 rounded-full border-4 border-white shadow-xl" />
              
              <div className="flex-grow text-center sm:text-left">
                <p className="text-teal-100 font-semibold text-base sm:text-lg mb-2 sm:mb-3">Butuh bantuan lebih lanjut?</p>
                <h4 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">Konsultasikan dengan Ahli Kami</h4>
                <p className="text-teal-50 text-sm sm:text-base mb-6 sm:mb-8">Tim konsultan berpengalaman kami siap membantu Anda meraih tujuan finansial.</p>
                <a href="https://wa.me/6287862109106" target="_blank" rel="noopener noreferrer">
  <button className="bg-white text-teal-800 rounded-full flex items-center py-2 px-6 sm:py-3 sm:px-8 transition-all hover:bg-teal-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 shadow-lg text-sm sm:text-base font-semibold mx-auto sm:mx-0">
    <AiFillMessage className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
    <span>Mulai Konsultasi</span>
  </button>
</a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

const ProductCard = ({ image, title, description, link }) => (
  <Link to={link} className="group">
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1 max-w-xs sm:max-w-sm">
      <div className="h-48 sm:h-56 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">{title}</h3>
        <p className="text-sm sm:text-base text-gray-600">{description}</p>
      </div>
    </div>
  </Link>
);

const RecommendationCard = ({ image, title, description, details }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-auto transition-all duration-500 hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-4 sm:p-6">
            <h3 className="text-white text-lg sm:text-xl font-bold mb-1 sm:mb-2">{title}</h3>
            <p className="text-gray-200 text-sm sm:text-base mb-3 sm:mb-4">{description}</p>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="bg-white text-teal-800 py-1.5 sm:py-2 px-4 sm:px-6 rounded-full text-sm sm:text-base font-semibold hover:bg-teal-50 transition-colors"
            >
              {isOpen ? 'Tutup Detail' : 'Lihat Detail'}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute z-10 left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl overflow-hidden"
          >
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg sm:text-xl font-bold text-teal-800">Detail Penawaran</h4>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <IoMdClose size={24} />
                </button>
              </div>
              <ul className="space-y-2">
                {details.map((detail, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start text-sm sm:text-base text-gray-700"
                  >
                    <FaCheckCircle className="text-teal-500 mt-1 mr-3 flex-shrink-0" />
                    <span>{detail}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FeatureCard = ({ title, description }) => (
  <div className="bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{title}</h3>
    <p className="text-sm sm:text-base text-gray-200">{description}</p>
  </div>
);



export default Home;