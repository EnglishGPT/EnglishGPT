import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Landing: React.FC = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            App Logo
          </Typography>
          <Button component={Link} to="/signup" color="inherit">
            Sign Up
          </Button>
          <Button component={Link} to="/signin" color="inherit">
            Sign In
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="h1" component="h1" gutterBottom>
            English GPT
          </Typography>
          <Typography variant="h6" component="p" gutterBottom>
            人大附中学生这样学习英语
          </Typography>
          <Typography variant="h6" component="p" gutterBottom>
            The state-of-the-art way to study English in the era of AIGC
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
            <Button component={Link} to="/signup" variant="contained">
              Sign Up
            </Button>
            <Button component={Link} to="/signin" variant="outlined">
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Landing;
