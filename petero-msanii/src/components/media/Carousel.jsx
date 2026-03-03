import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import characters from "../../data/characters";

function Carousel() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      {/* Section Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 text-center">
        Characters
      </h2>

      {/* Outer Swiper: Scrolls through characters */}
      <Swiper
        spaceBetween={16}  // smaller gap on mobile
        slidesPerView={1}
        loop = {true}
                breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 24 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        {characters.map((char, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-navy p-4 sm:p-6 rounded-2xl shadow-xl flex flex-col items-center text-center">
              
              {/* Inner Swiper: Autoplay only */}
              <Swiper
                modules={[Autoplay]}
                autoplay={{
                  delay: 3000,          
                  disableOnInteraction: false,
                }}
                spaceBetween={10}
                slidesPerView={1}
                speed={800}              
                className="w-full h-56 sm:h-72 md:h-80 lg:h-96 mb-4"
              >
                {char.images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={img}
                      alt={`${char.name} ${i + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Character name and description */}
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-2 sm:mt-3">
                {char.name}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base mt-1">
                {char.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;