import { Button } from "antd"
import BestSellers from "../../../components/homePage/listProducts/listProducts"
import NewProducts from "../../../components/homePage/listProducts/listProducts"
import CarouselCustom from "../../../components/homePage/Carousel/carouselCustom"
import CategoryRatio from "../../../components/homePage/categoryRatio/categoryRatio"
import { useNavigate } from "react-router-dom"

const HomePage = () => {
    const navigate = useNavigate()
    return (
        <div className="overflow-x-hidden font-[Dosis]">

            <CarouselCustom />

            <div className="max-w-[1240px] mx-auto overflow-hidden">
                <div className="mt-[100px] px-[80px] flex flex-col">
                    <div className="flex justify-between py-[10px]">
                        <div className="text-[30px] font-semibold ml-[20px]">Categories</div>
                    </div>
                    <CategoryRatio />
                </div>

                <div className="mt-[100px] px-[80px] flex flex-col">
                    <div className=" justify-between py-[10px] flex items-center mx-[20px]">
                        <div>
                            <div className="text-[30px] font-semibold ">Best Sellers</div>
                            <div className=" text-[#9B9BB4]">Do not miss the current offers until the end of March.</div>
                        </div>
                        <Button
                            style={{
                                borderRadius: "16px",
                                border: "1px solid #B3B9D5",
                                color: "#B3B9D5",
                            }}
                            onClick={() => { navigate('/products?sorter=-sold') }}
                        >View All</Button>
                    </div>
                    <BestSellers />
                </div>

                <div className="my-[100px] px-[80px] flex flex-col">
                    <div className=" justify-between py-[10px] flex items-center mx-[20px]">
                        <div>
                            <div className="text-[30px] font-semibold ">New Products</div>
                            <div className=" text-[#9B9BB4]">New products with updated stocks.</div>
                        </div>
                        <Button
                            style={{
                                borderRadius: "16px",
                                border: "1px solid #B3B9D5",
                                color: "#B3B9D5",
                            }}
                            onClick={() => { navigate('/products?sorter=-createdAt') }}
                        >View All</Button>
                    </div>
                    <NewProducts />
                </div>
            </div>
        </div>
    )
}

export default HomePage