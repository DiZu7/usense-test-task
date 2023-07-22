import React from 'react';

interface ProgressBarProps {
  progress: string;
  color: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, color }) => {
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
