import axios from 'axios';

// frontend/src/utils/api.js

let token = localStorage.getItem('token');  // adjust as per your logic of storing token

// const api = axios.create({
//   baseURL: 'http://127.0.0.1:5000',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${token}`
//   },
// });

// // Add an interceptor to handle API errors
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     // Handle errors, such as showing a notification or logging the error
//     console.error('API error:', error);
//     return Promise.reject(error);
//   }
// );

// frontend/src/utils/api.js

const api = axios.create({
  baseURL: 'http://127.0.0.1:5000',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
api.interceptors.request.use((config) => {
  // Get the token from local storage
  const token = localStorage.getItem('token');

  // If the token exists, add it to the headers
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;
}, (error) => {
  // If there's an error, reject the Promise and log to the console
  return Promise.reject(error);
});


export const signUp = async (data: any) => {
  const response = await api.post('/signup', data);
  localStorage.setItem('token', response.data.auth_token);
  return response.data;
};

export const signIn = async (data: any) => {
  const response = await api.post('/signin', data);
  localStorage.setItem('token', response.data.auth_token);
  return response.data;
};

export const getUserProfile = async (userId: string) => {
  console.log(userId);
  token = localStorage.getItem('token');  // refresh the token
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`; // apply the new token
  const response = await api.get(`/user/profile`);
  return response.data;
};



export const generateHashcode = async () => {
  const response = await api.post('/generate-hashcode');
  return response.data;
};

export const sendRelationshipRequest = async (hashcode: string) => {
  const response = await api.post('/relationship-request', { hashcode });
  return response.data;
};

export const getPendingRequests = async () => {
  const response = await api.get('/pending-requests');
  return response.data;
};

export const acceptRequest = async (requestId: string) => {
  const response = await api.post(`/accept-request/${requestId}`);
  return response.data;
};

export const declineRequest = async (requestId: string) => {
  const response = await api.post(`/decline-request/${requestId}`);
  return response.data;
};

export const getRelationships = async (userId: string) => {
  const response = await api.get(`/user/relationships/${userId}`);
  return response.data;
};


// Students
export interface Student {
  id: string;
  name: string;
  picture: string;
  knowledgePower: number;
  homeworkStatus: string;
  classNo: string;
  studentNo: string;
}



// Fake student data
// Add this at the top of the file
const students = Array(15).fill(null).map((_, idx) => ({
  id: `${idx + 1}`,
  name: `Student ${idx + 1}`,
  picture: `https://randomuser.me/api/portraits/thumb/men/${idx + 1}.jpg`, // Random picture
  knowledgePower: Math.floor(Math.random() * 100), // Random number between 0-100
  homeworkStatus: String(Math.random() > 0.5 ? 'Finished' : 'Unfinished'), // Randomly assign finished/unfinished
  classNo: String(Math.floor(Math.random() * 10) + 1), // Random class number between 1-10
  studentNo: String(idx + 1)
}));

// Now modify getStudents
export const getStudents = async (parentOrTeacherId: string) => {
  // We're ignoring parentOrTeacherId for now since we're returning fake data
  // In a real implementation, you'd make an API call like so:
  // const response = await api.get(`/students?parentOrTeacherId=${parentOrTeacherId}`);
  // return response.data;

  // For now, just return the fake data
  return students;
};

// export const getStudents = async (identifier: string): Promise<Student[]> => {
//   const response = await api.get(`/students/${identifier}`);
//   return response.data;
// };

// Add more API functions as needed

export default api;
