import CheckboxList from "./components/checkboxList";
import ProductCard from "./components/productCard";
import { Pagination } from "antd";
import { useEffect, useState } from "react";
import image from "./images/image.png";

const pageSize = 16;

const items = [
    {
        key: "1",
        label: "Option 1",
    },
    {
        key: "2",
        label: "Option 2",
    },
    {
        key: "3",
        label: "Option 3",
    },
    {
        key: "sub1",
        label: "Navigation One",
        children: [
            {
                key: "4",
                label: "Option 4",
                from: "sub1",
            },
            {
                key: "5",
                label: "Option 5",
                from: "sub1",
            },
            {
                key: "6",
                label: "Option 6",
                from: "sub1",
            },
            {
                key: "7",
                label: "Option 7",
                from: "sub1",
            },
        ],
    },
    {
        key: "sub2",
        label: "Navigation Two",
        children: [
            {
                key: "8",
                label: "Option 8",
                from: "sub2",
            },
            {
                key: "9",
                label: "Option 9",
                from: "sub2",
            },
            {
                key: "10",
                label: "Option 10",
                from: "sub2",
            },
        ],
    },
    {
        key: "sub3",
        label: "Navigation Three",
        children: [
            {
                key: "11",
                label: "Option 11",
                from: "sub3",
            },
            {
                key: "12",
                label: "Option 12",
                from: "sub3",
            },
            {
                key: "13",
                label: "Option 13",
                from: "sub3",
            },
        ],
    },
    {
        key: "sub4",
        label: "Navigation Four",
        children: [
            {
                key: "14",
                label: "Option 14",
                from: "sub4",
            },
            {
                key: "15",
                label: "Option 15",
                from: "sub4",
            },
            {
                key: "16",
                label: "Option 16",
                from: "sub4",
            },
        ],
    },
];

interface IProduct {
    image: string;
    name: string;
    rating: number;
    price: number;
    sold: number;
}

const data: IProduct[] = [
    {
        image: image,
        name: "Unisex Crew Neck Short Sleeve-Shirt",
        rating: 5,
        price: 100,
        sold: 100,
    },
    {
        image: image,
        name: "Unisex Crew Neck Short Sleeve-Shirt Unisex Crew Neck Short Sleeve-Shirt",
        rating: 5,
        price: 100,
        sold: 1234,
    },
    {
        image: image,
        name: "Unisex Crew Neck Short Sleeve-Shirt",
        rating: 5,
        price: 100,
        sold: 100,
    },
    {
        image: image,
        name: "Unisex Crew Neck Short Sleeve-Shirt",
        rating: 5,
        price: 100,
        sold: 100,
    },
    {
        image: image,
        name: "Unisex Crew Neck Short Sleeve-Shirt",
        rating: 5,
        price: 100,
        sold: 100,
    },
    {
        image: image,
        name: "Unisex Crew Neck Short Sleeve-Shirt",
        rating: 5,
        price: 100,
        sold: 100,
    },
    {
        image: image,
        name: "Unisex Crew Neck Short Sleeve-Shirt",
        rating: 5,
        price: 100,
        sold: 100,
    },
    {
        image: image,
        name: "Unisex Crew Neck Short Sleeve-Shirt",
        rating: 5,
        price: 100,
        sold: 100,
    },
    {
        image: image,
        name: "Unisex Crew Neck Short Sleeve-Shirt",
        rating: 5,
        price: 100,
        sold: 100,
    },
    {
        image: image,
        name: "Unisex Crew Neck Short Sleeve-Shirt",
        rating: 5,
        price: 100,
        sold: 100,
    },
    {
        image: image,
        name: "Unisex Crew Neck Short Sleeve-Shirt Unisex Crew Neck Short Sleeve-Shirt",
        rating: 5,
        price: 100,
        sold: 1234,
    },
    {
        image: image,
        name: "Unisex Crew Neck Short Sleeve-Shirt",
        rating: 5,
        price: 100,
        sold: 100,
    },
    {
        image: image,
        name: "Unisex Crew Neck Short Sleeve-Shirt",
        rating: 5,
        price: 100,
        sold: 100,
    },
    {
        image: image,
        name: "Unisex Crew Neck Short Sleeve-Shirt",
        rating: 5,
        price: 100,
        sold: 100,
    },
    {
        image: image,
        name: "Unisex Crew Neck Short Sleeve-Shirt",
        rating: 5,
        price: 100,
        sold: 100,
    },
    {
        image: image,
        name: "Unisex Crew Neck Short Sleeve-Shirt",
        rating: 5,
        price: 100,
        sold: 100,
    },
    {
        image: image,
        name: "Unisex Crew Neck Short Sleeve-Shirt",
        rating: 5,
        price: 100,
        sold: 100,
    },
    {
        image: image,
        name: "Unisex Crew Neck Short Sleeve-Shirt",
        rating: 5,
        price: 100,
        sold: 100,
    },
    {
        image: image,
        name: "Unisex Crew Neck Short Sleeve-Shirt",
        rating: 5,
        price: 100,
        sold: 100,
    },
    {
        image: image,
        name: "Unisex Crew Neck Short Sleeve-Shirt Unisex Crew Neck Short Sleeve-Shirt",
        rating: 5,
        price: 100,
        sold: 1234,
    },
    {
        image: image,
        name: "Unisex Crew Neck Short Sleeve-Shirt",
        rating: 5,
        price: 100,
        sold: 100,
    },
    {
        image: image,
        name: "Unisex Crew Neck Short Sleeve-Shirt",
        rating: 5,
        price: 100,
        sold: 100,
    },
    {
        image: image,
        name: "Unisex Crew Neck Short Sleeve-Shirt",
        rating: 5,
        price: 100,
        sold: 100,
    },
    {
        image: image,
        name: "Unisex Crew Neck Short Sleeve-Shirt",
        rating: 5,
        price: 100,
        sold: 100,
    },
    {
        image: image,
        name: "Unisex Crew Neck Short Sleeve-Shirt",
        rating: 5,
        price: 100,
        sold: 100,
    },
    {
        image: image,
        name: "Unisex Crew Neck Short Sleeve-Shirt",
        rating: 5,
        price: 100,
        sold: 100,
    },
    {
        image: image,
        name: "Unisex Crew Neck Short Sleeve-Shirt",
        rating: 5,
        price: 100,
        sold: 100,
    },
    {
        image: image,
        name: "Unisex Crew Neck Short Sleeve-Shirt",
        rating: 5,
        price: 100,
        sold: 100,
    },
    {
        image: image,
        name: "Unisex Crew Neck Short Sleeve-Shirt Unisex Crew Neck Short Sleeve-Shirt",
        rating: 5,
        price: 100,
        sold: 1234,
    },
    {
        image: image,
        name: "Unisex Crew Neck Short Sleeve-Shirt",
        rating: 5,
        price: 100,
        sold: 100,
    },
    {
        image: image,
        name: "Unisex Crew Neck Short Sleeve-Shirt",
        rating: 5,
        price: 100,
        sold: 100,
    },
    {
        image: image,
        name: "Unisex Crew Neck Short Sleeve-Shirt",
        rating: 5,
        price: 100,
        sold: 100,
    },
    {
        image: image,
        name: "Unisex Crew Neck Short Sleeve-Shirt",
        rating: 5,
        price: 100,
        sold: 100,
    },
    {
        image: image,
        name: "Unisex Crew Neck Short Sleeve-Shirt",
        rating: 5,
        price: 100,
        sold: 100,
    },
    {
        image: image,
        name: "Unisex Crew Neck Short Sleeve-Shirt",
        rating: 5,
        price: 100,
        sold: 100,
    },
    {
        image: image,
        name: "Unisex Crew Neck Short Sleeve-Shirt",
        rating: 5,
        price: 100,
        sold: 100,
    },
    {
        image: image,
        name: "Unisex Crew Neck Short Sleeve-Shirt",
        rating: 5,
        price: 100,
        sold: 100,
    },
    {
        image: image,
        name: "Unisex Crew Neck Short Sleeve-Shirt Unisex Crew Neck Short Sleeve-Shirt",
        rating: 5,
        price: 100,
        sold: 1234,
    },
    {
        image: image,
        name: "Unisex Crew Neck Short Sleeve-Shirt",
        rating: 5,
        price: 100,
        sold: 100,
    },
    {
        image: image,
        name: "Unisex Crew Neck Short Sleeve-Shirt",
        rating: 5,
        price: 100,
        sold: 100,
    },
    {
        image: image,
        name: "Unisex Crew Neck Short Sleeve-Shirt",
        rating: 5,
        price: 100,
        sold: 100,
    },
    {
        image: image,
        name: "Unisex Crew Neck Short Sleeve-Shirt",
        rating: 5,
        price: 100,
        sold: 100,
    },
    {
        image: image,
        name: "Unisex Crew Neck Short Sleeve-Shirt",
        rating: 5,
        price: 100,
        sold: 100,
    },
    {
        image: image,
        name: "Unisex Crew Neck Short Sleeve-Shirt",
        rating: 5,
        price: 100,
        sold: 100,
    },
    {
        image: image,
        name: "Unisex Crew Neck Short Sleeve-Shirt",
        rating: 5,
        price: 100,
        sold: 100,
    },
];

const Product = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [currentData, setCurrentData] = useState<typeof data>([]);

    useEffect(() => {
        const start = (currentPage - 1) * pageSize;
        const end = start + pageSize;
        setCurrentData(data.slice(start, end));
    }, [currentPage]);

    return (
        <div className="w-full h-full flex justify-center p-[30px] bg-[#F2F5FF] gap-[10px]">
            <CheckboxList items={items} />
            <div className="w-full h-full flex flex-col items-center gap-[10px]">
                <div className="w-fit h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-white rounded-[0.5rem] ">
                    {currentData.map((product) => (
                        <ProductCard data={product} />
                    ))}
                </div>
                <Pagination
                    defaultCurrent={1}
                    total={data.length}
                    pageSize={pageSize}
                    showQuickJumper
                    showSizeChanger={false}
                    onChange={(page) => setCurrentPage(page)}
                />
            </div>
        </div>
    );
};

export default Product;
