import React from 'react';
import { Container, Typography, Box, Button, Paper, Grid } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ScheduleIcon from '@mui/icons-material/Schedule';
import BusinessIcon from '@mui/icons-material/Business';

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock job data
  const job = {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    location: "Bangalore, India",
    salary: "₹15-25 LPA",
    jobType: "Full-time",
    experienceLevel: "Senior",
    description: "We are looking for a skilled Frontend Developer with 3+ years of experience in React.js...",
    requirements: [
      "3+ years of experience with React.js",
      "Strong knowledge of JavaScript, HTML, CSS",
      "Experience with state management (Redux)",
      "Understanding of REST APIs",
      "Good problem-solving skills"
    ],
    postedDate: "2024-01-15",
    deadline: "2024-02-15"
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
          sx={{ mb: 3 }}
        >
          Back to Jobs
        </Button>

        <Paper sx={{ p: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Typography variant="h4" gutterBottom>
                {job.title}
              </Typography>
              <Box display="flex" alignItems="center" mb={2}>
                <BusinessIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="h6" color="primary">
                  {job.company}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box textAlign={{ md: 'right' }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ px: 4 }}
                  onClick={() => alert('Application submitted! (Demo)')}
                >
                  Apply Now
                </Button>
              </Box>
            </Grid>
          </Grid>

          <Box display="flex" flexWrap="wrap" gap={3} my={3}>
            <Box display="flex" alignItems="center">
              <LocationOnIcon color="action" />
              <Typography ml={1}>{job.location}</Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <AttachMoneyIcon color="action" />
              <Typography ml={1}>{job.salary}</Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <ScheduleIcon color="action" />
              <Typography ml={1}>{job.jobType}</Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <Typography>Experience: {job.experienceLevel}</Typography>
            </Box>
          </Box>

          <Box my={4}>
            <Typography variant="h6" gutterBottom>
              Job Description
            </Typography>
            <Typography paragraph>
              {job.description}
            </Typography>
          </Box>

          <Box my={4}>
            <Typography variant="h6" gutterBottom>
              Requirements
            </Typography>
            <ul>
              {job.requirements.map((req, index) => (
                <li key={index}>
                  <Typography>{req}</Typography>
                </li>
              ))}
            </ul>
          </Box>

          <Box display="flex" justifyContent="space-between" mt={4} pt={3} borderTop={1}>
            <Typography variant="body2" color="textSecondary">
              Posted: {job.postedDate}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Deadline: {job.deadline}
            </Typography>
          </Box>
        </Paper>
      </Container>
      <Footer />
    </>
  );
};

export default JobDetails;