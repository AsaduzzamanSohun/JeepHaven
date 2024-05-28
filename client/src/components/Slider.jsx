import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

import slider1 from '../assets/sliders/slider-1-min.jpg';
import slider2 from '../assets/sliders/slider-2-min.jpg';
import slider3 from '../assets/sliders/slider-3-min.jpg';
import slider4 from '../assets/sliders/slider-4-min.jpg';
import slider5 from '../assets/sliders/slider-5-min.jpg';
import slider6 from '../assets/sliders/slider-6-min.jpg';
import slider7 from '../assets/sliders/slider-7-min.jpg';
import slider8 from '../assets/sliders/slider-8-min.jpg';
import slider9 from '../assets/sliders/slider-9-min.jpg';
import slider10 from '../assets/sliders/slider-10-min.jpg';




const Slider = () => {
    return (
        <div>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide><img src={slider1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slider2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slider3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slider4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slider5} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slider6} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slider7} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slider8} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slider9} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slider10} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;