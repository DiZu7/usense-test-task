import React from 'react';

const ProgressBar = ({ progress, color }) => {
  return (
    <div className="password-checker__progress-bar">
      <div
        className="password-checker__progress-bar-fill"
        style={{
          width: progress,
          backgroundColor: color,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
