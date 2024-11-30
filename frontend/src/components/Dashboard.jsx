import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
    const { user, logout } = useAuth();

    return (
        <div className="dashboard">
            <h2>Welcome {user?.username}</h2>
            <p>Role: {user?.role}</p>
            {user?.role === 'admin' && (
                <div className="admin-panel">
                    <h3>Admin Panel</h3>
                    {/* Admin */}
                </div>
            )}
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Dashboard;