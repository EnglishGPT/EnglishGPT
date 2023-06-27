import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Select, MenuItem, FormControl, InputLabel, TextField, Button, Box, Typography, Card, CardContent, Fade } from '@mui/material';
import { signUp } from '../utils/api';
import { useAuth } from '../context/AuthContext';
import '../assets/styles/pages/SignInSignUp.css';

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const { setAuthData } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState<'student' | 'parent' | 'teacher'>('student');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await signUp({ email, password, type: userType });
      setAuthData(response.auth_token, response.user);
      navigate('/dashboard');
    } catch (error) {
      console.error('Sign up error:', error);
    }
  };

  return (
    <Fade in={true} timeout={500}>
      <Box className="form-container">
        <Card className="form-card">
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Sign Up
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
              <Box marginBottom={2}>
                <FormControl fullWidth>
                  <InputLabel id="type-label">User Type</InputLabel>
                  <Select
                    labelId="type-label"
                    id="type"
                    value={userType}
                    onChange={(e) => setUserType(e.target.value as 'student' | 'parent' | 'teacher')}
                  >
                    <MenuItem value={'student'}>Student</MenuItem>
                    <MenuItem value={'parent'}>Parent</MenuItem>
                    <MenuItem value={'teacher'}>Teacher</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              {/* Include any other required information fields */}
              <Button type="submit" variant="contained" color="primary">
                Sign Up
              </Button>
            </form>
          </CardContent>
        </Card>
      </Box>
    </Fade>
  );
};

export default SignUp;
