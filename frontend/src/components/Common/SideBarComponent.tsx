import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book';
import SchoolIcon from '@mui/icons-material/School';
import BackpackIcon from '@mui/icons-material/Backpack';
import AssessmentIcon from '@mui/icons-material/Assessment';
import FaceIcon from '@mui/icons-material/Face';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

import styles from '../../assets/styles/pages/Dashboard.module.css';

interface SidebarComponentProps {
  isSidebarOpen: boolean;
  userType: 'student' | 'parent' | 'teacher' | 'admin';
}

const SidebarComponent: React.FC<SidebarComponentProps> = ({ isSidebarOpen, userType }) => {
  const navigate = useNavigate();
  const [openStories, setOpenStories] = React.useState(false);

  const handleClickStories = () => {
    setOpenStories(!openStories);
  };

  // I am trying to define different components for different user types
  if (userType === "teacher") {
    return (
      <Box component="nav" className={styles.sidebarComponent} sx={{ width: isSidebarOpen ? 240 : 0, transition: 'width 0.3s' }}>
        <List>
          <ListItemButton onClick={() => navigate('/dashboard/home')}>
            {isSidebarOpen && <HomeIcon />}
            {isSidebarOpen && <ListItemText primary="Home" />}
          </ListItemButton>
          <ListItemButton onClick={() => navigate('/dashboard/students')}>
            {isSidebarOpen && <SchoolIcon />}
            {isSidebarOpen && <ListItemText primary="Students" />}
          </ListItemButton>
          <ListItemButton onClick={() => navigate('/dashboard/homework')}>
            {isSidebarOpen && <BackpackIcon />}
            {isSidebarOpen && <ListItemText primary="Homework" />}
          </ListItemButton>
          <ListItemButton onClick={() => navigate('/dashboard/relationship')}>
            {isSidebarOpen && <PersonAddIcon />}
            {isSidebarOpen && <ListItemText primary="Relationship" />}
          </ListItemButton>
        </List>
      </Box>
    );
  }

  if (userType === "student") {
    return (
      <Box component="nav" className={styles.sidebarComponent} sx={{ width: isSidebarOpen ? 240 : 0, transition: 'width 0.3s' }}>
        <List>
          <ListItemButton onClick={() => navigate('/dashboard/home')}>
            {isSidebarOpen && <HomeIcon />}
            {isSidebarOpen && <ListItemText primary="Home" />}
          </ListItemButton>
          <ListItemButton onClick={() => navigate('/dashboard/homework')}>
            {isSidebarOpen && <BackpackIcon />}
            {isSidebarOpen && <ListItemText primary="Homework" />}
          </ListItemButton>
          <ListItemButton onClick={handleClickStories}>
            {isSidebarOpen && <BookIcon />}
            {isSidebarOpen && <ListItemText primary="Stories" />}
            {isSidebarOpen ? (openStories ? <ExpandLess /> : <ExpandMore />) : null}
          </ListItemButton>
          <Collapse in={openStories} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton onClick={() => navigate('/dashboard/stories/generate')}>
                {isSidebarOpen && <ListItemText primary="Generate Story" />}
              </ListItemButton>
              <ListItemButton onClick={() => navigate('/dashboard/stories/read')}>
                {isSidebarOpen && <ListItemText primary="Read Story" />}
              </ListItemButton>
              <ListItemButton onClick={() => navigate('/dashboard/stories/my-stories')}>
                {isSidebarOpen && <ListItemText primary="My Stories" />}
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={() => navigate('/dashboard/exams')}>
            {isSidebarOpen && <AssessmentIcon />}
            {isSidebarOpen && <ListItemText primary="Exams" />}
          </ListItemButton>
          <ListItemButton onClick={() => navigate('/dashboard/game')}>
            {isSidebarOpen && <SmartToyIcon />}
            {isSidebarOpen && <ListItemText primary="Game" />}
          </ListItemButton>
        </List>
        <ListItemButton onClick={() => navigate('/dashboard/relationship')}>
            {isSidebarOpen && <PersonAddIcon />}
            {isSidebarOpen && <ListItemText primary="Relationship" />}
        </ListItemButton>
      </Box>
    );
  };

  if (userType === "parent") {
    return (
      <Box component="nav" className={styles.sidebarComponent} sx={{ width: isSidebarOpen ? 240 : 0, transition: 'width 0.3s' }}>
        <List>
          <ListItemButton onClick={() => navigate('/dashboard/home')}>
            {isSidebarOpen && <HomeIcon />}
            {isSidebarOpen && <ListItemText primary="Home" />}
          </ListItemButton>
          <ListItemButton onClick={() => navigate('/dashboard/students')}>
            {isSidebarOpen && <FaceIcon />}
            {isSidebarOpen && <ListItemText primary="Children" />}
          </ListItemButton>
          <ListItemButton onClick={handleClickStories}>
            {isSidebarOpen && <BookIcon />}
            {isSidebarOpen && <ListItemText primary="Stories" />}
            {isSidebarOpen ? (openStories ? <ExpandLess /> : <ExpandMore />) : null}
          </ListItemButton>
          <Collapse in={openStories} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton onClick={() => navigate('/dashboard/stories/generate')}>
                {isSidebarOpen && <ListItemText primary="Generate Story" />}
              </ListItemButton>
              <ListItemButton onClick={() => navigate('/dashboard/stories/read')}>
                {isSidebarOpen && <ListItemText primary="Read Story" />}
              </ListItemButton>
              <ListItemButton onClick={() => navigate('/dashboard/stories/my-stories')}>
                {isSidebarOpen && <ListItemText primary="My Stories" />}
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={() => navigate('/dashboard/exams')}>
            {isSidebarOpen && <AssessmentIcon />}
            {isSidebarOpen && <ListItemText primary="Exams" />}
          </ListItemButton>
          <ListItemButton onClick={() => navigate('/dashboard/relationship')}>
            {isSidebarOpen && <PersonAddIcon />}
            {isSidebarOpen && <ListItemText primary="Relationship" />}
          </ListItemButton>
        </List>
      </Box>
    );
  };
  
  if (userType === "admin") {
    return (
      <Box component="nav" className={styles.sidebarComponent} sx={{ width: isSidebarOpen ? 240 : 0, transition: 'width 0.3s' }}>
        <List>
          <ListItemButton onClick={() => navigate('/dashboard/home')}>
            {isSidebarOpen && <HomeIcon />}
            {isSidebarOpen && <ListItemText primary="Home" />}
          </ListItemButton>
          <ListItemButton onClick={() => navigate('/dashboard/students')}>
            {isSidebarOpen && <SchoolIcon />}
            {isSidebarOpen && <ListItemText primary="Students" />}
          </ListItemButton>
          <ListItemButton onClick={() => navigate('/dashboard/homework')}>
            {isSidebarOpen && <BackpackIcon />}
            {isSidebarOpen && <ListItemText primary="Homework" />}
          </ListItemButton>
          <ListItemButton onClick={handleClickStories}>
            {isSidebarOpen && <BookIcon />}
            {isSidebarOpen && <ListItemText primary="Stories" />}
            {isSidebarOpen ? (openStories ? <ExpandLess /> : <ExpandMore />) : null}
          </ListItemButton>
          <Collapse in={openStories} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton onClick={() => navigate('/dashboard/stories/generate')}>
                {isSidebarOpen && <ListItemText primary="Generate Story" />}
              </ListItemButton>
              <ListItemButton onClick={() => navigate('/dashboard/stories/read')}>
                {isSidebarOpen && <ListItemText primary="Read Story" />}
              </ListItemButton>
              <ListItemButton onClick={() => navigate('/dashboard/stories/my-stories')}>
                {isSidebarOpen && <ListItemText primary="My Stories" />}
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={() => navigate('/dashboard/exams')}>
            {isSidebarOpen && <AssessmentIcon />}
            {isSidebarOpen && <ListItemText primary="Exams" />}
          </ListItemButton>
          <ListItemButton onClick={() => navigate('/dashboard/game')}>
            {isSidebarOpen && <SmartToyIcon />}
            {isSidebarOpen && <ListItemText primary="Game" />}
          </ListItemButton>
          <ListItemButton onClick={() => navigate('/dashboard/relationship')}>
            {isSidebarOpen && <PersonAddIcon />}
            {isSidebarOpen && <ListItemText primary="Relationship" />}
          </ListItemButton>
        </List>
      </Box>
    );
  };
  
  // Default fall-back
  return (
    <Box component="nav" className={styles.sidebarComponent} sx={{ width: isSidebarOpen ? 240 : 0, transition: 'width 0.3s' }}>
      <List>
        <ListItemButton onClick={() => navigate('/dashboard/home')}>
          {isSidebarOpen && <HomeIcon />}
          {isSidebarOpen && <ListItemText primary="Home" />}
        </ListItemButton>
      </List>
    </Box>
  );
  
};

export default SidebarComponent;
