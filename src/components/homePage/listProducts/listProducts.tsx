import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Navigation } from 'swiper/modules'
import image from './images/image.png'
import './styles/style.css'
import { Rate } from 'antd'


interface IProduct {
    image: string,
    name: string,
    rating: number,
    price: number,
    sold: number
}

const ListProducts = () => {

    const products: IProduct[] = [
        {
            image: image,
            name: "Unisex Crew Neck Short Sleeve-Shirt",
            rating: 5,
            price: 100,
            sold: 100
        },
        {
            image: image,
            name: "Unisex Crew Neck Short Sleeve-Shirt Unisex Crew Neck Short Sleeve-Shirt",
            rating: 5,
            price: 100,
            sold: 1234
        },
        {
            image: image,
            name: "Unisex Crew Neck Short Sleeve-Shirt",
            rating: 5,
            price: 100,
            sold: 100
        },
        {
            image: image,
            name: "Unisex Crew Neck Short Sleeve-Shirt",
            rating: 5,
            price: 100,
            sold: 100
        },
        {
            image: image,
            name: "Unisex Crew Neck Short Sleeve-Shirt",
            rating: 5,
            price: 100,
            sold: 100
        },
        {
            image: image,
            name: "Unisex Crew Neck Short Sleeve-Shirt",
            rating: 5,
            price: 100,
            sold: 100
        },
        {
            image: image,
            name: "Unisex Crew Neck Short Sleeve-Shirt",
            rating: 5,
            price: 100,
            sold: 100
        },
        {
            image: image,
            name: "Unisex Crew Neck Short Sleeve-Shirt",
            rating: 5,
            price: 100,
            sold: 100
        },
        {
            image: image,
            name: "Unisex Crew Neck Short Sleeve-Shirt",
            rating: 5,
            price: 100,
            sold: 100
        },
    ]

    return (
        <div className='self-center list-products ' style={{ width: "calc(100% - 40px)" }}>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                navigation={true}
                allowTouchMove={false}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    750: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1000: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                    },
                    1400: {
                        slidesPerView: 5,
                        spaceBetween: 15,
                    },
                    1600: {
                        slidesPerView: 6,
                        spaceBetween: 15,
                    },
                }}
                modules={[Navigation]}
                className="bestSeller"
            >
                {products.map((product: IProduct, index) => (
                    <SwiperSlide key={index}
                        style={{
                            backgroundColor: "#fff",
                            display: "flex",
                            fontWeight: "600",
                            borderRadius: "10px",
                            border: "1px solid #ccc",
                            height: "300px"
                        }}
                    >
                        <div className="flex flex-col p-[10px] ">
                            <div className='w-full h-[150px] flex justify-center'>
                                <img src={product.image} alt="" className='w-[150px] h-full' />
                            </div>
                            <div className='px-[20px]'>
                                <div className='h-[54px] text-left text-[16px] line-clamp-2 text-ellipsis overflow-hidden'>{product.name}</div>
                                <div className='flex items-center'>
                                    <Rate allowHalf disabled defaultValue={product.rating}
                                        style={{ fontSize: "12px" }} />
                                    <div className='text-[12px] ml-[10px] text-[#ccc] mt-[4px]'>{product.rating}</div>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <div className='text-[#D51243]'>${product.price}</div>
                                    <div className='text-[13px] font-normal'>Sold {product.sold < 1000 ? product.sold : `${(product.sold / 1000).toFixed(1)}k`}</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div >
    );
}


export default ListProducts