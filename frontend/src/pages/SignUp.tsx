// frontend/src/pages/SignUp.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Perform user registration here, and if successful:
    navigate('/dashboard');
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <br />
        {/* Include any other required information fields */}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
