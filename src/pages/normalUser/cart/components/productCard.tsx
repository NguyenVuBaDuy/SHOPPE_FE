import { ActionType, StateType, DataType } from "../types";
import { InputNumber, Popover, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ProductCard = ({
    item,
    state,
    dispatch,
}: {
    item: DataType;
    state: StateType;
    dispatch: React.Dispatch<ActionType>;
}) => {
    const handleQuantityChange = (value: number | null) => {
        if (value !== null) {
            const updatedItem = {...item, quantity: value};
            dispatch({
                type: "UPDATE_QUANTITY",
                payload: updatedItem,   
            });
        }
    };

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    const content = (
        <div className="flex gap-[5px]">
            {item.variant.map((variant, key) => (
                <button key={key} className={`bg-white border-[1px] ${item.variantChoice === variant ? 'border-[sky-400] text-sky-400' : 'border-gray-300 text-black'} px-[10px] py-[5px] rounded-md hover:border-sky-400 hover:text-sky-400 transition-all duration-200`}
                    onClick={() => {
                        const updatedItem = { ...item, variantChoice: variant };
                        dispatch({
                            type: "UPDATE_VARIANTCHOICE",
                            payload: updatedItem,
                        });
                        handleToggle();
                    }}
                >
                    {variant}
                </button>
            ))}
        </div>
    );

    return (
        <div className="w-full mt-[15px] rounded-[0.5rem] shadow-md grid grid-cols-[50px_600px_200px_180px_200px_70px] bg-white grid-rows-[100px] justify-center items-center">
            <div className="flex justify-center items-center">
                <label>
                    <input
                        type="checkbox"
                        className="w-4 h-4 appearance-none border-[2px] border-gray-200 rounded-sm hover:border-blue-300 cursor-pointer checked:bg-blue-300 checked:border-blue-300 transition-all duration-200"
                        checked={state.selectedItems.includes(item)}
                        onChange={() => {
                            const updatedSelect = {store: item.store, item: item};
                            state.selectedItems.includes(item)
                                ? dispatch({
                                      type: "REMOVE_ITEM",
                                      payload: updatedSelect,
                                  })
                                : dispatch({
                                      type: "SELECT_ITEM",
                                      payload: updatedSelect,
                                  });
                        }}
                    />
                </label>
            </div>
            <div className="text-gray-700 h-full flex items-center font-normal pl-[10px] overflow-hidden ">
                <div className="flex items-center w-[400px] gap-[10px]">
                    <img
                        src="/images/product/1.jpg"
                        alt="product"
                        className="w-[50px] h-[50px] object-cover"
                    />
                    <a href="#" className="text-[#333]">
                        <span className="text-[#333]">{item.name}</span>
                    </a>
                </div>
                <div className="flex flex-col min-w-[200px] w-[200px]">
                    <div className="flex items-center ">
                        <span className="pr-[5px]">Variations:</span>
                        <Popover
                            content={content}
                            title="Color:"
                            trigger="click"
                            placement="bottom"
                            open={toggle}
                            onOpenChange={handleToggle}
                        >
                            <Button className="text-red-200"
                                    onClick={handleToggle}>Change</Button>
                        </Popover>
                    </div>
                    <span>
                        {"Color: "}
                        {item.variantChoice === ""
                            ? item.variant[0]
                            : item.variantChoice}
                    </span>
                </div>
            </div>
            <div className="text-gray-700 font-normal pl-[10px] overflow-hidden ">
                {item.price.toLocaleString("vi-VN")}
            </div>
            <div className="text-gray-700 font-normal pl-[10px] overflow-hidden ">
                <div className="flex items-center gap-[2px]">
                    <button
                        className="flex items-center justify-center bg-[#6fa8dc] hover:bg-[#3d85c6] text-white w-[25px] h-[25px] rounded-[50%]"
                        onClick={handleQuantityChange.bind(
                            null,
                            item.quantity - 1
                        )}
                    >
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <InputNumber
                        min={1}
                        max={10000}
                        value={item.quantity}
                        controls={false}
                        onChange={handleQuantityChange}
                        style={{ width: "80px" }}
                    />
                    <button
                        className="flex items-center justify-center bg-[#6fa8dc] hover:bg-[#3d85c6] text-white w-[25px] h-[25px] rounded-[50%]"
                        onClick={handleQuantityChange.bind(
                            null,
                            item.quantity + 1
                        )}
                    >
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
            </div>
            <div className="text-[#ff390a] font-normal pl-[10px] overflow-hidden ">
                {(item.price * item.quantity).toLocaleString("vi-VN")}
            </div>
            <div className="text-gray-400 text-left align-middle pl-[10px] w-[30px]">
                <div className="w-[30px] h-[30px] flex items-center justify-center bg-gray-200 rounded-md hover:bg-red-200 hover:text-red-500 cursor-pointer transition-all duration-200">
                    <DeleteOutlined
                        className="w-full h-full flex items-center justify-center cursor-pointer"
                        onClick={() => {
                            dispatch({
                                type: "DELETE_ITEM",
                                payload: item,
                            });
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
