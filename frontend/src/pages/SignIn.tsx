import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography, Card, CardContent, Fade } from '@mui/material';
import { signIn } from '../utils/api';
import { useAuth } from '../context/AuthContext';
import '../assets/styles/pages/SignInSignUp.css';

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const { setAuthData } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await signIn({ email, password });
      if (response) {
        const auth_token = response.auth_token;
        const user = response.user;
        setAuthData(auth_token, user);
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Sign in error:', error);
    }
  };

  return (
    <Fade in={true} timeout={500}>
      <Box className="form-container">
        <Card className="form-card">
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Sign In
            </Typography>
            <form onSubmit={handleSubmit}>
              <Box marginBottom={2}>
                <TextField
                  label="Email"
                  type="email"
                  id="email"
                  name="email"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Box>
              <Box marginBottom={2}>
                <TextField
                  label="Password"
                  type="password"
                  id="password"
                  name="password"
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Box>
              <Button type="submit" variant="contained" color="primary">
                Sign In
              </Button>
              <Button
                onClick={() => navigate('/signup')}
                variant="outlined"
                color="primary"
                style={{ marginLeft: '1rem' }}
              >
                Sign Up
              </Button>
            </form>
          </CardContent>
        </Card>
      </Box>
    </Fade>
  );
};

export default SignIn;