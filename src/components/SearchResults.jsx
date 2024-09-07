import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaCreditCard, FaPiggyBank, FaArrowRight, FaSearch } from 'react-icons/fa';
import { MdAttachMoney } from 'react-icons/md';
import Layout from './Layout';

const SearchResults = () => {
  const location = useLocation();
  const results = location.state?.results || [];

  
  const getIcon = (type) => {
    switch (type) {
      case 'credit': return <FaCreditCard className="text-teal-600" />;
      case 'loan': return <MdAttachMoney className="text-teal-600" />;
      case 'savings': return <FaPiggyBank className="text-teal-600" />;
      default: return <FaArrowRight className="text-teal-600" />;
    }
  };

  const renderResultItem = (item) => {
    return (
      <li key={item._id} className="bg-white p-4 sm:p-6 rounded-lg hover:shadow-md transition-all duration-300 border border-gray-200">
        <div className="flex flex-col sm:flex-row items-start">
          <div className="flex-shrink-0 bg-teal-100 p-3 rounded-full mb-4 sm:mb-0 sm:mr-4">
            {getIcon(item.type)}
          </div>
          <div className="flex-grow">
            <h3 className="text-lg sm:text-xl font-semibold text-teal-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-800 mb-4 text-sm sm:text-base">
              {item.summary || item.content.substring(0, 150)}...
            </p>
            {item.hasDetailPage && item.slug ? (
              <Link 
                to={`/${item.type}/${item.slug}`} 
                className="inline-flex items-center px-4 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors duration-200 text-sm font-medium"
              >
                Pelajari lebih lanjut
                <FaArrowRight className="ml-2 h-4 w-4" />
              </Link>
            ) : (
              <span className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-600 rounded-full text-sm font-medium cursor-not-allowed">
                Tidak tersedia
              </span>
            )}
          </div>
        </div>
      </li>
    );
  };
  
  return (
    <Layout>
      <div className="bg-gradient-to-b from-teal-50 to-white min-h-screen py-6 sm:py-12 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 ">
            <div className="p-6 sm:p-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-teal-800 flex items-center mb-6 sm:mb-8 font-serif">
                <FaSearch className="mr-3 sm:mr-4 text-teal-600" />
                Hasil Pencarian
              </h2>
              
              {results.length === 0 ? (
                <div className="text-center py-10 sm:py-16 bg-teal-50 rounded-2xl">
                  <FaSearch className="mx-auto text-4xl sm:text-5xl text-teal-300 mb-4" />
                  <p className="text-xl sm:text-2xl text-teal-800 font-semibold">Tidak ada hasil yang ditemukan.</p>
                  <p className="mt-2 text-sm sm:text-base text-teal-600">Silakan coba kata kunci lain atau hubungi layanan pelanggan kami.</p>
                </div>
              ) : (
                <ul className="space-y-4 sm:space-y-6">
                  {results.map(renderResultItem)}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SearchResults;