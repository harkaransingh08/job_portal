import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Chip,
  Avatar
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { useNavigate } from 'react-router-dom';

const JobCard = ({ job }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Box display="flex" alignItems="center" mb={2}>
          <Avatar
            sx={{ bgcolor: 'primary.main', width: 56, height: 56, mr: 2 }}
          >
            {job.company.charAt(0)}
          </Avatar>
          <Box>
            <Typography variant="h6" gutterBottom>
              {job.title}
            </Typography>
            <Typography color="textSecondary">
              {job.company}
            </Typography>
          </Box>
        </Box>

        <Box mb={2}>
          <Chip
            label={job.jobType}
            size="small"
            sx={{ mr: 1, mb: 1 }}
            color="primary"
            variant="outlined"
          />
          <Chip
            label={job.experienceLevel}
            size="small"
            sx={{ mr: 1, mb: 1 }}
          />
        </Box>

        <Typography variant="body2" color="textSecondary" paragraph>
          {job.description.length > 150 
            ? `${job.description.substring(0, 150)}...` 
            : job.description}
        </Typography>

        <Box display="flex" flexWrap="wrap" gap={2} mt={2}>
          <Box display="flex" alignItems="center">
            <LocationOnIcon fontSize="small" color="action" />
            <Typography variant="body2" ml={1}>
              {job.location}
            </Typography>
          </Box>
          
          <Box display="flex" alignItems="center">
            <AttachMoneyIcon fontSize="small" color="action" />
            <Typography variant="body2" ml={1}>
              {job.salary}
            </Typography>
          </Box>
          
          <Box display="flex" alignItems="center">
            <ScheduleIcon fontSize="small" color="action" />
            <Typography variant="body2" ml={1}>
              {new Date(job.postedDate).toLocaleDateString()}
            </Typography>
          </Box>
        </Box>
      </CardContent>
      
      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button
          size="small"
          variant="outlined"
          onClick={() => navigate(`/job/${job.id}`)}
          sx={{ mr: 1 }}
        >
          View Details
        </Button>
        <Button
          size="small"
          variant="contained"
          onClick={() => navigate('/login')}
        >
          Apply Now
        </Button>
      </CardActions>
    </Card>
  );
};

// Sample job data for testing
JobCard.defaultProps = {
  job: {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp",
    description: "Looking for a skilled Frontend Developer with React experience...",
    location: "Remote",
    salary: "$80,000 - $100,000",
    jobType: "Full-time",
    experienceLevel: "Mid Level",
    postedDate: new Date().toISOString()
  }
};

export default JobCard;