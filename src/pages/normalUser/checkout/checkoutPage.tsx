import TextArea from "antd/es/input/TextArea";
import { GoPackageDependents } from "react-icons/go";
import { faCreditCard, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { FaLocationDot } from "react-icons/fa6";
import { useReducer, useState } from "react";
import {
    DataType,
    StateType,
    ActionType,
    ShippingMethodType,
    PaymentMethodType,
} from "../cart/types";
import Bill from "../cart/bill";
import { EditOutlined } from "@ant-design/icons";
import ModalAddress from "./modalAddress";

const data: DataType[] = [
    {
        id: "1",
        name: "Iphone 15 Pro Max",
        price: 500000,
        quantity: 3,
    },
    {
        id: "2",
        name: "Iphone 12 Pro Max",
        price: 500000,
        quantity: 3,
    },
    {
        id: "3",
        name: "Iphone 11 Pro Max",
        price: 500000,
        quantity: 3,
    },
    {
        id: "4",
        name: "Iphone 10 Pro Max",
        price: 500000,
        quantity: 3,
    },
    {
        id: "5",
        name: "Iphone 9 Pro Max",
        price: 500000,
        quantity: 3,
    },
    {
        id: "6",
        name: "Iphone 8 Pro Max",
        price: 500000,
        quantity: 3,
    },
    {
        id: "7",
        name: "Iphone 7 Pro Max",
        price: 500000,
        quantity: 3,
    },
    {
        id: "8",
        name: "Iphone 6 Pro Max",
        price: 500000,
        quantity: 3,
    },
    {
        id: "9",
        name: "Iphone 5 Pro Max",
        price: 500000,
        quantity: 3,
    },
];

const shipMethod: ShippingMethodType[] = [
    {
        id: "1",
        name: "Tiết kiệm",
    },
    {
        id: "2",
        name: "Nhanh",
    },
    {
        id: "3",
        name: "Hỏa tốc",
    }
];

const payMethod: PaymentMethodType[] = [
    {
        id: "1",
        type: faMoneyBill,
        name: "Thanh toán khi nhận hàng",
    },
    {
        id: "2",
        type: faCreditCard,
        name: "Chuyển khoản",
    },
];

const initialState: StateType = {
    selectAll: false,
    selectedItems: [],
    products: data,
    shippingMethod: shipMethod[1],
    paymentMethod: payMethod[1],
};

const reducer = (state: typeof initialState, action: ActionType) => {
    switch (action.type) {
        case "SELECT_ITEM":
            return {
                ...state,
                selectedItems: [...state.selectedItems, action.payload],
            };
        case "REMOVE_ITEM":
            if (state.selectAll) {
                return {
                    ...state,
                    selectAll: false,
                    selectedItems: state.selectedItems.filter(
                        (item) => item !== action.payload
                    ),
                };
            } else {
                return {
                    ...state,
                    selectedItems: state.selectedItems.filter(
                        (item) => item !== action.payload
                    ),
                };
            }
        case "SELECT_ALL":
            return {
                ...state,
                selectAll: !state.selectAll,
                selectedItems: state.selectAll
                    ? []
                    : state.products.map((item) => item),
            };
        case "DELETE_ITEM":
            console.log(state.products);
            return {
                ...state,
                selectedItems: state.selectedItems.filter(
                    (item) => item !== action.payload
                ),
                products: state.products.filter(
                    (item) => item !== action.payload
                ),
            };
        case "UPDATE_QUANTITY":
            return {
                ...state,
                products: state.products.map((item) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            quantity: action.payload.quantity,
                        };
                    }
                    return item;
                }),
            };
        case "UPDATE_PAYMENT_METHOD":
            return {
                ...state,
                paymentMethod: action.payload,
            };
        case "UPDATE_SHIPPING_METHOD":
            return {
                ...state,
                shippingMethod: action.payload,
            };
        default: {
            return state;
        }
    }
};


const CheckoutPage = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const [isOpenModalAddress, setIsOpenModalAddress] = useState<boolean>(false)


    const selectedProduct = [
        {
            shopId: "abcdefghijklmnop",
            shopName: "Flash Titan",
            shippingFee: 30000,
            products: [
                {
                    id: "poiuytreqq",
                    name: "Quần Short Unisex Basic Thể Thao Mặc Thoáng Mát Phong Cách Hàn Quốc Nam Nữ Mặc Đẹp",
                    quantity: 3,
                    size: "XL",
                    color: "Trắng",
                    image: "https://owen.cdn.vccloud.vn/media/catalog/product/cache/d52d7e242fac6dae82288d9a793c0676/t/s/ts67347n-gr_copy.png",
                    price: 90000
                },
                {
                    id: "poiuytreqq",
                    name: "Quần Short Unisex Basic Thể Thao Mặc Thoáng Mát Phong Cách Hàn Quốc Nam Nữ Mặc Đẹp",
                    quantity: 3,
                    size: "XL",
                    color: "Trắng",
                    image: "https://owen.cdn.vccloud.vn/media/catalog/product/cache/d52d7e242fac6dae82288d9a793c0676/t/s/ts67347n-gr_copy.png",
                    price: 90000
                },
                {
                    id: "poiuytreqq",
                    name: "Quần Short Unisex Basic Thể Thao Mặc Thoáng Mát Phong Cách Hàn Quốc Nam Nữ Mặc Đẹp",
                    quantity: 3,
                    size: "XL",
                    color: "Trắng",
                    image: "https://owen.cdn.vccloud.vn/media/catalog/product/cache/d52d7e242fac6dae82288d9a793c0676/t/s/ts67347n-gr_copy.png",
                    price: 90000
                }
            ]
        },
        {
            shopId: "abcdefghijklmnop",
            shopName: "Flash Titan",
            shippingFee: 30000,
            products: [
                {
                    id: "poiuytreqq",
                    name: "Quần Short Unisex Basic Thể Thao Mặc Thoáng Mát Phong Cách Hàn Quốc Nam Nữ Mặc Đẹp",
                    quantity: 3,
                    size: "XL",
                    color: "Trắng",
                    image: "https://owen.cdn.vccloud.vn/media/catalog/product/cache/d52d7e242fac6dae82288d9a793c0676/t/s/ts67347n-gr_copy.png",
                    price: 90000
                },
                {
                    id: "poiuytreqq",
                    name: "Quần Short Unisex Basic Thể Thao Mặc Thoáng Mát Phong Cách Hàn Quốc Nam Nữ Mặc Đẹp",
                    quantity: 3,
                    size: "XL",
                    color: "Trắng",
                    image: "https://owen.cdn.vccloud.vn/media/catalog/product/cache/d52d7e242fac6dae82288d9a793c0676/t/s/ts67347n-gr_copy.png",
                    price: 90000
                },
                {
                    id: "poiuytreqq",
                    name: "Quần Short Unisex Basic Thể Thao Mặc Thoáng Mát Phong Cách Hàn Quốc Nam Nữ Mặc Đẹp",
                    quantity: 3,
                    size: "XL",
                    color: "Trắng",
                    image: "https://owen.cdn.vccloud.vn/media/catalog/product/cache/d52d7e242fac6dae82288d9a793c0676/t/s/ts67347n-gr_copy.png",
                    price: 90000
                }
            ]
        },
        {
            shopId: "abcdefghijklmnop",
            shopName: "Flash Titan",
            shippingFee: 30000,
            products: [
                {
                    id: "poiuytreqq",
                    name: "Quần Short Unisex Basic Thể Thao Mặc Thoáng Mát Phong Cách Hàn Quốc Nam Nữ Mặc Đẹp",
                    quantity: 3,
                    size: "XL",
                    color: "Trắng",
                    image: "https://owen.cdn.vccloud.vn/media/catalog/product/cache/d52d7e242fac6dae82288d9a793c0676/t/s/ts67347n-gr_copy.png",
                    price: 90000
                },
            ]
        },
    ]

    const totalPrice = (products: { id: string, name: string, quantity: number, size: string, color: string, image: string, price: number }[]) => {
        const total = products.reduce((acc, cur) => {
            acc += cur.price
            return acc
        }, 0)
        return total
    }



    return (
        <>
            <div className="bg-[#F5F5FA] pt-[20px]  pb-[80px]">
                <div className="max-w-[1240px] px-[15px]  mx-auto flex justify-between" >
                    <div className="bg-[#fff] p-[16px] w-[70%] rounded-[8px]">

                        <div className="mb-[30px]">
                            <div className="text-[#2bbef9] flex items-center text-[20px] font-semibold mb-[15px]">
                                <FaLocationDot className="mr-[10px]" />
                                <div>Địa chỉ nhận hàng</div>
                            </div>
                            <div className="flex justify-between bg-[#f0f8ff] p-[16px] rounded-[10px]">
                                <div className="font-semibold " style={{ width: "20%" }}>
                                    Nguyễn Văn A <br />
                                    0123456789
                                </div>
                                <div style={{ width: "60%" }}>
                                    địa chỉ, địa chỉ, địa chỉ, địa chỉ, địa chỉ, địa chỉ, địa chỉ, địa chỉ, địa chỉ, địa chỉ, địa chỉ, địa chỉ, địa chỉ, địa chỉ, địa chỉ,
                                </div>
                                <EditOutlined
                                    style={{ color: "#2bbef9", cursor: "pointer" }}
                                    onClick={() => setIsOpenModalAddress(true)}
                                />
                            </div>
                        </div>

                        {selectedProduct.map(product => {
                            return (
                                <fieldset className="border border-[#ccc] px-[16px] py-[8px] rounded-[12px] mb-[30px]">
                                    <legend className="flex items-center text-[#0a954a] font-semibold text-[20px]"><GoPackageDependents style={{ marginRight: "8px" }} /> {product.shopName}</legend>
                                    <div className="flex justify-between">
                                        <div className="w-[60%] max-w-[60%] flex flex-row">
                                            <div className="w-full max-w-full">
                                                <div className="text-[12px] font-semibold flex justify-between">
                                                    <div>GIAO TIẾT KIỆM</div>
                                                    <div className="text-[14px]">{product.shippingFee.toLocaleString("vi-VN")} đ̲</div>
                                                </div>
                                                {product.products.map(item => (
                                                    <div className="flex items-center w-full max-w-full gap-3 mb-[15px]">
                                                        <img src={item.image} alt="" className="w-[48px] h-[48px] flex-shrink-0" />
                                                        <div className="text-[14px] text-[#808089] flex-1 min-w-0">
                                                            <div className="overflow-hidden whitespace-nowrap text-ellipsis">{item.name}</div>
                                                            <div className="flex justify-between w-full">
                                                                <div>SL: x{item.quantity}</div>
                                                                <div>{item?.size}{item?.color ? `, ${item.color}` : ''}</div>
                                                                <div>{item.price.toLocaleString("vi-VN")} đ̲</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="w-[calc(40%-20px)] max-w-[calc(40%-20px)] flex flex-col justify-between">
                                            <TextArea rows={3} placeholder={`Lời nhắn cho ${product.shopName}`} style={{ border: "none", backgroundColor: "#F5F5F5  " }} />
                                            <div className="pb-[20px] flex items-end justify-end">
                                                <div className="text-[14px] text-[#0000008a] leading-none">Tổng số tiền({product.products.length}): </div>
                                                <div className="leading-none ml-[10px] text-[red] font-semibold text-[24px] ">{totalPrice(product.products).toLocaleString("vi-VN")} đ̲</div>
                                            </div>
                                        </div>



                                    </div>

                                </fieldset>
                            )
                        })}
                    </div>
                    <div className="" style={{ width: "calc(30% - 20px)" }}>
                        <Bill state={state} dispatch={dispatch} payMethod={payMethod} shipMethod={shipMethod} />

                    </div>
                </div>
            </div>

            <ModalAddress isOpenModalAddress={isOpenModalAddress} setIsOpenModalAddress={setIsOpenModalAddress} />
        </>
    )
}

export default CheckoutPage