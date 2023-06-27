// frontend/src/App.tsx

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';
import Landing from './pages/Landing';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import useProtectedRoute from './components/Common/ProtectedRoute';
import { useAuth } from './context/AuthContext';

const App: React.FC = () => {
  const { isLoggedIn } = useAuth();

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/dashboard/*"
          element={
            <>
              {useProtectedRoute({ isAuthenticated: isLoggedIn })}
              <Dashboard />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              {useProtectedRoute({ isAuthenticated: isLoggedIn })}
              <Profile />
            </>
          }
        />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
