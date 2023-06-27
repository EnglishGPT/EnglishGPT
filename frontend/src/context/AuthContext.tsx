import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextData {
  isLoggedIn: boolean;
  authToken: string | null;
  user: User | null;
  setAuthData: (token: string, user: User) => void;
  clearAuthData: () => void;
}

interface User {
  id: string;
  user_type: 'student' | 'parent' | 'teacher' | 'admin';
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    const storedUser = localStorage.getItem('user');

    if (storedToken && storedToken !== "undefined") {
      setAuthToken(storedToken);
    }

    if (storedUser && storedUser !== "undefined") {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const setAuthData = (token: string, user: User) => {
    localStorage.setItem('authToken', token);
    localStorage.setItem('user', JSON.stringify(user));
    setAuthToken(token);
    setUser(user);
  };

  const clearAuthData = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    setAuthToken(null);
    setUser(null);
  };

  const isLoggedIn = authToken !== null;

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, authToken, user, setAuthData, clearAuthData }}
    >
      {children}
    </AuthContext.Provider>
  );
};


export { AuthProvider, useAuth };
