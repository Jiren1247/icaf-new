"use client"
import React, { useEffect, useState } from 'react';
import Arrow from '../../public/MagazinePage/Arrow Left.svg'
import Image from 'next/image'

const SlideShow = () => {
  // 假设有 5 张图片
  const images = Array.from({ length: 16 }, (_, i) => `/MagazinePage/Slide/${String(i + 1).padStart(2, '0')}.png`);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    console.log(images);
  }, []);

  // 处理下一个滑块
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // 处理上一个滑块
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-4xl overflow-hidden">
      {/* 图片列表 */}
      <div
        className="flex transition-transform duration-500 px-2 lg:px-12 space-x-2 lg:space-x-10"
        style={{ transform: `translateX(-${currentIndex * 40}%)` }} // 控制滑动位置
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-1/4 lg:w-2/5 lg:mx-2 rounded-lg" // 设置每张图片的宽度
            style={{ flexShrink: 0 }}
          />
        ))}
      </div>
      {/* 左右箭头 */}


      {/* 导航点 */}
      <div className="relative flex flex-row justify-center mt-4 items-center">
        <button
          onClick={prevSlide}
          className=""
        >
          <Image src={Arrow} alt="arrow" className="w-6 h-6 mr-6"></Image>
        </button>

        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${currentIndex === index ? 'bg-navy' : 'bg-gray-300'
              }`}
          />
        ))}

        <button
          onClick={nextSlide}
          className=""
        >
          <Image src={Arrow} alt="arrow" style={{transform: 'scaleX(-1)'}} className="w-6 h-6 ml-6"></Image>
        </button>
      </div>
    </div>
  );
};

export default SlideShow;


