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
      companyName: 'accenture'
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
    <div style={styles.container} className="font-sans">
      <h3
        style={styles.title}
        className="font-sans font-semibold hover:text-blue-600 cursor-pointer hover:underline text-xl text-gray-800"
      >
        These are some top companies
      </h3>
      
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        style={styles.swiper}
      >
        {imageData.map((item, index) => (
          <SwiperSlide key={index} style={styles.slide}>
            <div 
              style={styles.imageContainer}
              onClick={() => handleImageClick(item.websiteUrl, item.companyName)}
              className="cursor-pointer transform transition-transform duration-300 hover:scale-[1.02]"
            >
              <img
                src={`${item.imageUrl}?w=1200&h=600&fit=crop`}
                alt={`Slide ${index + 1}`}
                style={styles.image}
                className="transition-opacity duration-300 hover:opacity-90"
              />
              <div style={styles.imageOverlay}>
                <div style={styles.overlayContent}>
                  <h4 style={styles.companyName} className="font-sans font-semibold">
                    {item.companyName}
                  </h4>
                  <p style={styles.clickText} className="font-sans">
                    Click to visit website →
                  </p>
                </div>
              </div>
              <div
                style={styles.slideNumber}
                className="font-sans font-medium"
              >
                {index + 1}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div style={styles.instructions} className="mt-8 p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors duration-300 rounded-lg">
        <p className="text-gray-700 text-center">
          <strong>Note:</strong> Each image is clickable and will open the company's website in a new tab
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '10px',
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  swiper: {
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
  },
  slide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '500px',
    backgroundColor: '#f5f5f5',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
    cursor: 'pointer',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlayContent: {
    textAlign: 'center',
    color: 'white',
    padding: '20px',
  },
  companyName: {
    fontSize: '24px',
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  clickText: {
    fontSize: '16px',
    backgroundColor: 'rgba(0, 112, 243, 0.8)',
    padding: '8px 16px',
    borderRadius: '20px',
    display: 'inline-block',
  },
  slideNumber: {
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    backgroundColor: 'rgba(0,0,0,0.7)',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '14px',
    zIndex: 2,
  },
  instructions: {
    textAlign: 'center',
    marginTop: '20px',
  },
};

// Add hover effect for the overlay
const styleSheet = document.createElement("style");
styleSheet.innerHTML = `
  .mySwiper .swiper-slide .cursor-pointer:hover .imageOverlay {
    opacity: 1 !important;
  }
  
  .mySwiper .swiper-slide .cursor-pointer:hover .clickText {
    animation: pulse 1.5s infinite;
  }
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`;
document.head.appendChild(styleSheet);