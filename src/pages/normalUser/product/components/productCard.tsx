import { Rate } from 'antd';

type data = {
    id?: number,
    name?: string,
    price?: number,
    solded?: number,
    rate?: number,
    image?: string,
}

const ProductCard = ({data} : {data: data}) => {
    return (
        <div className="flex flex-col w-[200px] h-[280px] border-1 border-gray-300 bg-white">
            <div className='flex justify-center items-center w-full min-h-[180px] bg-gray-200'>
                <a>
                    Image
                </a>
            </div>
                <div className='flex flex-col w-full h-full pr-[15px] pl-[15px] pt-[5px] pb-[5px]'>
                <span className='min-h-[30px] h-full leading-[1]'>{data.name}</span>
                <Rate disabled defaultValue={2} style={{ fontSize: 8 }}/>
                <div className='flex items-center justify-between min-h-[42px]'>
                    <span>Price</span>
                    <span>Solded</span>
                </div>
            </div>
        </div>
    );
}
export default ProductCard