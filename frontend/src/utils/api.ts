import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-api-base-url.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add an interceptor to handle API errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors, such as showing a notification or logging the error
    console.error('API error:', error);
    return Promise.reject(error);
  }
);

export const signUp = async (data: any) => {
  const response = await api.post('/signup', data);
  return response.data;
};

export const signIn = async (data: any) => {
  const response = await api.post('/signin', data);
  return response.data;
};

// Add more API functions as needed

export default api;
