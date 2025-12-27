// src/pages/Home.js
import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Stack,
  Paper,
  TextField,
  InputAdornment,
  Avatar,
  IconButton,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import BusinessIcon from '@mui/icons-material/Business';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ShieldIcon from '@mui/icons-material/Shield';
import BoltIcon from '@mui/icons-material/Bolt';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Home = () => {
  const navigate = useNavigate();

  const featuredJobs = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "Google",
      location: "Remote • Bangalore",
      salary: "₹25-40 LPA",
      type: "Full Time",
      experience: "5+ years",
      logoColor: "#4285F4",
      skills: ["React", "TypeScript", "Next.js"],
      posted: "2 days ago",
      isFeatured: true,
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "Microsoft",
      location: "Hyderabad",
      salary: "₹20-35 LPA",
      type: "Full Time",
      experience: "3+ years",
      logoColor: "#00A4EF",
      skills: ["Node.js", "Python", "AWS"],
      posted: "1 day ago",
    },
    {
      id: 3,
      title: "Product Designer",
      company: "Adobe",
      location: "Noida",
      salary: "₹18-30 LPA",
      type: "Full Time",
      experience: "4+ years",
      logoColor: "#FF0000",
      skills: ["Figma", "UI/UX", "Prototyping"],
      posted: "3 days ago",
      isUrgent: true,
    },
    {
      id: 4,
      title: "Data Scientist",
      company: "Amazon",
      location: "Remote",
      salary: "₹30-45 LPA",
      type: "Full Time",
      experience: "6+ years",
      logoColor: "#FF9900",
      skills: ["Python", "Machine Learning", "SQL"],
      posted: "4 days ago",
    },
  ];

  const companies = [
    { name: "Google", logo: "G" },
    { name: "Microsoft", logo: "M" },
    { name: "Amazon", logo: "A" },
    { name: "Adobe", logo: "Ad" },
    { name: "Meta", logo: "M" },
    { name: "Netflix", logo: "N" },
    { name: "Uber", logo: "U" },
    { name: "Airbnb", logo: "A" },
  ];

  const stats = [
    { value: "100K+", label: "Jobs Posted" },
    { value: "50K+", label: "Companies" },
    { value: "10K+", label: "Success Stories" },
    { value: "35%", label: "Avg Salary Hike" },
  ];

  const JobCard = ({ job }) => (
    <motion.div whileHover={{ y: -10 }}>
      <Card sx={{ height: '100%', borderRadius: 3, overflow: 'hidden' }}>
        <Box sx={{ position: 'relative' }}>
          {job.isFeatured && (
            <Box sx={{ position: 'absolute', top: 15, right: 15, bgcolor: '#FFD700', color: '#000', px: 2, py: 0.5, borderRadius: 2, fontSize: '0.75rem', fontWeight: 'bold' }}>
              FEATURED
            </Box>
          )}
          {job.isUrgent && (
            <Box sx={{ position: 'absolute', top: 15, left: 15, bgcolor: '#FF4444', color: '#fff', px: 2, py: 0.5, borderRadius: 2, fontSize: '0.75rem', fontWeight: 'bold' }}>
              URGENT
            </Box>
          )}
        </Box>
        <CardContent sx={{ p: 3 }}>
          <Box display="flex" alignItems="center" gap={2} mb={2}>
            <Avatar sx={{ bgcolor: job.logoColor, width: 56, height: 56, fontSize: '1.5rem', fontWeight: 'bold' }}>
              {job.company.charAt(0)}
            </Avatar>
            <Box flex={1}>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                {job.title}
              </Typography>
              <Typography color="primary.main" fontWeight={500}>
                {job.company}
              </Typography>
            </Box>
          </Box>

          <Stack direction="row" spacing={1} mb={2} flexWrap="wrap">
            {job.skills.map((skill, idx) => (
              <Chip key={idx} label={skill} size="small" sx={{ mb: 1, bgcolor: '#f0f9ff', color: '#0369a1' }} />
            ))}
          </Stack>

          <Stack spacing={2} mb={3}>
            <Box display="flex" alignItems="center" gap={1}>
              <LocationOnIcon sx={{ fontSize: 18, color: '#64748b' }} />
              <Typography variant="body2" color="text.secondary">{job.location}</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <WorkIcon sx={{ fontSize: 18, color: '#64748b' }} />
              <Typography variant="body2" color="text.secondary">{job.salary}</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <TrendingUpIcon sx={{ fontSize: 18, color: '#64748b' }} />
              <Typography variant="body2" color="text.secondary">{job.experience}</Typography>
            </Box>
          </Stack>

          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="caption" color="text.secondary">
              Posted: {job.posted}
            </Typography>
            <Box display="flex" alignItems="center" gap={0.5}>
              <StarIcon sx={{ fontSize: 16, color: '#fbbf24' }} />
              <Typography variant="caption" fontWeight={500}>4.8</Typography>
            </Box>
          </Box>
        </CardContent>
        <Box sx={{ p: 3, pt: 0 }}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => navigate(`/job/${job.id}`)}
            sx={{
              bgcolor: 'primary.main',
              '&:hover': { bgcolor: 'primary.dark', transform: 'translateY(-2px)' },
              py: 1.5,
              borderRadius: 2,
            }}
          >
            Apply Now
          </Button>
        </Box>
      </Card>
    </motion.div>
  );

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <Box sx={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
      }}>
        <Container maxWidth="xl">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <Typography variant="h1" fontWeight={800} gutterBottom sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
                  Find Your Dream
                  <Box component="span" sx={{ display: 'block', color: '#fbbf24' }}>Tech Career</Box>
                </Typography>
                <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
                  Connect with top companies and discover opportunities that match your skills
                </Typography>
                <Stack direction="row" spacing={2} flexWrap="wrap">
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    onClick={() => navigate('/jobs')}
                    sx={{
                      bgcolor: 'white',
                      color: 'primary.main',
                      px: 4,
                      py: 1.5,
                      '&:hover': { bgcolor: '#f1f5f9' },
                    }}
                  >
                    Explore Jobs
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{ borderColor: 'white', color: 'white', px: 4, py: 1.5 }}
                    onClick={() => navigate('/post-job')}
                  >
                    Post a Job
                  </Button>
                </Stack>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
                <Paper sx={{ p: 4, borderRadius: 3, bgcolor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                  <Typography variant="h5" gutterBottom fontWeight={600}>
                    Search Jobs
                  </Typography>
                  <Stack spacing={3}>
                    <TextField
                      fullWidth
                      placeholder="Job title, keywords, or company"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon sx={{ color: 'white' }} />
                          </InputAdornment>
                        ),
                      }}
                      sx={{ 
                        '& .MuiOutlinedInput-root': { 
                          bgcolor: 'rgba(255,255,255,0.1)',
                          '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                          '&:hover fieldset': { borderColor: 'white' },
                        },
                        '& input': { color: 'white' },
                      }}
                    />
                    <TextField
                      fullWidth
                      placeholder="City, state, or remote"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LocationOnIcon sx={{ color: 'white' }} />
                          </InputAdornment>
                        ),
                      }}
                      sx={{ 
                        '& .MuiOutlinedInput-root': { 
                          bgcolor: 'rgba(255,255,255,0.1)',
                          '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                          '&:hover fieldset': { borderColor: 'white' },
                        },
                        '& input': { color: 'white' },
                      }}
                    />
                    <Button
                      fullWidth
                      variant="contained"
                      size="large"
                      endIcon={<ArrowForwardIcon />}
                      sx={{ 
                        bgcolor: 'white', 
                        color: 'primary.main',
                        '&:hover': { bgcolor: '#f1f5f9' },
                        py: 1.5,
                      }}
                      onClick={() => navigate('/jobs')}
                    >
                      Search 10,000+ Jobs
                    </Button>
                  </Stack>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Grid container spacing={4} justifyContent="center">
          {stats.map((stat, idx) => (
            <Grid item xs={6} md={3} key={idx}>
              <Box textAlign="center">
                <Typography variant="h2" fontWeight={800} color="primary.main" gutterBottom>
                  {stat.value}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Features */}
      <Box sx={{ py: 8, bgcolor: '#f8fafc' }}>
        <Container maxWidth="xl">
          <Box textAlign="center" sx={{ mb: 8 }}>
            <Typography variant="h2" fontWeight={700} gutterBottom>
              Why Choose JobPortal?
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
              We provide everything you need to find your dream job and grow your career
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {[
              {
                icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
                title: 'Smart Job Matching',
                description: 'AI-powered matching algorithm connects you with perfect opportunities',
                color: '#3b82f6',
              },
              {
                icon: <ShieldIcon sx={{ fontSize: 40 }} />,
                title: 'Verified Companies',
                description: 'All companies are verified for authenticity and credibility',
                color: '#10b981',
              },
              {
                icon: <BoltIcon sx={{ fontSize: 40 }} />,
                title: 'Quick Apply',
                description: 'One-click application to multiple jobs with your profile',
                color: '#f59e0b',
              },
            ].map((feature, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Card sx={{ p: 4, height: '100%', textAlign: 'center', borderRadius: 3 }}>
                    <Box sx={{ 
                      width: 80, 
                      height: 80, 
                      borderRadius: '50%', 
                      bgcolor: `${feature.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 24px',
                      color: feature.color,
                    }}>
                      {feature.icon}
                    </Box>
                    <Typography variant="h5" fontWeight={600} gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {feature.description}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Featured Jobs */}
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mb: 6 }}>
          <Box>
            <Typography variant="h2" fontWeight={700} gutterBottom>
              Featured Jobs
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Curated opportunities from top companies
            </Typography>
          </Box>
          <Button
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            onClick={() => navigate('/jobs')}
            size="large"
          >
            View All Jobs
          </Button>
        </Box>
        <Grid container spacing={3}>
          {featuredJobs.map((job) => (
            <Grid item xs={12} md={6} lg={3} key={job.id}>
              <JobCard job={job} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Companies */}
      <Box sx={{ py: 8, bgcolor: '#f8fafc' }}>
        <Container maxWidth="xl">
          <Box textAlign="center" sx={{ mb: 6 }}>
            <Typography variant="h2" fontWeight={700} gutterBottom>
              Trusted by Industry Leaders
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Join thousands of professionals working at top companies
            </Typography>
          </Box>
          <Grid container spacing={3} justifyContent="center">
            {companies.map((company, idx) => (
              <Grid item xs={4} sm={3} md={2} key={idx}>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Paper sx={{ 
                    p: 3, 
                    textAlign: 'center',
                    borderRadius: 2,
                    bgcolor: 'white',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  }}>
                    <Avatar sx={{ 
                      bgcolor: 'primary.main', 
                      width: 50, 
                      height: 50, 
                      mx: 'auto', 
                      mb: 2,
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                    }}>
                      {company.logo}
                    </Avatar>
                    <Typography fontWeight={600}>
                      {company.name}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Container maxWidth="xl" sx={{ py: 12 }}>
        <Paper sx={{ 
          p: { xs: 4, md: 8 }, 
          textAlign: 'center',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          borderRadius: 3,
        }}>
          <Typography variant="h2" fontWeight={800} gutterBottom>
            Ready to Accelerate Your Career?
          </Typography>
          <Typography variant="h5" sx={{ mb: 6, opacity: 0.9 }}>
            Join our community of successful professionals today
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                px: 6,
                py: 1.5,
                '&:hover': { bgcolor: '#f1f5f9' },
              }}
              onClick={() => navigate('/register')}
            >
              Get Started Free
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'white',
                color: 'white',
                px: 6,
                py: 1.5,
                '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' },
              }}
              onClick={() => navigate('/login')}
            >
              Sign In
            </Button>
          </Stack>
        </Paper>
      </Container>

      <Footer />
    </>
  );
};

export default Home;