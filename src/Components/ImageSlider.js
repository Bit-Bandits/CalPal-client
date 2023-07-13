import { useState } from "react";
const slideStyles = {
  width: "100%",
  height: "210%",
 
  borderRadius: "30px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};
const rightArrowStyles = {
  position: "absolute",
  top: "100%",
  transform: "translate(0, -50%)",
  right: "0px",
  fontSize: "45px",
  color: "grey",
  zIndex: 1,
  cursor: "pointer",
};
const leftArrowStyles = {
  position: "absolute",
  top: "100%",
  transform: "translate(0, -50%)",
  left: "350px",
  fontSize: "45px",
  color: "grey",
  zIndex: 1,
  cursor: "pointer",
};
const sliderStyles = {
  position: "relative",
  height: "110%",
};
const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};
const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};
const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  console.log(slides[0]);
  const slideStylesWidthBackground = {
    ...slideStyles,
    width: "100%",
    display: "flex",
    justifyContent: "center",
 
  };

  const slideImages = {
    ...slideStyles,
    width: "60%",
    height: "550px",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].src})`,
  };

  const slideText = {
    ...slideStyles,
    width: "40%",
    padding: "20px",
    fontSize: "30px",
    
  };
  return (
    <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <div style={slideStylesWidthBackground}>
        <h1 style={slideText}>{slides[currentIndex].title}</h1>
        <div style={slideImages}></div>
      </div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};
export default ImageSlider;