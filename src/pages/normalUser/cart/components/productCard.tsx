import { ActionType, StateType, DataType } from "../types";
import { InputNumber } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

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
            item.quantity = value;
            dispatch({
                type: "UPDATE_QUANTITY",
                payload: item.quantity,
            });
        }
    };

    return (
        <tr className="max-h-[60px] h-[60px] border-b-[2px] border-t-[2px] border-gray-200">
            <td>
                <label>
                    <input
                        type="checkbox"
                        className="w-4 h-4 appearance-none border-[2px] border-gray-200 rounded-sm hover:border-blue-300 cursor-pointer checked:bg-blue-300 checked:border-blue-300 transition-all duration-200"
                        checked={state.selectedItems.includes(item)}
                        onChange={() => {
                            state.selectedItems.includes(item)
                                ? dispatch({
                                      type: "REMOVE_ITEM",
                                      payload: item,
                                  })
                                : dispatch({
                                      type: "SELECT_ITEM",
                                      payload: item,
                                  });
                        }}
                    />
                </label>
            </td>
            <td className="text-gray-700 font-normal pl-[5px] overflow-hidden ">
                <div className="flex items-center gap-[10px]">
                    <img
                        src="/images/product/1.jpg"
                        alt="product"
                        className="w-[50px] h-[50px] object-cover"
                    />
                    <a href="#" className="text-[#333]">
                        <span className="text-[#333]">{item.name}</span>
                    </a>
                </div>
            </td>
            <td className="text-gray-700 font-normal pl-[5px] overflow-hidden ">
                {item.price}
            </td>
            <td className="text-gray-700 font-normal pl-[5px] overflow-hidden ">
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
                    <InputNumber min={1} max={10000} value={item.quantity} controls={false} onChange={handleQuantityChange} style={{width: "80px"}}/>
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
            </td>
            <td className="text-gray-700 font-normal pl-[10px] overflow-hidden ">
                {(item.price * item.quantity).toLocaleString("vi-VN")}
            </td>
            <td className="text-gray-400 text-left align-middle pl-[10px] w-[30px]">
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
            </td>
        </tr>
    );
};

export default ProductCard;
