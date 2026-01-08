// src/pages/AdminLogin.jsx
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const AdminLogin = () => {
  const [cred, setCred] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const navigate = useNavigate(); // Hook for navigation

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // FIX: Use the full backend URL (http://localhost:5000)
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        username: cred.username.trim(),
        password: cred.password,
      });

      // Success: Save token
      localStorage.setItem('adminToken', res.data.token);
      
      // Redirect to dashboard using React Router instead of full page reload
      navigate('/admin/dashboard'); 
      
    } catch (err) {
      console.error("Login Error:", err);
      // specific error message handling
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('Server connection failed. Is the backend running?');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', background: '#000' }}>
      <div style={{ background: 'white', padding: '50px', borderRadius: '16px', width: '420px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#000' }}>Admin Login</h2>

        <form onSubmit={login}>
          <input
            type="text"
            placeholder="Username"
            value={cred.username}
            onChange={(e) => setCred({ ...cred, username: e.target.value })}
            style={{ width: '100%', padding: '15px', marginBottom: '15px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '16px' }}
            required
            autoFocus
          />
          <input
            type="password"
            placeholder="Password"
            value={cred.password}
            onChange={(e) => setCred({ ...cred, password: e.target.value })}
            style={{ width: '100%', padding: '15px', marginBottom: '20px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '16px' }}
            required
          />

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '15px',
              background: '#000',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.7 : 1
            }}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        {error && <p style={{ color: 'red', textAlign: 'center', marginTop: '15px', fontWeight: 'bold' }}>{error}</p>}

        <p style={{ textAlign: 'center', marginTop: '20px', color: '#666', fontSize: '14px' }}>
          Use the credentials you created in Postman.
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;