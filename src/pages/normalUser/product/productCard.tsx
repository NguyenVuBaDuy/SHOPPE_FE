import { Rate } from 'antd';

const ProductCard = () => {
    return (
        <div className="flex flex-col w-[200px] h-[280px] bg-white rounded-[0.5rem]">
            <div className='flex justify-center items-center w-full min-h-[180px] bg-gray-200'>
                <a>
                    IMage
                </a>
            </div>
                <div className='flex flex-col w-full h-full pr-[15px] pl-[15px] pt-[5px] pb-[5px]'>
                <span className='min-h-[30px] h-full leading-[1]'>Product Name agdkfjgaksdgfk</span>
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