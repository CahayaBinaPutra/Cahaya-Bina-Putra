import React from 'react';
import logoImage from '../assets/logo.png';
import { PiPhoneCallFill } from "react-icons/pi";
import { AiFillMessage } from "react-icons/ai";
import { IoLogoInstagram, IoLogoFacebook, IoLogoLinkedin } from "react-icons/io";
import { motion } from "framer-motion";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <footer className="py-12 bg-gradient-to-br from-teal-800 to-teal-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%3E%3Cpath%20d%3D%22M29.75%2025.95L20.5%2030.75L29.75%2035.55L39%2030.75L29.75%2025.95Z%22%20fill%3D%22%23ffffff10%22%2F%3E%3C%2Fsvg%3E')] opacity-10"></div>
      <motion.div 
        className='container mx-auto px-4 md:px-10 xl:px-32 relative z-10'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-4 gap-10">
          <motion.div variants={itemVariants} className='flex flex-col items-center lg:items-start gap-4'>
            <motion.img 
              src={logoImage} 
              alt="logo" 
              className='w-32 h-32 mb-4'
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <p className='text-sm text-center lg:text-left font-light'>
              Mari mewujudkan impian kamu bersama PT BPR Cahaya Bina Putra
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className='text-lg font-semibold mb-4 pb-2 border-b-2 border-teal-500 inline-block'>Kantor Pusat</h2>
            <p className='text-sm font-light leading-relaxed'>
              Jl. Raya Canggu, Kerobokan Kaja, Kec. Kuta Utara, Kabupaten Badung, Bali 80361
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className='space-y-4'>
            <h2 className='text-lg font-semibold mb-4 pb-2 border-b-2 border-teal-500 inline-block'>Hubungi Kami</h2>
            <motion.div 
              className='flex gap-3 items-center group'
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className='w-8 h-8 bg-teal-600 flex justify-center items-center rounded-full group-hover:bg-teal-500 transition-colors duration-300'>
                <PiPhoneCallFill className='text-white' size={18} />
              </div>
              <a href="tel:0361844584" className='text-sm font-light group-hover:text-teal-300 transition-colors duration-300'>0361 8445773</a>
            </motion.div>
            <motion.div 
              className='flex gap-3 items-center group'
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className='w-8 h-8 bg-teal-600 flex justify-center items-center rounded-full group-hover:bg-teal-500 transition-colors duration-300'>
                <AiFillMessage className='text-white' size={18} />
              </div>
              <a href="https://wa.me/628123625534" className="text-sm font-light group-hover:text-teal-300 transition-colors duration-300"> 08123625534 </a>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
        <h2 className='text-lg font-semibold mb-4 pb-2 border-b-2 border-teal-500 inline-block'>Ikuti Kami</h2>
        <div className='flex gap-4'>
          {[
            { icon: IoLogoInstagram, color: 'text-pink-500', url: 'https://www.instagram.com/bprcahayabina?igsh=MWJrdnl4dGFnbHNoZg==' },
            { icon: IoLogoFacebook, color: 'text-blue-500', url: 'https://www.facebook.com/profile.php?id=100069221985341&mibextid=ZbWKwL' },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 bg-white flex justify-center items-center rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300`}
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon className={`${social.color}`} size={24} />
            </motion.a>
          ))}
        </div>
      </motion.div>
        </div>
      </motion.div>
      <motion.div 
        className="mt-10 border-t border-teal-700 pt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <p className="text-center text-sm text-teal-300 font-light">© 2024 PT. BPR Cahaya Bina Putra. All Rights Reserved</p>
      </motion.div>
    </footer>
  );
};

export default Footer;