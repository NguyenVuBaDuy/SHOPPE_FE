import { DownOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
    ActionType,
    PaymentMethodType,
    StateType,
    ShippingMethodType,
} from "./types";

const Bill = ({
    state,
    dispatch,
    payMethod,
    shipMethod,
}: {
    state: StateType;
    dispatch: React.Dispatch<ActionType>;
    payMethod: PaymentMethodType[];
    shipMethod: ShippingMethodType[];
}) => {
    const [toggleManage, setToggleManage] = useState([false, false]);

    const handleToggleManage = (index: number) => {
        const newToggle = toggleManage.map((item, key) =>
            key === index ? !item : false
        );
        setToggleManage(newToggle);
    };

    return (
        <div className="w-[400px] h-fit rounded-[0.5rem] p-[20px] shadow-md  bg-white">
            <h2 className="text-[25px] pl-[10px] font-bold text-gray-800">
                CART TOTAL
            </h2>
            <div className="h-fit flex flex-col items-center justify-center border-t-[2px] border-b-[2px] border-[#E5E5E5]">
                {state.selectedItems.map((item, key) => {
                    return (
                        <div
                            className="h-[50px] w-full flex items-center justify-center"
                            key={key}
                        >
                            <span className="w-[160px]">{item.name}</span>
                            <span className="w-[70px] flex items-center justify-center">
                                {item.quantity}
                            </span>
                            <span className="w-[130px] text-end">
                                {item.price * item.quantity}
                            </span>
                        </div>
                    );
                })}
            </div>
            <div className="w-full h-fit flex flex-col bg-orange-100 mt-[20px] rounded-[0.5rem]">
                <div className="h-[40px] items-center flex justify-between relative">
                    <h2 className="text-gray-700 font-bold text-[15px] pl-[20px] pt-[8px] pb-[8px]">
                        Phương thức thanh toán
                    </h2>
                    <span className="mr-[20px] w-[30px] h-[30px] hover:bg-orange-200 flex rounded-[0.5rem] transition-all duration-200">
                        <DownOutlined
                            onClick={() => handleToggleManage(0)}
                            style={{}}
                            className="w-full h-full flex items-center justify-center"
                        />
                    </span>
                    <div
                        className={`w-full 
                                        ${toggleManage[0] ? "h-[80px]" : "h-0"} 
                                        overflow-hidden absolute top-[40px] shadow-xl z-5 left-0 transition-all duration-200`}
                    >
                        <ul className="w-full bg-white">
                            {payMethod.map((item) => (
                                <li
                                    onClick={() => {
                                        dispatch({
                                            type: "UPDATE_PAYMENT_METHOD",
                                            payload: item,
                                        });
                                        handleToggleManage(0);
                                    }}
                                    className="h-[40px] flex items-center justify-start pl-[20px] hover:bg-gray-300 transition-all duration-200 cursor-pointer"
                                    key={item.id}
                                >
                                    <FontAwesomeIcon
                                        icon={item.type}
                                        className="text-gray-700 text-[20px]"
                                    />
                                    <span className="pl-[10px]">
                                        {item.name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="h-[40px] flex items-center justify-start pl-[20px]">
                    <FontAwesomeIcon
                        icon={state.paymentMethod.type}
                        className="text-gray-700 text-[20px]"
                    />
                    <span className="pl-[10px]">
                        {state.paymentMethod.name}
                    </span>
                </div>
            </div>
            <div className="w-full h-fit flex flex-col bg-sky-100 mt-[10px] rounded-[0.5rem]">
                <div className="h-[40px] items-center flex justify-between relative">
                    <h2 className="text-gray-700 font-bold text-[15px] pl-[20px] pt-[8px] pb-[8px]">
                        Phương thức vận chuyển
                    </h2>
                    <span className="mr-[20px] w-[30px] h-[30px] hover:bg-sky-200 flex rounded-[0.5rem] transition-all duration-200">
                        <DownOutlined
                            onClick={() => handleToggleManage(1)}
                            style={{}}
                            className="w-full h-full flex items-center justify-center"
                        />
                    </span>
                    <div
                        className={`w-full 
                                        ${
                                            toggleManage[1]
                                                ? "h-[180px]"
                                                : "h-0"
                                        } 
                                        overflow-hidden absolute top-[40px] z-5 shadow-xl left-0 transition-all duration-200`}
                    >
                        <ul className="w-full bg-white">
                            {shipMethod.map((item) => (
                                <li
                                    onClick={() => {
                                        dispatch({
                                            type: "UPDATE_SHIPPING_METHOD",
                                            payload: item,
                                        });
                                        handleToggleManage(1);
                                    }}
                                    className={`h-[60px] flex flex-col items-center justify-start pl-[10px] hover:bg-gray-300 transition-all duration-200 cursor-pointer`}
                                    key={item.id}
                                >
                                    <div
                                        className={`flex items-center justify-between w-full`}
                                    >
                                        <span
                                            className={`${
                                                item === shipMethod[0]
                                                    ? "text-green-500"
                                                    : ""
                                            } ${
                                                item === shipMethod[1]
                                                    ? "text-blue-500"
                                                    : ""
                                            } ${
                                                item === shipMethod[2]
                                                    ? "text-orange-500"
                                                    : ""
                                            } pl-[10px]`}
                                        >
                                            {item.name}
                                        </span>
                                        <span className="pr-[20px]">
                                            200.000
                                        </span>
                                    </div>
                                    <div className="w-full h-full flex items-center justify-start">
                                        <span className="pl-[10px]">
                                            Đảm bảo nhận hàng từ xx/yy/zz -
                                            yy/xx/zz
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="h-[60px] flex flex-col items-center justify-start pl-[10px]">
                    <div className={`flex items-center justify-between w-full`}>
                        <span
                            className={`${
                                state.shippingMethod === shipMethod[0]
                                    ? "text-green-500"
                                    : ""
                            } ${
                                state.shippingMethod === shipMethod[1]
                                    ? "text-blue-500"
                                    : ""
                            } ${
                                state.shippingMethod === shipMethod[2]
                                    ? "text-orange-500"
                                    : ""
                            } pl-[10px]`}
                        >
                            {state.shippingMethod.name}
                        </span>
                        <span className="pr-[20px]">200.000</span>
                    </div>
                    <div className="w-full h-full flex items-center justify-start">
                        <span className="pl-[10px]">
                            Đảm bảo nhận hàng từ xx/yy/zz - yy/xx/zz
                        </span>
                    </div>
                </div>
            </div>
            <div className="w-full h-fit flex flex-col bg-indigo-200 mt-[10px] pl-[20px] pr-[20px] rounded-[0.5rem]">
                <div className="h-[40px] items-center flex justify-between border-b-[2px] border-gray-400 relative">
                    <h2 className="text-gray-700 font-bold text-[15px] pt-[8px] pb-[8px]">
                        Tổng tiền hàng
                    </h2>
                    <span className="text-gray-700 font-bold text-[15px] pt-[8px] pb-[8px]">
                        {state.selectedItems
                            .reduce(
                                (acc, item) => acc + item.price * item.quantity,
                                0
                            )
                            .toLocaleString("vi-VN")}
                    </span>
                </div>
                <div className="h-[40px] items-center flex justify-between border-b-[2px] border-gray-400 relative">
                    <h2 className="text-gray-700 font-bold text-[15px] pt-[8px] pb-[8px]">
                        Tổng tiền ship
                    </h2>
                    <span className="text-gray-700 font-bold text-[15px] pt-[8px] pb-[8px]">
                        200.000
                    </span>
                </div>
                <div className="h-[40px] items-center flex justify-between border-b-[2px] border-gray-400 relative">
                    <h2 className="text-gray-700 font-bold text-[15px] pt-[8px] pb-[8px]">
                        Giảm giá
                    </h2>
                    <span className="text-gray-700 font-bold text-[15px] pt-[8px] pb-[8px]">
                        - 300.000
                    </span>
                </div>
                <div className="h-[40px] items-center flex justify-between relative">
                    <h2 className="text-gray-700 font-bold text-[15px] pt-[8px] pb-[8px]">
                        Tổng cộng
                    </h2>
                    <span className="text-gray-700 font-bold text-[15px] pt-[8px] pb-[8px]">
                        {(
                            state.selectedItems.reduce(
                                (acc, item) => acc + item.price * item.quantity,
                                0
                            ) - 1000000
                        ).toLocaleString("vi-VN")}
                    </span>
                </div>
            </div>
            <button className="w-full h-[40px] bg-indigo-500 text-white font-bold text-[15px] rounded-[0.5rem] mt-[10px] hover:bg-indigo-600 transition-all duration-200">
                Đặt hàng
            </button>
        </div>
    );
};

export default Bill;
