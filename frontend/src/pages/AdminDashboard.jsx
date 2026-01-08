import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Get the token saved during login
    const token = localStorage.getItem('adminToken');

    // 2. If no token, kick user back to login
    if (!token) {
      alert('Please login first');
      navigate('/admin/login');
      return;
    }

    // 3. Fetch data from YOUR specific backend route
    axios.get('http://localhost:5000/api/contact/queries', {
      headers: { 
        // Your middleware expects "Bearer <token>"
        Authorization: `Bearer ${token}` 
      } 
    })
    .then(res => {
      setQueries(res.data);
      setLoading(false);
    })
    .catch(err => {
      console.error("Error fetching queries:", err);
      // If unauthorized (401), force logout
      if (err.response && err.response.status === 401) {
        alert('Session expired. Please login again.');
        localStorage.removeItem('adminToken');
        navigate('/admin/login');
      } else {
        setLoading(false);
      }
    });

  }, [navigate]);


  // --- NEW: DELETE FUNCTION ---
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?")) return;

    try {
      const token = localStorage.getItem('adminToken');
      await axios.delete(`http://localhost:5000/api/contact/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      // Remove from UI immediately without refreshing
      setQueries(queries.filter(q => q._id !== id));
      alert("Message deleted successfully");
    } catch (err) {
      alert("Failed to delete message");
      console.error(err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  if (loading) return <div style={{textAlign:'center', padding:'50px'}}>Loading dashboard...</div>;

  return (
    <div style={{ padding: '40px', paddingTop: '8vw', fontFamily: 'sans-serif', background: '#f4f4f4', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <h1 style={{ color: '#333' }}>Contact Queries ({queries.length})</h1>
          <button onClick={handleLogout} 
            style={{ padding: '12px 24px', background: '#ff4d4d', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
            Logout
          </button>
        </div>

        {/* Table */}
        {queries.length === 0 ? (
          <p style={{ textAlign: 'center', fontSize: '18px', color: '#666' }}>No messages found yet.</p>
        ) : (
          <div style={{ overflowX: 'auto', background: 'white', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead style={{ background: '#222', color: 'white' }}>
                <tr>
                  <th style={{ padding: '15px', textAlign: 'left' }}>Date</th>
                  <th style={{ padding: '15px', textAlign: 'left' }}>Name</th>
                  <th style={{ padding: '15px', textAlign: 'left' }}>Email</th>
                  <th style={{ padding: '15px', textAlign: 'left' }}>Message</th>
                </tr>
              </thead>
              <tbody>
                {queries.map((q, index) => (
                  <tr key={q._id} style={{ borderBottom: '1px solid #eee', background: index % 2 === 0 ? '#fff' : '#f9f9f9' }}>
                    <td style={{ padding: '15px', whiteSpace: 'nowrap' }}>
                      {new Date(q.createdAt).toLocaleDateString()} <br/>
                      <small style={{color:'#888'}}>{new Date(q.createdAt).toLocaleTimeString()}</small>
                    </td>
                    <td style={{ padding: '15px', fontWeight: 'bold' }}>{q.name}</td>
                    <td style={{ padding: '15px' }}>
                      <a href={`mailto:${q.email}`} style={{ color: '#007bff', textDecoration: 'none' }}>{q.email}</a>
                    </td>
                    <td style={{ padding: '15px', maxWidth: '400px', lineHeight: '1.5' }}>{q.message}</td>
                     {/* New Delete Button Cell */}
                    <td style={{ padding: '15px', textAlign: 'center' }}>
                      <button 
                        onClick={() => handleDelete(q._id)}
                        style={{
                          padding: '8px 12px',
                          background: '#dc3545',
                          color: 'white',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontSize: '14px'
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;