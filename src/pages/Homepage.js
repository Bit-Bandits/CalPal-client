import ImageSlider from "../Components/ImageSlider";
const Homepage = () => {
  const slides = [
    { url: "https://images.pexels.com/photos/1153367/pexels-photo-1153367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "" },
    { url: "https://images.pexels.com/photos/1153372/pexels-photo-1153372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "" },
    { url: "https://images.pexels.com/photos/1153370/pexels-photo-1153370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "" },
    { url: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "" },
    { url: "https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "" },
    { url: "https://images.pexels.com/photos/3026802/pexels-photo-3026802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "" },

  ];
  const containerStyles = {
    width: "500px",
    height: "279px",
    margin: "0 auto",
  };
  return (
    <div>
      <h1 id ="home" >Welcome to Calpal
      

      </h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
        
      </div>
    </div>
  );
};

export default Homepage;
