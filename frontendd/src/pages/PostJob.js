import React, { useState } from 'react';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const PostJob = () => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    description: '',
    requirements: '',
    location: '',
    salary: '',
    jobType: '',
    experienceLevel: ''
  });
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleAddSkill = () => {
    if (skillInput && !skills.includes(skillInput)) {
      setSkills([...skills, skillInput]);
      setSkillInput('');
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    // Basic validation
    const requiredFields = ['title', 'company', 'description', 'location', 'salary'];
    for (let field of requiredFields) {
      if (!formData[field].trim()) {
        setError(`Please fill in the ${field} field`);
        return;
      }
    }

    // Mock submission
    setSuccess('Job posted successfully!');
    setTimeout(() => {
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="md" sx={{ mt: 4, mb: 8 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Post a New Job
          </Typography>
          <Typography variant="body1" align="center" color="textSecondary" paragraph>
            Fill in the details to post your job opening
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {error}
            </Alert>
          )}

          {success && (
            <Alert severity="success" sx={{ mb: 3 }}>
              {success}
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Job Title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </Grid>
              
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Company Name"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel>Job Type</InputLabel>
                  <Select
                    name="jobType"
                    value={formData.jobType}
                    label="Job Type"
                    onChange={handleChange}
                  >
                    <MenuItem value="Full-time">Full-time</MenuItem>
                    <MenuItem value="Part-time">Part-time</MenuItem>
                    <MenuItem value="Internship">Internship</MenuItem>
                    <MenuItem value="Contract">Contract</MenuItem>
                    <MenuItem value="Remote">Remote</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel>Experience Level</InputLabel>
                  <Select
                    name="experienceLevel"
                    value={formData.experienceLevel}
                    label="Experience Level"
                    onChange={handleChange}
                  >
                    <MenuItem value="Fresher">Fresher (0-1 years)</MenuItem>
                    <MenuItem value="Junior">Junior (1-3 years)</MenuItem>
                    <MenuItem value="Mid">Mid Level (3-5 years)</MenuItem>
                    <MenuItem value="Senior">Senior (5+ years)</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Salary Range"
                  name="salary"
                  placeholder="e.g., ₹8-12 LPA"
                  value={formData.salary}
                  onChange={handleChange}
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <Box display="flex" gap={1} mb={2}>
                  <TextField
                    fullWidth
                    label="Add Required Skills"
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddSkill())}
                  />
                  <Button
                    variant="outlined"
                    onClick={handleAddSkill}
                    sx={{ whiteSpace: 'nowrap' }}
                  >
                    Add Skill
                  </Button>
                </Box>
                <Box>
                  {skills.map((skill, index) => (
                    <Chip
                      key={index}
                      label={skill}
                      onDelete={() => handleRemoveSkill(skill)}
                      sx={{ m: 0.5 }}
                    />
                  ))}
                </Box>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Job Description"
                  name="description"
                  multiline
                  rows={6}
                  value={formData.description}
                  onChange={handleChange}
                  required
                  placeholder="Describe the job responsibilities, required qualifications, and what makes this opportunity special..."
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Requirements"
                  name="requirements"
                  multiline
                  rows={4}
                  value={formData.requirements}
                  onChange={handleChange}
                  placeholder="List the specific requirements, qualifications, and skills needed..."
                />
              </Grid>
            </Grid>

            <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{ flex: 1 }}
              >
                Post Job
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => navigate(-1)}
                sx={{ flex: 1 }}
              >
                Cancel
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
      <Footer />
    </>
  );
};

export default PostJob;