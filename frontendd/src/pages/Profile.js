import React, { useState } from 'react';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Avatar,
  Grid,
  Tabs,
  Tab,
  IconButton,
  InputAdornment
} from '@mui/material';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Profile = () => {
  const [tabValue, setTabValue] = useState(0);
  const [editMode, setEditMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+91 9876543210',
    location: 'Bangalore, India',
    bio: 'Passionate frontend developer with 3 years of experience in React.js',
    skills: ['React', 'JavaScript', 'Node.js', 'MongoDB'],
    education: 'B.Tech Computer Science, IIT Delhi',
    experience: '3 years at TechCorp'
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleProfileChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  const handlePasswordChange = (e) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value
    });
  };

  const handleSaveProfile = () => {
    // Mock save
    alert('Profile updated successfully!');
    setEditMode(false);
  };

  const handleUpdatePassword = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('New passwords do not match!');
      return;
    }
    alert('Password updated successfully!');
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
        <Paper sx={{ p: 3, mb: 3 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
            <Typography variant="h4">
              My Profile
            </Typography>
            {!editMode ? (
              <Button
                startIcon={<EditIcon />}
                variant="outlined"
                onClick={() => setEditMode(true)}
              >
                Edit Profile
              </Button>
            ) : (
              <Box>
                <Button
                  startIcon={<SaveIcon />}
                  variant="contained"
                  onClick={handleSaveProfile}
                  sx={{ mr: 2 }}
                >
                  Save
                </Button>
                <Button
                  startIcon={<CancelIcon />}
                  variant="outlined"
                  onClick={() => setEditMode(false)}
                >
                  Cancel
                </Button>
              </Box>
            )}
          </Box>

          <Tabs value={tabValue} onChange={handleTabChange} sx={{ mb: 3 }}>
            <Tab label="Personal Info" />
            <Tab label="Change Password" />
            <Tab label="Resume" />
          </Tabs>

          {tabValue === 0 && (
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Avatar
                    sx={{ width: 150, height: 150, mb: 2 }}
                    src="https://via.placeholder.com/150"
                  />
                  {editMode && (
                    <Button variant="outlined" size="small">
                      Change Photo
                    </Button>
                  )}
                </Box>
              </Grid>
              
              <Grid item xs={12} md={8}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      name="name"
                      value={profileData.name}
                      onChange={handleProfileChange}
                      disabled={!editMode}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      value={profileData.email}
                      disabled
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Phone"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleProfileChange}
                      disabled={!editMode}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Location"
                      name="location"
                      value={profileData.location}
                      onChange={handleProfileChange}
                      disabled={!editMode}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Bio"
                      name="bio"
                      multiline
                      rows={3}
                      value={profileData.bio}
                      onChange={handleProfileChange}
                      disabled={!editMode}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" gutterBottom>
                      Skills
                    </Typography>
                    <Box display="flex" flexWrap="wrap" gap={1}>
                      {profileData.skills.map((skill, index) => (
                        <Paper
                          key={index}
                          sx={{ px: 2, py: 1, bgcolor: 'primary.light', color: 'white' }}
                        >
                          {skill}
                        </Paper>
                      ))}
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}

          {tabValue === 1 && (
            <Box sx={{ maxWidth: 500 }}>
              <TextField
                fullWidth
                label="Current Password"
                type={showPassword ? 'text' : 'password'}
                name="currentPassword"
                value={passwordData.currentPassword}
                onChange={handlePasswordChange}
                margin="normal"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={togglePasswordVisibility}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              <TextField
                fullWidth
                label="New Password"
                type={showPassword ? 'text' : 'password'}
                name="newPassword"
                value={passwordData.newPassword}
                onChange={handlePasswordChange}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Confirm New Password"
                type={showPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={passwordData.confirmPassword}
                onChange={handlePasswordChange}
                margin="normal"
              />
              <Button
                variant="contained"
                onClick={handleUpdatePassword}
                sx={{ mt: 3 }}
              >
                Update Password
              </Button>
            </Box>
          )}

          {tabValue === 2 && (
            <Box>
              <Typography variant="h6" gutterBottom>
                Upload Your Resume
              </Typography>
              <Paper
                sx={{
                  p: 4,
                  textAlign: 'center',
                  border: '2px dashed #ccc',
                  cursor: 'pointer',
                  '&:hover': { borderColor: 'primary.main' }
                }}
                onClick={() => alert('Upload resume feature coming soon!')}
              >
                <Typography>Click to upload or drag and drop</Typography>
                <Typography variant="body2" color="textSecondary">
                  PDF, DOC, DOCX (Max 5MB)
                </Typography>
              </Paper>
              <Button variant="outlined" sx={{ mt: 2 }}>
                Download Current Resume
              </Button>
            </Box>
          )}
        </Paper>
      </Container>
      <Footer />
    </>
  );
};

export default Profile;