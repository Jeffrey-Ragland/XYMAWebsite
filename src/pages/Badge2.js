import React, { useState } from 'react';

const Badge = ({ text }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const badgeStyle = {
    backgroundColor: clicked ? '#01285C' : '#B4CEEC',
    color: clicked ? '#ffffff' : '#000000',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '0.8em',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    border: `1px solid ${clicked ? '#01285C' : '#B4CEEC'}`, 
    marginRight: '8px' 
  };

  return (
    <span style={badgeStyle} onClick={handleClick}>
      {text}
    </span>
  );
};

export default Badge;

