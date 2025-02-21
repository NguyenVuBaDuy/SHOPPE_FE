import { StateType, ActionType } from "../types";
import ProductCard from "./productCard";

const ProductsCartList = ({
    state,
    dispatch,
}: {
    state: StateType;
    dispatch: React.Dispatch<ActionType>;
}) => {

    return (
        <div className="w-fit flex flex-col justify-between items-center pt-[20px] pb-[20px] h-full">
            <div className="flex justify-center items-center h-fit bg-white w-full rounded-[0.5rem] shadow-md p-[20px]">
                <div className="w-full grid grid-cols-[50px_600px_200px_180px_200px_70px] bg-white justify-center items-center h-[35px]">
                    <div className=" flex justify-center items-center w-[50px]">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                className="w-4 h-4 appearance-none border-[2px] border-gray-200 rounded-sm hover:border-blue-300 cursor-pointer checked:bg-blue-300 checked:border-blue-300 transition-all duration-200r"
                                checked={
                                    state.selectedItems.length ===
                                        state.products.length && state.selectAll
                                }
                                onChange={() => {
                                    dispatch({
                                        type: "SELECT_ALL",
                                    });
                                }}
                            />
                        </label>
                    </div>
                    <div className="text-gray-700 text-left border-r-[2px] border-gray-200 pl-[10px] w-[600px]">
                        Product
                    </div>
                    <div className="text-gray-700 text-left border-r-[2px] border-gray-200 pl-[10px] w-[200px]">
                        Price
                    </div>
                    <div className="text-gray-700 text-left border-r-[2px] border-gray-200 pl-[10px] w-[180px]">
                        Quantity
                    </div>
                    <div className="text-gray-700 text-left border-r-[2px] border-gray-200 pl-[10px] w-[200px]">
                        Total
                    </div>
                    <div className="text-gray-700 text-left align-middle pl-[10px] w-[90px]">
                        Delete
                    </div>
                </div>
            </div>

            {Array.from(state.dataToPrint.entries()).map(([store, products]) => (
                <div key={store} className="flex flex-col w-full bg-white rounded-[0.5rem] shadow-md p-[20px] mt-[20px]">
                    <div className="flex w-full border-b-[2px] border-gray-200 justify-center items-center h-[35px]">
                        <label className="flex w-[50px] justify-center items-center">
                            <input
                                type="checkbox"
                                className="w-4 h-4 appearance-none border-[2px] border-gray-200 rounded-sm hover:border-blue-300 cursor-pointer checked:bg-blue-300 checked:border-blue-300 transition-all duration-200"
                                checked={state.selectedStore.includes(store)}
                                onChange={() => {
                                    const newSelectedItems = {store: store, products: products};
                                    state.selectedStore.includes(store)
                                        ? dispatch({
                                              type: "REMOVE_STORE",
                                              payload: newSelectedItems,
                                          })
                                        : dispatch({
                                              type: "SELECT_STORE",
                                              payload: newSelectedItems,
                                          });
                                }}
                            />
                        </label>
                        <div className="w-full col-span-5 h-full pl-[10px] flex items-center">
                            <a href="#">{store}</a>
                        </div>
                    </div>
                    {products.map((item) => (
                        <ProductCard
                            key={item.id}
                            item={item}
                            state={state}
                            dispatch={dispatch}
                        />
                    ))}
                    
                </div>
            ))}
        </div>
    );
};

export default ProductsCartList;
