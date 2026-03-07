import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import characters from "../../data/characters";

function Carousel() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 text-center">
        Characters
      </h2>

      {/* Grid showing ALL characters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {characters.map((char, idx) => (
          <div
            key={idx}
            className="bg-navy p-4 sm:p-6 rounded-2xl shadow-xl flex flex-col items-center text-center"
          >
            {/* Image slider for each character */}
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
              {char.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="w-full h-60 flex items-center justify-center rounded-lg overflow-hidden">
                    <img
                      src={img}
                      alt={`${char.name} ${i + 1}`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <h3 className="text-xl font-bold text-white mt-2">
              {char.name}
            </h3>

            <p className="text-gray-300 text-sm mt-1">
              {char.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;