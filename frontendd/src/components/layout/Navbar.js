// src/components/layout/Navbar.js
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
  useScrollTrigger,
  Slide,
} from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('token');

  const trigger = useScrollTrigger();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
    handleMenuClose();
  };

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar
        position="sticky"
        sx={{
          bgcolor: 'white',
          color: 'text.primary',
          boxShadow: trigger ? '0 4px 20px rgba(0,0,0,0.08)' : 'none',
          borderBottom: '1px solid #e5e7eb',
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
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
              <Button component={RouterLink} to="/jobs" color="inherit">
                Find Jobs
              </Button>
              <Button component={RouterLink} to="/companies" color="inherit">
                Companies
              </Button>
              <Button component={RouterLink} to="/post-job" color="inherit">
                Post Job
              </Button>
              <Button component={RouterLink} to="/career-guide" color="inherit">
                Career Guide
              </Button>
            </Box>

            {/* Right Side Actions */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
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
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    }}
                  >
                    Get Started
                  </Button>
                </>
              ) : (
                <>
                  <IconButton sx={{ color: 'text.secondary' }}>
                    <Badge badgeContent={3} color="error">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                  
                  <Button
                    onClick={handleMenuOpen}
                    endIcon={<ArrowDropDownIcon />}
                    sx={{ color: 'text.primary' }}
                  >
                    <Avatar sx={{ width: 32, height: 32, mr: 1, bgcolor: 'primary.main' }}>
                      JD
                    </Avatar>
                  </Button>

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
                    <MenuItem onClick={handleLogout} sx={{ color: 'error.main' }}>
                      Logout
                    </MenuItem>
                  </Menu>
                </>
              )}

              {/* Mobile Menu Button */}
              <IconButton
                sx={{ display: { md: 'none' } }}
                onClick={(e) => setMobileMenuAnchor(e.currentTarget)}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
};

export default Navbar;