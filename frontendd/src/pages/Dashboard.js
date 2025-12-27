import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Chip,
  Avatar,
  LinearProgress
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WorkIcon from '@mui/icons-material/Work';
import PersonIcon from '@mui/icons-material/Person';
import BusinessIcon from '@mui/icons-material/Business';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EventIcon from '@mui/icons-material/Event';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';
import ScheduleIcon from '@mui/icons-material/Schedule';

const Dashboard = () => {
  const [tabValue, setTabValue] = useState(0);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Get user from localStorage (mock data for demo)
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const stats = [
    { label: 'Applied Jobs', value: '12', icon: <WorkIcon />, color: 'primary' },
    { label: 'Profile Views', value: '48', icon: <PersonIcon />, color: 'secondary' },
    { label: 'Interviews', value: '3', icon: <BusinessIcon />, color: 'success' },
    { label: 'Profile Score', value: '85%', icon: <TrendingUpIcon />, color: 'warning' }
  ];

  const recentApplications = [
    { id: 1, title: 'Frontend Developer', company: 'Google', status: 'Pending', date: '2024-01-15' },
    { id: 2, title: 'React Developer', company: 'Microsoft', status: 'Reviewed', date: '2024-01-14' },
    { id: 3, title: 'Full Stack Engineer', company: 'Amazon', status: 'Shortlisted', date: '2024-01-12' },
    { id: 4, title: 'UI/UX Designer', company: 'Adobe', status: 'Rejected', date: '2024-01-10' }
  ];

  const notifications = [
    { id: 1, message: 'Google viewed your profile', time: '2 hours ago' },
    { id: 2, message: 'Interview scheduled with Microsoft', time: '1 day ago' },
    { id: 3, message: 'New job matches your profile', time: '2 days ago' }
  ];

  const getStatusChip = (status) => {
    const statusColors = {
      Pending: 'warning',
      Reviewed: 'info',
      Shortlisted: 'success',
      Rejected: 'error'
    };
    
    return (
      <Chip
        label={status}
        color={statusColors[status] || 'default'}
        size="small"
      />
    );
  };

  if (!user) return <LinearProgress />;

  return (
    <>
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 4, mb: 8 }}>
        {/* Welcome Section */}
        <Paper sx={{ p: 3, mb: 4, bgcolor: 'primary.main', color: 'white' }}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box>
              <Typography variant="h4" gutterBottom>
                Welcome back, {user.name}!
              </Typography>
              <Typography variant="body1">
                Here's what's happening with your job search today.
              </Typography>
            </Box>
            <Avatar sx={{ width: 80, height: 80, bgcolor: 'secondary.main' }}>
              {user.name.charAt(0)}
            </Avatar>
          </Box>
        </Paper>

        {/* Stats Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card>
                <CardContent>
                  <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Box>
                      <Typography color="textSecondary" gutterBottom>
                        {stat.label}
                      </Typography>
                      <Typography variant="h4">
                        {stat.value}
                      </Typography>
                    </Box>
                    <Box sx={{ color: `${stat.color}.main` }}>
                      {stat.icon}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Main Content */}
        <Grid container spacing={3}>
          {/* Left Column */}
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 2, mb: 3 }}>
              <Tabs value={tabValue} onChange={handleTabChange}>
                <Tab label="Applications" />
                <Tab label="Saved Jobs" />
                <Tab label="Profile" />
              </Tabs>
              
              {tabValue === 0 && (
                <Box sx={{ mt: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Recent Applications
                  </Typography>
                  <List>
                    {recentApplications.map((app) => (
                      <ListItem
                        key={app.id}
                        secondaryAction={getStatusChip(app.status)}
                        sx={{ borderBottom: '1px solid #eee' }}
                      >
                        <ListItemIcon>
                          <WorkIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText
                          primary={app.title}
                          secondary={`${app.company} • Applied on ${app.date}`}
                        />
                      </ListItem>
                    ))}
                  </List>
                  <Box textAlign="center" mt={2}>
                    <Button variant="outlined" onClick={() => navigate('/jobs')}>
                      View All Applications
                    </Button>
                  </Box>
                </Box>
              )}
            </Paper>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={4}>
            {/* Notifications */}
            <Paper sx={{ p: 2, mb: 3 }}>
              <Box display="flex" alignItems="center" mb={2}>
                <NotificationsIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">Notifications</Typography>
              </Box>
              <List>
                {notifications.map((notif) => (
                  <ListItem key={notif.id} sx={{ py: 1 }}>
                    <ListItemText
                      primary={notif.message}
                      secondary={notif.time}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>

            {/* Profile Completion */}
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Profile Completion
              </Typography>
              <LinearProgress 
                variant="determinate" 
                value={85} 
                sx={{ height: 10, borderRadius: 5, mb: 2 }}
              />
              <Typography variant="body2" color="textSecondary" gutterBottom>
                85% Complete
              </Typography>
              <Button 
                fullWidth 
                variant="contained" 
                onClick={() => navigate('/profile')}
              >
                Complete Profile
              </Button>
            </Paper>
          </Grid>
        </Grid>

        {/* Quick Actions */}
        <Grid container spacing={2} sx={{ mt: 3 }}>
          <Grid item xs={6} md={3}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<WorkIcon />}
              onClick={() => navigate('/jobs')}
            >
              Find Jobs
            </Button>
          </Grid>
          <Grid item xs={6} md={3}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<BusinessIcon />}
              onClick={() => navigate('/companies')}
            >
              Companies
            </Button>
          </Grid>
          <Grid item xs={6} md={3}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<EventIcon />}
              onClick={() => navigate('/interviews')}
            >
              Interviews
            </Button>
          </Grid>
          <Grid item xs={6} md={3}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<PersonIcon />}
              onClick={() => navigate('/profile')}
            >
              Edit Profile
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Dashboard;