import React from 'react';
import Layout from "./Layout";
import manImage from '../assets/man1.jpeg';
import manImage1 from '../assets/man2.jpg';
import manImage2 from '../assets/man3.jpg';
import bg1Image from '../assets/bg 1.png';
import visi from '../assets/visi.png';
import misi from '../assets/misi.png';
import about from '../assets/Bannersejarah.png';
import { motion } from 'framer-motion';
import Wave from 'react-wavify';

const About = () => {
  return (
    <Layout>
      <main className="overflow-hidden">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-[calc(100vw*701/1512)] max-h-[80vh] mt-16 overflow-hidden"
        >
          <img src={about} alt="about" className="w-full h-full object-cover" />
          
        </motion.div>

        {/* Visi Misi Section */}
        <section className="py-16 sm:py-20 md:py-24 px-4 bg-gradient-to-b from-gray-100 to-white">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-teal-800 font-serif"
          >
            Visi & Misi BPR Cahaya Bina Putra
          </motion.h2>
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-12">
            {['Visi', 'Misi'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-102"
              >
                <div className="bg-teal-800 p-6 sm:p-8 flex items-center justify-center">
                  <img src={item === 'Visi' ? visi : misi} alt={item} className="h-24 w-24 sm:h-28 sm:w-28 rounded-full border-4 border-white" />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-teal-800 mb-4">{item}</h3>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    {item === 'Visi' 
                      ? "Menjadi lembaga keuangan terpercaya yang mendukung pertumbuhan ekonomi masyarakat melalui pelayanan perbankan yang inovatif, handal, dan berfokus pada kepuasan nasabah."
                      : "Menyediakan layanan perbankan yang inovatif dan berfokus pada kepuasan nasabah untuk mendukung pertumbuhan ekonomi masyarakat."}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Direksi Section */}
       <section className="relative py-24 sm:py-32 overflow-hidden bg-teal-800 mb-20">
       
             {/* Top Wave for Direksi Section */}
             <div className="absolute top-0 left-0 w-full rotate-180">
            <Wave 
              fill='#ffffff'
              paused={false}
              options={{
                height: 100,
                amplitude: 85,
                speed: 0.15,
                points: 3
              }}
            />
          </div>

          <div className="absolute inset-0">
            <img src={bg1Image} alt="background" className="w-full h-full object-cover opacity-20" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 max-w-7xl mx-auto px-4 pt-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-16 font-serif">Dewan Direksi</h2>
            <div className="grid md:grid-cols-2 gap-12 sm:gap-16 mb-16">
              {[
                { name: "A.A Ngr Ketut Agus Nadi Putra, SH", role: "Komisaris Utama", img: manImage },
                { name: "I Nyoman Bindu, S.E.", role: "Komisaris" , img: manImage2},
              ].map((director, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
                    <img src={director.img} alt={director.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center w-full sm:w-80 md:w-[30rem] shadow-md min-h-[120px] flex flex-col justify-center">
                    <p className="font-bold text-teal-800 text-lg sm:text-xl mb-2">{director.name}</p>
                    <p className="text-gray-600 text-base sm:text-lg">{director.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex justify-center"
            >
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
                  <img src={manImage1} alt="Ngurah Dwipajaya Mendala,SPT" className="w-full h-full object-cover" />
                </div>
                <div className="bg-white rounded-xl p-6 text-center w-full sm:w-80 md:w-[30rem] shadow-md min-h-[120px] flex flex-col justify-center">
                  <p className="font-bold text-teal-800 text-lg sm:text-xl mb-2">Ngurah Dwipajaya Mendala,SPT</p>
                  <p className="text-gray-600 text-base sm:text-lg">Direktur Utama</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Bottom Wave for Direksi Section */}
          <div className="absolute bottom-0 left-0 w-full">
            <Wave 
              fill='#ffffff'
              paused={false}
              options={{
                height: 100,
                amplitude: 85,
                speed: 0.15,
                points: 3
              }}
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default About;