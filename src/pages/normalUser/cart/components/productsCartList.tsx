import { StateType, ActionType } from "../types";
import ProductCard from "./productCard";
import { Pagination } from "antd";
import { useEffect, useState } from "react";

const ProductsCartList = ({
    state,
    dispatch,
}: {
    state: StateType;
    dispatch: React.Dispatch<ActionType>;
}) => {
    const pageSize = 10;
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [currentData, setCurrentData] = useState<typeof state.products>([]);

    useEffect(() => {
        const start = (currentPage - 1) * pageSize;
        const end = start + pageSize;
        setCurrentData(
            state.products.slice(
                start,
                end >= state.products.length ? state.products.length : end
            )
        );
    }, [currentPage, state.products]);

    return (
        <div className="w-[1000px] flex flex-col justify-between items-center h-[650px] rounded-[0.5rem] bg-white p-[20px]">
            <table className="h-fit w-full">
                <thead className="h-[35px] items-center">
                    <tr>
                        <th className="w-[30px]">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 appearance-none border-[2px] border-gray-200 rounded-sm hover:border-blue-300 cursor-pointer checked:bg-blue-300 checked:border-blue-300 transition-all duration-200r"
                                    checked={
                                        state.selectedItems.length ===
                                            state.products.length &&
                                        state.selectAll
                                    }
                                    onChange={() => {
                                        dispatch({
                                            type: "SELECT_ALL",
                                        });
                                    }}
                                />
                            </label>
                        </th>
                        <th className="text-gray-700 text-left border-r-[2px] border-gray-200 align-middle pl-[5px] max-w-[440px] w-[440px]">
                            Product
                        </th>
                        <th className="text-gray-700 text-left border-r-[2px] border-gray-200 align-middle pl-[5px] w-[150px]">
                            Price
                        </th>
                        <th className="text-gray-700 text-left border-r-[2px] border-gray-200 align-middle pl-[5px] w-[150px]">
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
                    {currentData.map((item, key) => {
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
            <div className="mt-[10px]">
                <Pagination
                    defaultCurrent={1}
                    total={state.products.length}
                    pageSize={pageSize}
                    showQuickJumper
                    showSizeChanger={false}
                    onChange={(page) => setCurrentPage(page)}
                />
            </div>
        </div>
    );
};

export default ProductsCartList;
