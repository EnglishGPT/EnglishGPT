// frontend/src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';
import Landing from './pages/Landing';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import useProtectedRoute from './components/Common/ProtectedRoute';

const App: React.FC = () => {
  const isAuthenticated = true; // Replace with actual authentication status

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/dashboard/*"
            element={
              <>
                {useProtectedRoute({ isAuthenticated })}
                <Dashboard />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                {useProtectedRoute({ isAuthenticated })}
                <Profile />
              </>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
