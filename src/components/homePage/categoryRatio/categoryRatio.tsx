import { JSX } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import './styles/style.css'
import { IoShirtOutline } from "react-icons/io5"
import { Navigation } from 'swiper/modules'


interface ICategory {
    icon: JSX.Element;
    name: string;
}

const CategoryRatio = () => {

    const categories: ICategory[] = [
        {
            icon: <IoShirtOutline />,
            name: "Men's Fashion"
        },
        {
            icon: <IoShirtOutline />,
            name: "Men's Fashion"
        },
        {
            icon: <IoShirtOutline />,
            name: "Men's Fashion"
        },
        {
            icon: <IoShirtOutline />,
            name: "Men's Fashion"
        },
        {
            icon: <IoShirtOutline />,
            name: "Men's Fashion"
        },
        {
            icon: <IoShirtOutline />,
            name: "Men's Fashion"
        },
        {
            icon: <IoShirtOutline />,
            name: "Men's Fashion"
        },
        {
            icon: <IoShirtOutline />,
            name: "Men's Fashion"
        },
        {
            icon: <IoShirtOutline />,
            name: "Men's Fashion"
        },
        {
            icon: <IoShirtOutline />,
            name: "Men's Fashion"
        },
        {
            icon: <IoShirtOutline />,
            name: "Men's Fashion"
        },
        {
            icon: <IoShirtOutline />,
            name: "Men's Fashion"
        },
        {
            icon: <IoShirtOutline />,
            name: "Men's Fashion"
        },
        {
            icon: <IoShirtOutline />,
            name: "Men's Fashion"
        },
        {
            icon: <IoShirtOutline />,
            name: "Men's Fashion"
        },
        {
            icon: <IoShirtOutline />,
            name: "Men's Fashion"
        },
    ]

    return (
        <div className='h-[200px] self-center category-ratio' style={{ width: "calc(100% - 40px)" }}>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                navigation={true}
                allowTouchMove={false}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 100,
                    },
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    700: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    980: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                    1150: {
                        slidesPerView: 6,
                        spaceBetween: 30,
                    },
                    1400: {
                        slidesPerView: 7,
                        spaceBetween: 30,
                    },
                }}
                modules={[Navigation]}
                className="mySwiper"
            >
                {categories.map((category: ICategory, index) => (
                    <SwiperSlide key={index}
                        style={{
                            backgroundColor: "#C4CDF4",
                            display: "flex",
                            fontWeight: "600",
                            borderRadius: "10px"
                        }}
                    >
                        <div className="flex flex-col justify-center items-center">
                            <div className='text-[50px]'>{category.icon}</div>
                            <span className='mt-[20px]'>{category.name}</span>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    );
}


export default CategoryRatio