// frontend/src/components/Common/useProtectedRoute.ts

import React from 'react';
import { Navigate } from 'react-router-dom';

interface UseProtectedRouteProps {
  isAuthenticated: boolean;
}

const useProtectedRoute = ({ isAuthenticated }: UseProtectedRouteProps) => {
  const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/" replace />;
    }
    return <>{children}</>;
  };

  return ProtectedRoute;
};

export default useProtectedRoute;
