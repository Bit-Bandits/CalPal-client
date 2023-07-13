import React from "react";
import ImageSlider from "../Components/ImageSlider";

 import Image1 from '../assets/1.jpg';
import Image2 from '../assets/2.jpg';
 import Image3 from '../assets/3.jpeg';


const Homepage = () => {
  const slides = [
    { src: Image1, title: "CalPal, your ultimate companion in the journey towards a healthier lifestyle!" },
    { src: Image2, title: "CalPal is the innovative application that will revolutionize the way you manage your daily caloric intake." },
    { src: Image3, title: "are you ready to embark on a transformative journey towards a fitter, happier lifestyle? "}
  
  ];

  return (

<div className="text-center">
  <h1 className="font-bold text-4xl mb-4 mt-6">
    Welcome to Calpal
  </h1>
  <div className="flex flex-col  items-center">
    <div className="mt-4">
      <ImageSlider slides={slides} />
    </div>
  </div>
</div>
)};

export default Homepage;

