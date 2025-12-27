import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Chip,
  Stack,
  Avatar,
  IconButton,
  Tooltip,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  LocationOn,
  AttachMoney,
  Schedule,
  Star,
  Bolt,
  BookmarkBorder,
  Bookmark,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const EnhancedJobCard = ({ job }) => {
  const navigate = useNavigate();
  const [saved, setSaved] = React.useState(false);

  const handleSaveJob = () => {
    setSaved(!saved);
    toast.success(saved ? 'Job removed from saved' : 'Job saved!');
  };

  const handleApply = () => {
    if (!localStorage.getItem('token')) {
      toast.error('Please login to apply');
      navigate('/login');
      return;
    }
    toast.success('Application submitted!');
  };

  return (
    <Card
      component={motion.div}
      whileHover={{ y: -8 }}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        border: saved ? '2px solid' : '1px solid',
        borderColor: saved ? 'primary.main' : 'divider',
      }}
    >
      {job.isFeatured && (
        <Box
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            bgcolor: 'warning.main',
            color: 'white',
            px: 1.5,
            py: 0.5,
            borderRadius: 1,
            fontSize: '0.75rem',
            fontWeight: 600,
          }}
        >
          FEATURED
        </Box>
      )}

      {job.isUrgent && (
        <Box
          sx={{
            position: 'absolute',
            top: 16,
            left: 16,
            bgcolor: 'error.main',
            color: 'white',
            px: 1.5,
            py: 0.5,
            borderRadius: 1,
            fontSize: '0.75rem',
            fontWeight: 600,
          }}
        >
          URGENT
        </Box>
      )}

      <CardContent sx={{ p: 3, flexGrow: 1 }}>
        <Box display="flex" alignItems="flex-start" gap={2} mb={2}>
          <Avatar
            src={job.logo}
            sx={{
              width: 56,
              height: 56,
              bgcolor: 'primary.light',
              color: 'primary.main',
              fontSize: '1.5rem',
            }}
          >
            {job.company.charAt(0)}
          </Avatar>
          <Box flex={1}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              {job.title}
            </Typography>
            <Typography color="primary.main" fontWeight={500}>
              {job.company}
            </Typography>
          </Box>
          <Tooltip title={saved ? 'Remove from saved' : 'Save job'}>
            <IconButton onClick={handleSaveJob} size="small">
              {saved ? (
                <Bookmark sx={{ color: 'primary.main' }} />
              ) : (
                <BookmarkBorder />
              )}
            </IconButton>
          </Tooltip>
        </Box>

        <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
          {job.skills?.slice(0, 3).map((skill, index) => (
            <Chip
              key={index}
              label={skill}
              size="small"
              sx={{ mb: 1, bgcolor: 'primary.50', color: 'primary.main' }}
            />
          ))}
          {job.skills?.length > 3 && (
            <Chip
              label={`+${job.skills.length - 3}`}
              size="small"
              sx={{ mb: 1 }}
            />
          )}
        </Stack>

        <Stack spacing={1.5} mb={3}>
          <Box display="flex" alignItems="center" gap={1}>
            <LocationOn fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              {job.location}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <AttachMoney fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              {job.salary}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <Schedule fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              {job.posted}
            </Typography>
          </Box>
        </Stack>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt="auto"
        >
          <Chip
            label={job.experience}
            size="small"
            variant="outlined"
            sx={{ borderColor: 'primary.main', color: 'primary.main' }}
          />
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
          >
            <Star fontSize="small" sx={{ color: 'warning.main' }} />
            4.8 • 12 reviews
          </Typography>
        </Box>
      </CardContent>

      <Box sx={{ p: 3, pt: 0 }}>
        <Button
          fullWidth
          variant="contained"
          onClick={handleApply}
          startIcon={<Bolt />}
          sx={{
            bgcolor: 'primary.main',
            '&:hover': {
              bgcolor: 'primary.dark',
            },
          }}
        >
          Apply Now
        </Button>
      </Box>
    </Card>
  );
};

export default EnhancedJobCard;