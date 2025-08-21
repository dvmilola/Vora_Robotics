import React from 'react';

const LoadingIndicator = ({ size = 'medium', color = 'green' }) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  const colorClasses = {
    green: 'border-green-500',
    white: 'border-white',
    blue: 'border-blue-500'
  };

  return (
    <div className={`${sizeClasses[size]} ${colorClasses[color]} border-2 border-t-transparent rounded-full animate-spin`}></div>
  );
};

export default LoadingIndicator;
