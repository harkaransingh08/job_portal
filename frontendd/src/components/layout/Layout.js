import React from 'react';
import { Box } from '@mui/material';
import EnhancedNavbar from './EnhancedNavbar';
import EnhancedFooter from './EnhancedFooter';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.default',
      }}
    >
      <EnhancedNavbar />
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        sx={{ flex: 1 }}
      >
        {children}
      </Box>
      <EnhancedFooter />
    </Box>
  );
};

export default Layout;