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
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';
import { motion } from 'framer-motion';

const EnhancedFooter = () => {
  const footerLinks = {
    'For Job Seekers': [
      { label: 'Browse Jobs', path: '/jobs' },
      { label: 'Companies', path: '/companies' },
      { label: 'Career Guide', path: '/guide' },
      { label: 'Resume Builder', path: '/resume-builder' },
    ],
    'For Employers': [
      { label: 'Post a Job', path: '/post-job' },
      { label: 'Browse Candidates', path: '/candidates' },
      { label: 'Employer Resources', path: '/employer-resources' },
      { label: 'Pricing', path: '/pricing' },
    ],
    'Company': [
      { label: 'About Us', path: '/about' },
      { label: 'Careers', path: '/careers' },
      { label: 'Blog', path: '/blog' },
      { label: 'Press', path: '/press' },
    ],
    'Support': [
      { label: 'Help Center', path: '/help' },
      { label: 'Contact Us', path: '/contact' },
      { label: 'Privacy Policy', path: '/privacy' },
      { label: 'Terms of Service', path: '/terms' },
    ],
  };

  const socialLinks = [
    { icon: <LinkedInIcon />, label: 'LinkedIn', url: '#' },
    { icon: <TwitterIcon />, label: 'Twitter', url: '#' },
    { icon: <FacebookIcon />, label: 'Facebook', url: '#' },
    { icon: <InstagramIcon />, label: 'Instagram', url: '#' },
    { icon: <GitHubIcon />, label: 'GitHub', url: '#' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
        mt: 'auto',
      }}
    >
      <Container maxWidth="xl">
        {/* Newsletter Section */}
        <Box
          sx={{
            py: 6,
            borderBottom: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom fontWeight={600}>
                Stay Updated
              </Typography>
              <Typography color="text.secondary">
                Subscribe to our newsletter for the latest job opportunities and career tips.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" gap={2}>
                <TextField
                  fullWidth
                  placeholder="Enter your email"
                  variant="outlined"
                  size="small"
                />
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  sx={{
                    background: 'linear-gradient(135deg, #2563eb 0%, #8b5cf6 100%)',
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Main Footer Links */}
        <Box sx={{ py: 8 }}>
          <Grid container spacing={6}>
            {Object.entries(footerLinks).map(([category, links]) => (
              <Grid item xs={12} sm={6} md={3} key={category}>
                <Typography variant="h6" gutterBottom fontWeight={600}>
                  {category}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  {links.map((link) => (
                    <Link
                      key={link.label}
                      component={RouterLink}
                      to={link.path}
                      sx={{
                        display: 'block',
                        color: 'text.secondary',
                        textDecoration: 'none',
                        mb: 1.5,
                        transition: 'color 0.2s',
                        '&:hover': {
                          color: 'primary.main',
                        },
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider />

        {/* Bottom Bar */}
        <Box sx={{ py: 4 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box display="flex" alignItems="center" gap={2}>
                <Typography variant="body2" color="text.secondary">
                  © {new Date().getFullYear()} JobPortal. All rights reserved.
                </Typography>
                <Box display="flex" gap={1}>
                  {socialLinks.map((social) => (
                    <IconButton
                      key={social.label}
                      size="small"
                      sx={{
                        color: 'text.secondary',
                        '&:hover': {
                          color: 'primary.main',
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  ))}
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                display="flex"
                justifyContent={{ md: 'flex-end' }}
                flexWrap="wrap"
                gap={3}
              >
                <Typography variant="body2" color="text.secondary">
                  100,000+ Jobs Posted
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  50,000+ Companies
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  1M+ Members
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default EnhancedFooter;