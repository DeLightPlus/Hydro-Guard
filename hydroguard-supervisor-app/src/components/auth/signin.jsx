import { Link } from 'react-router-dom';
import './auth.css';
import  { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple authentication logic (replace with real auth)
    if (username === 'admin@example.com' && password === 'password') {
        handleLogin(); // Call the login function passed as a prop
        console.log('attempting logging in');        
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <div>You don't have an account?<Link to=''>Register</Link></div>
      <form onSubmit={handleSubmit}>

        <label><strong>Username</strong></label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label><strong>Password</strong></label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};


export default Login;
