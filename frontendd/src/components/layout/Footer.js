// src/components/layout/Footer.js
import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Link,
  IconButton,
  Divider,
  TextField,
  Button,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: '#1f2937', color: 'white', mt: 'auto' }}>
      <Container maxWidth="xl">
        <Grid container spacing={6} sx={{ py: 8 }}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" fontWeight={700} gutterBottom>
              JobPortal
            </Typography>
            <Typography color="grey.400" paragraph>
              Connecting talented professionals with dream opportunities.
            </Typography>
            <Box display="flex" gap={2}>
              <IconButton sx={{ color: 'grey.400', '&:hover': { color: 'white' } }}>
                <LinkedInIcon />
              </IconButton>
              <IconButton sx={{ color: 'grey.400', '&:hover': { color: 'white' } }}>
                <TwitterIcon />
              </IconButton>
              <IconButton sx={{ color: 'grey.400', '&:hover': { color: 'white' } }}>
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography variant="h6" gutterBottom fontWeight={600}>
              For Job Seekers
            </Typography>
            <Box>
              <Link component={RouterLink} to="/jobs" color="grey.400" display="block" sx={{ mb: 1, '&:hover': { color: 'white' } }}>
                Browse Jobs
              </Link>
              <Link component={RouterLink} to="/companies" color="grey.400" display="block" sx={{ mb: 1, '&:hover': { color: 'white' } }}>
                Companies
              </Link>
              <Link component={RouterLink} to="/career-guide" color="grey.400" display="block" sx={{ mb: 1, '&:hover': { color: 'white' } }}>
                Career Guide
              </Link>
            </Box>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography variant="h6" gutterBottom fontWeight={600}>
              For Employers
            </Typography>
            <Box>
              <Link component={RouterLink} to="/post-job" color="grey.400" display="block" sx={{ mb: 1, '&:hover': { color: 'white' } }}>
                Post a Job
              </Link>
              <Link component={RouterLink} to="/pricing" color="grey.400" display="block" sx={{ mb: 1, '&:hover': { color: 'white' } }}>
                Pricing
              </Link>
              <Link component={RouterLink} to="/employer-resources" color="grey.400" display="block" sx={{ mb: 1, '&:hover': { color: 'white' } }}>
                Resources
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom fontWeight={600}>
              Newsletter
            </Typography>
            <Typography color="grey.400" paragraph>
              Subscribe for latest job opportunities
            </Typography>
            <Box display="flex" gap={1}>
              <TextField
                placeholder="Your email"
                size="small"
                sx={{
                  flex: 1,
                  '& .MuiOutlinedInput-root': {
                    bgcolor: 'white',
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{ bgcolor: '#8b5cf6', '&:hover': { bgcolor: '#7c3aed' } }}
              >
                <SendIcon />
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'grey.800' }} />

        <Box sx={{ py: 4, textAlign: 'center' }}>
          <Typography color="grey.400">
            © {new Date().getFullYear()} JobPortal. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;