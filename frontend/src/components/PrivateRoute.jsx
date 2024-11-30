import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = ({ children, roles = [] }) => {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/login" />;
    }

    if (roles.length && !roles.includes(user.role)) {
        return <Navigate to="/unauthorized" />;
    }

    return children;
};

export default PrivateRoute;