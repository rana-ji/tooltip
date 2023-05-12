import React, { useState } from 'react';
import './Tooltip.css'; // CSS file for styling

const Tooltip = ({ position, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Event handler when mouse enters the button
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Event handler when mouse leaves the button
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Function to calculate the style for the tooltip based on position
  const getTooltipStyle = () => {
    switch (position) {
      case 'top':
        return { top: '-200%' };
      case 'bottom':
        return { top: '150%' };
      case 'right':
        return { left: '130%', top: '-10%' };
      case 'left':
        return { right: '130%', top: '-10%' };
      default:
        return {};
    }
  };

  return (
    <div className="tooltip-container">
      {/* Button that triggers the tooltip */}
      <button
        className="tooltip-button"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </button>
      {/* Tooltip element */}
      {isHovered && (
        <div className={`tooltip ${position}`} style={getTooltipStyle()}>
          Thanks for hovering me! I am a tooltip!
        </div>
      )}
    </div>
  );
};

export default Tooltip;
