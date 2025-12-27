import React from 'react';
import { Box, Container, Typography, Button, Grid, Paper, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 8,
        mb: 6,
        borderRadius: 2
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" gutterBottom fontWeight="bold">
              Find Your Dream Job
            </Typography>
            <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
              10,000+ jobs from top companies waiting for you
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{ bgcolor: 'secondary.main', px: 4 }}
              onClick={() => navigate('/jobs')}
            >
              Browse Jobs
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{ ml: 2, color: 'white', borderColor: 'white' }}
              onClick={() => navigate('/post-job')}
            >
              Post a Job
            </Button>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, borderRadius: 2 }}>
              <Typography variant="h6" gutterBottom color="primary">
                Search Jobs
              </Typography>
              <Box component="form" sx={{ mt: 2 }}>
                <TextField
                  fullWidth
                  placeholder="Job title, keywords, or company"
                  InputProps={{
                    startAdornment: <SearchIcon color="action" sx={{ mr: 1 }} />
                  }}
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  placeholder="City, state, or remote"
                  InputProps={{
                    startAdornment: <LocationOnIcon color="action" sx={{ mr: 1 }} />
                  }}
                  sx={{ mb: 3 }}
                />
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  onClick={() => navigate('/jobs')}
                >
                  Search Jobs
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection; 