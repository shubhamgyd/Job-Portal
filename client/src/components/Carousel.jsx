export const Carousel = ({ idx, imageURL, currentSlide }) => {
  return (
    <>
      <div
        className="carousel absolute transition-transform duration-500 w-full h-full"
        style={{ transform: `translateX(${(idx-currentSlide) * 20}%)` }}
      >
        <img src={imageURL} className="bg-no-repeat h-full" />
      </div>
    </>
  );
};
