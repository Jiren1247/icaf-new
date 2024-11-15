// components/ActualSlideShow.js
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ActualSlideShow = () => {
  const images = Array.from({ length: 15 }, (_, i) => `/images/${String(i + 1).padStart(2, '0')}.jpg`);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={20}
        slidesPerView={3} // 显示三张图片
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 15 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <img src={src} alt={`Slide ${index + 1}`} className="w-full rounded-lg" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ActualSlideShow;
