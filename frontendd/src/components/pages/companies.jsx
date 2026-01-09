import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiSearch, 
  FiBriefcase, 
  FiMapPin, 
  FiGlobe, 
  FiUsers, 
  FiStar,
  FiFilter,
  FiChevronDown,
  FiExternalLink,
  FiTrendingUp,
  FiAward,
  FiTarget,
  FiHome
} from 'react-icons/fi';

// Note: FiBuilding doesn't exist in react-icons/fi. Using FiHome instead where needed.

export default function Companies() {
  // State for search and filters
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [industryFilter, setIndustryFilter] = useState('');
  const [companySizeFilter, setCompanySizeFilter] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Top 10 Indian Companies (Major Employers)
  const top10Companies = [
    {
      id: 1,
      name: "Tata Consultancy Services (TCS)",
      description: "India's largest IT services company, providing IT, consulting, and business solutions globally.",
      industry: "IT Services",
      location: "Mumbai, Maharashtra",
      employees: "6,00,000+",
      rating: 4.3,
      openPositions: 8500,
      founded: 1968,
      website: "https://www.tcs.com/careers",
      logo: "TCS",
      category: "top10",
      hiringStatus: "Mass Hiring"
    },
    {
      id: 2,
      name: "Infosys",
      description: "Global leader in next-generation digital services and consulting.",
      industry: "IT Services",
      location: "Bangalore, Karnataka",
      employees: "3,45,000+",
      rating: 4.2,
      openPositions: 6500,
      founded: 1981,
      website: "https://www.infosys.com/careers",
      logo: "INFY",
      category: "top10",
      hiringStatus: "Active Hiring"
    },
    {
      id: 3,
      name: "Wipro",
      description: "Leading global information technology, consulting and business process services company.",
      industry: "IT Services",
      location: "Bangalore, Karnataka",
      employees: "2,50,000+",
      rating: 4.1,
      openPositions: 4200,
      founded: 1945,
      website: "https://careers.wipro.com",
      logo: "WIPRO",
      category: "top10",
      hiringStatus: "Active Hiring"
    },
    {
      id: 4,
      name: "HCL Technologies",
      description: "Global technology company offering IT and engineering services and solutions.",
      industry: "IT Services",
      location: "Noida, Uttar Pradesh",
      employees: "2,25,000+",
      rating: 4.0,
      openPositions: 3800,
      founded: 1976,
      website: "https://www.hcltech.com/careers",
      logo: "HCL",
      category: "top10",
      hiringStatus: "Mass Hiring"
    },
    {
      id: 5,
      name: "Tech Mahindra",
      description: "Digital transformation, consulting and business re-engineering services.",
      industry: "IT Services",
      location: "Pune, Maharashtra",
      employees: "1,52,000+",
      rating: 4.0,
      openPositions: 3200,
      founded: 1986,
      website: "https://careers.techmahindra.com",
      logo: "TECHM",
      category: "top10",
      hiringStatus: "Active Hiring"
    },
    {
      id: 6,
      name: "Reliance Industries",
      description: "Indian multinational conglomerate with businesses across energy, petrochemicals, retail, and telecom.",
      industry: "Conglomerate",
      location: "Mumbai, Maharashtra",
      employees: "3,50,000+",
      rating: 4.4,
      openPositions: 2800,
      founded: 1960,
      website: "https://careers.ril.com",
      logo: "RIL",
      category: "top10",
      hiringStatus: "Selective Hiring"
    },
    {
      id: 7,
      name: "Adani Group",
      description: "Indian multinational conglomerate with diversified businesses including ports, logistics, agribusiness, and energy.",
      industry: "Infrastructure",
      location: "Ahmedabad, Gujarat",
      employees: "2,30,000+",
      rating: 4.2,
      openPositions: 2500,
      founded: 1988,
      website: "https://www.adanigroup.com/careers",
      logo: "ADANI",
      category: "top10",
      hiringStatus: "Rapid Hiring"
    },
    {
      id: 8,
      name: "Bharti Airtel",
      description: "Global telecommunications company with operations in 18 countries across Asia and Africa.",
      industry: "Telecommunications",
      location: "New Delhi",
      employees: "1,80,000+",
      rating: 4.1,
      openPositions: 2100,
      founded: 1995,
      website: "https://www.airtel.com/careers",
      logo: "AIRTEL",
      category: "top10",
      hiringStatus: "Active Hiring"
    },
    {
      id: 9,
      name: "ICICI Bank",
      description: "Indian multinational banking and financial services company.",
      industry: "Banking & Finance",
      location: "Mumbai, Maharashtra",
      employees: "1,20,000+",
      rating: 4.0,
      openPositions: 1800,
      founded: 1994,
      website: "https://www.icicicareers.com",
      logo: "ICICI",
      category: "top10",
      hiringStatus: "Regular Hiring"
    },
    {
      id: 10,
      name: "HDFC Bank",
      description: "Indian banking and financial services company headquartered in Mumbai.",
      industry: "Banking & Finance",
      location: "Mumbai, Maharashtra",
      employees: "1,40,000+",
      rating: 4.1,
      openPositions: 1600,
      founded: 1994,
      website: "https://www.hdfcbank.com/personal/careers",
      logo: "HDFC",
      category: "top10",
      hiringStatus: "Regular Hiring"
    }
  ];

  // Mid-Sized Companies (Major Employers - 10 companies)
  const mid10Companies = [
    {
      id: 11,
      name: "Larsen & Toubro (L&T)",
      description: "Indian multinational engaged in technology, engineering, construction, manufacturing and financial services.",
      industry: "Engineering & Construction",
      location: "Mumbai, Maharashtra",
      employees: "50,000+",
      rating: 4.3,
      openPositions: 1200,
      founded: 1938,
      website: "https://www.larsentoubro.com/corporate/careers",
      logo: "L&T",
      category: "mid10",
      hiringStatus: "Active Hiring"
    },
    {
      id: 12,
      name: "Mahindra & Mahindra",
      description: "Indian multinational automotive manufacturing corporation headquartered in Mumbai.",
      industry: "Automobile",
      location: "Mumbai, Maharashtra",
      employees: "2,60,000+",
      rating: 4.2,
      openPositions: 950,
      founded: 1945,
      website: "https://www.mahindra.com/careers",
      logo: "M&M",
      category: "mid10",
      hiringStatus: "Regular Hiring"
    },
    {
      id: 13,
      name: "ITC Limited",
      description: "Indian multinational conglomerate with diversified businesses across FMCG, hotels, packaging, and agribusiness.",
      industry: "FMCG & Hospitality",
      location: "Kolkata, West Bengal",
      employees: "35,000+",
      rating: 4.4,
      openPositions: 850,
      founded: 1910,
      website: "https://www.itcportal.com/careers",
      logo: "ITC",
      category: "mid10",
      hiringStatus: "Selective Hiring"
    },
    {
      id: 14,
      name: "Sun Pharmaceutical",
      description: "Indian multinational pharmaceutical company headquartered in Mumbai.",
      industry: "Pharmaceuticals",
      location: "Mumbai, Maharashtra",
      employees: "37,000+",
      rating: 4.1,
      openPositions: 780,
      founded: 1983,
      website: "https://www.sunpharma.com/careers",
      logo: "SUN",
      category: "mid10",
      hiringStatus: "Active Hiring"
    },
    {
      id: 15,
      name: "Bajaj Auto",
      description: "World's third-largest manufacturer of motorcycles and the largest in India.",
      industry: "Automobile",
      location: "Pune, Maharashtra",
      employees: "10,500+",
      rating: 4.3,
      openPositions: 650,
      founded: 1945,
      website: "https://www.bajajauto.com/careers",
      logo: "BAJAJ",
      category: "mid10",
      hiringStatus: "Regular Hiring"
    },
    {
      id: 16,
      name: "Asian Paints",
      description: "Indian multinational paint company headquartered in Mumbai.",
      industry: "Manufacturing",
      location: "Mumbai, Maharashtra",
      employees: "6,800+",
      rating: 4.2,
      openPositions: 420,
      founded: 1942,
      website: "https://www.asianpaints.com/careers",
      logo: "AP",
      category: "mid10",
      hiringStatus: "Active Hiring"
    },
    {
      id: 17,
      name: "Cognizant (India Operations)",
      description: "American multinational providing IT services, with major operations in India.",
      industry: "IT Services",
      location: "Chennai, Tamil Nadu",
      employees: "3,00,000+",
      rating: 3.9,
      openPositions: 3500,
      founded: 1994,
      website: "https://careers.cognizant.com/india",
      logo: "CTSH",
      category: "mid10",
      hiringStatus: "Mass Hiring"
    },
    {
      id: 18,
      name: "Accenture India",
      description: "Global professional services company with major delivery centers in India.",
      industry: "IT Services & Consulting",
      location: "Bangalore, Karnataka",
      employees: "3,00,000+",
      rating: 4.0,
      openPositions: 4200,
      founded: 1989,
      website: "https://www.accenture.com/in-en/careers",
      logo: "ACN",
      category: "mid10",
      hiringStatus: "Mass Hiring"
    },
    {
      id: 19,
      name: "Capgemini India",
      description: "French multinational with significant operations in India providing IT services and consulting.",
      industry: "IT Services",
      location: "Mumbai, Maharashtra",
      employees: "2,00,000+",
      rating: 3.8,
      openPositions: 2800,
      founded: 1967,
      website: "https://www.capgemini.com/careers",
      logo: "CAP",
      category: "mid10",
      hiringStatus: "Active Hiring"
    },
    {
      id: 20,
      name: "Deloitte India",
      description: "Big Four accounting organization and largest professional services network in India.",
      industry: "Consulting",
      location: "New Delhi",
      employees: "75,000+",
      rating: 4.3,
      openPositions: 1200,
      founded: 1845,
      website: "https://www2.deloitte.com/in/en/careers.html",
      logo: "DEL",
      category: "mid10",
      hiringStatus: "Regular Hiring"
    }
  ];

  // Small Companies (Growing Startups & SMEs - 10 companies)
  const small10Companies = [
    {
      id: 21,
      name: "Zoho Corporation",
      description: "Indian multinational technology company that makes web-based business tools.",
      industry: "SaaS & Software",
      location: "Chennai, Tamil Nadu",
      employees: "12,000+",
      rating: 4.5,
      openPositions: 450,
      founded: 1996,
      website: "https://www.zoho.com/careers",
      logo: "ZOHO",
      category: "small10",
      hiringStatus: "Rapid Hiring"
    },
    {
      id: 22,
      name: "Swiggy",
      description: "Indian online food ordering and delivery platform.",
      industry: "Food Delivery & Tech",
      location: "Bangalore, Karnataka",
      employees: "5,000+",
      rating: 4.0,
      openPositions: 320,
      founded: 2014,
      website: "https://careers.swiggy.com",
      logo: "SWIGGY",
      category: "small10",
      hiringStatus: "Active Hiring"
    },
    {
      id: 23,
      name: "Flipkart",
      description: "Indian e-commerce company headquartered in Bangalore.",
      industry: "E-commerce",
      location: "Bangalore, Karnataka",
      employees: "30,000+",
      rating: 4.1,
      openPositions: 850,
      founded: 2007,
      website: "https://www.flipkartcareers.com",
      logo: "FLIPKART",
      category: "small10",
      hiringStatus: "Regular Hiring"
    },
    {
      id: 24,
      name: "Paytm",
      description: "Indian multinational technology company specializing in digital payments and financial services.",
      industry: "FinTech",
      location: "Noida, Uttar Pradesh",
      employees: "20,000+",
      rating: 3.9,
      openPositions: 420,
      founded: 2010,
      website: "https://paytm.com/careers",
      logo: "PAYTM",
      category: "small10",
      hiringStatus: "Selective Hiring"
    },
    {
      id: 25,
      name: "Byju's",
      description: "Indian educational technology and online tutoring firm.",
      industry: "EdTech",
      location: "Bangalore, Karnataka",
      employees: "50,000+",
      rating: 3.8,
      openPositions: 350,
      founded: 2011,
      website: "https://byjus.com/careers",
      logo: "BYJUS",
      category: "small10",
      hiringStatus: "Regular Hiring"
    },
    {
      id: 26,
      name: "Razorpay",
      description: "Indian fintech company that provides payment gateway services to businesses.",
      industry: "FinTech",
      location: "Bangalore, Karnataka",
      employees: "1,500+",
      rating: 4.5,
      openPositions: 180,
      founded: 2014,
      website: "https://razorpay.com/careers",
      logo: "RAZORPAY",
      category: "small10",
      hiringStatus: "Rapid Hiring"
    },
    {
      id: 27,
      name: "CRED",
      description: "Indian fintech company that rewards users for timely credit card bill payments.",
      industry: "FinTech",
      location: "Bangalore, Karnataka",
      employees: "800+",
      rating: 4.6,
      openPositions: 120,
      founded: 2018,
      website: "https://careers.cred.club",
      logo: "CRED",
      category: "small10",
      hiringStatus: "Active Hiring"
    },
    {
      id: 28,
      name: "Unacademy",
      description: "Indian educational technology company that provides online educational platform.",
      industry: "EdTech",
      location: "Bangalore, Karnataka",
      employees: "4,000+",
      rating: 4.0,
      openPositions: 250,
      founded: 2015,
      website: "https://unacademy.com/careers",
      logo: "UNACADEMY",
      category: "small10",
      hiringStatus: "Regular Hiring"
    },
    {
      id: 29,
      name: "Ola Cabs",
      description: "Indian multinational ridesharing company offering services including ride-hailing.",
      industry: "Transportation",
      location: "Bangalore, Karnataka",
      employees: "8,000+",
      rating: 3.9,
      openPositions: 320,
      founded: 2010,
      website: "https://www.olacabs.com/careers",
      logo: "OLA",
      category: "small10",
      hiringStatus: "Active Hiring"
    },
    {
      id: 30,
      name: "PhonePe",
      description: "Indian digital payments and financial technology company.",
      industry: "FinTech",
      location: "Bangalore, Karnataka",
      employees: "3,500+",
      rating: 4.2,
      openPositions: 220,
      founded: 2015,
      website: "https://www.phonepe.com/careers",
      logo: "PHONEPE",
      category: "small10",
      hiringStatus: "Rapid Hiring"
    }
  ];

  // Combine all companies
  const allCompanies = [...top10Companies, ...mid10Companies, ...small10Companies];

  // Filter companies based on search and filters
  const filteredCompanies = allCompanies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         company.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         company.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLocation = !locationFilter || company.location.toLowerCase().includes(locationFilter.toLowerCase());
    const matchesIndustry = !industryFilter || company.industry === industryFilter;
    const matchesSize = !companySizeFilter || company.category === companySizeFilter;
    const matchesCategory = activeCategory === 'all' || company.category === activeCategory;
    
    return matchesSearch && matchesLocation && matchesIndustry && matchesSize && matchesCategory;
  });

  // Get unique industries and locations for filters
  const industries = [...new Set(allCompanies.map(company => company.industry))];
  const locations = [...new Set(allCompanies.map(company => company.location.split(',')[0]))];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-saffron via-saffron to-green-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Top Indian Companies Hiring Now</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Discover 30+ leading Indian companies actively hiring across various sectors
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Category Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 mb-6">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${activeCategory === 'all' 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'}`}
            >
              <FiGlobe className="inline mr-2" />
              All Companies ({allCompanies.length})
            </button>
            <button
              onClick={() => setActiveCategory('top10')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${activeCategory === 'top10' 
                ? 'bg-green-600 text-white shadow-lg' 
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'}`}
            >
              <FiAward className="inline mr-2" />
              Top 10 Giants ({top10Companies.length})
            </button>
            <button
              onClick={() => setActiveCategory('mid10')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${activeCategory === 'mid10' 
                ? 'bg-purple-600 text-white shadow-lg' 
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'}`}
            >
              <FiHome className="inline mr-2" />
              Mid-Sized ({mid10Companies.length})
            </button>
            <button
              onClick={() => setActiveCategory('small10')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${activeCategory === 'small10' 
                ? 'bg-orange-600 text-white shadow-lg' 
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'}`}
            >
              <FiTrendingUp className="inline mr-2" />
              Growing Startups ({small10Companies.length})
            </button>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8">
          <div className="relative max-w-3xl mx-auto mb-6">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Indian companies by name, industry, or location..."
              className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg shadow-sm"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            )}
          </div>

          {/* Filter Toggle */}
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <FiFilter />
              Advanced Filters
              <FiChevronDown className={`transform transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
            <div className="text-gray-600">
              {filteredCompanies.length} companies found
            </div>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="mb-8 p-6 bg-white rounded-xl shadow-md border border-gray-200">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                  <select
                    value={industryFilter}
                    onChange={(e) => setIndustryFilter(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">All Industries</option>
                    {industries.map(industry => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <select
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">All Locations</option>
                    {locations.map(location => (
                      <option key={location} value={location}>{location}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Size</label>
                  <select
                    value={companySizeFilter}
                    onChange={(e) => setCompanySizeFilter(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">All Sizes</option>
                    <option value="top10">Top 10 Giants</option>
                    <option value="mid10">Mid-Sized Companies</option>
                    <option value="small10">Growing Startups</option>
                  </select>
                </div>
              </div>
              
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => {
                    setIndustryFilter('');
                    setLocationFilter('');
                    setCompanySizeFilter('');
                  }}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Companies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredCompanies.map(company => (
            <div key={company.id} className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow overflow-hidden">
              <div className="p-6">
                {/* Company Header with Hiring Status */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg
                      ${company.category === 'top10' ? 'bg-gradient-to-r from-green-500 to-emerald-600' :
                        company.category === 'mid10' ? 'bg-gradient-to-r from-purple-500 to-pink-500' :
                        'bg-gradient-to-r from-orange-500 to-red-500'}`}>
                      {company.logo.substring(0, 3)}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{company.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-600 font-medium">
                          {company.category === 'top10' ? 'Top 10' : 
                           company.category === 'mid10' ? 'Mid-Sized' : 'Startup'}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-full font-medium
                          ${company.hiringStatus === 'Mass Hiring' ? 'bg-green-100 text-green-600' :
                            company.hiringStatus === 'Rapid Hiring' ? 'bg-orange-100 text-orange-600' :
                            company.hiringStatus === 'Active Hiring' ? 'bg-blue-100 text-blue-600' :
                            'bg-gray-100 text-gray-600'}`}>
                          {company.hiringStatus}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center text-yellow-400">
                    <FiStar />
                    <span className="ml-1 font-medium">{company.rating}</span>
                  </div>
                </div>

                {/* Company Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{company.description}</p>

                {/* Company Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600 text-sm">
                    <FiBriefcase className="mr-2 flex-shrink-0" />
                    <span>{company.industry}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <FiMapPin className="mr-2 flex-shrink-0" />
                    <span>{company.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <FiUsers className="mr-2 flex-shrink-0" />
                    <span>{company.employees}</span>
                  </div>
                </div>

                {/* Open Positions */}
                <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-gray-600">Open Positions</div>
                      <div className="text-xl font-bold text-blue-600">{company.openPositions}+</div>
                    </div>
                    <FiTarget className="text-blue-500 text-xl" />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-center text-sm flex items-center justify-center gap-2"
                  >
                    Apply Now
                    <FiExternalLink className="text-xs" />
                  </a>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm">
                    Save
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mb-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Industry Overview</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{allCompanies.length}</div>
              <div className="text-gray-600">Total Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">{top10Companies.length}</div>
              <div className="text-gray-600">Top 10 Giants</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{mid10Companies.length}</div>
              <div className="text-gray-600">Mid-Sized Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">{small10Companies.length}</div>
              <div className="text-gray-600">Growing Startups</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}