import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const AdminRoute = () => {
    const {user, loading} = useContext(AuthContext)
    // const [isadmin]
    return (
         
    );
};

export default AdminRoute;