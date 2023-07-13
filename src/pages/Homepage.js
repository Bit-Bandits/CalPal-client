import React from "react";
import ImageSlider from "../Components/ImageSlider";

 import Image1 from '../assets/1.jpg';
import Image2 from '../assets/2.jpg';
 import Image3 from '../assets/3.jpeg';


const Homepage = () => {
  const slides = [
    { src: Image1, title: "CalPal, your ultimate companion in the journey towards a healthier lifestyle! Are you tired of tedious manual tracking and complex calorie calculations? " },
    { src: Image2, title: "CalPal is the innovative application that will revolutionize the way you manage your daily caloric intake" },
    { src: Image3, title: "are you ready to embark on a transformative journey towards a fitter, happier lifestyle? "}
  
  ];

  const containerStyles = {
    width: "100%",
    height: "279px",
  };

  return (
    <div>
      <h1 id="home">Welcome to Calpal</h1>
      <div id="test" style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default Homepage;