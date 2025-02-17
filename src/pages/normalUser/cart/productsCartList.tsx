import { InputNumber } from "antd";
import { DataType, StateType, ActionType } from "./types";
import ProductCard from "./ProductCard";

const ProductsCartList = ({ state, dispatch }: { state: StateType; dispatch: React.Dispatch<ActionType>}) => {
    return (
        <div className="w-[1000px] h-[600px] rounded-[0.5rem] bg-white p-[20px]">
            <table className="">
                <thead className="h-[35px] items-center">
                    <tr>
                        <th className="w-[30px]">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 appearance-none border-[2px] border-gray-200 rounded-sm hover:border-blue-300 cursor-pointer checked:bg-blue-300 checked:border-blue-300 transition-all duration-200r"
                                    checked={state.selectedItems.length === state.products.length && state.selectAll}
                                    onChange={() => {
                                        dispatch({
                                            type: "SELECT_ALL",
                                        });
                                    }}
                               />
                            </label>
                        </th>
                        <th className="text-gray-700 text-left border-r-[2px] border-gray-200 align-middle pl-[5px] max-w-[490px] w-[490px]">
                            Product
                        </th>
                        <th className="text-gray-700 text-left border-r-[2px] border-gray-200 align-middle pl-[5px] w-[150px]">
                            Price
                        </th>
                        <th className="text-gray-700 text-left border-r-[2px] border-gray-200 align-middle pl-[5px] w-[100px]">
                            Quantity
                        </th>
                        <th className="text-gray-700 text-left border-r-[2px] border-gray-200 align-middle pl-[10px] w-[160px]">
                            Total
                        </th>
                        <th className="text-gray-700 text-left align-middle pl-[10px] w-[30px]">
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody className="">
                    {state.products.map((item, key) => {
                        return (
                            <ProductCard
                                key={key}
                                item={item}
                                state={state}
                                dispatch={dispatch}
                            />
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ProductsCartList;
