import React, { useState } from 'react';
import Layout from './Layout';
import { PiPhoneCallFill } from "react-icons/pi";
import { IoLogoInstagram, IoLogoYoutube, IoLogoWhatsapp, IoLogoTwitter } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { motion } from 'framer-motion';
import bgImage from '../assets/Contact.png';
import axios from 'axios';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!email) {
      formErrors.email = 'Email harus diisi';
    } else if (!validateEmail(email)) {
      formErrors.email = 'Format email tidak valid';
    }

    if (!message.trim()) {
      formErrors.message = 'Pesan harus diisi';
    } else if (message.trim().length < 10 || message.trim().length > 1000) {
      formErrors.message = 'Pesan harus antara 10 dan 1000 karakter';
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await axios.post('https://cbp-backend-production.up.railway.app/api/feedback', { email, message });
      console.log(response.data);
      setSubmitMessage('Terima kasih! Feedback Anda telah berhasil dikirim dan sangat kami hargai.');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error mengirim feedback:', error);
      if (error.response && error.response.status === 429) {
        setSubmitMessage(error.response.data.message);
      } else {
        setSubmitMessage('Terjadi kesalahan saat mengirim feedback. Silakan coba lagi.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20 px-4 mt-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 font-serif">KONTAK BPR CAHAYA BINA PUTRA</h1>
            <p className="text-lg md:text-xl">
              Kami siap membantu Anda dengan segala pertanyaan atau kebutuhan Anda. Jangan ragu untuk menghubungi kami melalui salah satu cara di bawah ini.
            </p>
          </div>
        </section>

        {/* Contact Information and Form Section */}
        <section 
          className="py-24 px-4 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-12">
            {/* Contact Information */}
            <div className="w-full lg:w-1/3 bg-white bg-opacity-90 p-8">
              <h2 className="text-2xl font-bold text-teal-800 mb-6">Hubungi Kami</h2>
              <div className="space-y-4 mb-8">
                <a href="https://wa.me/6287862109106" className="flex items-center gap-3 text-gray-700 hover:text-teal-600 transition-colors">
                  <IoLogoWhatsapp className="text-green-500" size={24} />
                  <span>087862109106</span>
                </a>
                <a href="tel:0361844584" className="flex items-center gap-3 text-gray-700 hover:text-teal-600 transition-colors">
                  <PiPhoneCallFill className="text-teal-500" size={24} />
                  <span>0361 8445773</span>
                </a>
              </div>
              <h2 className="text-2xl font-bold text-teal-800 mb-6">Sosial Media</h2>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/bprcahayabina?igsh=MWJrdnl4dGFnbHNoZg==" className="text-gray-400 hover:text-orange-500 transition-colors"><IoLogoInstagram size={32} /></a>
                <a href="https://www.facebook.com/share/CeTsEssVBxD2eC7L/?mibextid=qi2Omg" className="text-gray-400 hover:text-blue-600 transition-colors"><FaFacebookF size={32} /></a>
              </div>
            </div>

            {/* Feedback Form */}
          
      <form onSubmit={handleSubmit} className="w-full lg:w-1/2 bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-teal-800 mb-6">Feedback Form</h2>
        {submitMessage && (
          <div className={`mb-4 p-2 rounded ${submitMessage.includes('berhasil') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {submitMessage}
          </div>
        )}
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Alamat Email Kamu" 
            className={`w-full px-4 py-2 rounded-lg bg-white border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all`}
            required
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 mb-2">Pesan</label>
          <textarea 
            id="message" 
            name="message" 
            rows="4" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Pesan (10-1000 karakter)"
            className={`w-full px-4 py-2 rounded-lg bg-white border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all`}
            required
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>
        <button 
          type="submit" 
          className="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white font-bold py-2 px-4 rounded-lg hover:from-teal-700 hover:to-teal-800 transition-all duration-300"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Mengirim...' : 'Kirim'}
        </button>
      </form>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-20 px-4 bg-gray-100">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-teal-800 mb-6 font-serif">Lokasi Kantor</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Jl. Raya Canggu, Kerobokan Kaja, Kec. Kuta Utara, Kabupaten Badung, Bali 80361
            </p>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.4855873791266!2d115.1693281!3d-8.6452805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd238a3767406af%3A0xa774483019fda866!2sPt.%20Bpr%20Cahaya%20Bina%20Putra!5e0!3m2!1sid!2sid!4v1721908383791!5m2!1sid!2si" 
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]" 
                style={{border: 0}}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </motion.div>
    </Layout>
  );
}

export default Contact;