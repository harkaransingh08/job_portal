import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Page2() {
  // Array containing image URLs and their corresponding website URLs
  const imageData = [
    {
      imageUrl: 'https://www.infoworld.com/wp-content/uploads/2025/05/2335872-0-92920600-1748411018-shutterstock_editorial_157995017-100945577-orig.jpg?quality=50&strip=all',
      websiteUrl: 'https://www.ibm.com/in-en',
      companyName: 'IBM'
    },
    {
      imageUrl: 'https://www.computerworld.com/wp-content/uploads/2025/09/4064955-0-25886200-1759163116-shutterstock_2390551643.jpg?quality=50&strip=all',
      websiteUrl: 'https://www.accenture.com/in-en/careers/life-at-accenture/entry-level?',
      companyName: 'Accenture'
    },
    {
      imageUrl: 'https://assets.peoplematters.in/images/ca4d360f-034e-41f7-990c-8789edd039bb.jpg',
      websiteUrl: 'https://www.infosys.com/careers.html',
      companyName: 'Infosys'
    },
    {
      imageUrl: 'https://fresheropenings.com/wp-content/uploads/Capgemini-Best-Jobs-Opportunity-2025-1.webp',
      websiteUrl: 'https://www.capgemini.com/in-en/',
      companyName: 'Capgemini'
    },
    {
      imageUrl: 'https://media2.themorningcontext.com/media/posts_images/140125_HCLTech_News_Brief.jpg',
      websiteUrl: 'https://www.hcltech.com/',
      companyName: 'HCL Technologies'
    },
    {
      imageUrl: 'https://www.privatebankerinternational.com/wp-content/uploads/sites/5/2025/09/PBI-1-HSBC-shutterstock_1209512524.jpg',
      websiteUrl: 'https://www.hsbc.bank.in/',
      companyName: 'HSBC'
    },
    {
      imageUrl: 'https://www.internationalaccountingbulletin.com/wp-content/uploads/sites/9/2025/04/Deloitte-shutterstock_2503239671.jpg',
      websiteUrl: 'https://www.deloitte.com/us/en.html',
      companyName: 'Deloitte'
    },
    {
      imageUrl: 'https://cdn.britannica.com/16/254816-050-41C9577A/Google-logo-Googleplex-headquarters-Mountain-View-California.jpg',
      websiteUrl: 'https://www.google.com/about/careers/applications/',
      companyName: 'Google'
    },
    {
      imageUrl: 'https://mayina0.com/Image/Picture/New/microsoft.jpg',
      websiteUrl: 'https://careers.microsoft.com/v2/global/en/home.html',
      companyName: 'Microsoft'
    },
  ];

  // Function to handle image click
  const handleImageClick = (url, companyName) => {
    // Open website in new tab
    window.open(url, '_blank', 'noopener,noreferrer');
    
    // Optional: Show alert or notification
    console.log(`Redirecting to ${companyName}'s website...`);
  };

  return (
    <div className="  bg-gradient-to-b from-white via-blue-50  to-gray-50 mx-auto px-4 sm:px-6 overflow-hidden lg:px-8  md:py-16 w-full font-sans">
     <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      {/* Title Section */}

      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-bold cursor-pointer hover:text-blue-400 text-gray-900 mb-3">
          Top Companies Hiring Now
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl cursor-pointer hover:text-purple-400 mx-auto">
          Discover career opportunities at leading global companies
        </p>
      </div>

      {/* Swiper Container */}
      <div className="relative mb-10">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="rounded-2xl overflow-hidden shadow-2xl"
        >
          {imageData.map((item, index) => (
            <SwiperSlide key={index} className="pb-12">
              <div 
                onClick={() => handleImageClick(item.websiteUrl, item.companyName)}
                className="group relative h-[400px] md:h-[450px] rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Background Image */}
                <img
                  src={item.imageUrl}
                  alt={`${item.companyName} Careers`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <div className="transform transition-all duration-500 group-hover:-translate-y-2">
                    {/* Company Badge */}
                    <div className="inline-flex items-center px-4 py-2 bg-blue-600/90 backdrop-blur-sm rounded-full mb-4">
                      <span className="text-white font-semibold text-sm">
                        #{(index + 1).toString().padStart(2, '0')}
                      </span>
                    </div>
                    
                    {/* Company Name */}
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 drop-shadow-lg">
                      {item.companyName}
                    </h3>
                    
                    {/* CTA Button */}
                    <div className="flex items-center justify-between">
                      <span className="text-blue-200 text-sm md:text-base font-medium">
                        View Careers →
                      </span>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-white/80 bg-white/20 px-2 py-1 rounded">
                          Featured
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Indicator */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 translate-x-4">
                    <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev-custom absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:bg-white hover:scale-110 transition-all duration-300">
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div className="swiper-button-next-custom absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:bg-white hover:scale-110 transition-all duration-300">
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {[
          { value: '500+', label: 'Companies' },
          { value: '10K+', label: 'Open Positions' },
          { value: '85%', label: 'Success Rate' },
          { value: '30 Days', label: 'Avg. Response' },
        ].map((stat, index) => (
          <div 
            key={index}
            className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
          >
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
              {stat.value}
            </div>
            <div className="text-gray-600 font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Instructions */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8 border border-blue-100">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">
              Ready to apply?
            </h4>
            <p className="text-gray-600">
              Click on any company card to visit their careers page and explore opportunities.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600">Active Hiring</span>
            </div>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg">
              View All Companies
            </button>
          </div>
        </div>
      </div>

      {/* Add custom CSS for Swiper */}
      <style jsx>{`
        .swiper-pagination-bullet {
          width: 12px !important;
          height: 12px !important;
          background: rgba(59, 130, 246, 0.5) !important;
          opacity: 1 !important;
        }
        .swiper-pagination-bullet-active {
          background: #2563eb !important;
          transform: scale(1.2);
        }
        .swiper-pagination {
          position: relative !important;
          margin-top: 2rem !important;
        }
        .swiper-slide {
          height: auto !important;
          padding-bottom: 50px !important;
        }
      `}</style>
    </div>
  );
}