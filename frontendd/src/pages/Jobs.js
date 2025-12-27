import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Jobs = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 4, mb: 8 }}>
        <Typography variant="h3" gutterBottom>
          All Jobs
        </Typography>
        <Box sx={{ p: 4, textAlign: 'center', bgcolor: '#f5f5f5', borderRadius: 2 }}>
          <Typography variant="h5">
            Jobs Page - Coming Soon!
          </Typography>
          <Typography variant="body1" color="textSecondary">
            This page will show all available jobs with filters
          </Typography>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Jobs;