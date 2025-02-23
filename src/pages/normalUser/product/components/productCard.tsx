import { Rate } from "antd";

interface data {
    image: string;
    name: string;
    rating: number;
    price: number;
    sold: number;
}

const ProductCard = ({ data }: { data: data }) => {
    return (
        <div className="flex flex-col p-[10px] w-[210px] h-fit shadow-sm">
            <div className="w-full h-[150px] flex justify-center">
                <img src={data.image} alt="" className="w-[150px] h-full" />
            </div>
            <div className="px-[20px]">
                <div className="h-[54px] text-left text-[16px] line-clamp-2 text-ellipsis overflow-hidden">
                    {data.name}
                </div>
                <div className="flex items-center">
                    <Rate
                        allowHalf
                        disabled
                        defaultValue={data.rating}
                        style={{ fontSize: "12px" }}
                    />
                    <div className="text-[12px] ml-[10px] text-[#ccc] mt-[4px]">
                        {data.rating}
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="text-[#D51243]">${data.price}</div>
                    <div className="text-[13px] font-normal">
                        Sold{" "}
                        {data.sold < 1000
                            ? data.sold
                            : `${(data.sold / 1000).toFixed(1)}k`}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProductCard;
