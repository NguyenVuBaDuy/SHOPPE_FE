
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import image1 from './images/slider-image-6.jpg'
import image2 from './images/slider-image-7.jpg'

const CarouselCustom = () => {
    return (
        <div className='w-[full] h-[450px]'>
            <Swiper
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                slidesPerView={1}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={image1} alt="" className='w-full h-[450px]' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image2} alt="" className='w-full h-[450px]' />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default CarouselCustom