import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ReadStoryUI from './ReadStoryUI';
import ExamSelection from '../components/Exam/ExamSelection';
import Profile from './Profile';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Container from '@mui/material/Container';

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleSidebar}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Dashboard</Typography>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ width: isSidebarOpen ? 240 : 0, transition: 'width 0.3s' }}>
        <List>
          <ListItem button onClick={() => navigate('/dashboard/home')}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={() => navigate('/dashboard/exams')}>
            <ListItemText primary="Exams" />
          </ListItem>
          <ListItem button onClick={() => navigate('/dashboard/stories')}>
            <ListItemText primary="Stories" />
          </ListItem>
          <ListItem button onClick={() => navigate('/dashboard/profile')}>
            <ListItemText primary="Profile" />
          </ListItem>
        </List>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: '64px' }}>
        <Routes>
          <Route path="home" element={<div>Dashboard Home</div>} />
          <Route path="exams" element={<ExamSelection />} />
          <Route path="stories" element={<ReadStoryUI />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default Dashboard;
