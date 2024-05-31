import React from 'react';
function CircleComponent() {
  return (
    <div className="relative w-full h-[6px] overflow-hidden flex justify-center items-center">
      <div className="absolute bottom-0 w-4 h-8 rounded-full bg-orange-400"></div>
    </div>
  );
}

export default CircleComponent;
