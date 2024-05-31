import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const EmployeeSlider = ({ employees }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <Slider {...settings}>
      {employees.map(employee => (
        <div key={employee.id}>
          <img src={employee.image} alt={employee.name} />
          <h3>{employee.name}</h3>
          <p>{employee.designation}</p>
        </div>
      ))}
    </Slider>
  );
};

export default EmployeeSlider;
