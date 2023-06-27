// frontend/src/pages/Profile.tsx
import React from 'react';
import { Typography, Box, Avatar, Grid, Paper } from '@mui/material';
import { getUserProfile } from '../utils/api';
import { useAuth } from '../context/AuthContext';

const Profile: React.FC = () => {
  const { user } = useAuth();
  const [userData, setUserData] = React.useState<any>(null);

  const fetchUserProfile = React.useCallback(async () => {
    if (user) {
      try {
        const data = await getUserProfile(user.id);
        setUserData(data);
      } catch (error) {
        console.error('Failed to fetch user profile:', error);
      }
    }
  }, [user]);  // user is a dependency for useCallback

  React.useEffect(() => {
    fetchUserProfile();
  }, [fetchUserProfile]);  // fetchUserProfile is now a dependency

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <Box>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <Avatar
              src={userData.profileImage || 'https://via.placeholder.com/200'}
              alt="Profile"
              sx={{ width: 128, height: 128 }}
            />
          </Grid>
          <Grid item xs>
            <Typography variant="h4">
              {userData.firstName} {userData.lastName}
            </Typography>
            <Typography variant="subtitle1">{userData.email}</Typography>
          </Grid>
        </Grid>
      </Paper>

      <Grid container spacing={3}>
        <Grid item xs>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h6">Study Progress:</Typography>
            <Typography>{userData.studyProgress}%</Typography>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h6">Vocabularies Studied:</Typography>
            <Typography>{userData.vocabulariesStudied}</Typography>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h6">Stories Read:</Typography>
            <Typography>{userData.storiesRead}</Typography>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h6">Stories Shared:</Typography>
            <Typography>{userData.storiesShared}</Typography>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h6">Tokens Available:</Typography>
            <Typography>{userData.tokensAvailable}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
