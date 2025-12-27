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
  Stepper,
  Step,
  StepLabel,
  FormControl,
  
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel
} from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Register = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    // Step 1
    email: '',
    password: '',
    confirmPassword: '',
    // Step 2
    userType: 'student',
    // Step 3
    firstName: '',
    lastName: '',
    phone: '',
    agreeToTerms: false
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const steps = ['Account Details', 'User Type', 'Personal Information'];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = () => {
    // Validation for each step
    if (activeStep === 0) {
      if (!formData.email || !formData.password || !formData.confirmPassword) {
        setError('Please fill all fields');
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        return;
      }
      if (formData.password.length < 6) {
        setError('Password must be at least 6 characters');
        return;
      }
    }
    
    if (activeStep === 2) {
      // Final step - submit form
      handleSubmit();
    } else {
      setActiveStep((prevStep) => prevStep + 1);
      setError('');
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
    setError('');
  };

  const handleSubmit = () => {
    // Mock registration (replace with API call)
    localStorage.setItem('token', 'demo-token');
    localStorage.setItem('user', JSON.stringify({
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      role: formData.userType
    }));
    
    alert('Registration successful!');
    navigate('/dashboard');
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box sx={{ mt: 3 }}>
            <TextField
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              margin="normal"
              required
            />
          </Box>
        );
      
      case 1:
        return (
          <Box sx={{ mt: 3 }}>
            <FormControl component="fieldset">
              <FormLabel component="legend">I am a:</FormLabel>
              <RadioGroup
                name="userType"
                value={formData.userType}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="student"
                  control={<Radio />}
                  label={
                    <Box>
                      <Typography variant="body1">Job Seeker / Student</Typography>
                      <Typography variant="body2" color="textSecondary">
                        Looking for jobs or internships
                      </Typography>
                    </Box>
                  }
                />
                <FormControlLabel
                  value="recruiter"
                  control={<Radio />}
                  label={
                    <Box sx={{ mt: 1 }}>
                      <Typography variant="body1">Recruiter / Employer</Typography>
                      <Typography variant="body2" color="textSecondary">
                        Looking to hire candidates
                      </Typography>
                    </Box>
                  }
                />
              </RadioGroup>
            </FormControl>
          </Box>
        );
      
      case 2:
        return (
          <Box sx={{ mt: 3 }}>
            <Box display="flex" gap={2}>
              <TextField
                fullWidth
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                margin="normal"
                required
              />
            </Box>
            <TextField
              fullWidth
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              margin="normal"
              required
            />
          </Box>
        );
      
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="md" sx={{ mt: 4, mb: 8 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Create Your Account
          </Typography>
          
          <Stepper activeStep={activeStep} sx={{ mt: 4, mb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {error}
            </Alert>
          )}

          {renderStepContent(activeStep)}

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Back
            </Button>
            <Button
              variant="contained"
              onClick={handleNext}
            >
              {activeStep === steps.length - 1 ? 'Create Account' : 'Next'}
            </Button>
          </Box>

          <Box mt={4} textAlign="center">
            <Typography variant="body2">
              Already have an account?{' '}
              <Link
                component={RouterLink}
                to="/login"
                color="primary"
                fontWeight="bold"
              >
                Login here
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Container>
      <Footer />
    </>
  );
};

export default Register;