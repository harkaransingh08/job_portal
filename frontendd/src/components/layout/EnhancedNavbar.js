import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Typography,
  Badge,
  InputBase,
  alpha,
  useScrollTrigger,
  Slide,
  Tooltip,
} from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import MenuIcon from '@mui/icons-material/Menu';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const EnhancedNavbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('token');

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const menuItems = [
    { label: 'Find Jobs', path: '/jobs' },
    { label: 'Companies', path: '/companies' },
    { label: 'Career Guide', path: '/guide' },
    { label: 'Post Job', path: '/post-job', highlight: true },
  ];

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    toast.success('Logged out successfully!');
    navigate('/login');
    handleMenuClose();
  };

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar
        position="sticky"
        sx={{
          bgcolor: 'background.paper',
          color: 'text.primary',
          boxShadow: trigger ? '0 4px 20px rgba(0,0,0,0.08)' : 'none',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ py: 1 }}>
            {/* Logo */}
            <Box
              component={RouterLink}
              to="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                mr: 4,
              }}
            >
              <WorkOutlineIcon
                sx={{
                  fontSize: 32,
                  color: 'primary.main',
                  mr: 1,
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #2563eb 0%, #8b5cf6 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                JobPortal
              </Typography>
            </Box>

            {/* Desktop Navigation */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 2 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  component={RouterLink}
                  to={item.path}
                  variant={item.highlight ? 'contained' : 'text'}
                  sx={{
                    color: item.highlight ? 'white' : 'text.secondary',
                    '&:hover': {
                      color: 'primary.main',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* Search Bar */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                position: 'relative',
                borderRadius: 10,
                bgcolor: alpha('#000', 0.05),
                mr: 3,
                width: 300,
              }}
            >
              <IconButton sx={{ p: '10px' }}>
                <SearchIcon />
              </IconButton>
              <InputBase
                placeholder="Search jobs, companies, skills..."
                sx={{ ml: 1, flex: 1 }}
              />
            </Box>

            {/* Right Side Actions */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {!isLoggedIn ? (
                <>
                  <Button
                    component={RouterLink}
                    to="/login"
                    variant="text"
                    sx={{ color: 'text.secondary' }}
                  >
                    Sign In
                  </Button>
                  <Button
                    component={RouterLink}
                    to="/register"
                    variant="contained"
                    sx={{
                      background: 'linear-gradient(135deg, #2563eb 0%, #8b5cf6 100%)',
                    }}
                  >
                    Get Started
                  </Button>
                </>
              ) : (
                <>
                  <Tooltip title="Messages">
                    <IconButton sx={{ color: 'text.secondary' }}>
                      <Badge badgeContent={3} color="error">
                        <MessageIcon />
                      </Badge>
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Notifications">
                    <IconButton sx={{ color: 'text.secondary' }}>
                      <Badge badgeContent={5} color="error">
                        <NotificationsIcon />
                      </Badge>
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Profile">
                    <IconButton onClick={handleMenuOpen}>
                      <Avatar
                        sx={{
                          width: 40,
                          height: 40,
                          bgcolor: 'primary.main',
                          cursor: 'pointer',
                        }}
                      >
                        JD
                      </Avatar>
                    </IconButton>
                  </Tooltip>

                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    PaperProps={{
                      sx: {
                        mt: 1.5,
                        minWidth: 200,
                        borderRadius: 2,
                        boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                      },
                    }}
                  >
                    <MenuItem onClick={() => { navigate('/dashboard'); handleMenuClose(); }}>
                      Dashboard
                    </MenuItem>
                    <MenuItem onClick={() => { navigate('/profile'); handleMenuClose(); }}>
                      My Profile
                    </MenuItem>
                    <MenuItem onClick={() => { navigate('/applications'); handleMenuClose(); }}>
                      My Applications
                    </MenuItem>
                    <MenuItem onClick={() => { navigate('/analytics'); handleMenuClose(); }}>
                      Analytics
                    </MenuItem>
                    <MenuItem onClick={handleLogout} sx={{ color: 'error.main' }}>
                      Logout
                    </MenuItem>
                  </Menu>
                </>
              )}

              {/* Mobile Menu Button */}
              <IconButton
                sx={{ display: { md: 'none' } }}
                onClick={handleMobileMenuOpen}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>

        {/* Mobile Menu */}
        <Menu
          anchorEl={mobileMenuAnchor}
          open={Boolean(mobileMenuAnchor)}
          onClose={handleMobileMenuClose}
          PaperProps={{
            sx: {
              width: '100%',
              maxWidth: '100%',
              mt: 0,
              borderRadius: 0,
            },
          }}
        >
          {menuItems.map((item) => (
            <MenuItem
              key={item.label}
              component={RouterLink}
              to={item.path}
              onClick={handleMobileMenuClose}
            >
              {item.label}
            </MenuItem>
          ))}
        </Menu>
      </AppBar>
    </Slide>
  );
};

export default EnhancedNavbar;