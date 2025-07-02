import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const hasPaid = localStorage.getItem('hasPaid');

  if (!hasPaid) {
    return <Navigate to="/payment" replace />;
  }

  return children;
};

export default ProtectedRoute;
