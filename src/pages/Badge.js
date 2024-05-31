import React from 'react';
import './Sb.css'; 

function Badge({ text, color, imageUrl, hoverText, hoverImageUrl, hoverHeading }) {
  const badgeStyle = {
    backgroundColor: color,
  };

  return (
    <div className="group">
      <div
        className="badge-container relative w-full flex items-center p-[0.1em] px-[0.2em] border border-[#FE9D1C] rounded-[1.50em]"
        style={badgeStyle}
      >
        <img
          src={imageUrl}
          alt="Badge Image"
          className="badge-image bg-black h-6 w-6 rounded-full ml-[2px]"
        />
        <span className="badge inline-block p-[0.25em] px-[0.5em] rounded-[1.50em] text-[12px] sm:text-[14px] font-medium text-[#FE9D1C]">
          {text}
        </span>
        <div className="hover-text invisible grid grid-cols-2 w-[280px] sm:h-[200px] sm:w-[450px] text-black text-justify p-[5px] border border-red-400 bg-white rounded-md absolute z-10 top-[110%] left-[60%] transform -translate-x-1/2 opacity-0 transition-opacity duration-300 group-hover:visible group-hover:opacity-100">
          {/* <div className="grid grid-cols-2 border border-black w-[350px] sm:h-[200px] sm:w-[450px] bg-white rounded-md"> */}
          <div className="p-2">
            <img
              src={hoverImageUrl}
              alt="Hover Image"
              className="w-[200px] h-[185px] rounded-md bg-black"
            />
          </div>
          <div className="p-2">
            <h6 className="text-lg font-semibold">{hoverHeading}</h6>
            <p className="text-xs font-light">{hoverText}</p>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Badge;
