import React, { useState } from 'react';
import './Tooltip.css'; // CSS file for styling

const Tooltip = ({ position, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const getTooltipStyle = () => {
    switch (position) {
      case 'top':
        return { top: '-200%' };
      case 'bottom':
        return { top: '150%' };
      case 'right':
        return { left: '130%', top:'-10%' };
      case 'left':
        return { right: '130%', top:'-10%' };
      default:
        return {};
    }
  };

  return (
    <div className="tooltip-container">
      <button
        className="tooltip-button"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </button>
      {isHovered && (
        <div className={`tooltip ${position}`} style={getTooltipStyle()}>
          Thanks for hovering me I am a tooltip!
        </div>
      )}
    </div>
  );
};

export default Tooltip;
