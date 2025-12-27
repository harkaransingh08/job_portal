import React, { useState } from 'react';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  Link,
  Divider,
  IconButton,
  InputAdornment
} from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    showPassword: false
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleClickShowPassword = () => {
    setFormData({
      ...formData,
      showPassword: !formData.showPassword
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Mock login for demo (replace with actual API call)
    setTimeout(() => {
      if (formData.email && formData.password) {
        localStorage.setItem('token', 'demo-token');
        localStorage.setItem('user', JSON.stringify({
          name: 'Demo User',
          email: formData.email,
          role: 'student'
        }));
        navigate('/dashboard');
      } else {
        setError('Please fill in all fields');
      }
      setLoading(false);
    }, 1000);
  };

  const handleSocialLogin = (provider) => {
    alert(`Logging in with ${provider} (This is a demo)`);
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="sm" sx={{ mt: 4, mb: 8 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Welcome Back
          </Typography>
          <Typography variant="body1" align="center" color="textSecondary" paragraph>
            Login to access your account
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {error}
            </Alert>
          )}

          {/* Social Login Buttons */}
          <Box sx={{ mb: 3 }}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<GoogleIcon />}
              onClick={() => handleSocialLogin('Google')}
              sx={{ mb: 2 }}
            >
              Continue with Google
            </Button>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<LinkedInIcon />}
              onClick={() => handleSocialLogin('LinkedIn')}
            >
              Continue with LinkedIn
            </Button>
          </Box>

          <Divider sx={{ my: 3 }}>
            <Typography color="textSecondary">OR</Typography>
          </Divider>

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              required
              autoComplete="email"
            />
            
            <TextField
              fullWidth
              label="Password"
              name="password"
              type={formData.showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleChange}
              margin="normal"
              required
              autoComplete="current-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {formData.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />

            <Box display="flex" justifyContent="flex-end" sx={{ mt: 1, mb: 3 }}>
              <Link
                component={RouterLink}
                to="/forgot-password"
                variant="body2"
              >
                Forgot Password?
              </Link>
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </Button>

            <Box mt={3} textAlign="center">
              <Typography variant="body2">
                Don't have an account?{' '}
                <Link
                  component={RouterLink}
                  to="/register"
                  color="primary"
                  fontWeight="bold"
                >
                  Sign up here
                </Link>
              </Typography>
            </Box>
          </form>
        </Paper>
      </Container>
      <Footer />
    </>
  );
};

export default Login;