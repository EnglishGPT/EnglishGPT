import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate  } from 'react-router-dom';
import ExamSelection from '../components/Exam/ExamSelection';
import Profile from './Profile';
import GenerateStory from '../components/Story/GenerateStory';
import StoryList from '../components/Story/StoryList';
import StoryReader from '../components/Story/StoryReader';
import Relationship from '../components/Relationship/Relationship';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import styles from '../assets/styles/pages/Dashboard.module.css';
import SidebarComponent from '../components/Common/SideBarComponent';
import StudentList from '../components/Students/StudentList';
import { useAuth } from '../context/AuthContext';

import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';


const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(true);
  const [timeElapsed, setTimeElapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navigate = useNavigate();
  
  useEffect(() => {
    if (!user) {
      const timer = setTimeout(() => {
        setTimeElapsed(true);
      }, 10000); // 10 sec
      return () => clearTimeout(timer);
    }
    setLoading(false);
  }, [user]);


  if (loading || !user) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <CircularProgress />
        {timeElapsed && (
          <Button variant="contained" color="primary" onClick={() => navigate('/')}>
            Re-Login
          </Button>
        )}
      </Box>
    );
  }
  else
  {
    return (
      <Box sx={{ display: 'flex' }}>
        <AppBar position="fixed" className={styles.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={toggleSidebar}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" flexGrow={1}>
              Dashboard
            </Typography>
            <Grid container alignItems="center" justifyContent="flex-end">
              <IconButton edge="end" color="inherit" onClick={() => navigate('/dashboard/profile')}>
                <Avatar>
                  <Avatar alt="User" />
                </Avatar>
              </IconButton>
            </Grid>
          </Toolbar>
        </AppBar>
        
        <SidebarComponent isSidebarOpen={isSidebarOpen} userType={user.user_type} />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, marginTop: '64px' }}
          className={styles.mainContent}
          style={{ marginLeft: isSidebarOpen ? 240 : 0 }}
        >
          <Routes>
            { user && <Route path="home" element={<div>Dashboard Home</div>} /> }
            { user && <Route path="exams" element={<ExamSelection />} /> }
            { user && <Route path="stories/generate" element={<GenerateStory />} /> }
            { user && <Route path="stories/read" element={<StoryReader />} /> }
            { user && <Route path="stories/my-stories" element={<StoryList />} /> }
            { user && <Route path="profile" element={<Profile />} /> }
            { user && <Route path="students" element={<StudentList identifier={user.id} />} /> }
            { user && <Route path="relationship" element={<Relationship user={user} />} /> }
          </Routes>
        </Box>
      </Box>
    );
  };
};

export default Dashboard;