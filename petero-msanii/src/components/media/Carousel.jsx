import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

function Carousel({ images = [] }) {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      spaceBetween={10}
      speed={800}
      className="w-full h-60 mb-4"
    >
      {images.map((img, i) => (
        <SwiperSlide key={i}>
          <div className="w-full h-60 flex items-center justify-center rounded-lg overflow-hidden">
            <img
              src={img}
              alt={`slide-${i}`}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;